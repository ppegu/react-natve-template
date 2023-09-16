import React from 'react';
import { Text as DefaulText, TextProps, TextStyle } from 'react-native';

type Props = TextProps & TextStyle;

export function Text({ children, ...rest }: Props) {
  return (
    <DefaulText {...rest} style={[rest.style, rest]} children={children} />
  );
}
