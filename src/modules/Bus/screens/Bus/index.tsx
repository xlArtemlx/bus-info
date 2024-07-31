import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, ListRenderItemInfo, View} from 'react-native';
import {useSelector} from 'react-redux';

import {getBuses, getIsBusesLoading} from 'modules/Bus/redux/selectors';
import {Bus as BusType} from 'modules/Bus/core/types';

import {colors} from 'assets/colors';

import BusInfo from './components/BusInfo';
import {useFetchBuses} from './hooks/useFetchBuses';
import styles from './styles';

const Bus: React.FC = () => {
    useFetchBuses();
    const buses = useSelector(getBuses);
    const isBusesLoading = useSelector(getIsBusesLoading);

    const renderItem = useCallback(({item}: ListRenderItemInfo<BusType>): JSX.Element => {
        return <BusInfo bus={item} />;
    }, []);

    const keyExtractor = useCallback((item: BusType) => item.id, []);

    const renderLoader = useCallback((): React.ReactElement | null => {
        return isBusesLoading ? (
            <View>
                <ActivityIndicator size="large" color={colors.blue} />
            </View>
        ) : null;
    }, [isBusesLoading]);

    return (
        <FlatList
            data={buses}
            style={styles.container}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListFooterComponent={renderLoader}
            contentContainerStyle={styles.listContainer}
            ListFooterComponentStyle={{marginBottom: 40}}
        />
    );
};

export default Bus;
