import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const DisableButton = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ margin: 16 }}>
          {clickCount >= 3
            ? `The Button was clicked ${clickCount} times! You need to Reset so you can click again`
            : "The button isn't clicked yet"}
        </Text>
        <Button
          title="Click!"
          onPress={() => setClickCount(clickCount + 1)}
          disabled={clickCount >= 3}
        />
        <Button title="Reset" onPress={() => setClickCount(0)} />
      </View>
    </>
  );
};

export default DisableButton;
