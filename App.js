import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import Map from './screens/Map';


import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

const AppStack = createStackNavigator(
  {
    Home: {
      screen: Map,
      navigationOptions: ({ navigation }) => {
        return {
          headerShown: false,
        }
      }
    } 
  }  
)

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerShown: false,
        }
      }
    },  
    Register: {
        screen: RegisterScreen,
        navigationOptions: ({ navigation }) => {
          return {
            headerShown: false,
          }
        }
    },
  }
 
)

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)

// export default function App() {
//   return (

//      <Map />
   
//   );
// }


