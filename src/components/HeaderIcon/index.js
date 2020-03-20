import React from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {HeaderButton, CartLabel, CartLabelText} from './styles';

const HeaderIcon = ({navigate, cartSize}) => {
  return (
    <HeaderButton onPress={navigate}>
      <Icon name="shopping-basket" size={30} color="#FFF" />
      {cartSize > 0 ? (
        <CartLabel>
          <CartLabelText> {cartSize} </CartLabelText>
        </CartLabel>
      ) : (
        <></>
      )}
    </HeaderButton>
  );
};

export default connect(state => ({
  cartSize: state.cart.length,
}))(HeaderIcon);
