import React, { useState } from "react";
import Card from "./components/card";
import Input from "./components/input";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<string[]>(["Finish This App"]);

  const addTask = (newTask: string): void => {
    setTasks([newTask, ...tasks]);
  };

  const markComplete = (index: number): void => {
    // To handle completion logic if needed
    // For simplicity, we just remove the task from the list//
    const updatedTasks = [...tasks];
    //updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "18px", margin: "10px" }}>
      <center>
        <h1>To Do List</h1>
        <Input onAdd={addTask} />
      </center>
      {tasks.map((task, index) => (
        <Card key={index} onComplete={() => markComplete(index)}>
          {task}
        </Card>
      ))}
    </div>
  );
}

export default App;
