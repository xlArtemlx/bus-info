import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {rootNavigationRef} from 'services/navigation';

import Bus from 'modules/Bus/screens/Bus';

import {colors} from 'assets/colors';

import {RootStackParamList} from './types';
import {screensName} from './screensName';
import RouteNavigator from './navigators/RouteNavigator';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
    return (
        <NavigationContainer ref={rootNavigationRef}>
            <RootStack.Navigator>
                <RootStack.Screen
                    name={screensName.buses}
                    component={Bus}
                    options={{
                        headerTitle: 'Select your route',
                        gestureEnabled: false,
                        headerStyle: {
                            backgroundColor: colors.aliceBlue,
                        },
                        headerTitleStyle: {
                            fontSize: 26,
                            fontWeight: '500',
                        },
                        headerShadowVisible: false,
                    }}
                />
                <RootStack.Screen
                    name={screensName.routeNavigator}
                    component={RouteNavigator}
                    options={{
                        gestureEnabled: false,
                        headerShown: false,
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
