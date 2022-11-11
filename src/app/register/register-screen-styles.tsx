import {ScrollView, StyleSheet, View} from 'react-native';
import styled from 'styled-components/native';

export const RegisterScreenView = styled(ScrollView)`
  flex: 1;
`;
export const RegisterInputContainer = styled(View)`
  flex: 1;
`;
export const RegisterHeading = styled(View)`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Description = styled(View)`
  width: 70%;
  align-self: center;
`;
export const RegisterButtonContainer = styled(View)`
  margin-top: 20px;
  align-items: center;
`;
export const LoginContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
