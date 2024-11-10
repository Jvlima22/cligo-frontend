import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create ({
    scrollView: {
        position: 'relative',
        backgroundColor: '#fff'
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
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -20,
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
    containerEstab: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginTop: 26,
        marginLeft: 20      
    },
    containerEstab2: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginTop: 10,
        marginLeft: 20      
    },
    containerEstab3: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginTop: 10,
        marginLeft: 20      
    },
    containerEstab4: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginTop: 4,
        marginLeft: 20,
    },
    iconEstab: {
        marginRight: 8, 
        color: '#022440',
    },
    textEstab1: {
        fontSize: 16,
        color: '#022440',
        fontWeight: 'bold',
        flex: 1, 
    },
    touchable: {
        flexDirection: 'row',
        alignItems: 'center', 
    },
    textEstab: {
        fontSize: 14,
        color: '#022440',
        fontWeight: 'bold'
    },
    line: {
        width: Dimensions.get('window').width/1, 
        height: 1,
        backgroundColor: "#D9D9D9", 
        marginVertical: 10, 
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lineContainer: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        width: '100%', 
        marginVertical: 6, 
    },
    users: {
        marginTop: -20
    },
    carousel: {
        paddingRight: 16,
        overflow: 'visible',
        marginTop: -20,
        borderRadius: 12, 
        shadowColor: '#000', 
        shadowOffset: {
            width: 0, 
            height: 2, 
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.2, 
        elevation: 5, 
    },
    carouselContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    cardapioButton: {
        marginHorizontal: 4,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12,
        elevation: 2, 
        marginTop: 14
    },
    cardapioText: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    productList: {
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 14,
    },
    productItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        width: Dimensions.get('window').width * 1.1, 
        maxWidth: 400, 
        height: Dimensions.get('window').height / 6,
    },
    productImage: {
        width: 80,
        height: 120,
        borderRadius: 8,
        marginRight: 10,
    },
    productDetails: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    productDescription: {
        fontSize: 14,
        color: "#666",
        marginVertical: 4,
    },
    productAcomp: {
        fontSize: 12,
        color: "#666",
        marginVertical: 4,
        marginTop: -2
    },
    productAcompDesc: {
        fontSize: 14,
        color: "#000",
        fontWeight: 'bold'

    },
    productPrice: {
        fontSize: 14,
        color: "#666",
    },
    productTitlePrice: {
        fontSize: 15,
        color: "#000",
        fontWeight: 'bold'
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // fundo semi-transparente
    },
    modalView: {
        width: "80%",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    closeButton: {
        backgroundColor: "#2196F3",
        borderRadius: 5,
        padding: 10,
    },
    closeButtonText: {
        color: "white",
    },
});