import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {dimensions} from '../../infrastructure/theme/BaseStyles';

const Divider = props => {
  const {spacing, varient, style} = props;
  const theme = useTheme();
  if (varient == 'vertical') {
    return (
      <View
        style={{
          ...{
            borderTopWidth: 0.1,
            alignSelf: 'center',
            height: '90%',
            borderColor: theme.colors.text,
            marginVertical: spacing ? spacing : 0,
          },
          ...style,
        }}
      />
    );
  }
  return (
    <View
      style={{
        ...{
          width: dimensions.width - 20,
          alignSelf: 'center',
          borderTopWidth: 0.2,
          borderColor: theme.colors.lightDark,
          marginVertical: spacing ? spacing : 0,
        },
        ...style,
      }}
    />
  );
};

export default Divider;
