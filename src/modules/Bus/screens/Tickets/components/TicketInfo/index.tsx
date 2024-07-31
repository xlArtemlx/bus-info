import React from 'react';
import {View, Text} from 'react-native';

import {Bus} from 'modules/Bus/core/types';
import BusRouteInfo from 'modules/Bus/screens/components/BusRouteInfo';

import {colors} from 'assets/colors';

import styles from './styles';

type Props = {
    bus: Bus;
};

const TicketInfo: React.FC<Props> = ({bus}) => {
    return (
        <View style={styles.container}>
            <BusRouteInfo bus={bus} />
            <View>
                <View style={styles.boxContainer}>
                    <Text style={styles.text}>Reserved</Text>
                    <View style={[styles.box, {backgroundColor: colors.cornFlowerBlue}]} />
                </View>
                <View style={styles.boxContainer}>
                    <Text style={styles.text}>Available</Text>
                    <View style={[styles.box, {backgroundColor: colors.white}]} />
                </View>
            </View>
        </View>
    );
};

export default TicketInfo;
