import React, { useState } from "react";
import { Button, Text, TextInput, StyleSheet } from "react-native";
import { View } from "react-native-web";

const CustomInput = () => {
  const [value, setValue] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [submitValue, setSubmitValue] = useState("");

  const onSubmit = () => setSubmitValue(currentValue);

  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", width: "100%" }}
    >
      <Text style={styles.text}>{value}</Text>
      <TextInput style={styles.inputStyles} onChangeText={setValue} />

      <Text style={styles.text}>{submitValue}</Text>
      <TextInput style={styles.inputStyles} onChangeText={setCurrentValue} />
      <View style={{ marginTop: 10 }}>
        <Button onPress={onSubmit} title="submit" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyles: {
    borderWidth: 1,
    height: 40,
    borderColor: "gray",
    borderRadius: 3,
    width: "50%",
    marginRight: 8,
    paddingHorizontal: 12,
  },
  text: {
    marginVertical: 16,
  },
});

export default CustomInput;
