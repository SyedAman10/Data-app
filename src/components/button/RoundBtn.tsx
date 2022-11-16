import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import TouchableComponent from '../touchable/TouchableComponent';
import {useTheme} from '@react-navigation/native';

const RoundBtn = (props: any) => {
  const theme = useTheme();
  return (
    <View style={{...styles.container, ...props.style}} key={props.index}>
      <TouchableComponent
        onTap={props.onTap}
        disabled={props.disabled || props.isLoading}>
        <View style={{...styles.innerCont, ...props.innerContStyle}}>
          {props.isLoading ? (
            <ActivityIndicator
              size="small"
              color={theme.dark ? 'black' : 'white'}
            />
          ) : (
            props.children
          )}
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  innerCont: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RoundBtn;
