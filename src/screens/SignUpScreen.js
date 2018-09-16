import React, { Component } from 'react'
import { View, Text, Image,StatusBar } from 'react-native'
import { Button, Item, Input, Label } from 'native-base'

class SignUpScreen extends Component {
    state = {}
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white',marginTop: StatusBar.currentHeight  }}>
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
                        onPress={() => { this.props.navigation.navigate('tbaNavigator') }}
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

export default SignUpScreen;