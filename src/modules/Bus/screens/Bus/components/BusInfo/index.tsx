import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {goToBusRoute} from 'services/navigation';

import {Bus} from 'modules/Bus/core/types';
import {useBusActions} from 'modules/Bus/hooks/useBusActions';

import images from 'assets/images';

import styles from './styles';

type Props = {
    bus: Bus;
};

const BusInfo: React.FC<Props> = ({bus}) => {
    const {pickUp, delivery, ex} = bus;
    const {selectBus} = useBusActions();

    const handleOpenTickets = (): void => {
        goToBusRoute();
        selectBus(bus);
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handleOpenTickets}>
            <View style={styles.header}>
                <Text style={styles.ex}>EX {ex}</Text>
                <View style={styles.route}>
                    <Text style={styles.routeText}>{`${pickUp} - ${delivery}`}</Text>
                </View>
            </View>
            <Image source={images.busImg} style={styles.img} resizeMode="contain" />
        </TouchableOpacity>
    );
};

export default BusInfo;
