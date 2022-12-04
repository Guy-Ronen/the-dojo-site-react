import { useAuthContext } from "../../hooks/useAuthContext";
import CommentsForm from "./CommentsForm";
import Comment from "./Comment";

export default function ProjectComments({ project }) {
  return (
    <div className="project-comments">
      <h4>Project Comments</h4>

      <ul>
        {project.comments.length > 0 &&
          project.comments.map((comment) => (
            <Comment project={project} comment={comment} />
          ))}
      </ul>
      <CommentsForm project={project} />
    </div>
  );
}
