import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'


class CartScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shishaList: [
                {
                    id: '1',
                    image: 'https://ak1.picdn.net/shutterstock/videos/1009370801/thumb/1.jpg?i10c=img.resize(height:160)',
                    name: 'Fresh Hooka',
                    price: '2',
                    quantity: 1
                },
                {
                    id: '2',
                    image: 'https://evictionfreesf.org/wp-content/uploads/2018/04/Mile-High-Pipe-Tobacco_July_Which-Hookah-Coals-Are-Best_Image-1.jpg',
                    name: 'Regular Hooka',
                    price: '2',
                    quantity: 1
                },
                {
                    id: '3',
                    image: 'https://ak1.picdn.net/shutterstock/videos/1009370801/thumb/1.jpg?i10c=img.resize(height:160)',
                    name: 'Fresh Head',
                    price: '2',
                    quantity: 1
                },
                {
                    id: '4',
                    image: 'https://evictionfreesf.org/wp-content/uploads/2018/04/Mile-High-Pipe-Tobacco_July_Which-Hookah-Coals-Are-Best_Image-1.jpg',
                    name: 'Regular Head',
                    price: '2',
                    quantity: 1
                }
            ]
        }
    }

    onIncPressed(i) {
        let CopiedState = [...this.state.shishaList]
        let newQuantity = ++this.state.shishaList[i].quantity
        CopiedState[i].quantity = newQuantity
        this.setState({
            shishaList: CopiedState
        })
    }
    onDecPressed(i) {
        if (this.state.shishaList[i].quantity !== 1) {
            let CopiedState = [...this.state.shishaList]
            let newQuantity = --this.state.shishaList[i].quantity
            CopiedState[i].quantity = newQuantity
            this.setState({
                shishaList: CopiedState
            })
        }
    }
    subTotalCounter() {
        let total = 0
        if (this.state.shishaList !== '') {
            this.state.shishaList.map((obj) => {
                total += (obj.price) * obj.quantity
            })
        }
        return total

    }


    static navigationOptions = {
        title: 'Cart',
        headerStyle: { backgroundColor: 'orange' },
        headerTitleStyle: { color: 'white' }
    }

    render() {
        return (

            <View style={{ flex: 2}}>
                <ScrollView style={{ flex: 1.8 }}>
                    <FlatList
                        keyExtractor={item => item.id}
                        contentContainerStyle={{
                            flex: 1.7
                        }}
                        data={this.state.shishaList}
                        renderItem={({ item, index }) =>
                            <View style={{
                                flexDirection: 'row',
                                backgroundColor: '#FFFFFF',
                                elevation: 15,
                                width: '100%',
                                borderBottomWidth: 0.5,
                                borderBottomColor: 'gray'
                            }}>
                                <View style={{ flexDirection: 'row', flex: 6 }}>
                                    <View style={{ flex: 2, alignItems: 'center' }}>
                                        <Image
                                            style={{ height: 100, width: 100, margin: 5 }}
                                            source={{ uri: item.image }}
                                            resizeMode='cover'
                                        />
                                    </View>

                                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start' }}>
                                        <Text style={{ color: 'black' }}>{item.name}</Text>
                                        <Text style={{ fontWeight: 'bold', color: 'orange' }}>{item.price}$</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    this.onDecPressed(index)
                                                }}>
                                                <Icon name='ios-remove-circle' style={{ color: 'orange' }} />
                                            </TouchableOpacity>
                                            <Text style={{ padding: 10 }}>{item.quantity}</Text>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    this.onIncPressed(index)
                                                }}>
                                                <Icon name='ios-add-circle' style={{ color: 'orange' }} />
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                    <View style={{ flex: 2, alignItems: 'flex-end' }}>

                                        <TouchableOpacity style={
                                            {
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                margin: 5
                                            }}
                                            onPress={() => {
                                                //here is not done
                                                let restOfOrders = this.state.shishaList
                                                restOfOrders.splice(index, 1)
                                                this.setState({
                                                    shishaList: restOfOrders
                                                })
                                                //AsyncStorage.setItem('shishaList', JSON.stringify(this.state.shishaList))

                                            }}>
                                            <Icon name='ios-close-outline' style={{ color: 'orange' }} />
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </View>
                        }
                    />
                </ScrollView>
                <View style={
                    {
                        backgroundColor: 'orange',
                        borderColor: 'orange',
                        borderWidth: 1,
                        flex: 0.2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',

                    }
                }>
                    <View style={{
                        backgroundColor: '#dcdde1',
                        width: '100%',
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            width: '50%',

                        }}>
                            <Text style={{ color: '#000000', margin: 5, fontWeight: 'bold' }}>subtotal</Text>
                        </View>
                        <View style={{
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            flex: 1,
                            width: '50%',
                        }}>
                            <Text style={{ color: '#000000', fontWeight: 'bold', margin: 5 }}>{this.subTotalCounter()} dollar</Text>

                        </View>
                    </View>
                    <TouchableOpacity style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1
                    }} onPress={() => {
                        if ((this.state.shishaList).length !== 0) {
                            this.props.navigation.navigate('PaymentScreen', { total: this.subTotalCounter(), shishaList: this.state.shishaList })
                        } else {
                            alert('you do not have products')
                        }
                    }}>
                        <Text style={{ fontSize: 15, color: 'white' }}>checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

export default CartScreen;