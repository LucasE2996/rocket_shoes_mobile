import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 100%;
  background: ${colors.grayLight};
`;

export const TextContainer = styled.View`
  margin-left: 10px;
  margin-right: 10px;
  width: 220px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 12px;
  color: ${colors.black};
`;

export const Price = styled.Text`
  font-size: 16px;
  color: ${colors.black};
`;

export const SubtotalRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.grayLight};
  height: 40px;
  border-radius: 4px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 10px;
  padding-left: 10px;
`;

export const NumberProducts = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.TextInput`
  background: #fff;
  color: ${colors.black};
  width: 50px;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 12px;
  padding: 0;
  text-align: center;
`;

export const SubtotalText = styled.Text`
  color: ${colors.black};
  font-weight: bold;
  font-size: 16px;
`;
