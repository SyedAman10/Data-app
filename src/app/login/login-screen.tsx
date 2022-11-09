import React, {useState} from 'react';

import Typography from '../../components/typography/text-component';
import { 
  SignUpContainer,
  styles,
  SignUpButton, 
  LoginView, 
  LoginHeading,
  LoginInputContainer, 
  Input, 
  Space, 
  ForgetPasswordContainer, 
  AuthButton,
  LoginButtonContainer,
  ForgetPassButton,
} from './login_style';

export const LoginScreen = ({}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <LoginView
      contentContainerStyle={{
        alignItems: 'center',
      }}>
      <LoginHeading>
        <Typography varient="heading">Welcome</Typography>
        <Typography varient="subheading1" spacing={5}>
          Login To Your Account
        </Typography>
      </LoginHeading>
      <LoginInputContainer>
        <Input
          mode="outlined"
          value={email}
          label="Username / Email"
          underlineColorAndroid={'rgba(0,0,0,0)'}
          text="white"
          theme={styles.textInputOutlineStyle}
          placeholder="Username / Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none" 
          right={<Input.Icon icon="eye" />} 
          onChangeText={u => setEmail(u)}
        />
        <Space>
          <Input
            mode="outlined"
            label="Password"
            value={password}
            underlineColorAndroid={'rgba(0,0,0,0)'}
            text="white"
            theme={styles.textInputOutlineStyle}
            placeholder="Password"
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry={true}
            right={<Input.Icon icon="eye" />} 
            onChangeText={u => setPassword(u)}
          />
        </Space>

        <ForgetPasswordContainer>
          <ForgetPassButton 
            uppercase={false} 
            labelStyle={{fontSize:12}} 
            mode="text" 
            onPress={() => console.log('Pressed')}>
            Forget Password?
          </ForgetPassButton>
        </ForgetPasswordContainer>
      </LoginInputContainer>
      <LoginButtonContainer>
        <AuthButton  
          uppercase={false}
          mode="contained" 
          labelStyle={{ color: "white", fontSize: 16 }}>
          Login
        </AuthButton>
        <SignUpContainer>
          <Typography varient="text1">Don't have an account?</Typography>
          <SignUpButton
            labelStyle={{fontSize: 12}} 
            uppercase={false}>
            SignUp
          </SignUpButton>  
        </SignUpContainer>
      </LoginButtonContainer>
    </LoginView>
  );
};
