import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { styles } from "./styles";

const data = [
  {
    id: 1,
    name: "Anyone",
    image: require("../../assets/avatar.svg"),
  },
  {
    id: 2,
    name: "Anyone",
    image: require("../../assets/avatar.svg"),
  },
  {
    id: 3,
    name: "Anyone",
    image: require("../../assets/avatar.svg"),
  },
  {
    id: 4,
    name: "Anyone",
    image: require("../../assets/avatar.svg"),
  },
  {
    id: 5,
    name: "Anyone",
    image: require("../../assets/avatar.svg"),
  },
  {
    id: 6,
    name: "Anyone",
    image: require("../../assets/avatar.svg"),
  },
  {
    id: 7,
    name: "Anyone",
    image: require("../../assets/avatar.svg"),
  },
];

const Users = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.listHeader}>
          <Text style={styles.listHeadline}>Users</Text>
        </View>
        {data.map(({ id, name, image }) => (
          <View key={id}>
            <View style={styles.item}>
              <View style={styles.avatarContainer}>
                <Image source={image} style={styles.avatar} />
              </View>
              <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.separator}></View>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default Users;
