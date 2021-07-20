import React from 'react'
import { Layout, Text } from '@ui-kitten/components';
import DuckImage from '../components/Images/DuckImage';

const DuckScreen = () => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Text category="h1">Talk to me</Text>
        <DuckImage/>
    </Layout>
);

export default DuckScreen;