import { useState } from "react";
import { observer } from "mobx-react-lite";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import CartStore from "../store/cartStore";

const CounterInput = ({ fontSize, defaultValue, id }) => {
  const [value, setValue] = useState(defaultValue);

  const increaseValue = () => {
    CartStore.addCartCount(id);
    setValue(value + 1);
  };
  const decreaseValue = () => {
    CartStore.removeCartCount(id);
    setValue(value - 1);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={increaseValue}>
        <Text style={styles.button}>+</Text>
      </TouchableOpacity>
      <Text style={{ ...styles.value, fontSize: fontSize }}> {value} </Text>
      <TouchableOpacity disabled={value === 0} onPress={decreaseValue}>
        <Text style={styles.button}>—</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  button: {
    fontSize: 18,
    color: "black",
    borderColor: "black",
    borderWidth: 1,
    width: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    marginHorizontal: 4,
  },
});

export default observer(CounterInput);
