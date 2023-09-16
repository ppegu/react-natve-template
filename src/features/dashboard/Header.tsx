import React from 'react';
import { Icon } from 'src/components/Icon';
import { TextInput } from 'src/theme/Input';
import { Center, Row, View } from 'src/theme/View';
import { hp } from 'src/theme/responsive';

export default function Header() {
  return (
    <View position="relative">
      <View
        position="absolute"
        left={0}
        right={0}
        bottom="auto"
        height={hp('10%')}
      >
        <Row padding={10} alignItems="center">
          <View flex={6}>
            <TextInput placeholder="Search Pairs" paddingLeft={20} />
          </View>
          <Center flex={1}>
            <Icon name="account-circle" size={40} />
          </Center>
        </Row>
      </View>
    </View>
  );
}
