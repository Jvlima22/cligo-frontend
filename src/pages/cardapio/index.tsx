import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ScrollView, Image, View, Text, TouchableOpacity, Linking, Modal, StyleSheet } from "react-native";
import TopRectangle from "../../components/topRectangle";
import { ButtonBack } from "../../components/buttonBack";
import React, { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { style } from "./styles";

interface Produto {
    id: number;
    nome: string;
    imagem: any;
    preço: number;
    descrição: string;
    acompanhamento: string;
}

interface Categoria {
    id: number;
    name: string;
    produtos: Produto[];
}

const categorias: Categoria[] = [
    {
        id: 1,
        name: 'Lanches',
        produtos: [
            { id: 1, nome: 'Chicken Fritz', imagem: require('../../assets/chickenfritz.png'), preço: 45.00, descrição: 'Burguer com 180g de frango, queijo gorgonzola, alface, molho verde e pão australiano.', acompanhamento: 'Fritas e Molho Especial' },
            { id: 2, nome: 'Beirute de Frango', imagem: require('../../assets/beirutedefrango.png'), preço: 32.00, descrição: '180g de frango, queijo, molho da casa e crispy de bacon.', acompanhamento: 'Fritas e Molho Especial' },
            { id: 3, nome: 'Burguer Xexéu', imagem: require('../../assets/burguerxexeu.png'), preço: 32.00, descrição: '180g de carne bovina, queijo, molho da casa, cheddar, tomate cereja e fatias de bacon.', acompanhamento: 'Fritas e Molho Especial' },
        ],
    },
    {
        id: 2,
        name: 'Porções',
        produtos: [
            { id: 4, nome: 'Iscas de Frango', imagem: require('../../assets/frango.png'), preço: 45.00, descrição: 'Iscas de frango crocantes, deliciosamente temperadas. Uma explosão de sabor em cada mordida!', acompanhamento: 'Molho Especial' },
            { id: 5, nome: 'Fritas', imagem: require('../../assets/fritas.png'), preço: 25.00, descrição: 'Fritas crocantes, perfeitamente douradas e irresistíveis.', acompanhamento: 'Ketchup ou Molho Especial' },
            { id: 6, nome: 'Fritas com Cheddar e Bacon', imagem: require('../../assets/fritascheedar.png'), preço: 36.00, descrição: 'Fritas crocantes, cobertas com queijo cheddar cremoso e pedaços de bacon crocante.', acompanhamento: 'Ketchup ou Molho Especial' },
        ],
    },
    {
        id: 3,
        name: 'Sucos Natural',
        produtos: [
            { id: 7, nome: 'Laranja', imagem: require('../../assets/laranja.png'), preço: 14.00, descrição: 'Suco de laranja fresco e vibrante, cheio de sabor e vitamina C.', acompanhamento: '' },
            { id: 8, nome: 'Maracujá', imagem: require('../../assets/maracuja.png'), preço: 14.00, descrição: 'Suco de maracujá intenso e aromático, perfeito para quem busca frescor.', acompanhamento: '' },
            { id: 9, nome: 'Limão', imagem: require('../../assets/limao.png'), preço: 14.00, descrição: 'Suco de limão cítrico, ideal para refrescar e adicionar um toque de acidez ao seu dia.', acompanhamento: '' },
        ],
    },
];

type RootStackParamList = {
    Mapa: undefined;
    Perfil_pj: undefined;
};

interface CardapiosHorizontalProps {
    cardapioColor: 'white' | 'black';
}

const Cardapio = ({ cardapioColor }: CardapiosHorizontalProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [searchText] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const filteredProducts = categorias.flatMap(categoria => 
        selectedCategory === null || categoria.id === selectedCategory ? categoria.produtos : []
    ).filter(produto => 
        produto.nome.toLowerCase().includes(searchText.toLowerCase())
    );

    const openWaze = () => {
        const latitude = -23.555323;
        const longitude = -46.655283;  
        const url = `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;
        Linking.openURL(url).catch(err => console.error("An error occurred", err));
    };

    return (
        <ScrollView style={style.scrollView}>
            <TopRectangle />

            <View style={style.header}>
                <ButtonBack 
                    IconName="chevron-back"
                    IconColor="#fff"
                    onPress={() => navigation.navigate('Perfil_pj')}
                />
            </View>

            <View style={style.estabelecimento}>
                <Image 
                    source={require('../../assets/xexeu.png')} 
                    style={{ width: 130, height: 130 }}
                />
            </View>

            <View style={style.search}>
                <ButtonBack 
                    IconName="search"
                    IconColor="#fff"
                    onPress={() => navigation.navigate('Mapa')}
                />
            </View>

            <View style={style.container}>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={style.text}>Sobre a loja</Text>
                    <Ionicons name="chevron-forward-sharp" size={20} color="white" style={style.icon} />
                </TouchableOpacity>
            </View>

            <View style={style.containerEstab}>
                <Fontisto name="shopping-store" size={16} color="black" style={style.iconEstab} />
                <Text style={style.textEstab}>Refeições e Bebidas</Text>
            </View>
            <View style={style.containerEstab2}>
                <FontAwesome name="money" size={16} color="black" style={style.iconEstab} />
                <Text style={style.textEstab}>Pedido mínimo: R$12,00</Text>
            </View>
            <View style={style.containerEstab3}>
                <FontAwesome6 name="map-location-dot" size={16} color="black" style={style.iconEstab} />
                <Text style={style.textEstab}>Rua Peixoto Gomide, 155 - São Paulo</Text>
            </View>

            <View style={style.lineContainer}>
                <View style={style.line} />
            </View>

            <View style={style.containerEstab4}>
                <TouchableOpacity onPress={openWaze} style={style.touchable}>
                    <FontAwesome6 name="waze" size={30} color="black" style={style.iconEstab} />
                    <Text style={style.textEstab1}>Rua Peixoto Gomide, 155 - São Paulo</Text>
                </TouchableOpacity>
            </View>

            <View style={style.lineContainer}>
                <View style={style.line} />
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.carousel}>
                <View style={style.carouselContainer}>
                    {categorias.map((item) => ( 
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => setSelectedCategory(item.id)} 
                            style={[style.cardapioButton, { backgroundColor: 'white' }]} 
                        >
                            <Text style={[style.cardapioText, { color: cardapioColor }]}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <ScrollView>
                <View style={style.productList}>
                    {filteredProducts.map((produto) => (
                        <View key={produto.id} style={style.productItem}>
                            <Image source={produto.imagem} style={style.productImage} />
                            <View style={style.productDetails}>
                                <Text style={style.productName}>{produto.nome}</Text>
                                <Text style={style.productDescription}>{produto.descrição}</Text>
                                {produto.acompanhamento && (
                                    <Text style={style.productAcomp}>
                                        <Text style={style.productAcompDesc}>Acompanhamento: </Text>
                                        {produto.acompanhamento}
                                    </Text>
                                )}
                                <Text style={style.productPrice}>
                                    <Text style={style.productTitlePrice}>Preço: </Text>R$ {produto.preço.toFixed(2)}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Modal Pop-up */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Sobre a loja</Text>
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    closeButton: {
        backgroundColor: '#2196F3',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Cardapio;

