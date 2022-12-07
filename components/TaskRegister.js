import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

const TaskRegister = ({ addTask }) => {
  const [task, setTask] = useState("");

  const addTaskHander = () => {
    addTask(task);
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