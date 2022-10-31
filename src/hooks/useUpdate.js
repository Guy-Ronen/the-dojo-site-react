import { useState, useEffect } from "react";
import { projectAuth, projectStorage } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { useFirestore } from "./useFirestore";

export const useUpdate = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const { updateDocument } = useFirestore('users')

  const update = async (displayName, thumbnail) => {
    setError(null);
    setIsPending(true);

    try {
      const uid = await projectAuth.currentUser.uid
      const uploadPath = `thumbnails/${uid}/${thumbnail.name}`;
      const img = await projectStorage.ref(uploadPath).put(thumbnail);
      const imgUrl = await img.ref.getDownloadURL();


       await projectAuth.currentUser.updateProfile({
        displayName,
        photoURL: imgUrl
      })

      await updateDocument(uid, {
        displayName,
        photoURL: imgUrl
      });


      // dispatch login action
      dispatch({ type: "LOGIN", payload: projectAuth.currentUser })

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { update, isPending, error };
};
