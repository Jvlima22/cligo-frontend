import { StyleSheet } from "react-native";
import { themes } from "../../../global/themes";

export const style = StyleSheet.create({
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderColor: themes.colors.lightGray,
    },
    input: {
        height: '100%',
        width: '90%',
        borderRadius: 20,
    },
    titleInput: {
        marginLeft: 5,
        marginTop: 20
    },
    Icon: {
        width: '100%'
    },
    Button:{
        width: '10%'
    }
})