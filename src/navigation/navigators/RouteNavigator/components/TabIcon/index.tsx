/* eslint-disable no-magic-numbers */
import React, {useEffect, useRef, FC} from 'react';
import {Animated} from 'react-native';
import {Icon} from '@rneui/themed';

import {colors} from 'assets/colors';

import styles from './styles';

const TabIcon: FC<{focused: boolean; name: string; type: string}> = ({focused, name, type}) => {
    const scaleRef = useRef(new Animated.Value(0)).current;
    const inputRange = [0, 1];
    const outputRange = [1.15, 1];
    const scale = scaleRef.interpolate({inputRange, outputRange});

    useEffect(() => {
        if (focused) {
            Animated.spring(scaleRef, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.spring(scaleRef, {
                toValue: 1,
                useNativeDriver: true,
            }).start();
        }
    }, [focused]);

    const color = focused ? colors.blue : colors.grey;
    return (
        <Animated.View style={[styles.container, {transform: [{scale}]}]}>
            <Icon size={30} type={type} name={name} color={color} />
        </Animated.View>
    );
};
export default TabIcon;
