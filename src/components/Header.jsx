import { observer } from "mobx-react-lite";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import CartStore from "../store/cartStore";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> SPORT STORE </Text>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate("Favorite")}>
          <AntDesign
            style={{ paddingRight: 8 }}
            name="heart"
            size={32}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <AntDesign
            style={{ paddingRight: 8 }}
            name="shoppingcart"
            size={32}
            color="black"
          />
          <View style={styles.productsCount}>
            <Text style={styles.productsCountNumber}>
              {CartStore.cart.length}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  title: {
    fontSize: 20,
  },
  iconsWrapper: {
    flexDirection: "row",
  },
  productsCount: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "white",
    height: 20,
    width: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  productsCountNumber: {
    color: "green",
  },
});

export default observer(Header);
