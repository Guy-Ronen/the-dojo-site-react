import { useReducer, useEffect, useState } from "react";

import { firestoreReducer } from "../reducers/FirestroreReducer";

import { dispatchIfNotCancelled } from "../utils/dispatchIfNotCancelled";
import { getCollectionRef } from "../utils/getCollectionRef";
import { initialDocumentState } from "../utils/initialDocumentState";

export const useDeleteDocument = (collection) => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [response, dispatch] = useReducer(
    firestoreReducer,
    initialDocumentState
  );

  // collection ref
  const ref = getCollectionRef(collection);

  // delete a document
  const deleteDocument = async (id) => {
    dispatch({ type: "IS_PENDING" });

    try {
      await ref.doc(id).delete();
      dispatchIfNotCancelled(dispatch, isCancelled, {
        type: "DELETED_DOCUMENT",
      });
    } catch (err) {
      dispatchIfNotCancelled(dispatch, isCancelled, {
        type: "ERROR",
        payload: "could not delete",
      });
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { deleteDocument, response };
};
