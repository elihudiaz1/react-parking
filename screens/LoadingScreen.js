import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as firebase from "firebase";

import { LinearGradient } from 'expo-linear-gradient';
import { withOrientation } from 'react-navigation';


export default class LoadingScreen extends React.Component {

 componentDidMount() {
  firebase.auth().onAuthStateChanged(user => {
   this.props.navigation.navigate(user ? "App" : "Auth");
  });
 }

 render() { 
  return (
   <View style={styles.loadingScreen}>
     <LinearGradient 
      colors={['#267871', '#136A8A']}
      start={[0.9, 0.1]} 
      style={styles.pageGradient}
     >
      <Text style={styles.text}>Loading...</Text>
      <ActivityIndicator color='white' size="large"></ActivityIndicator>
       
     </LinearGradient>
   </View>
  );
 }
}


const styles = StyleSheet.create({
 loadingScreen: {
  flex: 1,
  flexDirection: 'column',
 },
 pageGradient: {
  flex: 1,
  flexDirection: 'column',
  alignItems:'center',
  justifyContent: 'center', 
 },
 text:{
  fontSize: 20,
  color: 'white',
 }
})