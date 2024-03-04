import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Actions/CartActions';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Card, Button, Icon } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get('window').width;


const Cart = () => {
const navigation = useNavigation();


  const handleProductPressToDetails = (product) => {
    navigation.navigate('ProductDetails', { product });
  };
  const products = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

//  const handleBuy = (product) => {
//    dispatch(addToCart(product));
//    console.log(products,'productsstate')
//  };

  return (
        <ScrollView>

    <View style={styles.container}>
      {products.map((product, index) => (
                  <TouchableOpacity key={product.id} style={index % 2 === 0 ? styles.productItem : [styles.productItem, { marginLeft: screenWidth * 0.05 }]} onPress={() => handleProductPressToDetails(product)}>
                    <Card>
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
                  </TouchableOpacity>
                ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#fff',
  },
  productItem: {
    width: '40%', // Adjust width as needed
    margin: 15,
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
  buyButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buyButton: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buyButtonText: {
    color: 'white',
    marginLeft: 5,
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cart;
