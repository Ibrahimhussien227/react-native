import { useMemo } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { observer } from "mobx-react-lite";

import CartStore from "../store/cartStore";
import ProductStore from "../store/productStore";
import CounterInput from "./CounterInput";

const Cart = ({}) => {
  const products = CartStore.cart;
  const totalPrice = useMemo(
    () => products.reduce((obj, item, i) => obj + item.price * item.inCart, 0),
    [products]
  );

  const removeFromCart = (id) => {
    CartStore.deleteFromCart(id);
    ProductStore.removeCartCount(id);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {products.map(({ name, photo, price, id, inCart }) => (
            <View key={id}>
              <View style={styles.productWrapper}>
                <View style={styles.nameWrapper}>
                  <Image style={styles.img} source={photo} />
                </View>
                <Text style={styles.name}> {name} </Text>
                <View style={styles.counter}>
                  <Text style={styles.price}> {inCart * price} $ </Text>
                  <CounterInput defaultValue={inCart} fontSize={14} id={id} />
                </View>
              </View>
              <TouchableOpacity onPress={() => removeFromCart(id)}>
                <Text style={styles.remove}> Remove </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      <Text style={styles.totalPrice}>
        Total price:{" "}
        <Text style={styles.totalPriceNumber}> {totalPrice} $ </Text>
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  img: {
    maxWidth: 75,
    maxHeight: 75,
    marginRight: 10,
    height: 150,
    width: 250,
  },
  counter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  productWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderWidth: 1,
    borderColor: "#d2d2d2",
    marginBottom: 10,
  },
  nameWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    marginVertical: 4,
  },
  price: {
    fontWeight: "bold",
    color: "#4b9d22",
    fontSize: 17,
    marginRight: 28,
  },
  totalPrice: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 16,
  },
  totalPriceNumber: {
    color: "#4b9d22",
    fontSize: 20,
  },
  remove: {
    marginBottom: 8,
  },
});

export default observer(Cart);
