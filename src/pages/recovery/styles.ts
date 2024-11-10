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
        paddingHorizontal: 37,
        marginTop: -80
    },
    boxBottom: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        marginTop: -120
    },
    logo: {
        width: 400,
        height: 200,
        marginTop: -120
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18, 
    },
    textDesc: {
        fontSize: 14
    },
    textLogin: {
        color: themes.colors.primary,
        marginTop: -220,
        fontSize: 16
    },
    textRegister: {

    }
})