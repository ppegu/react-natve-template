import React from 'react';
import Container from 'src/components/Container';
import { View } from 'src/theme/View';
import Header from './Header';
import HomeBanners from './Banners';
import { hp } from 'src/theme/responsive';

export default function DashboardScreen() {
  return (
    <Container>
      <Header />
      <View marginTop={hp('10%')} />
      <HomeBanners />
    </Container>
  );
}
