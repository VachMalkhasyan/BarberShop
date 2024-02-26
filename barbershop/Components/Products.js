
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const products = [
  { id: 1, name: 'Shaver', price: '$20', image: require('../assets/product1.png') },
  { id: 2, name: 'Hair Gel', price: '$10', image: require('../assets/product2.png') },
  { id: 3, name: 'Shampoo', price: '$15', image: require('../assets/product3.png') },
  { id: 4, name: 'Hair Dryer', price: '$30', image: require('../assets/product4.png') },
];

const Products = () => {
  const handleBuy = (product) => {
    // Logic for buying the product
    console.log(`Buying ${product.name}`);
  };

  return (
    <>
      <Text style={styles.productsName}> You can see all our products </Text>
      <View style={styles.container}>
        {products.map(product => (
          <View key={product.id} style={styles.productItem}>
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            <TouchableOpacity style={styles.buyButton} onPress={() => handleBuy(product)}>
              <Ionicons name="cart" size={20} color="white" />
              <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  productsName: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 8,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: "#20232a",
  },
  productItem: {
    width: '40%', // Adjust width as needed
    margin: 15,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  productName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
    marginTop: 5,
  },
  buyButton: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    width: '100%', // Full-width button
  },
  buyButtonText: {
    color: 'white',
    marginLeft: 5,
  },
});

export default Products;
