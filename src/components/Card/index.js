import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NumberFormat from 'react-number-format';

import {Container, Image, Name, Price, Button, ButtonText} from './styles';

const Card = ({data}) => {
  const {title, price, image} = data;

  return (
    <Container>
      <Image source={{uri: image}} />
      <Name> {title} </Name>
      <NumberFormat
        value={price}
        displayType="text"
        thousandSeparator="."
        prefix="R$"
        decimalSeparator=","
        renderText={formattedText => <Price>{formattedText}</Price>}
      />
      <Button>
        <Icon name="shopping-cart" size={20} color="#FFF" />
        <ButtonText>Adicionar ao carrinho</ButtonText>
      </Button>
    </Container>
  );
};

export default Card;
