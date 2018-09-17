import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Button, Item, Input, Label } from 'native-base'

const SignUpScreen = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 18, color: 'orange', padding: 20, alignSelf: 'center' }}>Welcome to Argeleh ! </Text>

            <View style={{ padding: 10 }}>
                <Item floatingLabel >
                    <Label style={{ color: 'gray', margin: 10 }}>First name</Label>
                    <Input
                        keyboardType="numeric"
                        style={{ fontSize: 20, padding: 10, color: 'orange', margin: 10 }}
                        underlineColorAndroid='transparent'
                        onChangeText={props.onFirstNameChange}
                    />
                </Item>
                <Item floatingLabel >
                    <Label style={{ color: 'gray', margin: 10 }}>Last Name</Label>
                    <Input
                        keyboardType="numeric"
                        style={{ fontSize: 20, padding: 10, color: 'orange', margin: 10 }}
                        underlineColorAndroid='transparent'
                        onChangeText={props.onLastNameChnage} />
                </Item>
                <Item floatingLabel >
                    <Label style={{ color: 'gray', margin: 10 }}>Email</Label>
                    <Input
                        keyboardType="numeric"
                        style={{ fontSize: 20, padding: 10, color: 'orange', margin: 10 }}
                        underlineColorAndroid='transparent'
                        onChangeText={props.onEmailChange} />
                </Item>
            </View>
            <Button
                onPress={props.onUpdateProfile}
                style={{
                    backgroundColor: 'orange',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    width: 200,
                    margin: 40,
                }}>
                <Text style={{ fontWeight: '700', color: 'white' }}>Sign up</Text>
            </Button>
        </View>
    )
}

SignUpScreen.propTypes = {
    onFirstNameChange: PropTypes.func,
    onLastNameChnage: PropTypes.func,
    onEmailChange: PropTypes.func,
    onUpdateProfile: PropTypes.func
};

export default SignUpScreen;