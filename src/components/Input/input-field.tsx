import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {dimensions} from '../../infrastructure/theme/baseStyles';
import {useTheme} from '@react-navigation/native';

const InputField = (props: any) => {
  const {
    inputref,
    type,
    value,
    onChange,
    onChangeText,
    label,
    placeholder,
    keyboardType,
    returnKeyType,
    textContentType,
    disabled,
    editable,
    error,
    maxLength,
    multiline,
    numberOfLines,
    mode,
    outlineColor,
    placeholderTextColor,
    onScroll,
    onSubmitEditing,
    onFocus,
    onBlur,
    secureTextEntry,
    selectionColor,
    removeClippedSubviews,
    selectTextOnFocus,
    textAlign,
    theme,
    style,
    right,
    spacing,
    spacingTop,
    spacingBottom,
    status,
    backgroundColor,
    enablesReturnKeyAutomatically,
    blurOnSubmit,
  } = props;
  const [_status, setStatus] = useState(status || false);
  const {colors} = useTheme();

  return (
    <>
      {type === 'text' && (
        <TextInput
          backgroundColor={backgroundColor}
          ref={inputref}
          value={value}
          onChange={onChange}
          onChangeText={onChangeText}
          label={label}
          placeholder={placeholder}
          keyboardType={keyboardType}
          enablesReturnKeyAutomatically={enablesReturnKeyAutomatically}
          returnKeyType={returnKeyType}
          textContentType={textContentType}
          disabled={disabled}
          editable={editable}
          error={error}
          maxLength={maxLength}
          multiline={multiline}
          numberOfLines={numberOfLines}
          mode={mode || 'outlined'}
          outlineColor={outlineColor || colors.text}
          placeholderTextColor={placeholderTextColor || colors.text}
          onScroll={onScroll}
          onSubmitEditing={onSubmitEditing}
          onFocus={onFocus}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
          selectionColor={selectionColor || colors.primary}
          removeClippedSubviews={removeClippedSubviews}
          blurOnSubmit={blurOnSubmit}
          selectTextOnFocus={selectTextOnFocus}
          activeOutlineColor={colors.text}
          textAlign={textAlign}
          right={
            right ? (
              <TextInput.Icon
                name={() => (
                  <View
                    style={{
                      flex: 1,
                      height: '100%',
                      justifyContent: 'center',
                    }}>
                    {right}
                  </View>
                )}
                onPress={() => {}}
                style={{
                  top: '20%',
                }}
              />
            ) : undefined
          }
          theme={
            theme || {
              colors: {
                primary: colors.text,
                text: colors.text,
                accent: colors.text,
                placeholder: colors.text,
                background: 'transparent',
              },
              roundness: 10,
            }
          }
          style={{
            ...styles.field,
            ...{
              backgroundColor: colors.background,
              color: colors.text,
              marginVertical: spacing ? spacing : 0,
              marginTop: spacingTop ? spacingTop : 0,
              marginBottom: spacingBottom ? spacingBottom : 0,
              minHeight: multiline ? 180 : undefined,
              height: multiline ? 180 : undefined,
            },
            ...style,
          }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  field: {
    width: dimensions.width / 1.3,
    height: 45,
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    minWidth: dimensions.width / 2.2,
  },
});

export default InputField;
