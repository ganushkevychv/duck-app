import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';

const DuckScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Duck goes here</Text>
  </Layout>
);

const InfoScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Info goes here</Text>
  </Layout>
);

const BottomTabBar: React.FC<BottomTabBarProps> = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='DUCK'/>
    <BottomNavigationTab title='INFO'/>
  </BottomNavigation>
);

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Duck' component={DuckScreen}/>
    <Screen name='Info' component={InfoScreen}/>
  </Navigator>
);

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>
    </ApplicationProvider>
  );
}