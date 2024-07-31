import {NavigatorScreenParams} from '@react-navigation/native';

export type RouteNavigatorParamList = {
    Tickets: undefined;
    Map: undefined;
    Info: undefined;
};

export type RootStackParamList = {
    Buses: undefined;
    RouteNavigator: NavigatorScreenParams<RouteNavigatorParamList>;
};
