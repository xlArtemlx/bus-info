import {Platform} from 'react-native';
import {PERMISSIONS, RESULTS, openSettings, request} from 'react-native-permissions';

import {askModal} from 'modals/nativeModals/nativeModals';

export const getLocationPermission = async (): Promise<boolean> => {
    const permission =
        Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_ALWAYS : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

    const status = await request(permission);

    if (status === RESULTS.BLOCKED) {
        await askModal({
            titleText: 'Location permission',
            bodyText: 'Please allow location permission',
            onOkText: 'Open settings',
            onOkFunc: () => {
                openSettings().catch(() => console.warn('open settings error'));
            },
            onCloseText: 'Close',
        });
        return false;
    }

    const access = await request(permission);

    if (access === RESULTS.GRANTED) {
        return true;
    }
    return false;
};
