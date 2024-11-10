import React from "react";
import { ActivityIndicator, TouchableHighlightProps, TouchableOpacity, Text} from 'react-native'
import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

type Props = TouchableHighlightProps & {
    text: string,
    loading?: boolean
}

export function Button({...rest}: Props) {
    return (
        <TouchableOpacity
            {...rest} 
            style={style.button}
            activeOpacity={0.6}
        >
            {rest.loading?<ActivityIndicator />:<Text style={style.textButton}>{rest.text}</Text>}
        </TouchableOpacity>
    )
}

export const style = StyleSheet.create({
    button: {
        width: 230,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.darkblue,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        textShadowRadius: 4.65,
        elevation: 7,
    },
    textButton: {
        fontSize: 16,
        color: "#ffff",
        fontWeight: 'bold'
    },
})