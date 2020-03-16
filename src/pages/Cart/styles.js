import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Content = styled.View`
  width: 100%;
  min-height: 200px;
  max-height: 600px;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  justify-content: ${props =>
    props.productsExists ? 'space-between' : 'center'};
  align-items: center;
`;

export const ItemRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Total = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const TotalText = styled.Text`
  font-size: 12px;
  color: ${colors.grayLight};
`;

export const TotalPrice = styled.Text`
  font-size: 24px;
  color: ${colors.black};
`;

export const ProcessPurchase = styled.TouchableOpacity`
  width: 100%;
  background: ${colors.green};
  border-radius: 4px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const ProcessPurchaseText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  color: ${colors.grayLight};
  margin-top: 20px;
`;
