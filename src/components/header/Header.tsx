import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import {baseStyles} from '../../infrastructure/theme/baseStyles';
import RoundBtn from '../button/RoundBtn';
import Btn from '../button/Btn';
import Icongraphy from '../../infrastructure/theme/Icongraphy';
import {useTheme} from '@react-navigation/native';

const Header = props => {
  const {
    varient,
    onLeftBtnTab,
    wrapperStyle,
    rightBtns,
    leftIcon,
    onRightBtnTab,
    rightCustomBtn,
  } = props;
  const theme = useTheme();
  let _style = {
    marginHorizontal: 10,
  };

  if (varient == 'default2') {
    _style = {
      width: 35,
      height: 35,
      backgroundColor: theme.dark ? 'white' : theme.colors.primary,
      marginHorizontal: 10,
    };
  }

  if (varient == 'default') {
    _style = {
      marginHorizontal: 10,
    };
  }

  if (varient == 'main') {
    _style = {
      width: 30,
      height: 30,
      backgroundColor: theme.dark ? 'white' : theme.colors.primary,
      marginHorizontal: 10,
    };
  }

  return (
    <View style={{...styles.container, ...wrapperStyle}}>
      {leftIcon ? (
        leftIcon
      ) : (
        <View
          style={{
            ...baseStyles.row,
            ...baseStyles.width100,
            ...baseStyles.jc_space_between,
          }}>
          {onLeftBtnTab ? (
            <RoundBtn
              style={{
                ..._style,
                backgroundColor: theme.dark ? 'white' : theme.colors.primary,
                width: 35,
                height: 35,
              }}
              onTap={onLeftBtnTab}>
              {varient == 'main' ? (
                <Icongraphy
                  family="Ionicons"
                  name="add"
                  color={theme.dark ? 'black' : 'white'}
                />
              ) : varient == 'default' || varient == 'default2' ? (
                <Icongraphy
                  family="Entypo"
                  name="chevron-left"
                  color={theme.dark ? 'black' : 'white'}
                />
              ) : (
                <Icongraphy
                  family="AntDesign"
                  name="arrowleft"
                  color={theme.dark ? 'black' : 'white'}
                />
              )}
            </RoundBtn>
          ) : null}
          <View style={{...baseStyles.inline}}>
            {rightBtns
              ? rightBtns.map((item, index) => (
                  <RoundBtn
                    style={{..._style}}
                    key={String(index)}
                    isLoading={item.isLoading}
                    onTap={item.onTap}>
                    <Icongraphy
                      family={item.family}
                      name={item.name}
                      color={theme.dark ? 'black' : 'white'}
                    />
                  </RoundBtn>
                ))
              : null}
            {varient == 'main' ? (
              <RoundBtn onTap={onRightBtnTab}>
                <Icongraphy family={'Octicons'} name={'three-bars'} size={18} />
              </RoundBtn>
            ) : null}
            {rightCustomBtn ? (
              <Btn
                onTap={rightCustomBtn.onTap}
                varient={rightCustomBtn.varient}
                title={rightCustomBtn.title}
                isLoading={rightCustomBtn.isLoading}
                style={{...{marginRight: 10}, ...rightCustomBtn.style}}
              />
            ) : null}
          </View>
        </View>
      )}
      {/* <View style={{...styles.title, ...titleStyle}}>
        <Typography varient="heading">peerOS</Typography>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
  },

  title: {
    width: '100%',
    height: '100%',
    ...baseStyles.ai_center,
    ...baseStyles.jc_center,
    position: 'absolute',
    zIndex: -9999,
  },
  titleText: {
    width: '30%',
  },
});

export default Header;
