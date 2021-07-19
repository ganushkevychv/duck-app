import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, BottomNavigation, BottomNavigationTab, IconRegistry, Icon } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ImageProps } from 'react-native';
import { RenderProp } from '@ui-kitten/components/devsupport';
import DuckImage from './src/components/Images/DuckImage';

const DuckScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
    <Text category="h1">Talk to me</Text>
    <DuckImage/>
  </Layout>
);

const InfoScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
    <Text category='h1'>Rubber Duck Debugging</Text>
    <Layout style={{ maxWidth: 500 }}>
      <Text category="p1">
        Explain to the duck what your code is supposed to do,
        and then go into detail and explain your code line by line.
        At some point, you will tell the duck what you are doing next and
        then realize that that is not in fact what you are actually doing.
        The duck will sit there serenely, happy in the knowledge that it has helped
        you on your way.
      </Text>
    </Layout>
  </Layout>
);

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