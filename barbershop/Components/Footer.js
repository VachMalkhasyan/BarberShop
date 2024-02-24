import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Your Footer Content Here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#333',
    padding: 20,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Footer;
