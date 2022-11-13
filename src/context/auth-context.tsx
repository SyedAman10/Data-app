import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, createContext, useEffect} from 'react';
import { BASE_URL } from '../config';
import axios from 'axios';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const login = (Email, Password) => {
    setIsLoading(true);
    axios.post(`${BASE_URL}/auth/local` , {
        identifier: Email,
        password: Password,
    }).then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        setUserToken(userInfo.data.jwt);
        props.navigation.navigate('RegisterScreen');
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));     
        AsyncStorage.setItem('userToken', userInfo.data.token);     
        console.log(userInfo);
        console.log('user token: ' + userInfo.data.token);
    }).catch(e => {
        console.log(`login error ${e}`)
    })
    setIsLoading(false);
  };
  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };
  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);
      setUserToken(userToken);

      if(userInfo) {
        setUserInfo(userInfo);
        setUserToken(userToken);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(` isLogged in error ${e}`);
    }
  };
  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
