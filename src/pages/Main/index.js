import React from 'react';

import Card from '../../components/Card';
import {Container} from '../../styles/globalStyles';
import {FlatList} from './styles';

const Main = () => {
  const products = [
    {
      id: 1,
      title: 'Tênis de Caminhada Leve Confortável',
      price: 179.9,
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
    },
    {
      id: 2,
      title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
      price: 139.9,
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
    },
    {
      id: 3,
      title: 'Tênis Adidas Duramo Lite 2.0',
      price: 219.9,
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
    },
  ];

  return (
    <Container>
      <FlatList
        style={{marginLeft: 15}}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding: 10}}
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Card data={item} />}
      />
    </Container>
  );
};

export default Main;
