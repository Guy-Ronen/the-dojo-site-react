import Avatar from "../../../components/Avatar/Avatar";
import { useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { timestamp } from "../../../firebase/config";

export default function ProjectComments({ props }) {
  const [newComment, setNewComment] = useState("");

  const updateDocument = async (updates) => {
    try {
      const currentDoc = props.project;
      for (const [key, value] of Object.entries(updates)) {
        currentDoc[key] = value;
      }
      return currentDoc;
    } catch (err) {
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      createdBy: props.user.uid,
      displayName: props.user.displayName,
      photoURL: props.user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };
    await updateDocument({
      comments: [...props.project.comments, commentToAdd],
    });
    setNewComment("");
  };

  const handleCommentDelete = async (id) => {
    await updateDocument({
      comments: [...props.project.comments].filter(
        (comment) => comment.id !== id
      ),
    });
  };

  return (
    <div>
      <h4>Project Comments</h4>
      <ul className="project-comments">
        {props.project.comments.length > 0 &&
          props.project.comments.map((comment, index) => (
            <li
              className="project-comment"
              data-testid={index}
              key={comment.id}
            >
              <div>
                <Avatar src={comment.photoURL} />
                <p className="comment-author">{comment.displayName}</p>
              </div>
              <div className="comment-date">
                <p>
                  {formatDistanceToNow(comment.createdAt.toDate(), {
                    addSuffix: true,
                  })}
                </p>
              </div>
              <div className="comment-content">
                <p>{comment.content}</p>
              </div>
              <div>
                {props.user.uid === comment.createdBy && (
                  <button
                    className="delete-comment-btn"
                    onClick={() => handleCommentDelete(comment.id)}
                  >
                    X
                  </button>
                )}
              </div>
            </li>
          ))}
      </ul>
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new comment:</span>
          <textarea
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button className="btn">Add Comment</button>
      </form>
    </div>
  );
}
