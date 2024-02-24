
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, ScrollView, View } from 'react-native';
import 'react-native-gesture-handler';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Components/Products';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <View style={styles.content}>
        <Products />
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
});

