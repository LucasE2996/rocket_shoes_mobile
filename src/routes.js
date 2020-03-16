import {Button, Text, Alert} from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Main from './pages/Main';

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

const DefaultOptions = {
  title: null,
  headerStyle: {
    height: 70,
    backgroundColor: colors.black,
    elevation: 0,
  },
  headerRight: () => (
    <HeaderButton onPress={() => Alert.alert('This is a button!')}>
      <Icon name="shopping-basket" size={30} color="#FFF" />
      <CartLabel>
        <CartLabelText>10</CartLabelText>
      </CartLabel>
    </HeaderButton>
  ),
  headerLeft: () => (
    <HeaderLogo>
      <Image source={logo} />
    </HeaderLogo>
  ),
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={DefaultOptions}>
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
