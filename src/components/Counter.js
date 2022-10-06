import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseValue = () => setCount((prevCount) => prevCount + 1);
  const decreaseValue = () => setCount((prevCount) => prevCount - 1);

  return (
    <>
      <Text>Counter</Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonWrapper} onPress={increaseValue}>
          <Text style={styles.number}>+</Text>
        </TouchableOpacity>
        <Text style={styles.number}>{count}</Text>
        <TouchableOpacity style={styles.buttonWrapper} onPress={decreaseValue}>
          <Text style={styles.number}>-</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    width: 200,
    height: 200,
    borderRadius: 20,
  },

  buttonWrapper: {
    height: 40,
    width: 40,
    borderRadius: 10,
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  number: {
    fontSize: 30,
  },
});

export default Counter;
