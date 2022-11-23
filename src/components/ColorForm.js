import React, { createRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const defaultBox = [
  {
    color: "red",
  },
  {
    color: "blue",
  },
];

const inputWidth = createRef();
const inputHeight = createRef();

const ColorForm = () => {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [color, setColor] = useState("");
  const [boxArray, setBoxArray] = useState(defaultBox);

  const onSubmit = () => {
    const newBox = {
      height: height ? Number.parseInt(height) : undefined,
      width: width ? Number.parseInt(width) : undefined,
      color: color ? color : "red",
    };
    setBoxArray([...boxArray, newBox]);
  };

  const reset = () => {
    inputWidth.current.clear();
    inputHeight.current.clear();

    setHeight("");
    setWidth("");
    setColor("");
  };

  const Box = ({ width = 100, height = 100, color }) => (
    <View style={{ width: width, height: height, backgroundColor: color }} />
  );

  const ColorBox = ({ color }) => (
    <TouchableOpacity onPress={() => setColor(color)}>
      <View
        style={{
          backgroundColor: color,
          width: 50,
          height: 50,
          marginRight: 20,
        }}
      ></View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {boxArray.map(({ color, width, height }, i) => (
        <Box key={i} height={height} width={width} color={color} />
      ))}

      <View style={styles.form}>
        <Text style={{ marginRight: 30 }}>Size</Text>
        <TextInput
          ref={inputWidth}
          placeholder="width"
          style={styles.inputStyles}
          onChangeText={setWidth}
        />
        <TextInput
          ref={inputHeight}
          placeholder="height"
          style={styles.inputStyles}
          onChangeText={setHeight}
        />
      </View>
      <View style={styles.formColor}>
        <Text style={{ marginRight: 50 }}>Color</Text>
        <ColorBox color="red" />
        <ColorBox color="green" />
        <ColorBox color="blue" />
      </View>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity onPress={onSubmit} style={styles.button}>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset} style={styles.button}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ColorForm;

const styles = StyleSheet.create({
  inputStyles: {
    borderWidth: 1,
    height: 40,
    borderColor: "#gray",
    borderRadius: 3,
    marginRight: 8,
    marginTop: 16,
    paddingHorizontal: 12,
    width: 100,
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  formColor: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  button: {
    height: 40,
    width: 100,
    marginTop: 10,
    marginRight: 20,
    borderRadius: "5%",
    borderColor: "#gray",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
