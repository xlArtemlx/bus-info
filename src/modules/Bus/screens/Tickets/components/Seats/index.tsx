import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useSelector} from 'react-redux';

import {getIsTicketsLoading, getTickets} from 'modules/Bus/redux/selectors';

import {colors} from 'assets/colors';

import styles from './styles';
import {getSeparatedSeatsByColums} from './utils';
import Column from './components/Column';

const Seats: React.FC = () => {
    const tickets = useSelector(getTickets);
    const isLoading = useSelector(getIsTicketsLoading);
    const seats = getSeparatedSeatsByColums(tickets);

    if (isLoading) {
        return <ActivityIndicator size="large" color={colors.blue} />;
    }

    return (
        <View style={styles.container}>
            <Column column={seats.firstColumn} />
            <Column column={seats.secondColumn} />
        </View>
    );
};

export default Seats;
