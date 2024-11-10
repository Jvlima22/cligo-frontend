import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet } from "react-native";
import Feed from "../../components/feed";
import TopProfileUs from "../../components/TopProfileUs";

type RootStackParamList = {
    Mapa: undefined;
};

export default function Perfil_us() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <ScrollView style={styles.container}>                
            <TopProfileUs />
            <Feed />
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF6FE',
    },
});
