#!/bin/bash
REACT_NATIVE_OS='node_modules/react-native-os/android/build.gradle'
REACT_NATIVE_TCP='node_modules/react-native-tcp/android/build.gradle'
REACT_NATIVE_UDP='node_modules/react-native-udp/android/build.gradle'
REACT_NATIVE_RANDOMBYTE='node_modules/react-native-randombytes/android/build.gradle'

sed -i 's/compile /implementation/g' $REACT_NATIVE_OS
sed -i 's/compile /implementation/g' $REACT_NATIVE_TCP
sed -i 's/compile /implementation/g' $REACT_NATIVE_UDP
sed -i 's/compile /implementation/g' $REACT_NATIVE_RANDOMBYTE