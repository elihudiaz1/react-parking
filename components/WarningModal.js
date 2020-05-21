import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Modal, { SlideAnimation, ModalContent, ModalButton } from 'react-native-modals';
import { LinearGradient } from 'expo-linear-gradient';


function WarningModal(props) {
 return (
  <View>
   <Modal
    modalStyle={{ borderRadius: 45, width: 320, height: 250, alignItems: 'center', elevation: 20}}
    visible={props.modalState}
    style={{ marginBottom: 10 }}
    modalAnimation={new SlideAnimation(
    {
      slideFrom: 'bottom',
    })}
   >
    <ModalContent style={styles.modalContent}>
      <Text style={styles.warningText}>Oh No!
      </Text>
      <Text style={{ alignItems: 'flex-start', fontSize: 16, textAlign: 'center'}}>
        {`Your garage has been flagged.\nConsider checking it out.`}
      </Text>
      <TouchableOpacity 
       style={styles.okButton} 
       onPress={() => { 
        props.handleWarningModal()         
       }}
      >
        <LinearGradient 
         colors={['#267871', '#136A8A']}
         start={[0.9, 0.1]}
         style={styles.okGradient}
        >
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 17 }} >OK!</Text>
        </LinearGradient>
       </TouchableOpacity>
    </ModalContent>
   </Modal>    
  </View>
 )
}

export default WarningModal

const styles = StyleSheet.create({
 modalContent: {
  width: 300, 
  height: 200, 
  alignItems: 'center', 
  justifyContent: 'center',
  marginTop: 40,
 },
 okButton: {
  width: 200,
  height: 75,
 },
 okGradient: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 30,
  borderRadius: 25,
  elevation: 10
 },
 warningText: { 
  alignItems: 'center', 
  fontSize: 20, 
  fontWeight: 'bold', 
  marginBottom: 20
 },
})