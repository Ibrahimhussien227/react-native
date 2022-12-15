import React from "react";
import { observer } from "mobx-react-lite";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TodoList from "./src/components/TodoList";
import DoneTasks from "./src/components/DoneTasks";
import TodoFunctions from "./src/components/TodoFunctions";
import TodoStore from "./src/components/store/todo";

const Stack = createNativeStackNavigator();

const App = observer(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <TodoList {...props} />}
        </Stack.Screen>
        <Stack.Screen name="DoneTasks">
          {(props) => (
            <DoneTasks
              {...props}
              todos={TodoStore.todos.filter(({ completed }) => completed)}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="TodoFunctions">
          {(props) => <TodoFunctions {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default App;
