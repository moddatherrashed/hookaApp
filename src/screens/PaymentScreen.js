import React, { Component } from 'react'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input"
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'

class PaymentScreen extends Component {
    state = {}
    _onChange(form) {
    }

    static navigationOptions = {
        headerTitle : 'Payment',
        headerTintColor : 'orange'
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 0.1, flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flex: 0.5, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', margin: 5, flexDirection: 'row' }}>
                        <Icon name='cash' style={{ color: 'white', padding: 4 }} />
                        <Text style={{ color: 'white' }}>PayPal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.5, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', margin: 5, flexDirection: 'row' }}>
                        <Icon name='card' style={{ color: 'white', padding: 4 }} />
                        <Text style={{ color: 'white' }}>Credit Card</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.9 }}>
                    <CreditCardInput
                        cardScale={0.95}
                        labelStyle={{ color: 'orange' }}
                        cardImageFront={require("../assets/cardfront.png")}
                        cardImageBack={require("../assets/cardback.png")}
                        onChange={this._onChange()} />
                </View>
            </View>
        );
    }
}

export default PaymentScreen;