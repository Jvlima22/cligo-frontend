import { NavigationProp, useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { Octicons } from '@expo/vector-icons';
import { Input } from "../../../components/inputs/input1";
import { useState } from "react";
import { ButtonNext } from "../../../components/buttonNext";
import { ButtonBack } from "../../../components/buttonBack";

// Dados de interesses disponíveis
const allInterests = [
    'Esfiharia',
    'Barbearia',
    'Cafeteria',
    'Joalheria',
    'Boutique',
    'Salão de Beleza',
    'Pet Shop',
    'Estúdio de Tatuagem'
];

type RootStackParamList = {
    Interesse1: undefined;
    Login: undefined;
    Explorer: undefined;
};

const Interesse2 = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [text, setText] = useState('');
    const [filteredInterests, setFilteredInterests] = useState(allInterests);

    const handleInputChange = (inputText: string) => {
        setText(inputText);
        const filtered = allInterests.filter(interest =>
            interest.toLowerCase().includes(inputText.toLowerCase())
        );
        setFilteredInterests(filtered);
    };

    return (
       <ScrollView style={style.container}>
            <ButtonBack 
                IconName="chevron-back"
                IconColor="#fff"
                onPress={() => navigation.navigate('Interesse1')}
            />
         <View style={style.Box}>
            <Text style={style.Desc1}>Queremos te conhecer!</Text>
            <Text style={style.Desc2}>Personalize seu</Text>
            <Text style={style.Desc3}>Perfil</Text>
            <Text style={style.Desc4}>Escolha até 20 interesses:</Text>
        </View>

        {/* Input de busca com ícone */}
        <View style={style.boxMid}>
            <Input 
                style={style.input}
                value={text}
                onChangeText={handleInputChange}
                placeholder='Procure seus interesses:'
                placeholderTextColor="white"
                IconLeft={Octicons}
                IconLeftName="search"
                IconColor="white"
            />
        </View>
        <View style={style.interestBox}>
            <FlatList
                data={filteredInterests}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity style={style.interestItem}>
                        <Text style={style.interestText}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>       
        <View style={style.buttonNext}>
            <ButtonNext 
                IconName="navigate-next"
                IconColor="#022440"
                onPress={() => navigation.navigate('Explorer')}
            />
        </View>
       </ScrollView>
    );
}

export default Interesse2;
