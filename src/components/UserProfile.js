import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

const user = require("../../assets/avatar1.png");

const UserProfile = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          display: "flex",
          height: 256,
          backgroundColor: "gray",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            marginTop: 16,
            height: 128,
            width: 128,
            borderRadius: 64,
            marginRight: 16,
            borderColor: "white",
            borderWidth: 4,
          }}
          source={user}
        />
        <Text
          style={{
            color: "white",
            marginTop: 16,
            fontWeight: "500",
            fontSize: 20,
          }}
        >
          Choose Name
        </Text>
      </View>
    </View>
  );
};

export default UserProfile;
