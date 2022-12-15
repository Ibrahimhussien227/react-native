import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { observer } from "mobx-react-lite";

import TodoStore from "./store/todo";

const TodoFunctions = ({ navigation, route }) => {
  const { itemId } = route.params;
  const todo = TodoStore.todos[itemId];

  const onRemove = () => {
    TodoStore.deleteTodo(todo.id);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...styles.title,
          textDecorationLine: todo.completed ? "line-through" : "none",
        }}
      >
        {" "}
        {todo.title}{" "}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            TodoStore.completeTodo(todo.id);
          }}
        >
          <Text>Check</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={onRemove}>
          <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.goBack()}
        >
          <Text>Go back</Text>
        </TouchableOpacity>
      </View>
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
    width: "100%",
    textAlign: "center",
    marginBottom: 16,
  },
  buttons: {
    flex: 1,
    flexDirection: "column",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 300,
  },
  submitButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#f49586",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default observer(TodoFunctions);
