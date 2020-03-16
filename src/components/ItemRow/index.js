import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NumberFormat from 'react-number-format';

import colors from '../../styles/colors';

import {
  Container,
  Row,
  Image,
  TextContainer,
  Title,
  Price,
  SubtotalRow,
  NumberProducts,
  Input,
  SubtotalText,
} from './styles';

const ItemRow = ({data}) => {
  const {title, price, image} = data;
  const [amount, setAmount] = useState('1');

  const handleSetAmount = plus => {
    setAmount(prevValue => {
      let value = parseInt(prevValue);
      const newAmount = plus ? (value += 1) : (value -= 1);
      return String(newAmount);
    });
  };

  return (
    <Container>
      <Row>
        <Image source={{uri: image}} />
        <TextContainer>
          <Title> {title} </Title>
          <NumberFormat
            value={price}
            displayType="text"
            thousandSeparator="."
            prefix="R$"
            decimalSeparator=","
            renderText={formattedText => <Price> {formattedText} </Price>}
          />
        </TextContainer>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="trash-alt" size={20} color={colors.green} />
        </TouchableOpacity>
      </Row>
      <SubtotalRow>
        <NumberProducts>
          <TouchableOpacity onPress={() => handleSetAmount()}>
            <Ionicons
              name="ios-remove-circle-outline"
              size={25}
              color={colors.green}
            />
          </TouchableOpacity>
          <Input editable={false} value={amount} />
          <TouchableOpacity onPress={() => handleSetAmount(true)}>
            <Ionicons
              name="ios-add-circle-outline"
              size={25}
              color={colors.green}
            />
          </TouchableOpacity>
        </NumberProducts>
        <NumberFormat
          value={price}
          displayType="text"
          thousandSeparator="."
          prefix="R$"
          decimalSeparator=","
          renderText={formattedText => (
            <SubtotalText> {formattedText} </SubtotalText>
          )}
        />
      </SubtotalRow>
    </Container>
  );
};

export default ItemRow;
