import React from 'react';
import { Image } from 'react-native';

const DuckImage: React.FC  = (props) => <Image style={{width: 300, height: 300, marginVertical: 50}} {...props} source={require('../../../assets/duck.svg')} />;

export default DuckImage;