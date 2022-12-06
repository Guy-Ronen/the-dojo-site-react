import { useReducer, useEffect, useState } from "react";

import { timestamp } from "../firebase/config";

import { firestoreReducer } from "../reducers/FirestroreReducer";

import { dispatchIfNotCancelled } from "../utils/dispatchIfNotCancelled";
import { getCollectionRef } from "../utils/getCollectionRef";
import { initialDocumentState } from "../utils/initialDocumentState";

export const useAddDocument = (collection) => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [response, dispatch] = useReducer(
    firestoreReducer,
    initialDocumentState
  );

  // collection ref
  const ref = getCollectionRef(collection);

  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await ref.add({ ...doc, createdAt });

      dispatchIfNotCancelled(dispatch, isCancelled, {
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (err) {
      dispatchIfNotCancelled(dispatch, isCancelled, {
        type: "ERROR",
        payload: err.message,
      });
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, response };
};
