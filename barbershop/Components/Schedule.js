import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default Schedule = () => {
  const navigation = useNavigation();

  const handleBookingPress = () => {
    navigation.navigate('Booking');
  };

  return (
    <>
              <TouchableOpacity style={styles.scheduleBox} onPress={handleBookingPress}>
                      <Ionicons  style={styles.right} name="calendar-outline" size={90} color="black" />
                      <Text> Schedule Appointment </Text>
              </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
scheduleBox:{
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: 'beige',
            borderWidth: 4,
            borderColor:"black",
            borderRadius: 20,
            margin:20
}
})