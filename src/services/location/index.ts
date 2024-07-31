import Geolocation from 'react-native-geolocation-service';

import {getLocationPermission} from 'services/permissions';

export const getLocation = async (
    setLocation: React.Dispatch<
        React.SetStateAction<{
            latitude: number;
            longitude: number;
        }>
    >,
): Promise<void> => {
    const access = await getLocationPermission();
    if (access) {
        Geolocation.getCurrentPosition(
            (position) => {
                setLocation({latitude: position.coords.latitude, longitude: position.coords.longitude});
            },
            (error) => {
                console.error(error.code, error.message);
                setLocation({latitude: 0, longitude: 0});
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
    }
};
