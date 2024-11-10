import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EFF6FE',
    },
    TextTop: {
        position: 'absolute',
        top: 0, 
        width: '100%',
        padding: 10, 
        textAlign: 'center', 
        color: '#EFF6FE', 
        fontSize: 40, 
        marginTop: 24,
        fontWeight: 'bold',
    },
    boxMid: {
        position: 'absolute',
        height: Dimensions.get('window').height / 5,
        width: '100%',
        paddingHorizontal: 37,
        top: 130,
        zIndex: 1,
    },
    input: {
        borderRadius: 5,
        color: '#000',
        backgroundColor: '#fff',
        height: 40,
    },
    users: {
        position: 'absolute',
        top: 200, 
        width: '100%',
        zIndex: 100, 
    },
    chatItem: {
        width: 380, 
        flexDirection: 'row',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    userIcon: {
        width: 70,
        height: 70,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        top: 4
    },
    chatTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    userMessage: {
        fontSize: 14,
        color: '#555',
        marginTop: 2,
    },
    list: {
        top: 300,
    },
    
    
});
