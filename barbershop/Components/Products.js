
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SearchInput from  '../Utils/SearchInput.js';
import { Card, Button, Icon } from '@rneui/themed';


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

  const [searchText, setSearchText] = useState('');

    const handleSearchChange = text => {
      setSearchText(text);
      // You can add additional logic here, such as filtering data based on the search text
    };

  return (
    <>

      <Text style={styles.productsName}> Barber Shop Products </Text>
      <SearchInput
                  placeholder="Search..."
                  onChangeText={handleSearchChange}
                  value={searchText}
      />
      <View style={styles.container}>
        {products.map(product => (
        <Card key={product.image}>
                  <Card.Divider />
                  <Card.Image
                    style={{ padding: 0 }}
                    source={product.image}
                  />
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productPrice}>{product.price}</Text>
                  <TouchableOpacity style={styles.buyButton} onPress={() => handleBuy(product)}>
                    <Ionicons name="cart" size={20} color="white" />
                    <Text style={styles.buyButtonText}>Buy</Text>
                  </TouchableOpacity>
                </Card>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  productsName: {
    textAlign: 'left',
    margin: 10,
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

  },
  productItem: {
    width: '40%', // Adjust width as needed
    margin: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#20232a",
    padding: 10
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 15,
    padding: 20
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
