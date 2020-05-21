import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Picker } from 'react-native';
import Modal, { SlideAnimation, ModalContent } from 'react-native-modals';
import { LinearGradient } from 'expo-linear-gradient';

function AlertButtonModal(props) {
 return (
  <View>

   <Modal 
     modalStyle={{borderRadius: 45, width: 420, height: 750, alignItems: 'center'}}
     rounded={true}
     visible={props.modalState}
     style={{ marginBottom: 20}}
     modalAnimation={new SlideAnimation({
      slideFrom: 'bottom',
     })}
     swipeDirection={['down']} // can be string or an array
     swipeThreshold={200} // default 100
     onSwipeOut={(event) => {
       props.handleAlertModal();
     }}
    >
     <ModalContent style={styles.modalContent} >
      <LinearGradient 
       colors={['#267871','#E9BCB7']} 
       style={styles.modalGradient}
      >
       <Text style={styles.notifyText}>Notify Your Peers!</Text>


       {/* FirstPicker */}
       <Text style={{alignItems: 'flex-start', fontSize: 16}}>Which garage should be flagged?</Text>
       <View
         style={styles.garagePickerContainer}
       >       
        <Picker
         selectedValue={props.flaggedGarage}  
         onValueChange={(itemValue, itemIndex) =>
           props.handleFlaggedGarageState(itemValue)
         }
        >
         <Picker.Item color='grey' label="Select Garage..." value="sel" />
         <Picker.Item label="Call Street" value="048cxUYjhDUoil67hCxw" />
         <Picker.Item label="Pensacola" value="TThwK31uKKKyR9SV2ETr" />
         <Picker.Item label="Spirit Way" value="ar5YcLOz7bfsrVphT9mu" />
         <Picker.Item label="St. Augustine" value="DdD3fHTgYvMWXNNjbfMJ" />
         <Picker.Item label="Traditions" value="sI1cvTktrRKLliy67UPg" />
         <Picker.Item label="Woodward" value="cGNveZjShc1tA3Wy6S5k" />
        </Picker>     
       </View>



         {/* OKButton */}
       <TouchableOpacity 
        style={styles.okButton} 
        onPress={() => {(props.updateAlertInFirebase(props.flaggedGarage))}}
       >
        <LinearGradient 
         colors={['#267871', '#136A8A']}
         start={[0.9, 0.1]}
         style={styles.okGradient}
        >
          <Text style={styles.okText} >OK!</Text>
        </LinearGradient>
       </TouchableOpacity>  


      </LinearGradient> 
     </ModalContent>
    </Modal>

  </View>
 )
}

export default AlertButtonModal


const styles = StyleSheet.create({
 modalContent: {
  width: 500, 
  height: 800, 
  alignItems: 'center',
  backgroundColor: '#267871'
 },
 modalGradient: {
  flex: 1,
  justifyContent: 'center',
  alignItems:'center',
  width: 420,
  height: 300,
  borderRadius: 45
 },
 okGradient: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 30,
  borderRadius: 25,
  elevation: 10
 },
 okButton: {
  width: 200,
  height: 75,
 },
 garagePickerContainer: {
  borderColor: 'black',
  borderWidth: 2,
  borderRadius: 20,
  width: 300,
  marginTop: 30         
 },
 notifyText: { 
  alignItems: 'center', 
  fontSize: 20, 
  fontWeight: 'bold', 
  marginBottom: 70
 },
 okText: {
  fontWeight: 'bold', 
  color: 'white', 
  fontSize: 17
 }

})