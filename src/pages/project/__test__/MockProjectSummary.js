import Avatar from "../../../components/Avatar/Avatar";
import { useFirestore } from "../../../hooks/useFirestore";
import { useHistory } from "react-router-dom";

export default function ProjectSummary({ props }) {
  const { deleteDocument } = useFirestore("projects");
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    deleteDocument(props.project.id);
    history.push("/");
  };

  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{props.project.name}</h2>
        <p className="created-by">Project created by: {props.project.createdBy.displayName}</p>
        <p className="due-date">
          Project due by: {props.project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{props.project.details}</p>
        <h4>Project is assigned to:</h4>
        <div className="assigned-users">
          {props.project.assignedUsersList.map((user) => (
            <div className="assinged-user" key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
        {props.user.uid === props.project.createdBy.id && (
          <button className="btn" onClick={handleClick}>
            Mark As complete
          </button>
        )}
      </div>
    </div>
  );
}
