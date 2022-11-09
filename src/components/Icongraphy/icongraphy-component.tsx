import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {useTheme} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

const iconFamilies: any = {
  AntDesign: AntDesign,
  Entypo: Entypo,
  EvilIcons: EvilIcons,
  Feather: Feather,
  FontAwesome: FontAwesome,
  FontAwesome5: FontAwesome5,
  FontAwesome5Pro: FontAwesome5Pro,
  Fontisto: Fontisto,
  Foundation: Foundation,
  Ionicons: Ionicons,
  MaterialCommunityIcons: MaterialCommunityIcons,
  MaterialIcons: MaterialIcons,
  Octicons: Octicons,
  SimpleLineIcons: SimpleLineIcons,
  Zocial: Zocial,
};

function iconfamily(type: any) {
  return iconFamilies[type];
}

const Icongraphy = (props: any) => {
  const {family, name, color, varient, size, style, onTap} = props;
  const theme = useTheme();
  const Icon = iconfamily(family);
  let _style = undefined;
  let _Icon = null;
  if (varient == 'mark') {
    _style = {
      backgroundColor: theme.colors.primary,
      borderRadius: 1,
      marginHorizontal: 5,
    };
  }
  if (family !== 'svg') {
    let myIcon = (
      <Icon
        name={name}
        color={color || theme.colors.text}
        size={varient == 'mark' ? 10 : size || 24}
        style={{..._style, ...style}}
      />
    );
    return onTap ? (
      <TouchableWithoutFeedback onPress={onTap}>
        {myIcon}
      </TouchableWithoutFeedback>
    ) : (
      myIcon
    );
  }
};
export default Icongraphy;
