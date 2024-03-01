import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { Ionicons } from '@expo/vector-icons';
import { Card, Button, Icon } from '@rneui/themed';

export default SwiperComponent = () => {
  return (
    <Swiper
      autoplay={true}
      autoplayTimeout={3}
      showsPagination={false}
      style={styles.wrapper}
    >
       <Card>
           <Card.Image style={{ padding: 0 }}  source={require("../assets/review.jpg")}  />
                         <Text style={styles.reviewName}>John Bill</Text>
                         <Text style={styles.review}>I've got my best haircut. He is quick, but professional.</Text>
           </Card>
        <Card>
                                 <Card.Image
                                   style={{ padding: 0 }}
                                   source={require("../assets/review.jpg")}
                                 />
                                 <Text style={styles.reviewName}>Marcus Frost</Text>
                                 <Text style={styles.review}>I've got my best haircut. He is quick, but professional. Definitely the best barber around!</Text>
               </Card>
       <Card>
                                <Card.Image
                                  style={{ padding: 0 }}
                                  source={require("../assets/review.jpg")}
                                />
                                <Text style={styles.reviewName}>Nick Bartman</Text>
                                <Text style={styles.review}>You are a great artist man! Best barber I ever had.</Text>
              </Card>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  reviewName: {
  textAlign:"center",
  fontSize:20,
  fontWeight: 'bold'
  },
  review: {
    textAlign:"center",
    fontSize:15
    },
  slide: {
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#F4E6D7',
    padding:30
  },
});


