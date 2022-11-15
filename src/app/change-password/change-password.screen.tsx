import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, Image} from 'react-native';
import {dimensions} from '../../infrastructure/theme/baseStyles';
import baseStyles from '../../infrastructure/theme/baseStyles';
import Header from '../../components/header/Header';
import Typography from '../../infrastructure/theme/Typography';
import Icongraphy from '../../infrastructure/theme/Icongraphy';
import {useTheme} from '@react-navigation/native';
import Input from '../../components/Input/input-field';
import Btn from '../../components/button/Btn';
import Dialog, {getDialogConfig} from '../../components/dialog/Dialog';
import {Space} from '../../components/spacer/spacer-component';

const ChangePasswordScreen = (props: any) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [dialogConfig, setDialogConfig] = useState(getDialogConfig(false));
  const [data, setData] = useState({current: '', new: '', confirm: ''});
  const [errors, setErrors] = useState({
    current: '',
    new: '',
    confirm: '',
    btn: '',
  });

  function handleInput(value: any, key: any) {
    setData({
      ...data,
      [key]: value,
    });
    setErrors({
      ...errors,
      [key]: '',
    });
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={{...baseStyles.p_absolute, ...baseStyles.width100}}>
            <Header onLeftBtnTab={() => props.navigation.goBack()} />
          </View>
          <View
            style={{
              ...baseStyles.flexCenter,
              ...baseStyles.width80,
              marginTop: 100,
            }}>
            <View
              style={{
                ...baseStyles.flexCenter,
                ...baseStyles.width80,
                marginTop: 100,
              }}>
              <View
                style={{
                  width: dimensions.width / 3.5,
                  height: dimensions.width / 3.5,
                  marginVertical: 0,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../assets/password.png')}
                  resizeMethod="resize"
                  resizeMode="cover"
                  style={{
                    width: '100%',
                    height: '90%',
                    borderRadius: 10,
                    marginBottom: 100,
                  }}
                />
              </View>
              {/* <Avatar url={assets.avatar0} varient="screen" spacing={10} /> */}
              <Typography varient="heading" textAlign="center">
                Change Password
              </Typography>
              <Space />
              <View>
                <Input
                  type="text"
                  label="Current Password"
                  placeholder="Password"
                  right={<Icongraphy family="Entypo" name="lock" />}
                  spacing={5}
                  secureTextEntry={true}
                  onChangeText={txt => handleInput(txt, 'current')}
                />
                <Space />
                <Input
                  type="text"
                  label="New Password"
                  placeholder="Password"
                  right={<Icongraphy family="Entypo" name="lock" />}
                  spacing={5}
                  secureTextEntry={true}
                  onChangeText={txt => handleInput(txt, 'new')}
                />
                <Space />
                <Input
                  type="text"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  right={<Icongraphy family="Entypo" name="lock" />}
                  spacing={5}
                  secureTextEntry={true}
                  onChangeText={txt => handleInput(txt, 'confirm')}
                />
                <Space />
                <Btn
                  title="Send"
                  varient="filled"
                  component="primaryBtn"
                  isLoading={isLoading}
                  onTap={() => {
                    setIsLoading(true);
                    // setErrors({...errors, btn: ''});
                  }}
                  spacing={10}
                />
              </View>
            </View>
          </View>
          <Dialog {...dialogConfig} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  resendCode: {
    width: dimensions.width / 1.3,
    alignSelf: 'center',
    alignItems: 'flex-end',
  },
});

export default ChangePasswordScreen;
