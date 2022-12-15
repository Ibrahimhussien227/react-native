import React from "react";
import { observer } from "mobx-react-lite";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import TodoStore from "./store/todo";
import { toJS } from "mobx";

const Todo = ({ navigation }) => {
  console.log(toJS(TodoStore.todos));
  return (
    <FlatList
      data={TodoStore.todos}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemWrapper}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("TodoFunctions", {
                itemId: TodoStore.todos.indexOf(item),
              })
            }
          >
            <Text
              style={{
                flex: 3,
                textDecorationLine: item.completed ? "line-through" : "none",
              }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
          <View style={styles.iconsWrapper}>
            <View style={styles.icon}>
              <TouchableOpacity onPress={() => TodoStore.completeTodo(item.id)}>
                <AntDesign name="check" size={28} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.icon}>
              <TouchableOpacity onPress={() => TodoStore.deleteTodo(item.id)}>
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

export default observer(Todo);
