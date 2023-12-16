import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  //const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   setTasks(data);
  // }, []);

  // function createTask(task) {
  //   setTasks([...tasks, {
  //     title: task.title,
  //     id: tasks.length + 1,
  //     description: task.description
  //   }])
  // }

  // function deleteTask(taskId) {
  //   setTasks(tasks.filter(t=> t.id != taskId))
  // }

  //TODO: Remove above dead code

  return (
    <>
      <main className="bg-zinc-900 h-screen">
        <div className="container mx-auto p-10">
          <TaskForm />
          <TaskList />
        </div>
      </main>
    </>
  );
}

export default App;
