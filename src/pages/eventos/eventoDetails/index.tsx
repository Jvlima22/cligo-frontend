import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation, RouteProp } from '@react-navigation/native';
import { styles } from './styles';
import { ButtonBack } from '../../../components/buttonBack';

type RootStackParamList = {
    Avaliacoes: { eventoId: number };
    EventoDetails: { eventoId: number };
    EventoAval: { eventoId: number };
    Eventos: undefined;
};

type EventoDetailsProps = {
    route: RouteProp<RootStackParamList, 'EventoDetails'>;
};

const eventos = [
    { 
        id: 1, 
        nome: 'Stand UP - RisoTrio', 
        imagem: require('../../../assets/event1.png'), 
        descricao: 'Uma noite inesquecível de comédia stand-up aguarda você na Rua Peixoto Gomide, 155. No dia 27 de junho, prepare-se para rir até não poder mais com o nosso espetáculo de stand up, o RisoTrio. Quatro comediantes talentosos vão subir ao palco, cada um trazendo seu estilo único e hilário de humor. Não perca esta oportunidade de desfrutar de uma noite cheia de risadas e diversão!', 
        data: '27 Jun, 2024', 
        local: 'Bar do Xexéu', 
        regiao: 'Bela Vista - SP',
        endereco: 'Rua Peixoto Gomide, 155', 
        confirmados: 8, 
        capacidade: 250, 
        usuariosConfirmados: [
            require('../../../assets/person2.png'),
            require('../../../assets/person3.png'),
            require('../../../assets/person4.png'),
            require('../../../assets/person5.png'),
        ],
    },
    { 
        id: 2, 
        nome: 'A volta da fila de piadas', 
        imagem: require('../../../assets/event2.png'), 
        descricao: 'Venha viver uma noite de pura diversão e amizade com o espetáculo 4 Amigos! No dia 15 de Maio, o Teatro Opus será palco para uma comédia incrível que promete muitas risadas. Quatro comediantes, cada um com seu estilo único de humor, se revezarão no palco para garantir que você não pare de rir. Se você adora um bom show de stand-up e quer passar momentos descontraídos com amigos, este é o evento ideal para você!', 
        data: '15 Mai, 2024',
        local: 'Teatro Opus', 
        regiao: 'Vila Progredior - SP',
        endereco: 'Rua dos Três Irmãos, 50, São Paulo, SP', 
        confirmados: 8, 
        capacidade: 250, 
        usuariosConfirmados: [
            require('../../../assets/person2.png'),
            require('../../../assets/person3.png'),
            require('../../../assets/person4.png'),
            require('../../../assets/person5.png'),
        ],
    },
    { 
        id: 3, 
        nome: 'One jota25', 
        imagem: require('../../../assets/event3.png'), 
        descricao: 'O espetáculo One Jota25 traz uma mistura de humor inteligente e sátiras de situações cotidianas! Junte-se a nós no Teatro Renaissance no dia 10 de Junho para uma noite divertida e inesquecível. Prepare-se para rir muito com as piadas e as observações engraçadas dos comediantes, que abordarão temas do cotidiano com um toque irreverente e criativo. Se você ama comédia de qualidade, esse evento é para você!', 
        data: '10 Jun, 2024',
        local: 'Teatro Renaissance', 
        regiao: 'Cerqueira César - SP',
        endereco: 'Avenida Paulista, 1230, São Paulo, SP', 
        confirmados: 8, 
        capacidade: 250, 
        usuariosConfirmados: [
            require('../../../assets/person2.png'),
            require('../../../assets/person3.png'),
            require('../../../assets/person4.png'),
            require('../../../assets/person5.png'),
        ], 
    },
    { 
        id: 4, 
        nome: 'Festival Submundo', 
        imagem: require('../../../assets/event4.png'), 
        descricao: 'O Festival Submundo é o evento perfeito para quem busca uma experiência única de cultura alternativa e música ao vivo! No dia 5 de Maio, venha para o Espaço das Américas e viva a energia de artistas que representam o melhor do underground. Com várias atrações, o festival promete muito mais do que só música: será uma verdadeira imersão no submundo da arte e da criatividade. Se você está em busca de algo fora do comum, não perca!', 
        data: '5 Mai, 2024', 
        local: 'Espaço das Américas', 
        regiao: 'Barra Funda - SP',
        endereco: 'Rua Tagipuru, 795, São Paulo, SP', 
        confirmados: 8, 
        capacidade: 250, 
        usuariosConfirmados: [
            require('../../../assets/person2.png'),
            require('../../../assets/person3.png'),
            require('../../../assets/person4.png'),
            require('../../../assets/person5.png'),
        ], 
    },
    { 
        id: 5, 
        nome: 'Festival Submundo', 
        imagem: require('../../../assets/event5.png'), 
        descricao: 'Assim como no evento anterior, o Festival Submundo volta a trazer ao palco uma proposta única de arte e música alternativa. No dia 2 de Junho, prepare-se para mais uma noite cheia de performances energéticas, um ambiente vibrante e muitas surpresas. O Centro Cultural São Paulo será o cenário onde as culturas alternativas se encontram para criar uma noite inesquecível. Não deixe de participar dessa celebração da arte fora do mainstream!', 
        data: '2 Jun, 2024', 
        local: 'Centro Cultural São Paulo', 
        regiao: 'Liberdade - SP',
        endereco: 'Rua Vergueiro, 1000, São Paulo, SP', 
        confirmados: 8, 
        capacidade: 250, 
        usuariosConfirmados: [
            require('../../../assets/person2.png'),
            require('../../../assets/person3.png'),
            require('../../../assets/person4.png'),
            require('../../../assets/person5.png'),
        ], 
    },
    { 
        id: 6, 
        nome: 'Introdução à computação em nuvem', 
        imagem: require('../../../assets/event6.png'), 
        descricao: 'Está interessado em aprender mais sobre computação em nuvem? No evento Introdução à Computação em Nuvem, que acontece no dia 18 de Junho na FECAP (Faculdade de Economia, Administração e Contabilidade de São Paulo), você terá a chance de entender os conceitos fundamentais e as aplicações dessa tecnologia que vem revolucionando o mundo da informática. Se você é iniciante ou apenas quer expandir seus conhecimentos, este evento é a porta de entrada perfeita para o universo da computação em nuvem.', 
        data: '18 Jun, 2024', 
        local: 'FECAP', 
        regiao: 'República - SP',
        endereco: 'Rua São João, 191, São Paulo, SP', 
        confirmados: 8, 
        capacidade: 250, 
        usuariosConfirmados: [
            require('../../../assets/person2.png'),
            require('../../../assets/person3.png'),
            require('../../../assets/person4.png'),
            require('../../../assets/person5.png'),
        ], 
    },
    { 
        id: 7, 
        nome: 'CloudWorld Tour', 
        imagem: require('../../../assets/event7.png'), 
        descricao: 'O CloudWorld Tour é o evento que vai te levar para o futuro da computação! No dia 10 de Outubro, o Teatro Sérgio Cardoso será o palco de uma imersão em tudo o que envolve a computação em nuvem e as inovações tecnológicas que estão transformando o mercado global. Se você quer aprender com os maiores especialistas da área e entender como a nuvem pode impactar seu negócio, não perca a chance de participar deste evento único.', 
        data: '10 Out, 2024', 
        local: 'Teatro Sérgio Cardoso', 
        regiao: 'Bela Vista - SP',
        endereco: 'Rua Rui Barbosa, 153, São Paulo, SP', 
        confirmados: 8, 
        capacidade: 250, 
        usuariosConfirmados: [
            require('../../../assets/person2.png'),
            require('../../../assets/person3.png'),
            require('../../../assets/person4.png'),
            require('../../../assets/person5.png'),
        ], 
    },
    { 
        id: 8, 
        nome: 'Startup Day', 
        imagem: require('../../../assets/event8.png'), 
        descricao: 'O Startup Day é o evento ideal para quem tem espírito empreendedor e está em busca de inspiração e conhecimentos sobre o mundo das startups. No dia 12 de Outubro, venha para o Auditório Ibirapuera e aproveite a oportunidade de interagir com fundadores, investidores e profissionais de empresas emergentes. O evento traz palestras, workshops e muito networking, criando um ambiente perfeito para quem deseja inovar e fazer crescer sua ideia de negócio.', 
        data: '12 Out, 2024', 
        local: 'Auditório Ibirapuera', 
        regiao: 'Vila Mariana - SP',
        endereco: 'Av. Pedro Álvares Cabral, s/n - Ibirapuera, São Paulo, SP', 
        confirmados: 8, 
        capacidade: 250, 
        usuariosConfirmados: [
            require('../../../assets/person2.png'),
            require('../../../assets/person3.png'),
            require('../../../assets/person4.png'),
            require('../../../assets/person5.png'),
        ], 
    }
];

const EventoDetails = ({ route }: EventoDetailsProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { eventoId } = route.params;

    const evento = eventos.find(e => e.id === eventoId);

    if (!evento) {
        return <Text>Evento não encontrado</Text>;
    }

    const eventDay = evento.data.split(' ')[0];

    const irParaAvaliacoes = () => {
        navigation.navigate('EventoAval', { eventoId });
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.backButton}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ButtonBack 
                        IconName="chevron-back"
                        IconColor="#fff"
                        onPress={() => navigation.navigate('Eventos')}
                    />
                </TouchableOpacity>
            </View>

            <Image source={evento.imagem} style={styles.eventImage} />
            <Text style={styles.eventName}>{evento.nome}</Text>
            <TouchableOpacity onPress={irParaAvaliacoes}>
                <Text style={styles.reviewsText}>⭐ Avaliações</Text>
            </TouchableOpacity>

            <View style={styles.infoContainer}>
                <View style={styles.infoItem}>
                    <View style={styles.eventDayCircle}>
                        <Text style={styles.eventDayText}>{eventDay}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.infoText}>{evento.data}</Text>
                        <Text style={styles.subText}>{evento.regiao}</Text>
                    </View>
                </View>

                <View style={styles.infoItem}>
                    <View style={styles.eventDayCircleBlue}>
                        <Image source={require('../../../assets/waze_icon.png')} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.infoText}>{evento.local}</Text>
                        <Text style={styles.subText}>{evento.endereco}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.attendeesSection}>
                <View style={styles.attendeesTextContainer}>
                    <View style={styles.attendeesTextLeft}>
                        <Text style={styles.attendeesText}>
                            {evento.confirmados}/{evento.capacidade} Confirmados
                        </Text>
                        <Text style={styles.limitedText}>Vendas limitadas</Text>
                    </View>
                    
                    <View style={styles.confirmedUsersContainer}>
                        {evento.usuariosConfirmados?.map((userImage, index) => (
                            <Image 
                                key={index}
                                source={userImage} 
                                style={styles.userImage} 
                            />
                        ))}
                    </View>
                </View>
            </View>

            <Text style={styles.eventDescription}>{evento.descricao}</Text>

            <TouchableOpacity style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>CONFIRMAR PRESENÇA</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default EventoDetails;