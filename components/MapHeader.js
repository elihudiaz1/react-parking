import React from 'react';
import { 
 Text, 
 StyleSheet, 
 View, 
 TouchableOpacity } from 'react-native';
 
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


function MapHeader(props) {
 return (
  <View style={styles.header}>
   <LinearGradient 
      colors={['#267871', '#136A8A']}
      start={[0.9, 0.1]} 
      style={styles.headerGradient}
     >
       <Text style={styles.headerTitle}>Spot</Text>
       <TouchableOpacity onPress={() => props.handleSignOut()}>
        <View style={styles.signOutButton}>
          <FontAwesome name='user-circle' size={32} style={styles.icon} />
        </View>
       </TouchableOpacity>
     </LinearGradient>
  </View>
 )
}

export default MapHeader

const styles = StyleSheet.create({
 header: {
  flex: 0.5,
  justifyContent: 'center',
  width: '100%',
 },
 headerGradient: {
  flex: 1,
  flexDirection: 'row',
  alignItems:'center',
  justifyContent: 'space-between', 
 },
 headerTitle: {
   flex: 1,
   fontSize: 35,
   top: 10,
   left: 20,
 },
 signOutButton: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   width: 100,
   marginTop: 40,
   borderRadius: 20,
 },
 icon: {
  left: 20,
  bottom: 8,
 }
})