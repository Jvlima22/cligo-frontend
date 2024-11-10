import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from "react-native";

type RootStackParamList = {
    Register: undefined;
    Recovery: undefined;
    Interesse1: undefined;
    Mapa: undefined;
};

const interests = [
    { id: 1, name: 'Padaria' },
    { id: 2, name: 'Bar' },
    { id: 3, name: 'Churrascaria' },
    { id: 4, name: 'Culinária Japonesa' },
    { id: 5, name: 'Vinícola' },
    { id: 6, name: 'Fast Food' },
    { id: 7, name: 'Cervejaria' },
    { id: 8, name: 'Pub' },
    { id: 9, name: 'Pizzaria' },
    { id: 10, name: 'Cafeteria' },
    { id: 11, name: 'Hotel' },
    { id: 12, name: 'Culinária Mexicana' },
    { id: 13, name: 'Lanchonete' },
    { id: 14, name: 'Mercado' },
    { id: 15, name: 'Cinema' },
    { id: 16, name: 'Hospital' },
    { id: 17, name: 'Shopping Center' },
    { id: 18, name: 'Festival' },
    { id: 19, name: 'Livraria' },
    { id: 20, name: 'Sorveteria' },
    { id: 21, name: 'Parque' },
    { id: 22, name: 'Relojoaria' },
    { id: 23, name: 'Biblioteca' },
    { id: 24, name: 'Bistrô' },
    { id: 25, name: 'Culinária Oriental' },
    { id: 26, name: 'Chocolateria' },
];

interface InterestsHorizontalProps {
    interestColor: 'white' | 'black'; // Aceita apenas essas duas cores
}

export default function Interests({ interestColor }: InterestsHorizontalProps) {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
            <View style={styles.carouselContainer}>
                {interests.map((interest) => (
                    <TouchableOpacity
                        key={interest.id}
                        onPress={() => navigation.navigate('Mapa')}
                        style={[styles.interestButton, { backgroundColor: 'white' }]}
                    >
                        <Text style={[styles.interestText, { color: interestColor }]}>{interest.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    carousel: {
        paddingRight: 16,
        overflow: 'visible',
    },
    carouselContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    interestButton: {
        marginHorizontal: 4,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12,
        elevation: 2, 
        marginTop: 14
    },
    interestText: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
