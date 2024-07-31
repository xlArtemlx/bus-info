import React, {useCallback} from 'react';
import {FlatList, TouchableOpacity, Text, ListRenderItemInfo} from 'react-native';

import {goToMap} from 'services/navigation';

import {Ticket} from 'modules/Bus/core/types';

import {colors} from 'assets/colors';

import styles from './styles';

type Props = {
    column: Ticket[];
};

const Column: React.FC<Props> = ({column}) => {
    const handleOpenMap = (): void => {
        goToMap();
    };

    const renderItem = useCallback(({item}: ListRenderItemInfo<Ticket>): JSX.Element => {
        const backgroundColor = item.isBooked ? colors.cornFlowerBlue : colors.white;
        return (
            <TouchableOpacity style={[styles.item, {backgroundColor}]} onPress={handleOpenMap}>
                <Text style={styles.itemText}>{item.number}</Text>
            </TouchableOpacity>
        );
    }, []);

    const keyExtractor = useCallback((item: Ticket) => item.seatId, []);

    return (
        <FlatList
            data={column}
            scrollEnabled={false}
            contentContainerStyle={{alignItems: 'center'}}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapperStyle}
        />
    );
};

export default Column;
