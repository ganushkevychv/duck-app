import React from 'react';
import { RenderProp } from '@ui-kitten/components/devsupport';
import { ImageProps } from 'react-native';
import { Icon } from '@ui-kitten/components';

const BirdIcon: RenderProp<Partial<ImageProps>> = (props) => (
    <Icon {...props} name='twitter-outline'/>
);

export default BirdIcon;