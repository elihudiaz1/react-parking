import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

function ParkingButton(props) {
 return (
  <View style={styles.parkButtonContainer}>
    <TouchableOpacity 
     style={styles.parkButton}
     onPress={() => props.handleParkModal()}
    >
     <LinearGradient 
      colors={['#FFFFFF','#D7E1EC']} 
      style={styles.parkGradient}
     >
       <Entypo name='location-pin' size={42} style={{ top: 1 }} />
     </LinearGradient>
    </TouchableOpacity>
   </View>
 )
}

export default ParkingButton

const styles = StyleSheet.create({
 parkButtonContainer: {
  flex: 1,
  alignItems:'center',
  justifyContent:'center', 
  position: 'absolute',
 },
 parkButton: {
  width: 75,
  height: 75,
  left: 155,
  top: 170
 },
 parkGradient: {
  flex: 1,
  justifyContent: 'center',
  alignItems:'center',
  borderRadius: 50,
  elevation: 5
 }
})
