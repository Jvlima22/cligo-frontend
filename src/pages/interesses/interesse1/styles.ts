import { StyleSheet } from "react-native"
import { themes } from "../../../global/themes";

export const style = StyleSheet.create({
    container: {
        backgroundColor: '#022440',
    }, 
    Box: {
        marginLeft: 36
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
    Desc5: {
        color: themes.colors.Cyan,
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center', 
    },    
    buttonContainer: {
        marginTop: 26,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    buttonStyle: {
        paddingHorizontal: 20,  
        paddingVertical: 10,  
        backgroundColor: themes.colors.white, 
        borderRadius: 20,      
        marginBottom: 8,      
        marginRight: 18,        
    },
    buttonText: {
        color: themes.colors.secondary,
        fontSize: 16, 
        fontWeight: 'bold',
        textAlign: 'center',  
    },
    iconButtonContainer: {
        alignItems: 'center',     
        justifyContent: 'center',
        marginTop: 20,             
        marginBottom: 20,       
    },
    iconButton: {
        backgroundColor: 'white',  
        width: 60,             
        height: 60,            
        borderRadius: 30,       
        justifyContent: 'center',
        alignItems: 'center',    
        elevation: 5,           
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
});
