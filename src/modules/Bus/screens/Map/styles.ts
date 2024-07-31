/* eslint-disable no-magic-numbers */
import {StyleSheet} from 'react-native';

import {colors} from 'assets/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.aliceBlue,
    },
    busRouteContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
    },
    images: {
        width: 30,
        height: 30,
        marginRight: 8,
    },
    speedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 15,
    },
});

export default styles;
