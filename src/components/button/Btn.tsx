import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import TouchableComponent from '../touchable/TouchableComponent';
import {dimensions} from '../../infrastructure/theme/baseStyles';
import Typography from '../../infrastructure/theme/Typography';
import {useTheme} from '@react-navigation/native';

const Btn = (props: any) => {
  const {varient, component, spacing, textVarient, leftIcon, color} = props;
  const theme = useTheme();
  let _color: any;
  let _style: any;
  if (varient == 'outlined') {
    _color = color || theme.colors.primary;
    _style = {borderColor: color || theme.colors.primary, borderWidth: 1};
  }
  if (varient == 'filled') {
    _color = 'white';
    _style = {backgroundColor: theme.colors.primary};
  }
  if (varient == 'text') {
    _color = theme.colors.primary;
    _style = {color: theme.colors.primary};
  }
  if (component == 'primaryBtn') {
    _style = {..._style, width: dimensions.width / 1.3};
  }
  if (component == 'minimum') {
    _style = {..._style};
  }
  if (component == 'secondaryBtn') {
    _color = theme.colors.text;
    _style = {
      ..._style,
      borderColor: theme.colors.text,
      borderRadius: 5,
      height: 30,
    };
  }
  if (varient == 'halftransparent') {
    _style = {
      backgroundColor: 'rgba(255,255,255,0.5)',
      borderRadius: 25,
      minWidth: 120,
    };
  }
  if (varient == 'transparent') {
    _color = theme.colors.text;
    _style = {
      backgroundColor: 'rgba(255,255,255,0)',
      borderRadius: 25,
      minWidth: 70,
    };
  }
  if (component == 'rectangle') {
    _style = {
      ..._style,
      borderRadius: 5,
      minWidth: 120,
      height: 40,
    };
  }
  return (
    <View
      style={{
        ...styles.container,
        ...{marginVertical: spacing},
        ..._style,
        ...props.style,
      }}>
      <TouchableComponent
        onTap={props.onTap}
        disabled={props.isLoading || props.disabled}
        rippleColor={props.rippleColor}>
        <View style={{...styles.innerCont, ...props.innerContStyle}}>
          {props.children || (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {props.isLoading && (
                <ActivityIndicator
                  size="small"
                  color={props.loadingColor || color || _color || 'white'}
                />
              )}
              {leftIcon ? leftIcon : null}
              <Typography
                varient={textVarient || 'text1'}
                color={props.loadingColor || color || _color || 'white'}>
                {props.title}
              </Typography>
            </View>
          )}
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 20,
    overflow: 'hidden',
  },
  innerCont: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: 'med',
    color: 'white',
  },
});

export default Btn;
