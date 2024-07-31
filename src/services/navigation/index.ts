import {createNavigationContainerRef} from '@react-navigation/native';

import {RootStackParamList} from 'navigation/types';
import {screensName} from 'navigation/screensName';

export const rootNavigationRef = createNavigationContainerRef<RootStackParamList>();

export const goToBusRoute = (): void => {
    if (rootNavigationRef.isReady()) {
        rootNavigationRef.navigate(screensName.routeNavigator, {screen: screensName.tickets});
    }
};

export const goToMap = (): void => {
    if (rootNavigationRef.isReady()) {
        rootNavigationRef.navigate(screensName.routeNavigator, {screen: screensName.map});
    }
};

export const goBack = (): void => {
    if (rootNavigationRef.isReady()) {
        rootNavigationRef.goBack();
    }
};
