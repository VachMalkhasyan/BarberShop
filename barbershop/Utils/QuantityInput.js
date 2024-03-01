import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (value) => {
    // Ensure value is a number and not empty
    if (!isNaN(value) && value !== '') {
      setQuantity(parseInt(value));
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={decrementQuantity}>
        <Ionicons name="remove" size={24} color="white" />
      </TouchableOpacity>
      <TextInput
        style={styles.quantityInput}
        value={quantity.toString()}
        onChangeText={handleQuantityChange}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={incrementQuantity}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '100%',
    borderColor: 'black',
    borderRadius: 10,
  },
  quantityInput: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 18,
    textAlign:'center'
  },
  button: {
    backgroundColor: '#b6bdf2', // Background color for + and - icons
    padding: 10,
    borderRadius: 5, // Rounded corners
  },
});

export default QuantityInput;
