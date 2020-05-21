import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


function AlertButton(props) {
 return (
  <View style={styles.alertButtonContainer}>
    <TouchableOpacity 
     style={styles.alertButton}
     onPress={() => props.handleAlertModal()}
    >
     <LinearGradient 
      colors={['#96bab5','#267871', '#136A8A', '#136A8A',  ]}
      start={[0.99, 0.1]}
      style={styles.alertGradient}
     >
       <Feather name='alert-circle' size={45} style={{ top: 1, color: '#e3e5e4' }}/> 
     </LinearGradient>
    </TouchableOpacity>
   </View>
 )
}

export default AlertButton

const styles = StyleSheet.create({
 alertButtonContainer: {
  flex: 1,
  alignItems:'center',
  justifyContent:'center', 
  position: 'absolute',
 },
 alertButton: {
  width: 75,
  height: 75,
  left: 155,
  top: 260
 },
 alertGradient: {
  flex: 1,
  justifyContent: 'center',
  alignItems:'center',
  borderRadius: 50,
  elevation: 10
 },
})