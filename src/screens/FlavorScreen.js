import React, { Component } from 'react';
import { ScrollView, Text, FlatList, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import Modal from 'react-native-modal'
import { Button } from 'native-base'

const viewportWidth = Dimensions.get('window').width

class FlavorScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            FlavorsList: [
                {
                    id: '1',
                    image: 'https://ak1.picdn.net/shutterstock/videos/1009370801/thumb/1.jpg?i10c=img.resize(height:160)',
                    name: 'Double Apple'
                },
                {
                    id: '2',
                    image: 'https://evictionfreesf.org/wp-content/uploads/2018/04/Mile-High-Pipe-Tobacco_July_Which-Hookah-Coals-Are-Best_Image-1.jpg',
                    name: 'Lemon Mint'
                },
                {
                    id: '3',
                    image: 'https://ak1.picdn.net/shutterstock/videos/1009370801/thumb/1.jpg?i10c=img.resize(height:160)',
                    name: 'Water Melon Mint'
                },
                {
                    id: '4',
                    image: 'https://evictionfreesf.org/wp-content/uploads/2018/04/Mile-High-Pipe-Tobacco_July_Which-Hookah-Coals-Are-Best_Image-1.jpg',
                    name: 'Blue Mist'
                }
            ],
            isVisible: false
        }
    }

    static navigationOptions = {
        title: 'what is your flavor ?',
        headerStyle: { backgroundColor: 'white' },
        headerTitleStyle: { color: 'orange' },
        headerTintColor: 'orange'
    }
    render() {
        return (
            <ScrollView style={{ flex: 3, backgroundColor: 'white' }}>
                <FlatList
                    contentContainerStyle={{ margin: 2 }}
                    contentContainerStyle={{
                        padding: 10,
                        flex: 2
                    }}
                    data={this.state.FlavorsList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ isVisible: true })
                            }}
                            style={{
                                flexDirection: 'row',
                                backgroundColor: '#FFFFFF',
                                margin: 5,
                                elevation: 1,
                                shadowOffset: { height: 0, width: 0 },
                                shadowColor: 'black',
                                shadowOpacity: 0.2
                            }}>
                            <View
                                style={{
                                    height: viewportWidth * 0.21,
                                    width: null,
                                    flex: 1,
                                    justifyContent: 'center',
                                    flexDirection: 'row'
                                }}
                            >
                                <Image
                                    source={{ uri: item.image }}
                                    style={{
                                        flex: 0.3,
                                        height: viewportWidth * 0.18,
                                        width: viewportWidth * 0.18,
                                        margin: 5
                                    }}
                                    resizeMode='cover'
                                />
                                <Text style={{
                                    flex: 0.8,
                                    fontSize: 18,
                                    fontWeight: '700',
                                    padding: 10,
                                    margin: 10,
                                    color: 'black'
                                }}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                />
                <Modal
                    isVisible={this.state.isVisible}
                    backdropColor='orange'
                    onBackdropPress={() => this.setState({ isVisible: false })}
                    backdropOpacity={0.4}
                >
                    <View style={{ height: viewportWidth * 0.5, width: viewportWidth * 0.9, backgroundColor: 'white', borderRadius: 5, alignSelf: 'center', elevation: 5 }}>
                        <View style={{ flex: 3, paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: '#C8C8C8', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', alignSelf: 'center' }}>What would you like to do now ?</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', borderTopColor: '#C8C8C8', borderTopWidth: 1 }}>
                            <Button transparent
                                style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'orange', alignSelf: 'center' }}>View Cart</Text>
                            </Button>
                            <Button transparent
                                style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'orange', alignSelf: 'center' }}>Continue Shopping</Text>
                            </Button>

                        </View>
                    </View>
                </Modal>
            </ScrollView>
        );
    }
}

export default FlavorScreen;