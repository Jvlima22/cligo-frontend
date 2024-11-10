import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    starsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
        marginLeft: -130
    },
    starSpacing: {
        marginHorizontal: 10, 
    },
    containerButton: {
        marginTop: -20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 6,
        marginLeft: -30,
        zIndex: 10,
    },
    estabelecimento: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1, 
        marginVertical: -40,
    },
    search: {
        marginLeft: 320,
        marginTop: 10,
        zIndex: 1, 
    },
    icon: {
        marginLeft: 8, 
        marginTop: 2,
    },
    text: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 22,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    closeButton: {
        backgroundColor: '#2196F3',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },  
    title: {
        fontWeight: 'bold',
        marginTop: 30,
        color: '#022440'
    },
    subTitle: {
        color: '#022440'
    },
    subTitleComment: {
        paddingHorizontal: 24,
        color: '#022440',
    },
    subTitleAval: {
        paddingHorizontal: 24,
        color: '#022440',
        marginTop: 10, 
        fontSize: 60,
        fontWeight: 'bold',
    },
    subTitleAvalDesc: {
        paddingHorizontal: 28,
        color: '#022440', 
        fontSize: 10
    },
    titleAval: {
        fontWeight: 'bold',
        marginTop: 80,
        paddingHorizontal: 24,
        color: '#022440',
        fontSize: 18
    },
    starsContainerAval: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 4,
        marginLeft: -260,
    },
    starSpacingAval: {
        marginHorizontal: -1, 
    },
    iconAval: {
        paddingHorizontal: 250,
        marginTop: -19,
    },
    input: {
        borderRadius: 5,
        color: '#000',
        backgroundColor: '#fff',
        height: 40,
    },
    boxMid: {
        position: 'absolute',
        height: Dimensions.get('window').height / 5,
        width: '100%',
        paddingHorizontal: 24,
        top: 300,
        zIndex: 1,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
    },
    progressBar: {
        flex: 1,
        height: 8,
        backgroundColor: '#e0e0e0',
        borderRadius: 4,
        overflow: 'hidden',
        marginHorizontal: 8,
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#4CAF50',
    },
    ratingCount: {
        width: 50,
        textAlign: 'right',
        fontSize: 12,
        color: '#333',
    },
    starText: {
        width: 50,
        fontSize: 14,
        color: '#333',
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

