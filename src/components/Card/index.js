import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {formatPrice} from '../../util/format';
import {Container, Image, Name, Price, Button, ButtonText} from './styles';

const Card = ({data}) => {
  const {title, price, image} = data;

  // formatPrice(price).then(p => console.log(p));

  // console.log(image);

  return (
    <Container>
      <Image source={{uri: image}} />
      <Name> {title} </Name>
      <Price> {price} </Price>
      <Button>
        <Icon name="shopping-cart" size={20} color="#FFF" />
        <ButtonText>Adicionar ao carrinho</ButtonText>
      </Button>
    </Container>
  );
};

export default Card;
