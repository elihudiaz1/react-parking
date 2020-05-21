import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from "../Fire";


export default class LoginScreen extends React.Component {
 state = {
  name: "",
  email: "",
  password: "",
  errorMessage: null
 }

 handleSignUp = () => {
  firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(userCredentials => {
   console.log(userCredentials);
   console.log(userCredentials.user.uid)
   firebase.firestore().collection('users').doc(userCredentials.user.uid).set({
    activated_garage: 'none',
    email: this.state.email,
  })
   return userCredentials.user.updateProfile({
    displayName: this.state.name
   });
  }).catch(error => this.setState({ errorMessage: error.message }));

 
 }


 render() {
  return (
   <View style={styles.container}>
    <LinearGradient start={[0.4, 0.9]}
                    end={[0.9, 0.3]}
                    colors={['#267871', '#d0bb6e', ]}
                    style={{ height: "100%", justifyContent: "center"}}
    >
      <Text style={styles.greeting}>{`Spot`}</Text>

      <View style={styles.errorMessage}>
      {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
      </View>

      <View style={styles.form}>
      <View>
        <Text style={styles.inputTitle}>Full Name</Text>
        <TextInput 
        style={styles.input, { borderBottomWidth: 0.75, }} 
        autoCapitalize="none"
        keyboardType={'email-address'}
        onChangeText={name => this.setState({ name })}
        value={this.state.name}
        />
      </View>



      <View style={{ marginTop: 35 }}>
        <Text style={styles.inputTitle}>Email Address</Text>
        <TextInput 
        style={styles.input, { borderBottomWidth: 0.75, }} 
        autoCapitalize="none"
        keyboardType={'email-address'}
        onChangeText={email => this.setState({ email })}
        value={this.state.email}
        />
      </View>

      <View style={{marginTop: 35}}>
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput 
        style={styles.input, { borderBottomWidth: 1, }} 
        secureTextEntry={true} 
        autoCapitalize="none"
        keyboardType={'default'}
        onChangeText={password => this.setState({ password })}
        value={this.state.password}
        />
      </View>
      
      <TouchableOpacity style={styles.signInButton} onPress={() => {this.handleSignUp()}}>
       <LinearGradient 
        colors={['#267871', '#136A8A']}
        start={[0.9, 0.1]}
        style={styles.signInGradient}
       >
        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 17 }} >Sign up</Text>
       </LinearGradient>
      </TouchableOpacity> 

      <TouchableOpacity 
        style={{ alignSelf: "center", marginTop: 32 }} 
        onPress={() => this.props.navigation.navigate("Login")}
      >
        <Text style={{ color: "#000e1c", fontSize: 13 }}>
        Already have an account?  <Text style={{ fontWeight: 'bold', color: '#d0bb6e' }}>Login</Text>
        </Text>
      </TouchableOpacity>

      </View>
    </LinearGradient>


   </View>
  );
 }
}


const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center'
 },
 greeting: {
  marginTop: 10,
  fontSize: 70,
  fontWeight: "500",
  textAlign: 'center'
 },
 errorMessage: {
  height: 72,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 30
 },
 error: {
  color: "#E9446A",
  fontSize: 13,
  fontWeight: "600",
  textAlign: "center"
 },
 form: {
  marginBottom: 48,
  marginHorizontal: 30
 },
 inputTitle: {
  color: "#000e1c",
  fontSize: 13,
  textTransform: 'uppercase',
  fontWeight: 'bold'

 },
 input: {
  borderBottomColor: '#8A8F9E',
  height: 40,
  fontSize: 17,
  color: "#267871"
 },
 button: {
  marginHorizontal: 30,
  marginTop: 40,
  backgroundColor: "#E9446A",
  borderRadius: 4,
  height: 52,
  alignItems: "center",
  justifyContent: "center"

 },
 signInButton: {
  width: 300,
  height: 85,
  left: 25
 },
 signInGradient: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 30,
  borderRadius: 10,
  elevation: 15,
 },
})