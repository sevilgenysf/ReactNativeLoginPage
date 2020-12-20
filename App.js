import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.stretch} source={require('./src/img/portre.jpg')} />
      <Text style={styles.title}>Yusuf SEVİLGEN</Text>
      <TextInput
        style={styles.topInput}
        placeholder="Users Name"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.bottomInput}
        placeholder="Password"
        placeholderTextColor="white"
        secureTextEntry={true}
      />
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <TouchableOpacity
        onPress={() => {
          alert('MERHABA');
        }}
        style={styles.buttonBottom}>
        <Text style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <Text style={styles.signup}>Signup</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#05405b',
  },
  title: {
    padding: 20,
    marginTop: 50,
    width: 350,
    height: 80,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: '#05405b',
    color: '#f85c5e',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  topInput: {
    width: 350,
    height: 40,
    borderColor: 'gray',
    textAlign: 'center',
    marginTop: 60,
    borderColor: 'white',
    backgroundColor: '#05405b',
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#475980',
    color: 'white',
  },
  bottomInput: {
    width: 350,
    height: 40,
    textAlign: 'center',
    marginTop: 20,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#475980',
    color: 'white',
  },
  welCome: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginTop: 100,
  },
  buttonBottom: {
    fontSize: 32,
    margin: 10,
    borderRadius: 10,
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f85c5e',
  },
  forgotPassword: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
  signup: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  stretch: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 300,
    width: 200,
    height: 200,
  },
});

export default App;
