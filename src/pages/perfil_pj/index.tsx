import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";
import TopProfile from "../../components/TopProfilePj";
import Feed from "../../components/feed";

type RootStackParamList = {
    Mapa: undefined;
};

export default function Perfil_pj() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <ScrollView style={styles.container}>                
            <TopProfile />
            <Feed />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 60, 
    },
});
