import { useReducer, useEffect, useState } from "react";

import { firestoreReducer } from "../reducers/FirestroreReducer";

import { dispatchIfNotCancelled } from "../utils/dispatchIfNotCancelled";
import { getCollectionRef } from "../utils/getCollectionRef";
import { initialDocumentState } from "../utils/initialDocumentState";

export const useUpdateDocument = (collection) => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [response, dispatch] = useReducer(
    firestoreReducer,
    initialDocumentState
  );

  // collection ref
  const ref = getCollectionRef(collection);

  // delete a document
  const updateDocument = async (id, updates) => {
    dispatch({ type: "IS_PENDING" });
    try {
      const updatedDocument = await ref.doc(id).update(updates);
      dispatchIfNotCancelled(dispatch, isCancelled, {
        type: "UPDATED_DOCUMENT",
        payload: updatedDocument,
      });
    } catch (err) {
      dispatchIfNotCancelled(dispatch, isCancelled, {
        type: "ERROR",
        payload: "could not delete",
      });
      return null;
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { updateDocument, response };
};
