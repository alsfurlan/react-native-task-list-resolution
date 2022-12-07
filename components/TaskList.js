import { View, ScrollView, Pressable, Text, StyleSheet } from "react-native";

const TaskList = ({ tasks, finishTask }) => {
  return (
    <View style={styles.taskList}>
      <ScrollView>
        {tasks.map(({ id, description, done }) => {
          return (
            <Pressable key={id} onPress={() => finishTask(id)}>
              <View style={styles.taskListItem(done)}>
                <Text style={styles.taskListItemText(done)}>{description}</Text>
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
