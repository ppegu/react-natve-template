import React from 'react';
import {
  View as DefaultView,
  ViewProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

type Props = ViewProps & ViewStyle;

export function View({ style, ...props }: Props) {
  const defaultStyle: ViewStyle = { ...props };

  return <DefaultView {...props} style={[style, defaultStyle]} />;
}

export function Center({ children, ...rest }: Props) {
  return (
    <View flex={1} justifyContent="center" alignItems="center" {...rest}>
      {children}
    </View>
  );
}

export function Row({ children, ...rest }: Props) {
  return (
    <View flex={1} flexDirection="row" {...rest}>
      {children}
    </View>
  );
}
