/* eslint-disable no-magic-numbers */
import {StyleSheet} from 'react-native';

import {colors} from 'assets/colors';

const styles = StyleSheet.create({
    container: {
        height: 346,
        width: 271,
        backgroundColor: colors.whiteSmoke,
        marginBottom: 20,
        borderRadius: 20,
        overflow: 'hidden',
    },
    header: {
        backgroundColor: colors.blue,
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 6,
    },
    route: {
        flexDirection: 'row',
    },
    routeText: {
        fontSize: 14,
        color: colors.white,
    },
    ex: {
        fontSize: 25,
        color: colors.white,
        marginBottom: 2,
        fontWeight: '500',
    },
    img: {
        width: '100%',
        height: '100%',
    },
});

export default styles;
