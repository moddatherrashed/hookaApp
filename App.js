import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import CartScreen from './src/screens/CartScreen'
import FlavorScreen from './src/screens/FlavorScreen'
import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import PaymentScreen from './src/screens/PaymentScreen'
import { Icon } from 'native-base'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

const homeStackNaviator = createStackNavigator({
  HomeScreen: HomeScreen,
  FlavorScreen: FlavorScreen
})

const cartStackNavigator = createStackNavigator({
  CartScreen: CartScreen,
  PaymentScreen: PaymentScreen,

})

const ProfileStackNavigator = createStackNavigator({
  ProfileScreen: ProfileScreen,
})
const bottomTabNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: homeStackNaviator,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-home' style={{ fontSize: 24, color: tintColor }} />
      )
    }
  },
  Cart: {
    screen: cartStackNavigator,
    navigationOptions: {
      tabBarLabel: 'Cart',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-cart' style={{ fontSize: 24, color: tintColor }} />
      )
    }
  },
  Profile: {
    screen: ProfileStackNavigator,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='person' style={{ fontSize: 24, color: tintColor }} />
      )
    }
  }
}, {
    activeTintColor: 'white',
    barStyle: { backgroundColor: 'orange' },
    shifting: true,

  })

const AuthStackNavigator = createStackNavigator({
  SignInScreen: SignInScreen,
})

const AuthNavigator = createSwitchNavigator({
  Auth: AuthStackNavigator,
  App: { screen: bottomTabNavigator }
})


export default AuthNavigator

/* 
 AuthStackNavigator : {
  signIn, 
  signUp,
  App : { tabbar }
}

AuthNavigator = { 
  splachScreen ,
  Auth : {AuthStackNavigator},
  App : bottomTabNavigator

  }
}




*/