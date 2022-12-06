import { projectFirestore } from "../firebase/config";

export const getCollectionRef = (collection) => {
  const ref = projectFirestore.collection(collection);
  return ref;
};
