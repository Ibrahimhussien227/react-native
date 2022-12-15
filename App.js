import { StyleSheet, View } from "react-native";
import { observer } from "mobx-react-lite";

import Counter from "./src/components/Counter";

const App = () => {
  return (
    <View style={styles.container}>
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
