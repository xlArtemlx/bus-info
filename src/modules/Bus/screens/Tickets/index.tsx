import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import {RouteNavigatorParamList} from 'navigation/types';

import {getSelectedBus} from 'modules/Bus/redux/selectors';

import {useFetchBusTickets} from './hooks/useFetchBusTickets';
import TicketInfo from './components/TicketInfo';
import Seats from './components/Seats';
import styles from './styles';

type Props = StackScreenProps<RouteNavigatorParamList, 'Tickets'>;

const Tickets: React.FC<Props> = () => {
    useFetchBusTickets();
    const bus = useSelector(getSelectedBus);

    if (!bus) {
        return null;
    }

    return (
        <View style={styles.container}>
            <TicketInfo bus={bus} />
            <Seats />
        </View>
    );
};

export default Tickets;
