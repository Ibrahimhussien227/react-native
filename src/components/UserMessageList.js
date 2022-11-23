import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { styles } from "./styles";

const data = [
  {
    id: 1,
    message: "Anyone is here hey there why you are here ",
    image: require("../../assets/avatar.svg"),
  },
  {
    id: 2,
    message: "Anyone is here hey there why you are here ",
    image: require("../../assets/avatar.svg"),
  },
  {
    id: 3,
    message: "Anyone is here hey there why you are here ",
    image: require("../../assets/avatar.svg"),
  },
  {
    id: 4,
    message: "Anyone is here hey there why you are here ",
    image: require("../../assets/avatar.svg"),
  },
  {
    id: 5,
    message: "Anyone is here hey there why you are here ",
    image: require("../../assets/avatar.svg"),
  },
  {
    id: 6,
    message: "Anyone is here hey there why you are here ",
    image: require("../../assets/avatar.svg"),
  },
  {
    id: 7,
    message: "Anyone is here hey there why you are here ",
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
        {data.map(({ id, message, image }) => (
          <View key={id}>
            <View style={styles.item}>
              <View style={styles.avatarContainer}>
                <Image source={image} style={styles.avatar} />
              </View>
              <Text style={styles.name}>{message}</Text>
            </View>
            <View style={styles.separator}></View>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default Users;
