import {screensName} from 'navigation/screensName';

export const getLabel = (routeName: string): string => {
    if (routeName === screensName.tickets) {
        return 'Seat availability';
    }
    if (routeName === screensName.map) {
        return 'Location';
    }
    if (routeName === screensName.info) {
        return 'Info';
    }
    return '';
};
