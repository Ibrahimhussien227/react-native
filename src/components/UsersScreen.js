import React from "react";
import { Button, StyleSheet, View } from "react-native";
import NavigateButtons from "./navigateButtons";

const users = ["Test Test", "Vera Kutyavina", "Jeon Jungkook", "Park Jimin"];

const UsersScreen = ({ navigation }) => {
  return (
    <>
      <NavigateButtons navigation={navigation} />
      <View style={styles.container}>
        {users.map((user, i) => (
          <Button
            key={i}
            title={user}
            onPress={() => navigation.navigate("Profile")}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});

export default UsersScreen;
