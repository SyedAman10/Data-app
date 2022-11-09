import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TouchableComponent from '../touchable/touchable-component';
import {useTheme} from '@react-navigation/native';

const Typography = (props: any) => {
  const theme = useTheme();
  const {
    children,
    varient,
    color,
    textAlign,
    spacing,
    spacingTop,
    spacingBottom,
    singleLine,
    onTap,
    style,
    numberOfLines,
  } = props;
  if (onTap) {
    return (
      <TouchableComponent onTap={onTap}>
        <View>
          <Text
            numberOfLines={
              singleLine ? 1 : numberOfLines ? numberOfLines : undefined
            }
            style={{
              ...styles[varient ? varient : 'text2'],
              ...{
                color: color || theme.colors.text,
                marginTop: spacingTop || spacing || 0,
                marginBottom: spacingBottom || spacing || 0,
                textAlign: textAlign,
              },
              ...style,
            }}>
            {children}
          </Text>
        </View>
      </TouchableComponent>
    );
  }
  return (
    <Text
      numberOfLines={singleLine ? 1 : numberOfLines ? numberOfLines : undefined}
      style={{
        ...styles[varient ? varient : 'text2'],
        ...{
          color: color || theme.colors.text,
          marginTop: spacingTop || spacing || 0,
          marginBottom: spacingBottom || spacing || 0,
          textAlign: textAlign,
        },
        ...style,
      }}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontFamily: 'Nunito-ExtraBold',
  },
  heading: {
    fontSize: 30,
    fontFamily: 'Nunito-ExtraBold',
    fontWeight: '700',
  },
  heading2: {
    fontSize: 25,
    fontFamily: 'Nunito-SemiBold',
  },
  subheading1: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
  },
  subheading2: {
    fontSize: 15,
    fontFamily: 'Nunito-SemiBold',
  },
  text1: {
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
  },
  text2: {
    fontSize: 10,
    fontFamily: 'Nunito-Regular',
  },
  subheading1strong: {
    fontSize: 20,
    fontFamily: 'Nunito-ExtraBold',
  },
  subheading2strong: {
    fontSize: 15,
    fontFamily: 'Nunito-ExtraBold',
  },
  text1strong: {
    fontSize: 12,
    fontFamily: 'Nunito-ExtraBold',
  },
  text2strong: {
    fontSize: 10,
    fontFamily: 'Nunito-ExtraBold',
  },
});

export default Typography;

