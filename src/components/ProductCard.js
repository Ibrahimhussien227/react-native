import React from "react";
import {
  View,
  Image,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const shirt = require("../../assets/t-shirt.jpeg");
const star = require("../../assets/star.png");

const ProductCard = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          marginTop: 32,
          paddingHorizontal: 16,
        }}
      >
        <Image source={shirt} style={{ height: 190, width: 164 }} />
        <Text
          style={{
            fontWeight: "bold",
            marginTop: 24,
            color: "#757575",
            fontSize: 28,
          }}
        >
          Super soft T-shirt
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            marginTop: 8,
            color: "#65934c",
            fontSize: 15,
          }}
        >
          $ 12.22
        </Text>
        <Text
          style={{
            marginTop: 8,
            fontSize: 16,
            textAlign: "center",
            color: "#919191",
          }}
        >
          The best T-shirt
        </Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          {[star, star, star, star, star, star].map((star) => (
            <TouchableOpacity>
              <Image
                source={star}
                style={{ width: 20, height: 20, marginLeft: 2 }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
          {["blue", "darkblue", "gray", "green", "black", "red"].map(
            (color) => (
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: color,
                  borderRadius: 26,
                  marginLeft: 2,
                }}
              ></TouchableOpacity>
            )
          )}
        </View>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 24 }}>
          {["S", "M", "L", "Xl"].map((s) => (
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderWidth: 0.5,
                borderColor: "gray",
                borderRadius: 18,
                flex: 1,
                alignItems: "center",
                justifyContent: "space-around",
                marginLeft: 4,
              }}
            >
              <Text style={{ fontSize: 12 }}> {s} </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={{
            width: "90%",
            marginTop: 24,
            flex: 1,
            alignItems: "center",
            backgroundColor: "#54bcd7",
            padding: 8,
            borderRadius: 16,
          }}
        >
          <Text style={{ color: "white" }}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductCard;
