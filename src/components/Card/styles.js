import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  width: 240px;
  height: 350px;
  background-color: #fff;
  margin-right: 20px;
  border-radius: 4px;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.Image`
  margin-top: 10px;
  width: 80%;
  height: 50%;
  background: #333;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 15px;
  color: ${colors.black};
  text-align: center;
`;

export const Price = styled.Text`
  font-size: 24px;
  color: ${colors.black};
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  padding: 3px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${colors.green};
  border-radius: 4px;
  padding-right: 10px;
  overflow: hidden;
  height: 40px;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;

export const ButtonLeft = styled.View`
  flex-direction: row;
  background: ${colors.greenDark};
  width: 50px;
  height: 41px;
  margin-left: -3px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export const ProductsNumber = styled.Text`
  margin-left: 2px;
  color: #fff;
  font-size: 16px;
`;
