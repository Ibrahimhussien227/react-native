import { makeAutoObservable } from "mobx";

const jacket = require("../../assets/Jacket.jpg");
const jacket1 = require("../../assets/Jacket1.jpg");
const pants = require("../../assets/Pants.jpg");
const shoes = require("../../assets/Shoes.jpg");
const fullKit = require("../../assets/Sport Woman.jpg");
const shirt = require("../../assets/T-shirt.jpg");

class ProductStore {
  products = [
    {
      name: "Sport Jacket",
      price: 200,
      count: 10,
      id: "43452",
      description: "Sport Jacket for raining day",
      photo: jacket,
      rating: 5,
      inCart: 0,
      isFavorite: false,
    },
    {
      name: "Runner Jacket",
      price: 100,
      count: 5,
      id: "43782",
      description: "Sport Jacket for runner for spring",
      photo: jacket1,
      rating: 4,
      inCart: 0,
      isFavorite: false,
    },
    {
      name: "Sport Women Pants",
      price: 150,
      count: 1,
      id: "42360",
      description: "Flexiable Pants for sport",
      photo: pants,
      rating: 5,
      inCart: 0,
      isFavorite: false,
    },
    {
      name: "Sport Shoes",
      price: 250,
      count: 3,
      id: "43972",
      description: "Men Shoes for Running",
      photo: shoes,
      rating: 5,
      inCart: 0,
      isFavorite: false,
    },
    {
      name: "Full Kit Sport Clothes",
      price: 400,
      count: 0,
      id: "42375",
      photo: fullKit,
      description: "Beautiful Kit For Women",
      rating: 5,
      inCart: 0,
      isFavorite: false,
    },
    {
      name: "T-shirt",
      price: 50,
      count: 5,
      id: "42701",
      description: "Comfort T-shirt",
      photo: shirt,
      rating: 3,
      inCart: 0,
      isFavorite: false,
    },
  ];

  addCartCount(id) {
    this.products = this.products.map((product) =>
      product.id === id ? { ...product, inCart: product.inCart + 1 } : product
    );
  }

  removeCartCount(id) {
    this.products = this.products.map((product) =>
      product.id === id ? { ...product, inCart: 0 } : product
    );
  }

  createFavorite(id) {
    this.products = this.products.map((product) =>
      product.id === id ? { ...product, isFavorite: true } : product
    );
  }

  deleteFavorite(id) {
    this.products = this.products.map((product) =>
      product.id === id ? { ...product, isFavorite: false } : product
    );
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export default new ProductStore();
