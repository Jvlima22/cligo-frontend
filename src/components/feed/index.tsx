import { useState } from "react";
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 

interface Feed {
    id: number;
    descricao: string;
    imagem: any;
    curtidas: number;
    comentarios: number;
    data: string;
}

interface Categoria {
    id: number;
    name: string;
    feed: Feed[];
}

const categorias: Categoria[] = [
    {
        id: 1,
        name: 'Publicações',
        feed: [
            { id: 1, descricao: '1', imagem: require('../../assets/image1.png'), curtidas: 114, comentarios: 45, data: '2024-10-25' },
            { id: 2, descricao: '2', imagem: require('../../assets/image2.png'), curtidas: 187, comentarios: 12, data: '2024-10-22' },
            { id: 3, descricao: '3', imagem: require('../../assets/image3.png'), curtidas: 254, comentarios: 22, data: '2024-10-20' },
            { id: 4, descricao: '4', imagem: require('../../assets/image4.png'), curtidas: 57, comentarios: 45, data: '2024-10-25' },
            { id: 5, descricao: '5', imagem: require('../../assets/image5.png'), curtidas: 149, comentarios: 21, data: '2024-10-22' },
            { id: 6, descricao: '6', imagem: require('../../assets/image6.png'), curtidas: 211, comentarios: 54, data: '2024-10-20' },
            { id: 7, descricao: '7', imagem: require('../../assets/image7.png'), curtidas: 75, comentarios: 34, data: '2024-10-25' },
            { id: 8, descricao: '8', imagem: require('../../assets/image8.png'), curtidas: 282, comentarios: 55, data: '2024-10-22' },
            { id: 9, descricao: '9', imagem: require('../../assets/image9.png'), curtidas: 102, comentarios: 33, data: '2024-10-20' },
        ],
    },
    {
        id: 2,
        name: 'Reels',
        feed: [
            { id: 10, descricao: '1', imagem: require('../../assets/reels1.png'), curtidas: 114, comentarios: 45, data: '2024-10-25' },
            { id: 11, descricao: '2', imagem: require('../../assets/reels2.png'), curtidas: 187, comentarios: 12, data: '2024-10-22' },
            { id: 12, descricao: '3', imagem: require('../../assets/reels3.png'), curtidas: 254, comentarios: 22, data: '2024-10-20' },
            { id: 13, descricao: '4', imagem: require('../../assets/reels4.png'), curtidas: 57, comentarios: 45, data: '2024-10-25' },
            { id: 14, descricao: '5', imagem: require('../../assets/reels5.png'), curtidas: 149, comentarios: 21, data: '2024-10-22' },
            { id: 15, descricao: '6', imagem: require('../../assets/reels6.png'), curtidas: 211, comentarios: 54, data: '2024-10-20' },
            { id: 16, descricao: '7', imagem: require('../../assets/reels7.png'), curtidas: 75, comentarios: 34, data: '2024-10-25' },
            { id: 17, descricao: '8', imagem: require('../../assets/reels8.png'), curtidas: 282, comentarios: 55, data: '2024-10-22' },
            { id: 18, descricao: '9', imagem: require('../../assets/reels9.png'), curtidas: 102, comentarios: 33, data: '2024-10-20' },
        ],
    },
    {
        id: 3,
        name: 'Marcados',
        feed: [
            { id: 19, descricao: '1', imagem: require('../../assets/reels1.png'), curtidas: 114, comentarios: 45, data: '2024-10-25' },
            { id: 20, descricao: '2', imagem: require('../../assets/reels2.png'), curtidas: 187, comentarios: 12, data: '2024-10-22' },
            { id: 21, descricao: '3', imagem: require('../../assets/reels3.png'), curtidas: 254, comentarios: 22, data: '2024-10-20' },
            { id: 22, descricao: '4', imagem: require('../../assets/reels4.png'), curtidas: 57, comentarios: 45, data: '2024-10-25' },
            { id: 23, descricao: '5', imagem: require('../../assets/reels5.png'), curtidas: 149, comentarios: 21, data: '2024-10-22' },
            { id: 24, descricao: '6', imagem: require('../../assets/reels6.png'), curtidas: 211, comentarios: 54, data: '2024-10-20' },
            { id: 25, descricao: '7', imagem: require('../../assets/reels7.png'), curtidas: 75, comentarios: 34, data: '2024-10-25' },
            { id: 26, descricao: '8', imagem: require('../../assets/reels8.png'), curtidas: 282, comentarios: 55, data: '2024-10-22' },
            { id: 27, descricao: '9', imagem: require('../../assets/reels9.png'), curtidas: 102, comentarios: 33, data: '2024-10-20' },
        ],
    },
];

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [expandedFeed, setExpandedFeed] = useState<number | null>(null);

    const filteredFeeds = categorias
        .flatMap(categoria => 
            selectedCategory === null || categoria.id === selectedCategory ? categoria.feed : []
        );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.categoryContainer}>
                {categorias.map(categoria => (
                    <TouchableOpacity
                        key={categoria.id}
                        onPress={() => setSelectedCategory(categoria.id)}
                        style={[
                            styles.categoryButton,
                        ]}
                    >
                        <Text style={styles.categoryText}>{categoria.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.feedGrid}>
                {filteredFeeds.map(feed => (
                    <View key={feed.id} style={styles.feedItem}>
                        <TouchableOpacity onPress={() => setExpandedFeed(expandedFeed === feed.id ? null : feed.id)}>
                            <Image source={feed.imagem} style={styles.feedImage} />
                            <View style={styles.likeContainer}>
                                <FontAwesome name="heart" size={14} color="#FF0000" />
                                <Text style={styles.likeText}>{feed.curtidas}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EFF6FE',
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
        marginTop: 10,
    },
    categoryButton: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginHorizontal: 5,
        borderRadius: 8,
    },
    categoryText: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold',
    },
    feedGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    feedItem: {
        width: '30%',
        alignItems: 'center',
        margin: 5,
        borderRadius: 8,
        paddingVertical: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        marginTop: -10
    },
    feedImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    likeContainer: {
        position: 'absolute',
        bottom: 5,
        left: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 5,
    },
    likeText: {
        color: '#fff',
        marginLeft: 5,
        fontSize: 12,
    },
    feedName: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
        textAlign: 'center',
    },
    expandedInfo: {
        marginTop: 5,
        alignItems: 'center',
    },
    feedInfo: {
        fontSize: 12,
        color: "#666",
    },
});

export default Feed;
