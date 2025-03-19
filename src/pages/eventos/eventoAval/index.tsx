import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ScrollView, Image, View, TouchableOpacity, Text, Modal } from "react-native";
import TopRectangle from "../../../components/topRectangle";
import React, { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { ButtonBack } from "../../../components/buttonBack";
import { Input } from "../../../components/inputs/input2";
import { Octicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { styles } from "./styles";

type RootStackParamList = {
    Cardapio: undefined;
    Chat: undefined;
    Avaliacao: undefined;
    Mapa: undefined;
    EventoDetails: undefined;
};

const reviews = [
    { id: 1, name: "Gabriel Sanches", rating: 5, comment: "Bar incrível com comida deliciosa e stand up divertido.", image: require('../../../assets/person6.png') },
    { id: 2, name: "Clayvon Silva", rating: 4, comment: "Impressionado com a comida, o stand up e o ambiente deste bar.", image: require('../../../assets/person3.png') },
    { id: 3, name: "Josué Lima", rating: 5, comment: "Ótima comida, excelente entretenimento e ambiente agradável.", image: require('../../../assets/person4.png') },
    { id: 4, name: "Vinícius ", rating: 4, comment: "Novo local favorito com comida incrível, stand up divertido e ambiente acolhedor.", image: require('../../../assets/person2.png') }
];

const Avaliacoes = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [modalVisible, setModalVisible] = useState(false);
    const [rating, setRating] = useState(0); 

    const handleStarPress = (star: number) => {
        setRating(star);
    };

    const [text, setText] = useState('');

    return (
        <ScrollView style={styles.container}>
            <TopRectangle />

            <View style={styles.header}>
                <ButtonBack 
                    IconName="chevron-back"
                    IconColor="#fff"
                    onPress={() => ('EventoDetails')}
                />
            </View>

            <View style={styles.estabelecimento}>
                <Image 
                    source={require('../../../assets/xexeu.png')} 
                    style={{ width: 130, height: 130 }}
                />
            </View>

            <View style={styles.search}>
                <ButtonBack 
                    IconName="search"
                    IconColor="#fff"
                    onPress={() => navigation.navigate('Mapa')}
                />
            </View>
            
            <View style={styles.containerButton}>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.text}>Sobre o evento</Text>
                    <Ionicons name="chevron-forward-sharp" size={20} color="white" style={styles.icon} />
                </TouchableOpacity>
            </View>

            {/* Modal Pop-up */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Sobre o evento</Text>
                        <Text style={styles.modalText}>Ambiente: Climatizado, com música ambiente - Wi-Fi: Gratuito para clientes - Eventos: Shows ao vivo, exibição de jogos.</Text>
                        <Text style={styles.modalTitle}>Contato:</Text>
                        <Text style={styles.modalText}>Telefone: +55 (11) 1234-5678</Text>
                        <Text style={styles.modalText}>WhatsApp: +55 11 98765-4321</Text>
                        <Text style={styles.modalText}>Redes Sociais: @botecodoxexeu</Text>
                        <Text style={styles.modalTitle}>Horário de Funcionamento:</Text>
                        <Text style={styles.modalText}>Segunda a Sexta: 17h - 23h</Text>
                        <Text style={styles.modalText}>Sábado e Domingo: 12h - 00h</Text>
                        <Text style={styles.modalTitle}>Localização:</Text>
                        <Text style={styles.modalText}> Rua Peixoto Gomide, 155 - São Paulo, SP </Text>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            
            <View style={styles.text}>
                <Text style={styles.title}>Avalie esse evento</Text>
                <Text style={styles.subTitle}>Dê sua opinião</Text>
            </View>

            <View style={styles.starsContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <TouchableOpacity 
                        key={star} 
                        onPress={() => handleStarPress(star)} 
                        style={styles.starSpacing}
                    >
                        <Ionicons
                            name={star <= rating ? "star" : "star-outline"}
                            size={32}
                            color="#FFD700"
                        />
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.subTitleComment}>Escreva sua avaliação</Text>
            
            <View style={styles.boxMid}>
                <Input 
                    style={styles.input}
                    value={text}
                    placeholder='Deixe aqui seu comentário:'
                    placeholderTextColor="gray"
                    IconLeft={Octicons}
                    IconLeftName="inbox"
                    IconColor="white"
                />  
            </View>

            <View style={styles.container}>
                <TouchableOpacity onPress={() => console.log("Informações sobre as avaliações clicadas")}>
                    <View>
                        <Text style={styles.titleAval}>Avaliações e comentários</Text>
                        <Ionicons name="information-circle-outline" size={20} color="black" style={styles.iconAval} />
                    </View>
                </TouchableOpacity>

                <Text style={styles.subTitleAval}>3,2</Text>
                <View style={styles.starsContainerAval}>
                    {[6, 7, 8, 9, 10].map((star) => (
                        <TouchableOpacity 
                            key={star} 
                            onPress={() => handleStarPress(star)} 
                            style={styles.starSpacingAval}
                        >
                            <Ionicons
                                name={star <= rating ? "star" : "star-outline"}
                                size={22}
                                color="#022440"
                            />
                        </TouchableOpacity>
                    ))}
                </View>
                <Text style={styles.subTitleAvalDesc}>543 Avaliações</Text>
            </View>

            <View style={style.ratingsContainer}>
                {[5, 4, 3, 2, 1].map((star, index) => (
                    <View key={star} style={style.ratingRow}>
                        <Text style={style.starCount}>{star}</Text>
                        <Ionicons name="star" size={16} color="#022440" />
                        <View style={style.progressBarContainer}>
                            <View style={[style.progressBar, { width: `${[50, 30, 10, 7, 3][index]}%` }]} />
                        </View>
                    </View>
                ))}
            </View>

            <View style={style.reviewsContainer}>
                {reviews.map((review) => (
                    <View key={review.id} style={style.review}>
                        <Image source={review.image} style={style.reviewImage} />
                        <View style={style.reviewContent}>
                            <Text style={style.reviewName}>{review.name}</Text>
                            <View style={style.reviewStars}>
                                {[...Array(5)].map((_, i) => (
                                    <Ionicons
                                        key={i}
                                        name={i < review.rating ? "star" : "star-outline"}
                                        size={18}
                                        color="#FFD700"
                                    />
                                ))}
                            </View>
                            <Text style={style.reviewComment}>{review.comment}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const style = StyleSheet.create({
    ratingsContainer: {
        paddingHorizontal: 20,
        marginTop: -110,
        zIndex: -10
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
    },
    starCount: {
        width: 130,
        textAlign: 'right',
        fontSize: 14,
    },
    progressBarContainer: {
        flex: 1,
        height: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        marginHorizontal: 10,
    },
    progressBar: {
        height: 10,
        backgroundColor: '#022440',
        borderRadius: 5,
    },
    reviewsContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    review: {
        flexDirection: 'row', // Alinha a imagem e o conteúdo na horizontal
        alignItems: 'center', // Centraliza verticalmente
        marginBottom: 20,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    reviewImage: {
        width: 70,
        height: 70,
        borderRadius: 25,
        marginRight: 10, // Espaçamento entre a imagem e o texto
    },
    reviewContent: {
        flex: 1, // Faz com que o conteúdo ocupe o espaço restante
    },
    reviewName: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 3, // Espaço entre o nome e as estrelas
    },
    reviewStars: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    reviewComment: {
        fontSize: 14,
        color: '#555',
    }
});

export default Avaliacoes;

