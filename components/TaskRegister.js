import { useState, useContext } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { addNewTask } from "../api/TaskApi";
import { TaskContext } from "../context/TaskContext";
import { Task } from "../models/Task";
import CustomButton from "./CustomButton";

const TaskRegister = () => {
  const taskContext = useContext(TaskContext);

  const [task, setTask] = useState("");

  const addTaskHander = async () => {
    let newTask = new Task(task);
    newTask = await addNewTask(newTask);
    taskContext.addTask(newTask);
    setTask("");
  };

  return (
    <View style={styles.taskInput}>
      <TextInput
        style={styles.taskTextInput}
        placeholder="Digite sua tarefa aqui"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <CustomButton onClick={addTaskHander}>Adicionar</CustomButton>
    </View>
  );
};

export default TaskRegister;

const styles = StyleSheet.create({
  taskInput: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    paddingTop: 16,
  },
  taskTextInput: {
    borderWidth: 1,
    borderColor: "darkblue",
    borderRadius: 16,
    padding: 16,
    fontSize: 24,
    width: "70%",
    marginRight: 8,
  },
});
