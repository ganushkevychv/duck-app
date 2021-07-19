import React from 'react';
import Duck from '../../../assets/duck.svg';

const DuckImage: React.FC = (props) => <Duck style={{width: 300, height: 300, marginVertical: 50}} {...props}/>;

export default DuckImage;