//import React from 'react';
//import { View, StyleSheet,Image } from 'react-native';
//import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons
//
//const Header = () => {
//  return (
//  <>
//    <View style={styles.container}>
//      <Image style={styles.logo} source={require("../assets/barbershop-logo-free-vector.jpg")}/>
//    </View>
//    <View style={styles.container2}>
//     <View style={styles.iconContainer}>
//            <Ionicons  size={100} color="black" />
//     </View>
//     </View>
//    </>
//  );
//};
//
//const styles = StyleSheet.create({
//  logo: {
//    height:200,
//    width:400
//  },
//  container: {
//    flex: 1,
//    backgroundColor: '#ffdc7b',
//    justifyContent: 'center',
//    alignItems: 'center',
//    height:'200',
//    width:400
//  },
//  container2: {
//      backgroundColor: '#fff',
//      justifyContent: 'center',
//      alignItems: 'center',
//    },
//  iconContainer: {
//    width: 150,
//    height: 150,
//    backgroundColor: 'white',
//    borderRadius: 75,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//});
//
//export default Header;
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate('Products'); // Navigate to Profile page
  };

  return (
    <>
      <View style={styles.container}>
          <TouchableOpacity style={styles.right} onPress={handleProfilePress}>
                    <Ionicons  style={styles.right} name="person-circle" size={30} color="black" />
          </TouchableOpacity>
                    <Image style={styles.logo} source={require("../assets/barbershop-logo-free-vector.jpg")} />
          </View>
      <View style={styles.container2}>
        <View style={styles.iconContainer}>
          <Ionicons name="" size={100} color="black" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  right:{
  textAlign:'right',



    },
  logo: {
    height: 100,
    width: 200,
    resizeMode: 'contain', // Ensure logo fits within the container
  },
  container: {
    backgroundColor: '#ffdc7b',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
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
});

export default Header;
