import React from 'react';
import {
  TextInput as DefaultTextInput,
  TextInputProps as DefaultTextInputProps,
  ViewStyle,
} from 'react-native';

export type TextInputProps = DefaultTextInputProps & ViewStyle;

export function TextInput({ style, ...rest }: TextInputProps) {
  return (
    <DefaultTextInput
      style={[
        {
          flex: 1,
          borderRadius: 30,
          padding: 10,
          fontSize: 16,
          fontWeight: '500',
          backgroundColor: '#fff',
        },
        style,
      ]}
      {...rest}
    />
  );
}
