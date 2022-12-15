import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TodoList from "../TodoList";
import DoneTasks from "../DoneTasks";
import TodoFunctions from "../TodoFunctions";

const Stack = createNativeStackNavigator();

const Container = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TodoList}></Stack.Screen>
        <Stack.Screen name="DoneTasks" component={DoneTasks}>
          {/* {(props) => (
        <DoneTasks
          {...props}
          todos={todos.filter(({ checked }) => checked)}
        />
      )} */}
        </Stack.Screen>
        <Stack.Screen name="TodoFunctions" component={TodoFunctions}>
          {/* {(props) => (
        <TaskPage
          {...props}
          todos={todos}
          removeTodo={removeTodo}
          checkTodo={checkTodo}
        />
      )} */}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
