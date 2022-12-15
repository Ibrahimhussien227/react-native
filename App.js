import { StyleSheet, Text, View } from "react-native";
import MainContainer from "./src/components/routes/MainContainer";

export default function App() {
  return <MainContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
