import React, { useState } from "react";
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ navigation }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (input) => {
    if (input === "") {
      Alert("please enter a valid todo");
      return;
    }

    setTodos([...todos, { title: input, checked: false }]);
  };

  const toggleComplete = (todo) => {
    setTodos(
      todos.map(({ title, checked }) => ({
        title,
        checked: title === todo ? !checked : checked,
      }))
    );
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter(({ title }) => title !== todo));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Todo List </Text>
      <Todo
        navigation={navigation}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        todos={todos}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("DoneTasks", {
            todos: todos.filter(({ checked }) => checked),
          })
        }
      >
        <Text> Go to Completed Todos </Text>
      </TouchableOpacity>
      <TodoForm addTodo={addTodo} />
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
