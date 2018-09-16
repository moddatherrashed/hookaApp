import React, { Component } from 'react';
import { ScrollView, Text, FlatList, TouchableOpacity, ImageBackground, View, Image, StyleSheet, StatusBar, Dimensions } from 'react-native'

const viewportWidth = Dimensions.get('window').width

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shishaList: [
                {
                    id: '1',
                    image: 'https://ak1.picdn.net/shutterstock/videos/1009370801/thumb/1.jpg?i10c=img.resize(height:160)',
                    name: 'Fresh Hooka'
                },
                {
                    id: '2',
                    image: 'https://evictionfreesf.org/wp-content/uploads/2018/04/Mile-High-Pipe-Tobacco_July_Which-Hookah-Coals-Are-Best_Image-1.jpg',
                    name: 'Regular Hooka'
                },
                {
                    id: '3',
                    image: 'https://ak1.picdn.net/shutterstock/videos/1009370801/thumb/1.jpg?i10c=img.resize(height:160)',
                    name: 'Fresh Head'
                },
                {
                    id: '4',
                    image: 'https://evictionfreesf.org/wp-content/uploads/2018/04/Mile-High-Pipe-Tobacco_July_Which-Hookah-Coals-Are-Best_Image-1.jpg',
                    name: 'Regular Head'
                }
            ]
        }
    }
    static navigationOptions = {
        title: 'Home',
        headerStyle: { backgroundColor: 'orange' },
        headerTitleStyle: { color: 'white' }
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
                    data={this.state.shishaList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('FlavorScreen', {
                                    name: item.name
                                })
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
                            <ImageBackground
                                source={{ uri: item.image }}
                                style={{
                                    height: viewportWidth * 0.21,
                                    width: null,
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'flex-end'

                                }}
                                resizeMode='cover'
                            >
                                <Text style={{
                                    textShadowColor: 'black',
                                    textShadowOffset: { width: 1, height: 4 },
                                    textShadowRadius: 5, fontSize: 25,
                                    fontWeight: '700',
                                    padding: 10,
                                    margin: 10,
                                    color: 'white'
                                }}>{item.name}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    }
                />
            </ScrollView>
        );
    }
}

export default HomeScreen;