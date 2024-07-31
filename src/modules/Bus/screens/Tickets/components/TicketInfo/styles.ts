/* eslint-disable no-magic-numbers */
import {StyleSheet} from 'react-native';

import {colors} from 'assets/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 18,
    },
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
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    box: {
        width: 23,
        height: 23,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 21,
        marginBottom: 5,
    },
    text: {
        fontSize: 13,
        fontWeight: '300',
    },
});

export default styles;
