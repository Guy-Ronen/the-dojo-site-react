import { useState } from "react";

export const useUploadThumbnail = () =>{
    const handleFileUpload = (e) => {
    const [thumbnail, setThumbnail] = useState(null)
    const [thumbnailError, setThumbnailError] = useState(null)

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
}
    return { handleFileUpload }
};