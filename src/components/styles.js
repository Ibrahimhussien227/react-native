import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listHeader: {
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },

  listHeadline: {
    color: "#333",
    fontSize: 21,
    fontWeight: "bold",
  },

  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
  },

  avatarContainer: {
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    height: 90,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },

  avatar: {
    height: 90,
    width: 90,
  },

  name: {
    marginLeft: 13,
    fontSize: 16,
    fontWeight: "600",
  },

  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CCC",
  },

  button: {
    height: 30,
    width: 30,
  },
});
