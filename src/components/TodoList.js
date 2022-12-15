import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Todo List </Text>
      <Todo navigation={navigation} />
      <TouchableOpacity onPress={() => navigation.navigate("DoneTasks")}>
        <Text> Go to Completed Todos </Text>
      </TouchableOpacity>
      <TodoForm />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 32,
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    textTransform: "uppercase",
    width: "100%",
    color: "#f49586",
    textAlign: "center",
    marginTop: 16,
  },
});

export default TodoList;
