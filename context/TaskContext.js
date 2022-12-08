import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext({
  taskList: [],
  addTask: (task) => {},
  updateTask: (task) => {},
  setTasks: (tasks) => {},
});

export const TaskContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  const addTask = async (task) => {
    setTaskList((currentTaskList) => [...currentTaskList, task]);
  };

  const updateTask = (task) => {
    setTaskList((currentTaskList) => {
      const index = currentTaskList.findIndex((t) => t.id === task.id);
      currentTaskList[index] = task;
      return [...currentTaskList];
    });
  };

  const setTasks = (tasks) => {
    setTaskList(tasks);
  };

  return (
    <TaskContext.Provider value={{ taskList, addTask, updateTask, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
