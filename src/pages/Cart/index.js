import React from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container} from '../../styles/globalStyles';
import ItemRow from '../../components/ItemRow';

import {
  Content,
  Total,
  TotalText,
  TotalPrice,
  ProcessPurchase,
  ProcessPurchaseText,
  EmptyText,
} from './styles';
import colors from '../../styles/colors';

const Cart = () => {
  const products = [];

  return (
    <Container>
      <Content productsExists={products.length > 0}>
        {products.length < 1 ? (
          <>
            <Icon name="cart-off" size={50} color={colors.grayLight} />
            <EmptyText>Carrinho vazio</EmptyText>
          </>
        ) : (
          <>
            <FlatList
              showVerticalScrollIndicator={false}
              data={products}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => <ItemRow data={item} />}
            />
            <Total>
              <TotalText>TOTAL</TotalText>
              <TotalPrice>R$ 599,90</TotalPrice>
            </Total>
            <ProcessPurchase onPress={() => {}}>
              <ProcessPurchaseText>Finalizar compra</ProcessPurchaseText>
            </ProcessPurchase>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Cart;
