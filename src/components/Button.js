import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Styles } from "../styles/GlobalStyle";

const Button = ({ title, onPress, isBlue, isGray }) => {
  return (
    <TouchableOpacity
      style={isBlue ? Styles.btnBlue : isGray ? Styles.btnGray : Styles.btnDark}
      onPress={onPress}
    >
      <Text
        style={isBlue || isGray ? Styles.smallTextDark : Styles.smallTextLight}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
