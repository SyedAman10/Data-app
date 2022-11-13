import styled from 'styled-components';
import {ScrollView, View, StyleSheet} from 'react-native';
import {colors} from '../../infrastructure/theme/color';
import {Button, TextInput} from 'react-native-paper';
import Typography from '../../components/typography/text-component';

export const Text = styled(Typography).attrs({
  color: colors.text.primary,
})``;
export const LoginView = styled(ScrollView)`
  flex: 1;
`;
export const LoginHeading = styled(View)`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const LoginInputContainer = styled(View)`
  flex: 1;
`;
export const Input = styled(TextInput).attrs({
  backgroundColor: '#08131b',
})`
  width: 300px;
  height: 52px;
`;
export const Space = styled(View)`
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const ForgetPasswordContainer = styled(View)`
  align-items: flex-end;
`;
export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  width: 234px;
  border-radius: 10px;
  height: 39px;
`;
export const LoginButtonContainer = styled(View)`
  align-items: center;
`;
export const SignUpButton = styled(Button).attrs({
  color: colors.brand.secondary,
})``;
export const ForgetPassButton = styled(Button).attrs({
  color: colors.brand.secondary,
})``;

export const SignUpContainer = styled(View)`
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
      underlineColor: '#08131b',
    },
  },
});
