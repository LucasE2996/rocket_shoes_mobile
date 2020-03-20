import 'react-native-gesture-handler';
import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';
import Cart from './pages/Cart';
import HeaderIcon from './components/HeaderIcon';

import {HeaderLogo, Image} from './styles/header';
import colors from './styles/colors';
import logo from './assets/logo.png';

const Stack = createStackNavigator();

const DefaultOptions = ({navigation, route}) => ({
  title: null,
  headerStyle: {
    height: Platform.OS === 'ios' ? 120 : 70,
    backgroundColor: colors.black,
    shadowColor: 'transparent',
  },
  headerRight: () => (
    <HeaderIcon navigate={() => navigation.navigate('Cart')} />
  ),
  headerLeft: () => (
    <HeaderLogo onPress={() => navigation.navigate('Main')}>
      <Image source={logo} resizeMode="contain" />
    </HeaderLogo>
  ),
});

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={DefaultOptions}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
