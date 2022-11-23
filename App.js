import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import DisableButton from "./src/components/DisableButton";
import CustomInput from "./src/components/CustomInput";
import SignInForm from "./src/components/SignInForm";
import ColorForm from "./src/components/ColorForm";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <DisableButton /> */}
      {/* <CustomInput /> */}
      {/* <SignInForm /> */}
      <ColorForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
