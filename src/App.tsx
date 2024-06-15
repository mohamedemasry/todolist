import { useState } from "react";
import Card from "./components/card";
import Input from "./components/input";
import "./App.css";
interface Task {
  text: string;
  completed: boolean;
}
function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { text: "Default Task ✨", completed: false },
  ]);

  const addTask = (newTask: string): void => {
    setTasks([{ text: newTask, completed: false }, ...tasks]);
  };

  const markComplete = (index: number): void => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;

    if (updatedTasks[index].completed) {
      // Move the completed task to the bottom
      const completedTask = updatedTasks.splice(index, 1)[0];
      setTasks([...updatedTasks, completedTask]);
    } else {
      // Move the uncompleted task to the bottom
      const uncompletedTask = updatedTasks.splice(index, 1)[0];
      setTasks([...updatedTasks, uncompletedTask]);

    }
  };

  return (
    <div style={{ padding: "18px", margin: "10px" }}>
      <center>
        <h1>To Do List</h1>
        <Input onAdd={addTask} />
      </center>
      {tasks.map((task, index) => (
        <Card
          key={index}
          completed={task.completed}
          onComplete={() => markComplete(index)}
          onDelete={() => setTasks(tasks.filter((_, i) => i !== index))}
        >
          {task.text}
        </Card>
      ))}
    </div>
  );
}

export default App;
