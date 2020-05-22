import React from 'react';
import { AppState, Text, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from "../Fire";
import MapHeader from '../components/MapHeader';
import ParkingButton from '../components/ParkingButton';
import AlertButton from '../components/AlertButton';
import ParkButtonModal from '../components/ParkButtonModal';
import AlertButtonModal from '../components/AlertButtonModal';
import VerifyParkModal from '../components/VerifyParkModal';
import WarningModal from '../components/WarningModal';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const { Marker, Callout } = MapView;


export default class Map extends React.Component {
 constructor(props) {
  super(props) 
  
  this.state = {
    email: "",
    displayName: "",
    loading: true,
    garages: [],
    appState: AppState.currentState,

    //currentUser alterations
    flaggedGarage: 'none',
    activeGarage: 'none',
    parkedTime: null,
    timeOfStart: null,
  

    //Modals
    alertModalOpen: false,
    parkModalOpen: false,
    verifyParkModalOpen: false,
    warningModalOpen: false,
  }

  //  Binding functions to be able to pass to children components
  this.parkModalState = this.parkModalState.bind(this)
  this.alertModalState = this.alertModalState.bind(this)
  this.verifyParkModalState = this.verifyParkModalState.bind(this) 
  this.warningModalState = this.warningModalState.bind(this)  
  this.parkedTimeState = this.parkedTimeState.bind(this)
  this.activeGarageState = this.activeGarageState.bind(this)
  this.updateAlert = this.updateAlert.bind(this)
  this.flaggedGarageState = this.flaggedGarageState.bind(this)
  this.updateCurrentUser = this.updateCurrentUser.bind(this)
 }
 
// APP LISTENERS
 componentDidMount() {

  const { email, displayName } = firebase.auth().currentUser;

  this.updateStateArray();
  this.setState({ email, displayName });


  firebase
  .firestore()
  .collection('users')
  .get()
  .then((snapshot) => {
    snapshot.docs.map(doc => {
      if(doc.id === firebase.auth().currentUser.uid) {
        this.setState({
           activeGarage: doc.data().activated_garage,
           parkedTime: doc.data().timer,
           timeOfStart: doc.data().time_of_start.seconds
        })
        if(this.state.activeGarage !== 'none') {
          this.checkIfTimerRanOut()
        }
      }
    })   
  })



  AppState.addEventListener('change', this._handleAppStateChange);
 }

 componentWillUnmount() {
  AppState.removeEventListener('change', this._handleAppStateChange);
 }

 _handleAppStateChange = (nextAppState) => {

    this.setState({ appState: nextAppState });

    if (nextAppState === 'background') {
      
      console.log("App is in Background Mode.")
    }

    if (nextAppState === 'active') {

      if(this.state.activeGarage !== 'none') {
        this.checkIfTimerRanOut()
      }
   
      console.log("App is in Foreground Mode.")
    }

    if (nextAppState === 'inactive') {
      console.log("App is in inactive Mode.")
    }
 }

 signOutUser() {
  firebase.auth().signOut();
 }

 checkIfTimerRanOut() {
  if(this.state.timeOfStart !== null) {
    const currentTime = firebase.firestore.Timestamp.fromDate(new Date())
    let timePassed = currentTime.seconds - this.state.timeOfStart
  

    if(timePassed > this.state.parkedTime) {
      this.resetActiveGarage()
    } else {
      this.checkIfAlerted()
    }
  }

 } 


 checkIfAlerted() {
  let lastAlerted = 0
  this.updateStateArray();
  this.state.garages.map(garage => {
    if(garage.id === this.state.activeGarage) {
      lastAlerted = garage.last_alert.seconds
    }   
  })
  if(lastAlerted > this.state.timeOfStart ) {
    this.warningModalState()
  }
 }


 updateAlert(warning) {
  firebase.firestore().collection('flagged').doc(warning).update({
    last_alert: firebase.firestore.Timestamp.fromDate(new Date())
  })
  this.updateStateArray()
  this.setState({ alertModalOpen: false })
 }

 updateStateArray() {
  let temp = []
  firebase
  .firestore()
  .collection('flagged')
  .get() 
  .then((snapshot) => {
  snapshot.docs.map(doc => {
    temp.push({
      id: doc.id,
      garage: doc.data().garage,
      last_alert: doc.data().last_alert,
      coordinates: {
        latitude: doc.data().coordinates.latitude,
        longitude: doc.data().coordinates.longitude
      }
    })
  })

  this.setState({ garages: temp, loading: false });

  
 });
 }

 updateCurrentUser() {

  firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).update({
    activated_garage: this.state.activeGarage,
    time_of_start: firebase.firestore.Timestamp.fromDate(new Date()),
    timer: parseInt(this.state.parkedTime)
  })
 }

 resetActiveGarage() {

  this.setState({ activeGarage: 'none'})
   
  firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).update({
    activated_garage: 'none'
  })
 }



//  STATE MANIPULATION FUNCTIONS
 parkModalState() {
  this.state.parkModalOpen ?
  this.setState({ parkModalOpen: false }) :
  this.setState({ parkModalOpen: true })
 }

 alertModalState() {
  this.state.alertModalOpen ?
  this.setState({ alertModalOpen: false }) :
  this.setState({ alertModalOpen: true })
 }

 verifyParkModalState() {
   this.state.verifyParkModalOpen ?
   this.setState({ verifyParkModalOpen: false }) :
   this.setState({ verifyParkModalOpen: true })
 }

 warningModalState() {
   console.log(`Entering Warning Modal function`)
   console.log(`State of warningModal: ${this.state.warningModalOpen}`)
  this.state.warningModalOpen ?
  this.setState({ warningModalOpen: false }) :
  this.setState({ warningModalOpen: true })

 }

 parkedTimeState(itemValue) {
   this.setState({ parkedTime: itemValue })
 }

 activeGarageState(itemValue) {
   this.setState({ activeGarage: itemValue })
 }

 flaggedGarageState(itemValue) {
   this.setState({ flaggedGarage: itemValue })
}
 
 render() {
  return (
   <View style={styles.container}>

    <VerifyParkModal 
      modalState={this.state.verifyParkModalOpen}
      handleVerifyModal={this.verifyParkModalState}
      handleParkModal={this.parkModalState}
    />

    <WarningModal
      modalState={this.state.warningModalOpen}
      handleWarningModal={this.warningModalState}
    />
    
    <ParkButtonModal 
      modalState={this.state.parkModalOpen}
      activeGarage={this.state.activeGarage}
      parkedTime={this.state.parkedTime}
      handleActiveGarageState={this.activeGarageState}
      handleParkedTimeState={this.parkedTimeState} 
      handleParkModal={this.parkModalState}
      handleVerifyModal={this.verifyParkModalState}
      updateCurrentUser={this.updateCurrentUser}
    />

    <AlertButtonModal
      modalState={this.state.alertModalOpen}
      flaggedGarage={this.state.flaggedGarage}
      handleAlertModal={this.alertModalState}
      handleFlaggedGarageState={this.flaggedGarageState}
      updateAlertInFirebase={this.updateAlert}
    />
    
    <MapHeader
      handleSignOut={this.signOutUser}
    />

    <MapView
     initialRegion={{
      latitude: 30.4419,
      longitude: -84.2985,
      latitudeDelta: 0.0240,
      longitudeDelta: 0.0240,
     }}
     style={styles.map}
     showUserLocation={true}
     showCompass={true}
    >

     {this.state.loading ? console.log("LOADING") : this.state.garages.map(garage => (
  
      <Marker
       key={`marker-${garage.id}`}
       coordinate={garage.coordinates} 
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: 50, backgroundColor: 'rgba(0,0,0,0.05)', shadow: 30}}>
          <MaterialCommunityIcons name='garage' size={38} color={'#267871'} />
        </View>
        <Callout tooltip={true}>
         <LinearGradient start={[0, 0.5]}
                         end={[1, 0.5]}
                         colors={['#9c655e', '#317589', '#267871']}
                         style={{borderRadius: 24}}>
           <View style={styles.marker}>
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{garage.garage.toUpperCase()}:</Text>

            {firebase.firestore.Timestamp.fromDate(new Date()).seconds - garage.last_alert.seconds > 3600 ? 
            <Text style={{ fontSize: 10 }}>Clear skies</Text> :
            <Text style={{ fontSize: 10 }}>Flagged</Text>}
           </View>
         </LinearGradient>
        </Callout>
      </Marker> 
     ))}
    </MapView>



    <ParkingButton
      handleParkModal={this.parkModalState}
    />

    <AlertButton
      handleAlertModal={this.alertModalState}
    />

   </View>
  )
 }
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
 },
 map: {
  flex: 3,
  height: 100,
  width: 420,
 },
 marker: {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  borderRadius: 24,
  padding: 12,
  margin: 3,
  width: 130,
  height: 50,
 },

});