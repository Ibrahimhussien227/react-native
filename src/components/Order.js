import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const like = require("../../assets/like.png");

const Order = () => {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#e3e3e3",
        paddingTop: 40,
        paddingHorizontal: 16,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        style={{ height: 90, width: 90, marginVertical: 32 }}
        source={like}
      />
      <Text style={{ fontSize: 20, color: "#222a46" }}>
        Congratulation, your order is accepted
      </Text>
      <Text style={{ color: "#949494", marginTop: 24, textAlign: "center" }}>
        Doctor Who is a British science-fiction television programme broadcast
        by the BBC since 1963. The programme depicts the adventures of a Time
        Lord called the Doctor, an extraterrestrial being who appears to be
        human.
      </Text>
      <TouchableOpacity
        style={{
          width: "60%",
          padding: 12,
          marginTop: 24,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#327cc7",
          borderRadius: 18,
        }}
      >
        <Text style={{ color: "white" }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Order;
