import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBar from './BottomTabBar';
import DuckScreen from '../screens/DuckScreen';
import InfoScreen from '../screens/InfoScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Screen name='Duck' component={DuckScreen}/>
        <Screen name='Info' component={InfoScreen}/>
    </Navigator>
);

export default TabNavigator;