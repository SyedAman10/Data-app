import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TouchableComponent from '../touchable/TouchableComponent';
import Colors from '../../infrastructure/theme/Colors';
import {baseStyles} from '../../infrastructure/theme/BaseStyles';
import Typography from '../../infrastructure/theme/Typography';
import Icongraphy from '../../infrastructure/theme/Icongraphy';
import {useTheme} from '@react-navigation/native';

const DrawerItem = props => {
  const {isHalf, toggle, onLongTap, selected} = props;
  const theme = useTheme();
  return (
    <View
      style={{
        ...styles.screen,
        ...props.styleItme,
        ...{width: isHalf ? '50%' : '100%', borderRadius: isHalf ? 30 : 0},
      }}>
      <TouchableComponent
        onTap={props.onTap}
        style={{flex: 1}}
        onLongTap={onLongTap}>
        <View style={{...styles.innerContainer, ...props.styleitem}}>
          <View
            style={{...styles.avatarWrapperStyle, ...props.avatarWrapperStyle}}>
            {props.children}
          </View>
          <View style={{...baseStyles.jc_center, flex: 1, ...props.style}}>
            <Typography
              varient={props.titlevarient ? props.titlevarient : 'text1strong'}>
              {props.title}
            </Typography>
            {props.subtitle ? (
              <Typography varient="text1" color="gray">
                {props.subtitle}
              </Typography>
            ) : null}
          </View>
          {props.rightIcon ? (
            props.rightIcon == true ? null : (
              props.rightIcon
            )
          ) : (
            <View
              style={{
                ...styles.rightIconCont,
                ...props.iconStyle,
                ...{backgroundColor: theme.colors.container},
              }}>
              <Icongraphy
                family="Entypo"
                name={toggle ? 'chevron-down' : 'chevron-right'}
                size={18}
              />
            </View>
          )}
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: 60,
    overflow: 'hidden',
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'bold',
    fontSize: 15,
    color: Colors.darkGray,
  },
  avatarWrapperStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    marginHorizontal: 15,
    ...baseStyles.center,
  },
  rightIconCont: {
    width: 20,
    height: 20,
    borderRadius: 3,
    marginRight: 10,
    ...baseStyles.center,
  },
});

export default DrawerItem;
