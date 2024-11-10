import { Dimensions, StyleSheet } from "react-native"
import { themes } from "../../../global/themes";

export const style = StyleSheet.create({
    container: {
        backgroundColor: '#022440',
    }, 
    Box: {
        marginLeft: 36,
        marginTop: -40
    },
    Desc1: {
        color: themes.colors.white,
        marginTop: 50,
        fontSize: 24,
        fontWeight: 'bold'
    },
    Desc2: {
        color: themes.colors.white,
        marginTop: -8,
        fontSize: 40,
        fontWeight: 'bold'
    },
    Desc3: {
        color: themes.colors.white,
        marginTop: -16,
        fontSize: 60,
        fontWeight: 'bold'
    },
    Desc4: {
        color: themes.colors.white,
        fontSize: 18,
        marginTop: 10
    }, 
    boxMid: {
        height: Dimensions.get('window').height/4,
        width: '100%',
        paddingHorizontal: 37,
        marginTop: 14
    },
    input: {
        paddingHorizontal: 10,
        borderRadius: 5,
        color: 'white', 
    },
    interestBox: {
        marginTop: -146,
        marginLeft: 36,
        height: 412,
        width: 342,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 2,
    },
    interestItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: themes.colors.lightGray,
    },
    interestText: {
        fontSize: 16,
        color: 'black',
    },
    buttonNext: {
        marginTop: 20,
        marginLeft: 340
    },  
 
});
