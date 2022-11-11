import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

const TouchableComponent = (props: any) => {
  const {disabled, rippleColor, noFeedback, feedback, onLongTap} = props;

  if (feedback == 'opacity') {
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={props.onTap}
        onLongPress={onLongTap}
        style={{flex: 1}}>
        {props.children}
      </TouchableOpacity>
    );
  }
  if (feedback == 'hilight') {
    return (
      <TouchableHighlight
        disabled={disabled}
        onPress={props.onTap}
        onLongPress={onLongTap}
        style={{flex: 1}}>
        {props.children}
      </TouchableHighlight>
    );
  }
  if (noFeedback) {
    return (
      <TouchableWithoutFeedback
        disabled={disabled}
        onPress={props.onTap}
        onLongPress={onLongTap}
        style={{flex: 1}}>
        {props.children}
      </TouchableWithoutFeedback>
    );
  }
  if (Platform.OS === 'ios') {
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={props.onTap}
        onLongPress={onLongTap}
        style={{flex: 1}}>
        {props.children}
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableNativeFeedback
        disabled={disabled}
        background={TouchableNativeFeedback.Ripple(
          rippleColor === undefined ? 'rgba(0,0,0,.1)' : rippleColor,
          false,
        )}
        onPress={props.onTap}
        onLongPress={onLongTap}
        style={{flex: 1}}>
        {props.children}
      </TouchableNativeFeedback>
    );
  }
};

export default TouchableComponent;
