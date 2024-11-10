import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { View } from "react-native";

type RootStackParamList = {
    Register: undefined;
    Recovery: undefined;
    Interesse1: undefined;
};

const users = [
    { id: 1, image: require('../../assets/person1.png'), username: 'luciact' },
    { id: 2, image: require('../../assets/person2.png'), username: 'vinipaulo' },
    { id: 3, image: require('../../assets/person3.png'), username: 'clayvonsilva' },
    { id: 4, image: require('../../assets/person4.png'), username: 'jvlima22_' },
    { id: 5, image: require('../../assets/person5.png'), username: 'stellaroldam' },
    { id: 6, image: require('../../assets/person6.png'), username: 'iamgabesk' },
    { id: 7, image: require('../../assets/person7.png'), username: 'vinimotta' },
];

// Adicione usernameColor como prop
interface UsersHorizontalProps {
    usernameColor: 'white' | 'black'; // Aceita apenas essas duas cores
}

export default function UsersHorizontal({ usernameColor }: UsersHorizontalProps) {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
            <View style={styles.carouselContainer}>
                {users.map((user) => (
                    <TouchableOpacity key={user.id} onPress={() => navigation.navigate('Interesse1')}>
                        <View style={styles.userIconContainer}>
                            <Image source={user.image} style={styles.userIcon} />
                            {/* Bolinha verde */}
                            <View style={styles.greenDot} />
                        </View>
                        {/* Nome de usuário com cor recebida como prop */}
                        <Text style={[styles.usernameText, { color: usernameColor }]}>{user.username}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    carousel: {
        marginLeft: 16,
        paddingRight: 16,
        overflow: 'visible',
    },
    carouselContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    userIconContainer: {
        position: 'relative',
        marginHorizontal: 4,
        alignItems: 'center',
    },
    userIcon: {
        width: 64,
        height: 64,
        borderColor: '#001f3f',
    },
    greenDot: {
        position: 'absolute',
        bottom: 0,
        right: 4,
        width: 20,
        height: 20,
        borderRadius: 9,
        backgroundColor: '#33B839',
        borderWidth: 2,
        borderColor: '#fff',
    },
    usernameText: {
        fontSize: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
