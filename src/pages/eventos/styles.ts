import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#022440",
    },
    Box: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 20,
    },
    Desc1: {
        fontSize: 20,
        color: "#fff",
        marginTop: 10
    },
    Desc2: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
    },
    Desc3: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        marginHorizontal: 22,
        marginTop: 100
    },
    Desc4: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        marginHorizontal: 22,
        marginTop: 20
    },
    userImage: {
        width: 56,
        height: 56,
        borderRadius: 25,
        marginRight: 18
    },
    boxMid: {
        position: 'absolute',
        height: Dimensions.get('window').height / 5,
        width: '100%',
        paddingHorizontal: 24,
        top: 120,
        zIndex: 1,
    },
    input: {
        borderRadius: 5,
        color: '#000',
        backgroundColor: '#fff',
        height: 40,
    },

    horizontalScroll: {
        paddingVertical: 10,
    },
    card: {
        width: 180,
        height: 206,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        marginLeft: 22
    },
    cardImage: {
        width: '100%',
        height: '106%',
        borderRadius: 8,
    },
    cardText: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
    },    
});
