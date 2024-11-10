import React from "react";
import { TouchableHighlightProps, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

type Props = TouchableHighlightProps & {
    IconName: "ellipsis-vertical";
    IconColor?: string;
}

export function BottomMenu({ IconName, IconColor = "#fff", ...rest }: Props) {
    return (
        <TouchableOpacity
            {...rest}
            style={style.button}
            activeOpacity={0.6}
        >
            <Ionicons name={IconName} size={22} color={IconColor} style={style.icon} />
        </TouchableOpacity>
    );
}

export const style = StyleSheet.create({
    button: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.darkblue,
        borderRadius: 40,
        borderWidth: 2, 
        borderColor: 'white', 
        marginTop: 20,
        marginLeft: 36,
        zIndex: 10, 
    },
    icon: {
        justifyContent: 'center'
    }
});
