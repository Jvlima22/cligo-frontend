import { StyleSheet } from "react-native";
import { themes } from "../../../global/themes";

export const style = StyleSheet.create({
    boxInput: {
        width: '100%',
        height: 54,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderColor: themes.colors.lightGray,
        backgroundColor: themes.colors.white
    },
    input: {
        height: '100%',
        width: '90%',
        borderRadius: 20,
    },
    titleInput: {
        marginLeft: 5,
        marginTop: 20,
        color: themes.colors.black
    },
    Icon: {
        width: '100%',
        color: themes.colors.primary
    },
    Button:{
        width: '10%'
    }
})