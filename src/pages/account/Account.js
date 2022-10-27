import './Account.css'
import React, { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useQoutes } from '../../hooks/useQoutes'
import { useFirestore } from '../../hooks/useFirestore'
import { projectFirestore, projectStorage } from '../../firebase/config'
import { useHistory } from 'react-router-dom'

export default function Account() {
  const { user, dispatch } = useAuthContext()
  const { qoute } = useQoutes()
  const history = useHistory()


  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { updateDocument } = useFirestore('users')

  const handleFileUpload = (e) => {
    setThumbnailError(null);
    let selected = e.target.files[0];
    if (!selected) {
      setThumbnailError("Please Select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Please Select an image");
      return;
    }
    if (selected.size > 200000) {
      setThumbnailError("File size must be under 200kb");
      return;
    }
    setThumbnail(selected);
    console.log("thumbnail updated");
    setThumbnailError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const documentRef = await projectFirestore
      .collection("users")
      .doc(user.uid);

    const uploadPath = `thumbnails/${user.uid}/${thumbnail.name}`;
    const img = await projectStorage.ref(uploadPath).put(thumbnail);
    const imgUrl = await img.ref.getDownloadURL();

    updateDocument(user.uid, { displayName, photoURL: imgUrl });

    await documentRef.update({ displayName, photoURL: imgUrl });
    dispatch({ type: "UPDATE", payload: { online: true, displayName, photoURL: imgUrl } });

    await console.log(`Account is now: ${user}`)
    history.push('/')
  };

  return (
    <div>
      <div className="project-summary">
        <div className='account-image'>
          <img src={user.photoURL} alt='account-picture' />
        </div>
        <h3 className="acount-title">Display name: {user.displayName}</h3>
        <p className="details"></p>
        <h4>{`'${qoute.quote}'`}</h4>
        <h4>{`${qoute.author}, (${qoute.profession})`}</h4>

        <form onSubmit={handleSubmit} className="account-form">
          <h2>Update Account Details:</h2>
          <label>
            <span>Display Name:</span>
            <input
              title="displayName"
              required
              placeholder={user.displayName}
              type="text"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
            />
          </label>
          <label>
            <span>Profile Thumbnail:</span>
            <input
              title="profileThumbnail"
              required
              type="file"
              onChange={handleFileUpload}
            />
            {thumbnailError && <div className="error">{thumbnailError}</div>}
          </label>
          <button className="btn">Update Profile</button>
        </form>
      </div>
    </div>
  )
}
