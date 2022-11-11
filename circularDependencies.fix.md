# Circular Dependencies FIx

### steps

- node_modules/react-native-os/android/build.gradle-> line:47 | replace compile -> implementation
- node_modules/react-native-tcp/android/build.gradle-> line:47&48 | replace compile -> implementation
- node_modules/@walletconnect/react-native-dapp/dist/providers/WalletConnectProvider-> line:26 | replace https://walletconnect.org/wallets -> https://walletconnect.org/register
- run `npx rn-nodeify --install --hack`
- run `npx react-native run-android`
