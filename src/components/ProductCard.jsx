import { AntDesign } from "@expo/vector-icons";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";

import Header from "./Header";
import ProductStore from "../store/productStore";
import CartStore from "../store/cartStore";
import FavoriteStore from "../store/favoriteStore";

const rating = [1, 2, 3, 4, 5];

const ProductCard = ({ navigation, route }) => {
  const { itemId } = route.params;
  const product = ProductStore.products[itemId];

  const addToCart = () => {
    ProductStore.addCartCount(product.id);
    CartStore.addToCart(product);
  };

  const addToFavorites = () => {
    FavoriteStore.createFavorite(product);
    ProductStore.createFavorite(product.id);
  };

  const removeFromFavorites = () => {
    FavoriteStore.deleteFavorite(product.id);
    ProductStore.deleteFavorite(product.id);
  };

  return (
    <View>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Image source={product.photo} style={styles.img} />
        <Text style={styles.title}> {product.name} </Text>
        <Text style={styles.price}> {product.price} $ </Text>
        <Text style={styles.description}> {product.description} </Text>
        <View style={styles.rating}>
          {rating.map((i) => (
            <AntDesign
              key={i}
              name={i <= product.rating ? "star" : "staro"}
              size={28}
              color="black"
            />
          ))}
          {product.isFavorite ? (
            <TouchableOpacity onPress={removeFromFavorites}>
              <AntDesign
                style={{ marginLeft: 24 }}
                name="heart"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={addToFavorites}>
              <AntDesign
                style={{ marginLeft: 24 }}
                name="hearto"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          )}
        </View>
        {!product.inCart ? (
          <TouchableOpacity onPress={addToCart} style={styles.addButton}>
            <Text style={styles.buttonText}>Add to cart</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.warning}> Already in cart</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 16,
    height: "100%",
    marginTop: 10,
  },
  img: {
    height: 600,
    width: 320,
  },
  title: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 24,
  },
  price: {
    fontWeight: "bold",
    marginTop: 8,
    color: "green",
    fontSize: 22,
  },
  description: {
    marginTop: 8,
    fontSize: 16,
    textAlign: "center",
    color: "#919191",
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    marginTop: 16,
  },
  addButton: {
    width: "90%",
    marginTop: 24,
    display: "flex",
    alignItems: "center",
    backgroundColor: "black",
    padding: 8,
    borderRadius: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  warning: {
    marginTop: 16,
  },
});

export default observer(ProductCard);
