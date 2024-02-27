import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default SwiperComponent = () => {
  return (
    <Swiper
      autoplay={true}
      autoplayTimeout={3} // Adjust autoplay speed (time in seconds)
      showsPagination={false} // Hide pagination dots if needed
      style={styles.wrapper}
    >
      <View style={styles.slide}>
       <Image source={require("../assets/product1.png")} />
      </View>
      <View style={styles.slide}>
        <Image source={require("../assets/product2.png")} />
      </View>
      <View style={styles.slide}>
        <Image source={require("../assets/product4.png")} />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    height:300,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#F4E6D7',
    padding:30
  },
});


