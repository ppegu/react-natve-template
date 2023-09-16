import React from 'react';
import Navigation from './navigation';
import { View } from './theme/View';
import { BACKGROUND_COLOR } from './utils/color.util';

export default function App() {
  return (
    <View flex={1} backgroundColor={BACKGROUND_COLOR}>
      <Navigation />
    </View>
  );
}
