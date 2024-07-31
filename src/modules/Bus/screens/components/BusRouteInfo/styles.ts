/* eslint-disable no-magic-numbers */
import {StyleSheet} from 'react-native';

import {colors} from 'assets/colors';

const styles = StyleSheet.create({
    routeContainer: {
        backgroundColor: colors.blue,
        paddingLeft: 15,
        width: 228,
        height: 47,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        justifyContent: 'center',
    },
    routeText: {
        fontSize: 9,
        color: colors.white,
    },
    ex: {
        fontSize: 18,
        color: colors.white,
        fontWeight: '500',
    },
});

export default styles;
