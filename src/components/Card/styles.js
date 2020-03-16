import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  width: 230px;
  height: 300px;
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

export const Name = styled.Text`
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
`;

export const ButtonText = styled.Text``;
