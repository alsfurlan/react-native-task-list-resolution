import { useContext, useState } from "react";

import { View, StyleSheet } from "react-native";
import TaskRegister from "./TaskRegister";
import TaskList from "./TaskList";
import { TaskContextProvider } from "../context/TaskContext";

const Tasks = () => {
  return (
    <TaskContextProvider>
      <View style={styles.container}>
        <TaskRegister />
        <TaskList />
      </View>
    </TaskContextProvider>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
