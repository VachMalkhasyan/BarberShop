import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import UserRegistration from './UserRegistration'

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dperson&psig=AOvVaw2xr3tcmipJYwirT7-VAaEK&ust=1709031104932000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiT7JDryIQDFQAAAAAdAAAAABAE' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>mhzcbvjkzb</Text>
      <Text style={styles.surname}>Doe</Text>
      <UserRegistration />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  surname: {
    fontSize: 20,
    fontWeight: 'normal',
  },
});

export default ProfilePage;
