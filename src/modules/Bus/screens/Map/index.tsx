import React from 'react';
import {View, Image, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {RouteNavigatorParamList} from 'navigation/types';

import {getSelectedBus} from 'modules/Bus/redux/selectors';

import images from 'assets/images';

import BusRouteInfo from '../components/BusRouteInfo';

import useCurrentLocation from './hooks/useCurrentLocation';
import styles from './styles';

type Props = NativeStackScreenProps<RouteNavigatorParamList, 'Map'>;

const Map: React.FC<Props> = () => {
    const bus = useSelector(getSelectedBus);
    const {longitude, latitude} = useCurrentLocation();

    if (!bus) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.busRouteContainer}>
                <BusRouteInfo bus={bus} />
                <View style={styles.speedContainer}>
                    <View style={styles.images}>
                        <Image style={{width: '100%', height: '100%'}} source={images.speedometer} />
                    </View>
                    <Text>{bus.speed}kmph</Text>
                </View>
            </View>
            <MapView
                style={{width: '100%', height: '100%'}}
                initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.0421,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
                showsCompass={true}
                scrollEnabled={true}
                zoomEnabled={true}
                pitchEnabled={true}
                rotateEnabled={true}
            >
                <Marker coordinate={{latitude, longitude}} />
            </MapView>
        </View>
    );
};

export default Map;
