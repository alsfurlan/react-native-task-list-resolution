import { createContext, useState } from "react";

export const TaskContext = createContext({
  tasks: [],
  addTask: (description) => {},
  finishTask: (id) => {},
});

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      done: false,
    };
    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  const finishTask = (id) => {
    setTasks((currentTasks) => {
      const index = currentTasks.findIndex((task) => task.id === id);
      currentTasks[index].done = !currentTasks[index].done;
      return [...currentTasks];
    });
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, finishTask }}>
      {children}
    </TaskContext.Provider>
  );
};
