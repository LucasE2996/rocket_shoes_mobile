import 'react-native-gesture-handler';
import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Main from './pages/Main';
import Cart from './pages/Cart';

import {
  HeaderButton,
  HeaderLogo,
  Image,
  CartLabel,
  CartLabelText,
} from './styles/header';
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
    <HeaderButton onPress={() => navigation.navigate('Cart')}>
      <Icon name="shopping-basket" size={30} color="#FFF" />
      <CartLabel>
        <CartLabelText>10</CartLabelText>
      </CartLabel>
    </HeaderButton>
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
