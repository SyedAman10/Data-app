import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Dialog, {getDialogConfig} from '../../components/dialog/Dialog';
import {baseStyles} from '../../infrastructure/theme/BaseStyles';
import Btn from '../../components/button/Btn';

import Icongraphy from '../../infrastructure/theme/Icongraphy';
import Typography from '../../infrastructure/theme/Typography';
import Input from '../../components/inputfield/InputField';
import Header from '../../components/header/Header';

const ContactUsScreen = (props: any) => {
  const defaultData = {
    name: '',
    email: '',
    text: '',
  };
  const [data, setData] = useState(defaultData);
  // console.log(data);
  const [user, setUser] = useState(null);
  const theme = useTheme();
  const [dialogConfig, setDialogConfig] = useState(getDialogConfig(false));
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(value: any, key: any) {
    setData({
      ...data,
      [key]: value,
    });
  }

  function submit() {
    if (data.text == '' && data.name == '' && data.email == '') {
      setDialogConfig(
        getDialogConfig(
          true,
          'Exception!',
          'Please fillout the whole form!',
          {
            okBtn: {
              label: 'Okay',
              onTap: () => {
                setIsLoading(false);
              },
            },
            cancelBtn: {
              label: '',
              onTap: () => {},
            },
          },
          'error',
          () => setDialogConfig(getDialogConfig(false)),
        ),
      );
      return;
    }
    setTimeout(() => {
      setIsLoading(false);
      setDialogConfig(
        getDialogConfig(
          true,
          'Success!',
          "Thanks for contacting us, we'll reach out to you soon!",
          {
            okBtn: {
              label: 'Dismiss',
              onTap: () => {
                setData(defaultData);
              },
            },
            cancelBtn: {
              label: '',
              onTap: () => {},
            },
          },
          'success',
          () => setDialogConfig(getDialogConfig(false)),
        ),
      );
    }, 2000);
  }

  return (
    <SafeAreaView
      style={{...styles.container, backgroundColor: theme.colors.primary}}>
      <Header
        title="Contact Us"
        onLeftBtnTab={() => props.navigation.goBack()}
        titleColor="white"
        iconColor="white"
      />
      <Typography varient="heading" color="white">
        Contact Us
      </Typography>
      <View style={{...baseStyles.flex, ...baseStyles.jc_flex_end}}>
        <View
          style={{
            ...baseStyles.height80,
            ...baseStyles.width,
            ...baseStyles.brt20,
            ...baseStyles.ai_center,
            ...baseStyles.p20,
            ...{backgroundColor: theme.colors.background},
          }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
            }}>
            <Typography textAlign="center" varient="subheading1" spacing={20}>
              Please let us know how{'\n'}we may help you
            </Typography>
            <View style={{marginVertical: 5}}>
              <Input
                type="text"
                label="Name"
                placeholder="Name"
                right={<Icongraphy family="AntDesign" name="user" />}
                spacing={20}
              />
            </View>
            <View style={{marginVertical: 5}}>
              <Input
                type="text"
                label="Email"
                placeholder="Email"
                right={<Icongraphy family="FontAwesome" name="envelope-o" />}
                spacing={20}
              />
            </View>
            <View style={{marginVertical: 5}}>
              <Input
                type="text"
                label="Write something"
                placeholder="Write something"
                right={<Icongraphy family="Entypo" name="text" />}
                spacing={20}
                multiline={true}
              />
            </View>
            <Btn
              title="Submit"
              varient="filled"
              isLoading={isLoading}
              style={{width: 120, marginTop: 10}}
              onTap={() => {
                setIsLoading(true);
                submit();
              }}
            />
          </ScrollView>
        </View>
      </View>
      <Dialog {...dialogConfig} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ContactUsScreen;
