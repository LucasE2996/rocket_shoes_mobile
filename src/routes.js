import {Button, Alert} from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import Main from './pages/Main';

import {HeaderButton} from './styles/globalStyles';
import colors from './styles/colors';

const Stack = createStackNavigator();

const DefaultOptions = {
  headerStyle: {
    backgroundColor: colors.black,
  },
  headerRight: () => (
    <HeaderButton onPress={() => Alert.alert('This is a button!')}>
      <Icon name="rocket" size={20} color="#FFF" />
    </HeaderButton>
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
