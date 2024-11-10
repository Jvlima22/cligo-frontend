import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
      backgroundColor: '#EFF6FE',
    },
    logo: {
      alignContent: 'center',
      justifyContent: 'center',
      width: 400,
      height: 200,
      marginTop: -80
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 10,
    },
    inputs: {
      marginTop: -60
    },
    Button: {
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    boxTop: {
      height: Dimensions.get('window').height/3,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        marginTop: -20,
        fontSize: 18
    },
    scrollContainer: {
      flexGrow: 1,          
      justifyContent: 'center', 
      padding: 16,        
      backgroundColor: '#EFF6FE',
    },
    textBottom: {
      fontSize: 16,
      marginTop: 10
  },
});


  