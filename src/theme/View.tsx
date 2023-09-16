import React from 'react';
import {
  View as DefaultView,
  ViewProps as DefaultViewProps,
  ViewStyle,
} from 'react-native';

export type ViewProps = DefaultViewProps & ViewStyle;

export function View({ style, ...props }: ViewProps) {
  const defaultStyle: ViewStyle = {
    ...props,
    backgroundColor: props.backgroundColor || 'transparent',
  };

  return <DefaultView {...props} style={[style, defaultStyle]} />;
}

export function Center({ children, ...rest }: ViewProps) {
  return (
    <View flex={1} justifyContent="center" alignItems="center" {...rest}>
      {children}
    </View>
  );
}

export function Row({ children, ...rest }: ViewProps) {
  return (
    <View flexDirection="row" {...rest}>
      {children}
    </View>
  );
}
