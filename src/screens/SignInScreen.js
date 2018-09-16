import React, { Component } from 'react';
import { View, Button, Text, TextInput, Image } from 'react-native';

import firebase from 'react-native-firebase';

const successImageUri = 'https://cdn.pixabay.com/photo/2015/06/09/16/12/icon-803718_1280.png';

export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+44',
      confirmResult: null,
    };
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user.toJSON() });
      } else {
        // User has been signed out, reset the state
        this.setState({
          user: null,
          message: '',
          codeInput: '',
          phoneNumber: '+41',
          confirmResult: null,
        });
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  signIn = () => {
    const { phoneNumber } = this.state;

 /*   firebase.auth()
      .verifyPhoneNumber(phoneNumber)
      .on('state_changed', (phoneAuthSnapshot) => {
        alert(phoneNumber + JSON.stringify(phoneAuthSnapshot))
      }, (error) => {
        alert(JSON.stringify(error))
      });
*/
    
    this.setState({ message: 'Sending code ...' });

    firebase.auth().signInWithPhoneNumber(phoneNumber)
      .then(confirmResult => this.setState({ confirmResult, message: 'Code has been sent!' }))
      .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));

  };

  confirmCode = () => {
    const { codeInput, confirmResult } = this.state;

    if (confirmResult && codeInput.length) {
      confirmResult.confirm(codeInput)
        .then((user) => {
          this.setState({ message: 'Code Confirmed!' });
        })
        .catch(error => this.setState({ message: `Code Confirm Error: ${error.message}` }));
    }
  };

  signOut = () => {
    firebase.auth().signOut();
  }

  renderPhoneNumberInput() {
    const { phoneNumber } = this.state;

    return (
      <View style={{ padding: 25 }}>
        <Text>Enter phone number:</Text>
        <TextInput
          autoFocus
          style={{ height: 40, marginTop: 15, marginBottom: 15 }}
          onChangeText={value => this.setState({ phoneNumber: value })}
          placeholder={'Phone number ... '}
          value={phoneNumber}
        />
        <Button title="Sign In" color="green" onPress={this.signIn} />
      </View>
    );
  }

  renderMessage() {
    const { message } = this.state;

    if (!message.length) return null;

    return (
      <Text style={{ padding: 5, backgroundColor: '#000', color: '#fff' }}>{message}</Text>
    );
  }

  renderVerificationCodeInput() {
    const { codeInput } = this.state;

    return (
      <View style={{ marginTop: 25, padding: 25 }}>
        <Text>Enter verification code below:</Text>
        <TextInput
          autoFocus
          style={{ height: 40, marginTop: 15, marginBottom: 15 }}
          onChangeText={value => this.setState({ codeInput: value })}
          placeholder={'Code ... '}
          value={codeInput}
        />
        <Button title="Confirm Code" color="#841584" onPress={this.confirmCode} />
      </View>
    );
  }

  render() {
    const { user, confirmResult } = this.state;
    return (
      <View style={{ flex: 1 }}>

        {!user && !confirmResult && this.renderPhoneNumberInput()}

        {this.renderMessage()}

        {!user && confirmResult && this.renderVerificationCodeInput()}

        {user && (
          <View
            style={{
              padding: 15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#77dd77',
              flex: 1,
            }}
          >
            <Image source={{ uri: successImageUri }} style={{ width: 100, height: 100, marginBottom: 25 }} />
            <Text style={{ fontSize: 25 }}>Signed In!</Text>
            <Text>{JSON.stringify(user)}</Text>
            <Button title="Sign Out" color="red" onPress={this.signOut} />
          </View>
        )}
      </View>
    );
  }
}
/*
import React, { Component } from 'react'
import { View, Text, Image, StatusBar } from 'react-native'
import { Button, Item, Input, Label } from 'native-base'

class SignInScreen extends Component {
    state = {}
    static navigationOptions = {
        header: null
    }
    
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white'}}>
                <View
                    style={{
                        flex: 0.4
                    }}>
                    <Image source={require('../assets/logo.png')} style={{ height: null, width: null, flex: 1, margin: 40 }} resizeMode="contain" />
                </View>

                <View style={{ flex: 0.6, alignItems: 'center' }} >
                    <Text style={{ fontSize: 18, color: 'orange', padding: 5 }}>Sign in with mobile number</Text>
                    <Item floatingLabel>
                        <Label style={{ color: 'gray' }}>Mobile Number</Label>
                        <Input
                            keyboardType="numeric"
                            style={{ fontSize: 20, padding: 10, color: 'orange', margin: 5 }}
                            underlineColorAndroid='transparent' />
                    </Item>
                    <Item floatingLabel>
                        <Label style={{ color: 'gray' }}>Password</Label>
                        <Input
                            style={{ fontSize: 20, padding: 10, color: 'orange', margin: 5 }}
                            underlineColorAndroid='transparent' />
                    </Item>
                    <Button
                        onPress={() => { this.props.navigation.navigate('App') }}
                        style={{
                            backgroundColor: 'orange',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            width: 200,
                            margin: 40,
                        }} >
                        <Text style={{ fontWeight: '700', color: 'white' }}>Sign In</Text>
                    </Button>
                    <Text style={{ color: 'gray', alignItems: 'flex-end', margin: 20 }}>don't you have an account?  <Text style={{ color: 'orange' }}>Sign Up</Text></Text>
                </View>
            </View>
        );
    }
}

export default SignInScreen;*/