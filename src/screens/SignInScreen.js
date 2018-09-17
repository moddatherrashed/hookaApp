/*import React, { Component } from 'react';
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
}*/

import React, { Component } from 'react'
import { View, Text, Image, StatusBar, TextInput, ActivityIndicator } from 'react-native'
import { Button, Item, Input, Label } from 'native-base'
import firebase from 'react-native-firebase';
import ApiController from '../utils/ApiController'
import SignUpScreen from './SignUpScreen'
class SignInScreen extends Component {
  /**
   * 
   *  signInState (0=SignIn, 1=VerifuCodeSent, 2=SignUp)
   */
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+962',
      confirmResult: null,
      signInState: 0,
      isLoading: false,
      firstName: '',
      lastName: '',
      email: ''
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
          phoneNumber: '+962',
          confirmResult: null,
          signInState: 0,
          isLoading: false
        });
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  signIn = () => {
    const { phoneNumber } = this.state;
    this.setState({ isLoading: true });
    firebase.auth()
      .verifyPhoneNumber(phoneNumber)
      .on('state_changed', (phoneAuthSnapshot) => {
        //alert(phoneNumber + JSON.stringify(phoneAuthSnapshot))
      }, (error) => {
        alert(JSON.stringify(error))
      });
    this.setState({ message: 'Sending code ...' });

    firebase.auth().signInWithPhoneNumber(phoneNumber)
      .then(confirmResult => {

        this.setState({ signInState: 1, confirmResult: confirmResult, isLoading: false })
      })
      .catch(error => {
        this.setState({ isLoading: false });
        this.setState({ message: `Sign In With Phone Number Error: ${error.message}` })
      });

  };

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
        <Button
          onPress={() => {
            this.confirmCode()
          }}
          style={{
            backgroundColor: 'orange',
            justifyContent: 'center',
            alignSelf: 'center',
            width: 200,
            margin: 40,
          }}>
          <Text style={{ fontWeight: '700', color: 'white' }}>Verfiy</Text>
        </Button>
      </View>
    );
  }
  confirmCode = () => {
    const { codeInput, confirmResult } = this.state;

    if (confirmResult && codeInput.length) {
      this.setState({ isLoading: true });
      confirmResult.confirm(codeInput)
        .then(async (user) => {
          this.setState({ message: 'Code Confirmed!' });
          let apiRes = await ApiController.authentication(user.uid, user.phoneNumber)
          this.setState({ isLoading: false });
          console.log(JSON.stringify(apiRes));
          if (apiRes.status === 1) {
            ApiController.setAccessToken(apiRes.accessToken);
            ApiController.setUser(apiRes.user);
            if (apiRes.is_new) {
              //open sign up
              this.setState({ signInState: 2 })
            } else {
              ApiController.setUserLogged(true);
              // open main page
              this.props.navigation.navigate('App')
            }
          } else {
            alert(apiRes.message);
          }
        })
        .catch(error => {
          alert(error);
        });
    } else {
      alert("a7a");
    }
  };

  signOut = () => {
    firebase.auth().signOut();
  }

  renderSignInScreen() {
    const { phoneNumber } = this.state
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.4
          }}>
          <Image source={require('../assets/logo.png')}
            style={{ height: null, width: null, flex: 1, margin: 40 }} resizeMode="contain" />
        </View>

        <View style={{ flex: 0.6, alignItems: 'center', padding: 10 }}>
          <Text style={{ fontSize: 18, color: 'orange', padding: 5 }}>Sign in with mobile number</Text>
          <Item floatingLabel >
            <Label style={{ color: 'gray', margin: 10 }}>Mobile Number</Label>
            <Input
              keyboardType="numeric"
              style={{ fontSize: 20, padding: 10, color: 'orange', margin: 10 }}
              underlineColorAndroid='transparent'
              onChangeText={(phoneNumber) => {
                this.setState({
                  phoneNumber
                })
              }}
              value={phoneNumber} />
          </Item>
          <Button
            onPress={() => {
              this.signIn()
            }}
            style={{
              backgroundColor: 'orange',
              justifyContent: 'center',
              alignSelf: 'center',
              width: 200,
              margin: 40,
            }}>
            <Text style={{ fontWeight: '700', color: 'white' }}>Sign In</Text>
          </Button>
          <Text style={{ color: 'gray', alignItems: 'flex-end', margin: 20 }}>don't you have an account? <Text
            style={{ color: 'orange' }}>Sign Up</Text></Text>
        </View>
      </View>
    )
  }

  static navigationOptions = {
    header: null
  }


  renderProberScreen() {
    const { signInState } = this.state;
    switch (signInState) {
      case 0:
        return this.renderSignInScreen();
        break;
      case 1:
        return this.renderVerificationCodeInput();
        break;
      case 2:
        return <SignUpScreen onLastNameChanged={(lastName) => {
          this.setState({ lastName: lastName });
        }} onFirstNameChange={(firstName) => {
          this.setState({ firstName: firstName });
        }} onEmailChange={(email) => {
          this.setState({ email: email });
        }} onUpdateProfile={() => { this.updateProfile() }} />
        break;
    }
  }

  updateProfile() {
    const { firstName, lastName, email } = this.state
    let updateProfile = ApiController.updateProfile(firstName, lastName, email)
    if (updateProfile.status == 1) {
      this.props.navigation.navigate('App')
    } else {
      alert(updateProfile.status)
      alert('something went worng')
    }
  }

  render() {
    const { isLoading } = this.state
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {isLoading ?
          (<ActivityIndicator hidesWhenStopped={true} color='orange' size='large' style={{ position: "absolute", zIndex: 1000, left: 0, right: 0, top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }} />)
          : null}
        {this.renderProberScreen()}
      </View >
    );
  }
}

export default SignInScreen;