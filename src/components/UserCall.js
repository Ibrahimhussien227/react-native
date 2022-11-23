import React from "react";
import { Image, Text, View } from "react-native";

const user = require("../../assets/avatar1.png");
const speacker = require("../../assets/speaker.png");
const microphoneoff = require("../../assets/microphoneoff.png");
const hangup = require("../../assets/hangup.png");

const UserCall = () => {
  return (
    <View style={{ height: "100%", backgroundColor: "#237265" }}>
      <View style={{ height: 100, paddingTop: 32, paddingHorizontal: 12 }}>
        <Text style={{ color: "white", fontWeight: "400", fontSize: 28 }}>
          Mark Johnson
        </Text>
        <Text
          style={{
            textTransform: "uppercase",
            color: "white",
            marginLeft: 2,
            opacity: 0.75,
          }}
        >
          calling
        </Text>
      </View>
      <Image style={{ height: 450, width: "100%" }} source={user} />
      <View
        style={{
          display: "flex",
          height: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Image
            source={speacker}
            style={{
              height: 50,
              width: 50,
              backgroundColor: "white",
              borderRadius: 26,
            }}
          />
          <Image
            source={hangup}
            style={{
              height: 50,
              width: 50,
              backgroundColor: "white",
              borderRadius: 26,
            }}
          />
          <Image
            source={microphoneoff}
            style={{
              height: 50,
              width: 50,
              backgroundColor: "white",
              borderRadius: 26,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default UserCall;
