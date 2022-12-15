import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { observer } from "mobx-react-lite";

import CounterStore from "../store/count";
import ClickCounter from "../store/click";

const Counter = observer(() => {
  const onPlusClick = () => {
    CounterStore.increment();
    ClickCounter.increment();
  };

  const onMinusClick = () => {
    CounterStore.decrement();
    ClickCounter.increment();
  };

  const onResetClick = () => CounterStore.reset();

  return (
    <>
      <Text>Counter</Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonWrapper} onPress={onPlusClick}>
          <Text style={styles.number}>+</Text>
        </TouchableOpacity>
        <Text style={styles.number}>{CounterStore.count}</Text>
        <TouchableOpacity style={styles.buttonWrapper} onPress={onMinusClick}>
          <Text style={styles.number}>-</Text>
        </TouchableOpacity>
      </View>
      <Button onPress={onResetClick} title="Reset" />
      <Text>Total click count: {ClickCounter.count}</Text>
    </>
  );
});

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
