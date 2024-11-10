import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001f3f',
    },
    boxTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    logo: {
        width: 100,
        height: 50,
        marginLeft: 16,
    },
    icon: {
        marginRight: 16,
    },
    verticalCarousel: {
        marginTop: 30,
        width: '100%',
    },
    verticalCarouselItem: {
        marginBottom: 20,
        alignItems: 'center',
    },
    verticalImage: {
        width: '100%',
        height: 600,
        borderRadius: 10,
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
    },
    userContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        width: 30,
        height: 30,
        borderRadius: 20,
        marginRight: 5,
    },
    userName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: -220,
        marginBottom: 30,
    },
    iconStyle: {
        marginHorizontal: 12,
    },
    postDetails: {
        marginTop: -20,
        paddingHorizontal: 8,
        marginEnd: 'auto',
        marginLeft: 20,
    },
    likes: {
        fontSize: 12,
        color: '#fff',
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff',
        marginVertical: 4,
    },
    comments: {
        fontSize: 12,
        color: '#fff',
    },
    date: {
        fontSize: 12,
        marginTop: 8,
        color: '#fff',
    },
});
