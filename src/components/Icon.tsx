import React from 'react';
import { IconProps } from 'react-native-vector-icons/Icon';
import { default as DefaultIcon } from 'react-native-vector-icons/MaterialIcons';

export function Icon({ ...rest }: IconProps) {
  return <DefaultIcon {...rest} />;
}

export function BottomtabIcon({ ...rest }: IconProps) {
  return <Icon {...rest} />;
}
