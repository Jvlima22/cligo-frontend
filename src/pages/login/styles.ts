import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EFF6FE',
    },
    boxTop: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid: {
        height: Dimensions.get('window').height/4,
        width: '100%',
        paddingHorizontal: 37
    },
    boxBottom: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        marginTop: 30
    },
    logo: {
        width: 400,
        height: 200
    },
    text: {
        fontWeight: 'bold',
        marginTop: -20,
        fontSize: 18
    },
    button: {
        width: 230,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.primary,
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
    textBottom: {
        fontSize: 16,
        marginTop: -100
    },
    boxButtonPassword:{
        marginTop: 4
    }
})