import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false}}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}