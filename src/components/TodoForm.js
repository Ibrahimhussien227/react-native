import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(input);

    setInput("");
  };

  return (
    <View style={styles.addForm}>
      <TextInput
        style={styles.inputStyles}
        onChangeText={setInput}
        value={input}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text>Add</Text>
      </TouchableOpacity>
      {/* <Button title="ADD" onPress={handleSubmit} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyles: {
    borderWidth: 1,
    height: 40,
    borderColor: "#f49586",
    borderRadius: 3,
    width: "100%",
    marginRight: 8,
    paddingHorizontal: 12,
  },
  addForm: {
    flexDirection: "row",
    alignItems: "center",
  },
  submitButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#f49586",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TodoForm;
