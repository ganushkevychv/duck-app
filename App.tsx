import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, IconRegistry, Icon } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ImageProps } from 'react-native';
import { RenderProp } from '@ui-kitten/components/devsupport';
import DuckScreen from './src/screens/DuckScreen';
import InfoScreen from './src/screens/InfoScreen';

const BirdIcon: RenderProp<Partial<ImageProps>> = (props) => (
  <Icon {...props} name='twitter-outline'/>
);

const InfoIcon: RenderProp<Partial<ImageProps>>  = (props) => (
  <Icon {...props} name='info-outline'/>
);

const BottomTabBar: React.FC<BottomTabBarProps> = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='DUCK' icon={BirdIcon}/>
    <BottomNavigationTab title='INFO' icon={InfoIcon}/>
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
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <NavigationContainer>
          <TabNavigator/>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}