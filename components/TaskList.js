import { useContext, useEffect } from "react";
import { View, ScrollView, Pressable, Text, StyleSheet } from "react-native";
import { findAllTasks, updateTask } from "../api/TaskApi";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const taskContext = useContext(TaskContext);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const tasks = await findAllTasks();
    taskContext.setTasks(tasks);
  };

  const toggleTaskStatus = async (task) => {
    task.done = !task.done;
    await updateTask(task);
    taskContext.updateTask(task);
  };

  return (
    <View style={styles.taskList}>
      <ScrollView>
        {taskContext.taskList.map((task) => {
          return (
            <Pressable key={task.id} onPress={() => toggleTaskStatus(task)}>
              <View style={styles.taskListItem(task.done)}>
                <Text style={styles.taskListItemText(task.done)}>
                  {task.id} - {task.description}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  taskList: {
    flex: 6,
    backgroundColor: "lightyellow",
    paddingTop: 8,
  },
  taskListItem: (done) => {
    return {
      padding: 16,
      border: 1,
      backgroundColor: done ? "lightgreen" : "indianred",
      borderRadius: 16,
      margin: 8,
    };
  },
  taskListItemText: (done) => {
    return {
      fontSize: 24,
      textDecorationLine: done ? "line-through" : "none",
    };
  },
});
