import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Dialog from 'react-native-dialog';
import {useTheme} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const DialogBox = (props: any) => {
  const {
    open,
    title,
    okBtnLabel,
    cancelBtnLabel,
    description,
    icon,
    onOkBtnTap,
    onCancelBtnTap,
    onClose,
    input,
  } = props;
  const theme = useTheme();

  const [visible, setVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [value, setValue] = useState();

  let mark = null;

  //   if (icon == 'success') {
  //     mark = require('../assets/lottie/success.json');
  //   }
  //   if (icon == 'info') {
  //     mark = require('../assets/lottie/info.json');
  //   }
  //   if (icon == 'warning') {
  //     mark = require('../assets/lottie/warning.json');
  //   }
  //   if (icon == 'error') {
  //     mark = require('../assets/lottie/error.json');
  //   }

  useEffect(() => {
    if (!isReady) {
      setIsReady(true);
    } else {
      if (open) {
        setVisible(true);
        setValue(true);
      }
    }
  }, [open]);

  function dismiss(status = false) {
    setVisible(false);
    if (input) {
      if (onClose) onClose(value, status);
    } else {
      if (onClose) onClose(status);
    }
  }
  return (
    <Dialog.Container
      contentStyle={{backgroundColor: theme.colors.card}}
      visible={visible}
      onBackdropPress={() => {
        dismiss();
      }}
      onRequestClose={() => {
        dismiss();
      }}>
      <View style={styles.icon}>
        {mark ? (
          <LottieView
            source={mark}
            autoPlay
            loop={false}
            resizeMode="contain"
            style={{
              minWidth: 56,
              minHeight: 56,
              position: 'relative',
              marginBottom: 10,
            }}
          />
        ) : null}
        <Dialog.Title style={{color: theme.colors.text}}>{title}</Dialog.Title>
        <Dialog.Description>{description}</Dialog.Description>
        {input ? (
          <View style={{width: '100%', alignItems: 'center'}}>
            <TextInput
              onChangeText={val => setValue(val)}
              maxLength={32}
              autoFocus
              style={{
                color: 'black',
                width: '90%',
                // textAlign: 'center',
                borderBottomWidth: 1,
              }}
            />
          </View>
        ) : null}
        <View style={styles.btns}>
          {cancelBtnLabel ? (
            <Dialog.Button
              label={cancelBtnLabel}
              color={theme.colors.primary}
              onPress={() => {
                dismiss();
                if (onCancelBtnTap) onCancelBtnTap();
              }}
            />
          ) : null}
          <View style={{marginHorizontal: 10}} />
          {okBtnLabel ? (
            <Dialog.Button
              label={okBtnLabel}
              color={theme.colors.primary}
              onPress={() => {
                dismiss(true);
                if (onOkBtnTap) onOkBtnTap();
              }}
            />
          ) : null}
        </View>
      </View>
    </Dialog.Container>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: '100%',
    alignItems: 'center',
  },
  btns: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    paddingRight: 10,
  },
});

export function getDialogConfig(
  open = false,
  title = '',
  description = '',
  buttons = {
    okBtn: {
      label: '',
      onTap: () => {},
    },
    cancelBtn: {
      label: '',
      onTap: () => {},
    },
  },
  icon = 'null',
  onClose = () => {},
  input = null,
) {
  if (open == false) {
    return {
      open: false,
    };
  } else {
    return {
      open: true,
      title,
      description,
      okBtnLabel: buttons.okBtn ? buttons.okBtn.label : null,
      onOkBtnTap: buttons.okBtn ? buttons.okBtn.onTap : () => {},
      cancelBtnLabel: buttons.cancelBtn ? buttons.cancelBtn.label : null,
      onCancelBtnTap: buttons.cancelBtn ? buttons.cancelBtn.onTap : () => {},
      icon,
      onClose: onClose ? onClose : () => {},
      input,
    };
  }
}

export default DialogBox;
