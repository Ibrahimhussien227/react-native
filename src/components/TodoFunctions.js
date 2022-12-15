import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TodoFunctions = ({ navigation, route }) => {
  const { itemId, todos, toggleComplete, deleteTodo } = route.params;
  const todo = todos[itemId];

  const onRemove = () => {
    deleteTodo(todo.title);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...styles.title,
          textDecorationLine: todo.checked ? "line-through" : "none",
        }}
      >
        {" "}
        {todo.title}{" "}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            toggleComplete(todo.title);
            navigation.goBack();
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

export default TodoFunctions;
