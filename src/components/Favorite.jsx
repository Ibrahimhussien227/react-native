import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { observer } from "mobx-react-lite";

import FavoriteStore from "../store/favoriteStore";
import ProductStore from "../store/productStore";

const Favorite = ({}) => {
  const products = FavoriteStore.favorites;

  const removeFromFavorite = (id) => {
    FavoriteStore.deleteFavorite(id);
    ProductStore.deleteFavorite(id);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {products.map(({ name, photo, price, id }) => (
            <View key={id}>
              <View style={styles.productWrapper}>
                <View style={styles.nameWrapper}>
                  <Image style={styles.img} source={photo} />
                  <View>
                    <Text style={styles.name}> {name} </Text>
                  </View>
                </View>
                <Text style={styles.price}> {price} $ </Text>
              </View>
              <TouchableOpacity onPress={() => removeFromFavorite(id)}>
                <Text style={styles.remove}> Remove </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  img: {
    marginRight: 10,
    height: 150,
    width: 150,
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
  remove: {
    marginBottom: 8,
  },
});

export default observer(Favorite);
