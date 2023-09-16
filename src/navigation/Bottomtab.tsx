import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { BottomtabIcon } from 'src/components/Icon';
import DashboardScreen from 'src/features/dashboard';
import routes from './routes';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={routes.bottomtab.Home}
        component={DashboardScreen}
        options={{
          tabBarIcon: props => <BottomtabIcon {...props} name="home" />,
        }}
      />
    </Tab.Navigator>
  );
}
