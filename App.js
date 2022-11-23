import { SafeAreaView, StyleSheet, View } from "react-native";
import Button from "./src/components/Button";
import Keyboard from "./src/components/Keyboard";
import { myColors } from "./src/styles/Colors";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Keyboard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.dark,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default App;
