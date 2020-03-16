import React, {useState, useEffect} from 'react';

import api from '../../services/api';
import Card from '../../components/Card';
import {Container} from '../../styles/globalStyles';

import {FlatList} from './styles';

const Main = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    return api
      .get('products')
      .then(response => {
        console.log('a');
        return response.data;
      })
      .catch(error => console.error('Error', error));
  };

  useEffect(() => {
    getProducts().then(response => {
      console.log(response);
      setProducts(response);
    });
  }, []);

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
