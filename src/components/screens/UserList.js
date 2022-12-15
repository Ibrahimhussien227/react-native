import React from "react";
import { Button, Text, View } from "react-native";

const users = ["Test Test", "Vera Kutyavina", "Jeon Jungkook", "Park Jimin"];

const UserList = ({ navigation }) => {
  return (
    <View>
      {users.map((user, i) => (
        <Button
          key={i}
          title={user}
          onPress={() => navigation.navigate("UserProfile")}
        />
      ))}
    </View>
  );
};

export default UserList;
