import React from 'react'
import { Layout, Text } from '@ui-kitten/components';

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

export default InfoScreen;