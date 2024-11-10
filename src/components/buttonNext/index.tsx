import React from "react";
import { TouchableHighlightProps, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

type Props = TouchableHighlightProps & {
    IconName: string;
    IconColor?: string;
}

export function ButtonNext({ IconName, IconColor = "#022440", ...rest }: Props) {
    return (
        <TouchableOpacity
            {...rest}
            style={style.button}
            activeOpacity={0.6}
        >
            <Icon name={IconName} size={38} color={IconColor} style={style.icon} />
        </TouchableOpacity>
    );
}

export const style = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.Cyan,
        borderRadius: 40,
        shadowColor: "#sec",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        textShadowRadius: 4.65,
        elevation: 7,
    },
    icon: {
        textAlign: 'center',
    },
})