import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Todo = ({ todos, navigation, toggleComplete, deleteTodo }) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemWrapper}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("TodoFunctions", {
                itemId: todos.indexOf(item),
                todos: todos,
                toggleComplete: toggleComplete,
                deleteTodo: deleteTodo,
              })
            }
          >
            <Text
              style={{
                flex: 3,
                textDecorationLine: item.checked ? "line-through" : "none",
              }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
          <View style={styles.iconsWrapper}>
            <View style={styles.icon}>
              <TouchableOpacity onPress={() => toggleComplete(item.title)}>
                <AntDesign name="check" size={28} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.icon}>
              <TouchableOpacity onPress={() => deleteTodo(item.title)}>
                <AntDesign name="close" size={28} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#f49586",
    marginTop: 12,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  iconsWrapper: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 12,
  },
});

export default Todo;
