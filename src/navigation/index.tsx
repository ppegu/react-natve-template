import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from 'src/features/auth/Login';
import BottomTab from './Bottomtab';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
        }}
        initialRouteName="bottomtab">
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="bottomtab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
