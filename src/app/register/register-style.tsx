import styled from 'styled-components';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {colors} from '../../infrastructure/theme/color';

import Typography from '../../components/typography/text-component';

export const Text = styled(Typography).attrs({
  color: colors.text.primary,
})``;
export const RegisterView = styled(ScrollView)`
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
export const RegisterInputContainer = styled(View)`
  flex: 1;
`;
export const RegisterButtonContainer = styled(View)`
  margin-top: 20px;
  align-items: center;
`;
export const Input = styled(TextInput)`
  width: 300px;
  height: 52px;
`;
export const LoginButton = styled(Button).attrs({
  color: colors.brand.secondary,
})``;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  width: 234px;
  border-radius: 10px;
  height: 39px;
`;
export const LoginContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
export const styles = StyleSheet.create({
  textInputOutlineStyle: {
    colors: {
      placeholder: 'white',
      text: 'white',
      primary: 'white',
      underlineColor: 'white',
    },
  },
});
