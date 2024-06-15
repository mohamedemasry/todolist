import React, { useState } from "react";

interface InputProps {
  onAdd: (newTask: string) => void;
}

const Input: React.FC<InputProps> = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const handleAdd = () => {
    if (taskName.trim() !== "") {
      onAdd(taskName);
      setTaskName("");
    }
  };

  return (
    <div>
      <div
        className="input-group mb-3"
        style={{ padding: "10px", width: "50em" }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Task Name"
          aria-label="Task Name"
          aria-describedby="button-addon2"
          value={taskName}
          onChange={handleChange}
        />
        <button
          className="btn btn-outline-success"
          type="button"
          id="button-addon2"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Input;
