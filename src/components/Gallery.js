import React from "react";
import { Image, View } from "react-native";

const img1 = require("../../assets/cheetah.jpg");
const img2 = require("../../assets/tiger.jpg");
const img3 = require("../../assets/lion.jpg");
const img4 = require("../../assets/shark.jpg");

const images = [img1, img2, img3, img4, img1, img2, img3, img4];

const Gallery = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {images.map((img) => (
        <Image
          style={{
            width: "33.3%",
            height: 200,
            borderWidth: 0.5,
            borderColor: "white",
          }}
          source={img}
        />
      ))}
    </View>
  );
};

export default Gallery;
