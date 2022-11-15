// import React, {useContext} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {AuthContext} from '../context/auth-context';
// import LoginScreen from '../app/login/login-screen';
// import RegisterScreen from '../app/register/register-screen';
// import {View, ActivityIndicator} from 'react-native';

// function AppNav() {
//   const {isLoading, userToken} = useContext(AuthContext);
//   if (isLoading) {
//     // return(
//     // <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//     //      <ActivityIndicator size={'large'}/>
//     //   </View>
//     // )
//   }
//   return (
//     <NavigationContainer>
//       {userToken !== null ? <RegisterScreen /> : <LoginScreen />}
//     </NavigationContainer>
//   );
// }
// export default AppNav;
