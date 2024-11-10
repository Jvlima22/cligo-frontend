import { Dimensions, StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFF6FE',
    },
    text: {
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: 'bold', 
        textAlign: 'center',
        color: '#022440',
        padding: 10,
        marginTop: -80
    },
    subText: {
        marginTop: -20,
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'center',
        padding: 20,
        color: '#022440'
    },
    boxTop: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 318,
        height: 224,
        marginTop: -160
    },
    boxBottom: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center'
    },
    buttonLogin:{
        marginTop: 20,
    },
    buttonRegister:{
        marginTop: 20,
    }
});
