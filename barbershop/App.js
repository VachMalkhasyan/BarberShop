import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, ScrollView, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Components/Products';
import ProfilePage from './Components/ProfilePage'
import Settings from './Components/Settings'
import Booking from './Components/Booking'
import Swiper from './Utils/SwiperComponent'
import Schedule from './Components/Schedule'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
     <NavigationContainer>
          <Tab.Navigator
          screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;

                      if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                      } else if (route.name === 'Products') {
                        iconName = focused ? 'basket' : 'basket-outline';
                      } else if (route.name === 'ProfilePage') {
                        iconName = focused ? 'person' : 'person-outline';
                      } else if (route.name === 'Settings') {
                         iconName = focused ? 'settings-sharp' : 'settings-outline';
                      } else if (route.name === 'Booking') {
                         iconName = focused ? 'calendar' : 'calendar-outline';
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
            <Tab.Screen name="Booking" component={Booking} />
            <Tab.Screen name="ProfilePage" component={ProfilePage} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
  );
}

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Schedule />
      <View style={styles.content}>
        <Products />
      </View>
      <SwiperComponent />
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

