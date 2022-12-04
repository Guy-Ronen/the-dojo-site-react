import { useEffect, useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import Select from "react-select";
import "./Create.css";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useHistory } from "react-router-dom";
import { useAddDocument } from "../../hooks/useAddDocument";

const categories = [
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

export default function Create() {
  const { documents } = useCollection("users");
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const { user } = useAuthContext();
  const {addDocument, response} = useAddDocument('projects')

  // Form field inputs:

  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category) {
      setFormError("Please pick a category");
      return;
    }

    if (assignedUsers.length < 1) {
      setFormError("Please Pick Assigned Users");
      return;
    }
    //createing an object for the user we will pass to the project:
    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const assignedUsersList = assignedUsers.map((user) => {
      return {
        displayName: user.value.displayName,
        photoURL: user.value.photoURL,
        id: user.value.id,
      };
    });

    const project = {
      name,
      details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
      createdBy,
      assignedUsersList,
    };

    await addDocument(project);
    if (!response.error) {
      history.push("/");
    }
  };
  return (
    <div className="create-form">
      <h2 className="page-title">Add a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Set Name</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Set Details</span>
          <textarea
            type="text"
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          />
        </label>
        <label>
          <span>Set Due Date</span>
          <input
            type="date"
            required
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>
        <label>
          <span>Category</span>
          <Select
            onChange={(option) => setCategory(option)}
            options={categories}
          />
        </label>
        <label>
          <span>Assigned Users</span>
          <Select
            onChange={(option) => setAssignedUsers(option)}
            options={users}
            isMulti
          />
        </label>
        <button className="btn">Add Project</button>
        {formError && <div className="error">{formError}</div>}
      </form>
    </div>
  );
}
