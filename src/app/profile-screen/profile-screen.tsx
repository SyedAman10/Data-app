import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  RefreshControl,
  Image,
  SafeAreaView,
} from 'react-native';
import Header from '../../components/header/Header';
import Typography from '../../infrastructure/theme/Typography';
import Input from '../../components/Input/input-field';
import TouchableComponent from '../../components/touchable/TouchableComponent';
import Btn from '../../components/button/Btn';
import Dialog, {getDialogConfig} from '../../components/dialog/Dialog';
import RoundBtn from '../../components/button/RoundBtn';
import {baseStyles, dimensions} from '../../infrastructure/theme/baseStyles';
import Icongraphy from '../../infrastructure/theme/Icongraphy';

import {assets} from '../../utilities/asstes';
import {useTheme} from '@react-navigation/native';

const ProfileScreen = props => {
  const theme = useTheme();

  const [avatar, setAvatar] = useState(null);
  const [cover, setCover] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogConfig, setDialogConfig] = useState(getDialogConfig(false));

  return (
    <SafeAreaView style={styles.container}>
      <Header
        onLeftBtnTab={() => props.navigation.navigate('LoginScreen')}
        varient="default2"
        rightCustomBtn={{
          onTap: () => {
            props.navigation.navigate('ConnectWalletScreen');
            // removeAllData()
            //   .then(() => {
            //     props.navigation.replace('Login');
            //   })
            //   .catch(() => {});
          },
          varient: 'minimum',
          title: 'My Wallet',
          style: {
            width: 85,
            height: 30,
            borderRadius: 5,
            backgroundColor: theme.colors.primary,
          },
        }}
      />
      <ScrollView
        refreshControl={<RefreshControl refreshing={isLoading} />}
        style={{flex: 1, width: dimensions.width}}
        contentContainerStyle={{width: '100%', alignItems: 'center'}}>
        <ImageBackground
          source={cover ? cover : assets.defaultCover}
          style={{width: '100%', height: 260, alignItems: 'center'}}>
          <Typography spacing={20} varient="heading" color="white">
            User Profile
          </Typography>
          <TouchableComponent feedback="opacity">
            <View style={{width: '100%', alignItems: 'center'}}>
              <Image
                source={avatar ? avatar : assets.defaultAvatar}
                onError={() => setAvatar(assets.defaultAvatar)}
                style={{
                  width: dimensions.width / 3.5,
                  height: dimensions.width / 3.5,
                  borderRadius: dimensions.width / 3.5,
                }}
                resizeMethod="resize"
                resizeMode="cover"
              />
              <View
                style={{
                  ...baseStyles.row,
                  ...baseStyles.width100,
                }}>
                <Icongraphy
                  family="AntDesign"
                  name="upload"
                  size={20}
                  color="white"
                />
                <Typography spacing={20} varient="text1strong" color="white">
                  Upload Image
                </Typography>
              </View>
            </View>
          </TouchableComponent>
          <View style={{width: '100%', alignItems: 'flex-end'}}>
            <RoundBtn style={{backgroundColor: 'black'}}>
              <Icongraphy
                family="MaterialCommunityIcons"
                name="image-edit-outline"
                color="white"
              />
            </RoundBtn>
          </View>
        </ImageBackground>
        <View>
          <View style={styles.inputCont}>
            <Input label="First Name" type="text" />
          </View>
          <View style={styles.inputCont}>
            <Input label="Last Name" type="text" />
          </View>
          <View style={styles.inputCont}>
            <Input label="Email" type="text" disabled={false} />
          </View>
          <View style={styles.inputCont}>
            <Input label="Phone" type="text" keyboardType="number-pad" />
          </View>
          <View style={styles.inputCont}>
            <Input label="Bio" type="text" />
          </View>
          {/* <View style={styles.inputCont}>
          <Input
            label="Wallet Address"
            type="text"
            value={profile && profile.wallet_address}
            onChangeText={txt => handleChange(txt, 'wallet_address')}
          />
        </View> */}
        </View>
        <View
          style={{
            ...baseStyles.width100,
            ...baseStyles.center,
            marginBottom: 15,
          }}>
          <Btn
            title="Save"
            isLoading={isSubmitting}
            varient="primaryBtn"
            style={{
              marginTop: 20,
              width: 100,
              borderRadius: 10,
              backgroundColor: theme.colors.primary,
            }}
          />
        </View>
      </ScrollView>
      <Dialog {...dialogConfig} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputCont: {
    ...baseStyles.width100,
    height: 45,
    alignItems: 'center',
    marginVertical: 15,
  },
});

export default ProfileScreen;
