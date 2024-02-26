import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import createBottomTabNavigator
import { StyleSheet, ScrollView, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Components/Products';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); // Create Tab Navigator

export default function App() {
  return (
     <NavigationContainer>
          <Tab.Navigator
          screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;

                      if (route.name === 'Home') {
                        iconName = focused
                          ? 'home-outline'
                          : 'home-outline';
                      } else if (route.name === 'Products') {
                        iconName = focused ? 'bag-handle-outline' : 'bag-handle-outline';
                      }

                      // You can return any component that you like here!
                      return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                  })}
                  >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Products" component={Products} />
          </Tab.Navigator>
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

