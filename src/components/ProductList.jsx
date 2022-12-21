import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Header from "./Header";
import ProductStore from "../store/productStore";

const ProductList = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          {ProductStore.products.map((item) => (
            <View key={item.id} style={styles.productWrapper}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductCard", {
                    itemId: ProductStore.products.indexOf(item),
                  })
                }
              >
                <Image style={styles.img} source={item.photo} />
                <View style={styles.namePriceWrapper}>
                  <Text style={styles.name}> {item.name} </Text>
                  <Text style={styles.price}> {item.price} $ </Text>
                </View>
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
    paddingLeft: 10,
    paddingTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  img: {
    height: 150,
    width: 165,
  },
  namePriceWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  productWrapper: {
    marginRight: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    marginVertical: 4,
  },
  price: {
    color: "green",
  },
});

export default ProductList;
