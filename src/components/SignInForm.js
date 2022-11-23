import React, { useState } from "react";
import { Button, Text, TextInput, StyleSheet, View } from "react-native";

const SignInForm = () => {
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [isSignIn, setIsSignIn] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = () => {
    if (!password || !login) {
      return setError("Fill in all fields please");
    }
    return setIsSignIn(true);
  };

  return (
    <>
      {isSignIn ? (
        <Text> Welcome! </Text>
      ) : (
        <>
          <Text> Sign In </Text>
          <TextInput
            placeholder="Login"
            style={styles.inputStyles}
            onChangeText={setLogin}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.inputStyles}
            onChangeText={setPassword}
          />
          {error && <Text style={styles.text}> {error} </Text>}
          <View style={{ marginTop: 10 }}>
            <Button onPress={onSubmit} title="submit" />
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  inputStyles: {
    borderWidth: 1,
    height: 50,
    borderColor: "gray",
    borderRadius: 3,
    width: "50%",
    marginTop: 16,
    paddingHorizontal: 12,
  },
  text: {
    marginTop: 16,
    color: "red",
  },
});

export default SignInForm;
