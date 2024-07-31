/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {screensName} from 'navigation/screensName';
import {RouteNavigatorParamList} from 'navigation/types';

import Tickets from 'modules/Bus/screens/Tickets';
import Map from 'modules/Bus/screens/Map';
import Info from 'modules/Bus/screens/Info';

import {colors} from 'assets/colors';

import LeftContent from './components/LeftContent';
import TabIcon from './components/TabIcon';

const Tab = createBottomTabNavigator<RouteNavigatorParamList>();

const RouteNavigator: React.FC = () => {
    const materialIcons = (focused: boolean, name: string, type): JSX.Element => {
        return <TabIcon focused={focused} name={name} type={type} />;
    };

    return (
        <Tab.Navigator
            initialRouteName={screensName.tickets}
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.aliceBlue,
                },
                headerTitleStyle: {
                    display: 'none',
                },
                tabBarShowLabel: false,
                headerLeft: LeftContent,
                headerShadowVisible: false,
            }}
        >
            <Tab.Screen
                name={screensName.tickets}
                component={Tickets}
                options={{
                    tabBarIcon: ({focused}) => materialIcons(focused, 'bus', 'material-community'),
                }}
            />
            <Tab.Screen
                name={screensName.map}
                component={Map}
                options={{
                    tabBarIcon: ({focused}) => materialIcons(focused, 'map-search-outline', 'material-community'),
                }}
            />
            <Tab.Screen
                name={screensName.info}
                component={Info}
                options={{
                    tabBarIcon: ({focused}) => materialIcons(focused, 'infocirlceo', 'ant-design'),
                }}
            />
        </Tab.Navigator>
    );
};

export default RouteNavigator;
