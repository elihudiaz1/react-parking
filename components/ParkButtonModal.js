import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Picker } from 'react-native';
import Modal, { SlideAnimation, ModalContent } from 'react-native-modals';
import { LinearGradient } from 'expo-linear-gradient';


function ParkButtonModal(props) {

 return (
  <View>
   <Modal 
     modalStyle={{borderRadius: 45, width: 420, height: 850, alignItems: 'center'}}
     rounded={true}
     visible={props.modalState}
     style={{ marginBottom: 20}}
     modalAnimation={new SlideAnimation({
      slideFrom: 'bottom',
     })}
     swipeDirection={['down']} 
     swipeThreshold={200} 
     onSwipeOut={(event) => {
       props.handleParkModal();
     }}
    >
     <ModalContent style={styles.modalContent} > 
      <LinearGradient 
       colors={['#FFFFFF','#D7E1EC']} 
       style={styles.modalGradient}
      >  
       <Text style={styles.markYourSpotText}>Mark Your Spot!</Text>

       {/* First Picker */}
       <Text style={styles.whichGarageText}>Which garage are you parked in?</Text>
       <View style={styles.garagePickerContainer}>        
         <Picker
          selectedValue={props.activeGarage}  
          onValueChange={(itemValue, itemIndex) =>
            props.handleActiveGarageState(itemValue)
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



       {/* SecondPicker */}
       <Text style={{alignItems: 'flex-start', fontSize: 16}}>How long do you plan on parking there for?
       </Text>
       <View style={styles.timePickerContainer}>
         <Picker
          selectedValue={props.parkedTime}  
          onValueChange={(itemValue, itemIndex) =>
            props.handleParkedTimeState(itemValue)
          }
         >
          <Picker.Item color='grey' label="Time limit..." value="sel" />
          <Picker.Item label="1 hour" value="3600" />
          <Picker.Item label="2 hours" value="7200" />
          <Picker.Item label="3 hours" value="14400" />
          <Picker.Item label="4 hours" value="21600" />
          <Picker.Item label="5 hours" value="28800" />
          <Picker.Item label="6 hours" value="36000" />
         </Picker>
       </View>

       

       {/* OKButton */}
       <TouchableOpacity 
        style={styles.okButton} 
        onPress={() => { 
          props.handleVerifyModal()
          props.updateCurrentUser()
          props.handleParkModal() 
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

      </LinearGradient>
     </ModalContent>
    </Modal>
  </View>
 )
}

export default ParkButtonModal


const styles = StyleSheet.create({
 modalContent: {
  width: 400, 
  height: 900, 
  alignItems: 'center', 
  marginTop: 40, 
  backgroundColor: 'white'
 },
 modalGradient: {
  flex: 1,
  justifyContent: 'center',
  alignItems:'center',
  width: 420,
  height: 500,
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
  marginTop: 20,
  marginBottom: 30  
},
timePickerContainer: {
  borderColor: 'black',
  borderWidth: 2,
  borderRadius: 20,
  width: 200,
  marginTop: 20 
},
markYourSpotText: { 
  alignItems: 'center', 
  fontSize: 20, 
  fontWeight: 'bold', 
  marginBottom: 70
 },
 whichGarageText: {
  alignItems: 'flex-start', 
  fontSize: 16
 },
})