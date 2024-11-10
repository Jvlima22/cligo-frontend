import React from "react";
import { TouchableHighlightProps, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

type Props = TouchableHighlightProps & {
    IconName: "chevron-back" | "search"; 
    IconColor?: string;
}

export function ButtonBack({ IconName, IconColor = "#fff", ...rest }: Props) {
    return (
        <TouchableOpacity
            {...rest}
            style={IconName === "chevron-back" ? style.button : style.iconOnly} // Condicional para o estilo
            activeOpacity={0.6}
        >
            <Ionicons name={IconName} size={22} color={IconColor} style={style.icon} />
        </TouchableOpacity>
    );
}

export const style = StyleSheet.create({
    button: { // Estilo com círculo de fundo para "chevron-back"
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
    iconOnly: { // Estilo para "search" sem círculo de fundo
        marginTop: 20,
        marginLeft: 36,
    },
    icon: {
        justifyContent: 'center'
    }
});
