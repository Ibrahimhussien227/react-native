import React from "react";
import { Button, StyleSheet, View } from "react-native";

const NavigateButtons = ({ navigation }) => {
  return (
    <View style={styles.buttonsWrapper}>
      <Button title="< Go back" onPress={() => navigation.goBack()} />
      <Button title="Home Page" onPress={() => navigation.popToTop()} />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

export default NavigateButtons;
