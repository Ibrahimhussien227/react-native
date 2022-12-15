import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const DoneTasks = ({ route }) => {
  const { todos } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Done Tasks </Text>
      <FlatList
        data={todos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemWrapper}>
            <Text style={{ flex: 3, textDecorationLine: "line-through" }}>
              {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#f49586",
    marginTop: 12,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  container: {
    marginVertical: 32,
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    width: "100%",
    color: "#f49586",
    textAlign: "center",
    marginBottom: 16,
  },
});

export default DoneTasks;
