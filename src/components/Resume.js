import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const avatar = require("../../assets/avatar.svg");

const Resume = () => {
  return (
    <View style={{ height: "100%" }}>
      {" "}
      <View
        style={{
          height: 128,
          backgroundColor: "blue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>
          {" "}
          Lorem ipsum dolor{" "}
        </Text>
      </View>
      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 24, fontWeight: "500" }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit
        </Text>
        <Text style={{ marginTop: 12, opacity: 0.5 }}>
          Doctor Who is a British science-fiction television programme broadcast
          by the BBC since 1963. The programme depicts the adventures of a Time
          Lord called the Doctor, an extraterrestrial being who appears to be
          human.
        </Text>
        <Text style={{ color: "blue", fontWeight: "500", marginTop: 12 }}>
          Doctor Who is a British science-fiction television programme
        </Text>
        <Text style={{ color: "gray", fontWeight: "500", marginTop: 12 }}>
          2001-12-12 13:03:02{" "}
        </Text>
        <View
          style={{
            marginTop: 16,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              height: 90,
              width: 90,
              borderRadius: 45,
              borderWidth: 4,
              borderColor: "blue",
            }}
            source={avatar}
          />
          <Text
            style={{
              color: "blue",
              fontWeight: "700",
              marginLeft: 16,
              fontSize: 22,
            }}
          >
            Johan Doe{" "}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: "100%",
            padding: 12,
            marginTop: 24,
            display: "flex",
            alignItems: "center",
            backgroundColor: "blue",
            borderRadius: 18,
          }}
        >
          <Text style={{ color: "white" }}>Like</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Resume;
