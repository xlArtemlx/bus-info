import React from 'react';
import {View, Text} from 'react-native';

import {Bus} from 'modules/Bus/core/types';

import styles from './styles';

type Props = {
    bus: Bus;
};

const BusRouteInfo: React.FC<Props> = ({bus}) => {
    const {delivery, pickUp, ex} = bus;
    return (
        <View style={styles.routeContainer}>
            <Text style={styles.ex}>EX {ex}</Text>
            <Text style={styles.routeText}>{`${pickUp} - ${delivery}`}</Text>
        </View>
    );
};

export default BusRouteInfo;
