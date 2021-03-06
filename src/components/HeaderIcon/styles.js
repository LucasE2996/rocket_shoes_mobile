import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const HeaderButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding-right: 20px;
`;

export const CartLabel = styled.View`
  width: 23px;
  height: 23px;
  border-radius: 23px;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: ${colors.green};
  top: 0;
  right: 10px;
`;

export const CartLabelText = styled.Text`
  color: #fff;
  font-size: 12px;
`;
