import Avatar from "../../components/Avatar/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import CommentsForm from "./CommentsForm";

export default function ProjectComments({ project }) {
  const { user } = useAuthContext();
  const { updateDocument } = useFirestore("projects");

  const handleCommentDelete = async (id) => {
    await updateDocument(project.id, {
      comments: [...project.comments].filter((comment) => comment.id !== id),
    });
  };

  return (
    <div className="project-comments">
      <h4>Project Comments</h4>

      <ul>
        {project.comments.length > 0 &&
          project.comments.map((comment) => (
            <li key={comment.id}>
              <div className="comment-author">
                <Avatar src={comment.photoURL} />
                <p>{comment.displayName}</p>
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
                {user.uid === comment.createdBy && (
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
      <CommentsForm project={project} />
    </div>
  );
}
