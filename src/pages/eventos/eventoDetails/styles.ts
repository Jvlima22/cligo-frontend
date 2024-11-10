import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#022440',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 110, 
    },
    backButton: {
        marginTop: -20,
        marginHorizontal: -30
    },
    backButtonText: {
        color: '#FFD700',
        fontSize: 16,
    },
    eventImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 20,
        resizeMode: 'cover', // ou 'contain' dependendo do seu layout
    },
    eventDayCircle: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#FFD700',
        justifyContent: 'center',
        alignItems: 'center',
    },
    eventDayCircleBlue: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#1EB5E6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    eventDayText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#022440',
    },
    eventName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
    },
    reviewsText: {
        fontSize: 16,
        color: '#FFD700',
        textAlign: 'center',
        marginBottom: 20,
    },
    infoContainer: {
        backgroundColor: '#1E3A5F',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    textContainer: {
        flexDirection: 'column',
        marginLeft: 10, 
    },
    infoItem: {
        flexDirection: 'row',  
        alignItems: 'flex-start', 
        marginBottom: 10,
        marginTop: 2
    },
    infoIcon: {
        fontSize: 20,
        color: '#FFD700',
        marginRight: 10,
    },
    infoIconBlue: {
        fontSize: 20,
        color: '#FFD700',
    },
    infoText: {
        fontSize: 20,
        color: '#fff',
        marginTop: 4
    },
    subText: {
        fontSize: 12,
        color: '#B4D7E4',
        marginTop: 2,
    },
    attendeesSection: {
        backgroundColor: '#1E3A5F',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    attendeesText: {
        fontSize: 16,
        color: '#FFD700',
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: -10
    },
    limitedText: {
        fontSize: 12,
        color: '#B4D7E4',
        marginTop: 5,
    },
    eventDescription: {
        fontSize: 16,
        color: '#fff',
        lineHeight: 22,
        marginBottom: 30,
    },
    confirmButtonText: {
        color: '#ffffff', 
        fontSize: 16,      
        fontWeight: 'bold', 
        textAlign: 'center', 
    },
    confirmButton: {
        backgroundColor: '#4CAF50', 
        paddingVertical: 12,
        paddingHorizontal: 24, 
        borderRadius: 6, 
        marginTop: -10,
        marginBottom: 50,

    },
    attendeesTextContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center', 
        marginTop: 10,
    },
    attendeesTextLeft: {
        flexDirection: 'column', 
        alignItems: 'flex-start', 
    },
    confirmedUsersContainer: {
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        marginLeft: 50, 
        right: 0,
        top: -10,
    },
    userImage: {
        width: 50,
        height: 50,
        
        marginLeft: -15, 
        marginTop: 10,
    },
});
