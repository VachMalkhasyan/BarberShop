import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, Modal, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Actions/CartActions';
import { Ionicons } from '@expo/vector-icons';
import SearchInput from '../Utils/SearchInput.js';
import { Card, Button, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const products = [
  { id: 1, name: 'Shaver', price: '$20', image: require('../assets/product1.png'), description: 'This is a shaver.' },
  { id: 2, name: 'Hair Gel', price: '$10', image: require('../assets/product2.png'), description: 'This is a hair gel.' },
  { id: 3, name: 'Shampoo', price: '$15', image: require('../assets/product3.png'), description: 'This is a shampoo.' },
  { id: 4, name: 'Hair Dryer', price: '$30', image: require('../assets/product4.png'), description: 'This is a hair dryer.' },
];

const Products = () => {
  const navigation = useNavigation();

  const handleProductPressToDetails = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuy = (product) => {
    dispatch(addToCart(product));
  };

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
 const [searchText, setSearchText] = useState('');

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  // Filter products based on search text
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <>
          <ScrollView>
            <Text style={styles.productsName}>Barber Shop Products</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              onChangeText={handleSearchChange}
              value={searchText}
            />
            <View style={styles.container}>
              {filteredProducts.map((product, index) => (
                <TouchableOpacity key={product.id} style={index % 2 === 0 ? styles.productItem : [styles.productItem, { marginLeft: screenWidth * 0.05 }]} onPress={() => handleProductPress(product)}>
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

      {/* Modal for showing product details */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalProductName}>{selectedProduct?.name}</Text>
            <Text style={styles.modalProductDescription}>{selectedProduct?.description}</Text>
            <TouchableOpacity style={styles.modalBuyButton} onPress={() => handleBuy(selectedProduct)}>
              <Ionicons name="cart" size={20} color="white" />
              <Text style={styles.modalBuyButtonText}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  productsName: {
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#fff',
  },
  productItem: {
    width: 150, // Adjust width as needed
    marginBottom: 20,
  },
  productName: {
    marginTop: 14,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  productPrice: {
    fontSize: 18,
    color: '#0A1551',
    marginTop: 5,
    textAlign: 'left',
    fontWeight: '700'
  },
  buyButton: {
    backgroundColor: '#0A1551',
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
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalProductName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalProductDescription: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalBuyButton: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  modalBuyButtonText: {
    color: 'white',
    marginLeft: 5,
    textAlign: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default Products;
