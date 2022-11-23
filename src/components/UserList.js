import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { styles } from "./styles";

const data = [
  {
    id: 1,
    name: "Anyone",
    image: require("../../assets/avatar.svg"),
    imageCall: require("../../assets/phone.jpg"),
    date: "12 aug 12:45 am",
  },
  {
    id: 2,
    name: "Anyone",
    image: require("../../assets/avatar.svg"),
    imageCall: require("../../assets/camera.jpg"),
    date: "12 aug 12:45 am",
  },
  {
    id: 3,
    name: "Anyone",
    image: require("../../assets/avatar.svg"),
    imageCall: require("../../assets/phone.jpg"),
    date: "12 aug 12:45 am",
  },
  {
    id: 4,
    name: "Anyone",
    image: require("../../assets/avatar.svg"),
    imageCall: require("../../assets/camera.jpg"),
    date: "12 aug 12:45 am",
  },
  {
    id: 5,
    name: "Anyone",
    image: require("../../assets/avatar.svg"),
    imageCall: require("../../assets/phone.jpg"),
    date: "12 aug 12:45 am",
  },
  {
    id: 6,
    name: "Anyone",
    image: require("../../assets/avatar.svg"),
    imageCall: require("../../assets/camera.jpg"),
    date: "12 aug 12:45 am",
  },
  {
    id: 7,
    name: "Anyone",
    image: require("../../assets/avatar.svg"),
    imageCall: require("../../assets/phone.jpg"),
    date: "12 aug 12:45 am",
  },
];

const UserCall = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.listHeader}>
          <Text style={styles.listHeadline}>Users</Text>
        </View>
        {data.map(({ id, name, image, imageCall, date }) => (
          <View key={id}>
            <View style={styles.item}>
              <View style={styles.avatarContainer}>
                <Image source={image} style={styles.avatar} />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                  }}
                >
                  <Text style={styles.name}>{name}</Text>
                  <Text style={{ marginLeft: 10, color: "gray" }}>{date}</Text>
                </View>
                <Image source={imageCall} style={styles.button} />
              </View>
            </View>
            <View style={styles.separator}></View>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default UserCall;
