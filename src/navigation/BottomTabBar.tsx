import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import BirdIcon from '../components/Icons/BirdIcon';
import InfoIcon from '../components/Icons/InfoIcon';

const BottomTabBar: React.FC<BottomTabBarProps> = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='DUCK' icon={BirdIcon}/>
        <BottomNavigationTab title='INFO' icon={InfoIcon}/>
    </BottomNavigation>
);

export default BottomTabBar;