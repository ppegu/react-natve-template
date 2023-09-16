import React from 'react';
import { StatusBar } from 'react-native';
import { View, ViewProps } from 'src/theme/View';
import { STATUSBAR_HEIGHT } from 'src/utils/constant.util';

export default function Container({ children, ...rest }: ViewProps) {
  return (
    <View
      flex={1}
      {...rest}
      paddingTop={StatusBar.currentHeight || STATUSBAR_HEIGHT}>
      {children}
    </View>
  );
}
