import { Dimensions, StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFF6FE',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold', 
        color: '#022440',
    },
    subText: {
        marginTop: -10,
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'center',
        color: '#022440'
    },
    boxTop: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 500,
        height: 260
    },
    boxBottom: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center'
    },
});
