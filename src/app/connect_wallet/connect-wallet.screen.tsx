import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../../components/header/Header';
import Typography from '../../infrastructure/theme/Typography';
import Divider from '../../components/divider/Divider';
import {baseStyles, dimensions} from '../../infrastructure/theme/baseStyles';
import Icongraphy from '../../infrastructure/theme/Icongraphy';
import {useTheme} from '@react-navigation/native';
import DrawerItem from '../../components/drawer/DrawerItem';
import {useWalletConnect} from '@walletconnect/react-native-dapp';
import Dialog, {getDialogConfig} from '../../components/dialog/Dialog';

const ConnectWalletScreen = (props: any) => {
  // console.log(props.navigation.getParent());
  const theme = useTheme();
  const connector = useWalletConnect();

  const [dialogConfig, setDialogConfig] = useState(getDialogConfig(false));

  function connectWallet() {
    console.log(connector);
    if (!connector.connected) {
      /**
       *  Connect! 🎉
       */
      return connector.connect();
    }
    return connector.killSession();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header varient="default" />
      <View
        style={{
          ...{flex: 1, width: dimensions.width * 0.9},
          ...baseStyles.ai_center,
          ...baseStyles.jc_center,
        }}>
        <View
          style={{
            ...styles.card,
            ...{backgroundColor: theme.colors.container},
          }}>
          <Icongraphy
            family="Foundation"
            name="shield"
            color="orange"
            size={96}
          />
        </View>
        <View style={{width: '80%', alignSelf: 'center'}}>
          <Typography textAlign="center" varient="subheading1" spacing={20}>
            Connect your wallet
          </Typography>
        </View>
        <View
          style={{
            backgroundColor: theme.colors.container,
            alignSelf: 'center',
            width: '100%',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <DrawerItem
            title="MetaMask"
            titlevarient="subheading2"
            onTap={() => connectWallet()}
            avatarWrapperStyle={{width: 40, height: 40}}>
            <Icongraphy family="svg" name="MetaMask" />
          </DrawerItem>
          <Divider />
          <DrawerItem
            title="Trust Wallet"
            titlevarient="subheading2"
            onTap={() => connectWallet()}
            avatarWrapperStyle={{
              width: 40,
              height: 40,
              backgroundColor: theme.colors.primary,
            }}>
            <Icongraphy
              family="svg"
              name="shieldWithCheckWhite"
              color="orange"
            />
          </DrawerItem>
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
  card: {
    ...baseStyles.center,
    ...{
      width: 150,
      height: 150,
      borderRadius: 15,
    },
  },
});

export default ConnectWalletScreen;
