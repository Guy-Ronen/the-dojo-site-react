import MockProjectSummary from "./MockProjectSummary";
import MockProjectComments from "./MockProjectComments";
import "../Project.css";

export default function Project({ props }) {
  if (props.error) {
    return <div className="error">{props.error}</div>;
  }

  if (!props.project) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="project-details">
      <MockProjectSummary props={props} />
      <MockProjectComments props={props} />
    </div>
  );
}
