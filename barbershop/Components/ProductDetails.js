
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import QuantityInput from '../Utils/QuantityInput'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Actions/CartActions';
import { useNavigation } from '@react-navigation/native';


const ProductDetails = ({ route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();

 const handleBuy = (product) => {
     dispatch(addToCart(product));
     console.log()
   };
   const navigation = useNavigation();
   const handleCartPress = () => {
         navigation.navigate('Cart');
   };

  return (
  <>
        <Text style={styles.title}> Product Details</Text>
            <View style={styles.icons}>
                <Ionicons  style={styles.backIcon} name="arrow-back-circle-outline" size={30} color="black" />
            <View style={{display:"flex",flexDirection:"row", gap:10, margin:5}}>
                <TouchableOpacity style={styles.right} onPress={handleCartPress}>
                    <Ionicons  style={styles.cartHeartIcon} name="heart-outline" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.right} onPress={handleCartPress}>
                    <Ionicons  style={styles.cartHeartIcon} name="cart-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>
            </View>
        <Image source={product.image} style={styles.productImage} />
             <View style={styles.container} >
                <View style={styles.containerNameCost}>
                      <Text style={styles.productName}>{product.name}</Text>
                      <Text style={styles.productPrice}>{product.price} </Text>
                </View>
                    <Text style={styles.productQuantity}>Quantity</Text>
                <QuantityInput  />
                    <Text style={styles.productQuantity}>Description</Text>
                    <Text style={styles.productDescription}>{product.description}</Text>
             </View>
             <View style={styles.buttonGroup}>
                   <TouchableOpacity style={styles.orderButton}>
                     <Text style={styles.buttonTextWhite}>Order Now</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.addToCartButton}  onPress={() => handleBuy(product)}>
                     <Text style={styles.buttonTextBlue}>Add to Cart</Text>
                   </TouchableOpacity>
             </View>
    </>
  );
};
const styles = StyleSheet.create({
    container:{
        margin:50
    },
    title:{
        marginTop:50,
        fontSize:25,
        textAlign:"center"
    },
    productImage:{
        width:'100%'
    },
    backIcon:{
    textAlign:"left",
    margin:5
    },
    cartHeartIcon:{
        textAlign:"right"
    },
    icons:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    containerNameCost:{
         marginBottom:10,
         display:"flex",
         flexDirection:"row",
         justifyContent:"space-between"
    },
    productName:{
        fontSize:18,
        color:'#0a1551'
    },
    productPrice:{
         fontSize:18,
         fontWeight:"bold",
         color:'#0a1551'
    },
    productQuantity:{
        fontSize:18,
        color:"#b6bdf2",
        marginBottom:10
    },
    productDescription:{
        fontSize:18,
        color:'#0a1551',
        marginTop:10
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
      },
      orderButton: {
        marginRight: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#0a1929',
      },
      addToCartButton: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 5,
        backgroundColor: '#0a1551', // or any color you prefer
      },
      buttonTextWhite: {
        fontWeight: 'bold',
        color: '#000', // or any color you prefer
      },
      buttonTextBlue: {
         fontWeight: 'bold',
         color: '#fff', // or any color you prefer
      },
})

export default ProductDetails;
