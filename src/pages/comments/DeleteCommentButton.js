import React from "react";
import { useUpdateDocument } from "../../hooks/useUpdateDocuments";

export default function DeleteCommentButton({ project, comment }) {
  const { updateDocument } = useUpdateDocument("projects");

  const handleCommentDelete = async (id) => {
    await updateDocument(project.id, {
      comments: [...project.comments].filter((comment) => comment.id !== id),
    });
  };

  return (
    <button
      className="delete-comment-btn"
      onClick={() => handleCommentDelete(comment.id)}
    >
      X
    </button>
  );
}
