import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, FlatList, StatusBar } from 'react-native'
import { Icon } from 'native-base'

const viewportWidth = Dimensions.get('window').width

class ProfileScreen extends Component {
    constructor() {
        super()
        this.state = {
            settingsItems: [
                {
                    id: 1,
                    name: 'Notification',
                    icon: 'ios-notifications'
                },
                {
                    id: 2,
                    name: 'Support',
                    icon: 'ios-text'
                },
                {
                    id: 3,
                    name: 'Sign Out',
                    icon: 'ios-log-out'
                }

            ]
        }
    }

    static navigationOptions = {
        title: 'Profile',
        headerStyle: { backgroundColor: 'orange' },
        headerTitleStyle: { color: 'white' }
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <FlatList
                    data={this.state.settingsItems}
                    keyExtractor={item => item.id.toString()}
                    horizontal={false}
                    renderItem={({ item }) =>
                        <View style={{ width: viewportWidth, padding: 8, borderBottomColor: 'gray', borderBottomWidth: 0.5, flexDirection: 'row' }}>
                            <Icon name={item.icon} style={{ color: 'orange', marginRight: 10 }} />
                            <Text style={{ fontSize: 18, color: 'gray' }}>{item.name}</Text>
                        </View>
                    }
                />
            </ScrollView>
        );
    }
}

export default ProfileScreen;