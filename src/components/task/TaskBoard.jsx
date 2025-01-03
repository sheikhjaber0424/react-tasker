import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn react",
    description: "I want to learn React.js",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavourite: false,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [ShowAddModal, setShowAddModal] = useState(false);

  function handleAddTask(newTask) {
    console.log("Adding a task", newTask);
    setTasks([...tasks, newTask]);
    setShowAddModal(false);
  }
  return (
    <section className="mb-20" id="tasks">
      {ShowAddModal && <AddTaskModal onSave={handleAddTask} />}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask></SearchTask>
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddClick={() => setShowAddModal(true)}></TaskActions>
          <TaskList tasks={tasks}></TaskList>
        </div>
      </div>
    </section>
  );
}
