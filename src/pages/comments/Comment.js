import Avatar from "../../components/Avatar/Avatar";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import DeleteCommentButton from "./DeleteCommentButton";
import { useAuthContext } from "../../hooks/useAuthContext";
import React from "react";

export default function Comment({ project, comment }) {
  const { user } = useAuthContext();

  return (
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
          <DeleteCommentButton project={project} comment={comment} />
        )}
      </div>
    </li>
  );
}
