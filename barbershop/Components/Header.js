import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate('ProfilePage');
  };
   const handleCartPress = () => {
      navigation.navigate('Cart');
    };

  return (
    <>
              <View style={styles.container1}>
                  <TouchableOpacity style={styles.right} onPress={handleProfilePress}>
                          <Ionicons  style={styles.right} name="person-circle" size={30} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.right} onPress={handleCartPress}>
                          <Ionicons  style={styles.right} name="basket-outline" size={30} color="black" />
                  </TouchableOpacity>
              </View>
              <View style={styles.container}>
                      <Image style={styles.logo} source={require("../assets/barbers.png")} />
                      <Text style={styles.title} >Barber Shop</Text>
                      <Text  style={styles.subTitle} >Superior cuts. Straight shaves. Tailored hair.</Text>
             </View>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 200,
    resizeMode: 'contain',
  },
  container: {
    backgroundColor: '#F4E6D7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    padding:25,
  },
  container1: {
        flexDirection: 'row',
        backgroundColor: '#F4E6D7',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap:10,
        padding:10
      },

  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  iconContainer: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
   fontSize: 20,
   fontWeight: 'bold',
   color:"#2a5d7c"

  },
  subTitle: {
    fontSize: 16,
    color:"#2A5D7C"
  },
});

export default Header;
