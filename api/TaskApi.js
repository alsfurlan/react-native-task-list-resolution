import axios from "axios";

const apiUrl = "http://10.0.2.2:3000";

export const findAllTasks = async () => {
  const { data } = await axios.get(`${apiUrl}/tasks`);
  return data;
};

export const addNewTask = async (newTask) => {
  const { data } = await axios.post(`${apiUrl}/tasks`, newTask);
  return data;
};

export const updateTask = async (task) => {
  return await axios.put(`${apiUrl}/tasks/${task.id}`, task);
};
