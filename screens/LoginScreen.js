import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../Fire';
import { LinearGradient } from 'expo-linear-gradient';


export default class LoginScreen extends React.Component {
 state = {
  email: "",
  password: "",
  errorMessage: null
 }

 

 handleLogin = () => {
  const { email, password } = this.state

  firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({ errorMessage: error.message }))
 }

 render() {
  return (
   <View style={styles.container}>
    <LinearGradient start={[0.9, 0.9]}
                    end={[0.6, 0.01]}
                    colors={['#d0bb6e', '#267871']}
                    style={{ height: "100%", justifyContent: "center"}}
    >
    <Text style={styles.greeting}>{`Spot`}</Text>

    <View style={styles.errorMessage}>
     {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
    </View>

    <View style={styles.form}>
     <View>
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
     
     <TouchableOpacity style={styles.signInButton} onPress={() => {this.handleLogin()}}>
      <LinearGradient 
       colors={['#267871', '#136A8A']}
       start={[0.9, 0.1]}
       style={styles.signInGradient}
      >
        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 17 }} >Sign in</Text>
      </LinearGradient>
     </TouchableOpacity> 

     <TouchableOpacity 
      style={{ alignSelf: "center", marginTop: 32 }} 
      onPress={() => this.props.navigation.navigate("Register")}
     >
      <Text style={{ color: "#414959", fontSize: 13 }}>
       New to Spot? <Text style={{ fontWeight: "700", color: "#267871" }}>Sign up</Text>
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
  justifyContent: 'center',
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
  fontSize: 35,
  color: "#267871"
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
  elevation: 10,
 },
})