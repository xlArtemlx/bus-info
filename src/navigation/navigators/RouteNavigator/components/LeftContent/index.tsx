import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

import BackButton from 'navigation/components/BackButton';

import {getLabel} from './utils';
import styles from './styles';

const LeftContent: React.FC = () => {
    const route = useRoute();
    const label = getLabel(route.name);
    return (
        <View style={styles.container}>
            <BackButton />
            <Text style={styles.labelText}>{label}</Text>
        </View>
    );
};

export default LeftContent;
