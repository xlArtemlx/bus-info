/* eslint-disable no-magic-numbers */
import {StyleSheet} from 'react-native';

import {colors} from 'assets/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
    },
    columnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    columnWrapperStyle: {
        marginBottom: 10,
    },
    item: {
        width: 47,
        height: 47,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
        marginBottom: 19,
        borderRadius: 8,
        backgroundColor: colors.white,
    },
    itemText: {
        fontSize: 19,
    },
});

export default styles;
