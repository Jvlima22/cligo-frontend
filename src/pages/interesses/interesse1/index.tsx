import { NavigationProp, useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { style } from "./styles";
import React from "react";

type RootStackParamList = {
    Interesse2: undefined;
};

const Interesse1 = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
       <ScrollView style={style.container}>
         <View style={style.Box}>
            <Text style={style.Desc1}>Queremos te conhecer!</Text>
            <Text style={style.Desc2}>Personalize seu</Text>
            <Text style={style.Desc3}>Perfil</Text>
            <Text style={style.Desc4}>Escolha até 20 interesses:</Text>
            
            <View style={style.buttonContainer}>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Padaria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Bar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Churrascaria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Culinária Japonesa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Vinícola</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Fast Food</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Cervejaria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Pub</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Pizzaria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Cafeteria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Hotel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Culinária Mexicana</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Lanchonete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Mercado</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Cinema</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Hospital</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Shopping Center</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Festival</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Livraria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Sorveteria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Parque</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Relojoaria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Biblioteca</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Bistrô</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Culinária Oriental</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStyle}>
                    <Text style={style.buttonText}>Chocolateria</Text>
                </TouchableOpacity>
            </View>
            <Text 
                onPress={() => navigation.navigate('Interesse2')}
                style={style.Desc5}>Entre outros
            </Text>
        </View>
       </ScrollView>
    );
}

export default Interesse1;
