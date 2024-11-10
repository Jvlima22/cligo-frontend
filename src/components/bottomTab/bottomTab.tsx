import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Feather, Ionicons, Octicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

type RootStackParamList = {
    Interesse1: undefined;
    Login: undefined;
    Explorer: undefined;
    Mapa: undefined;
    Chat: undefined;
    Perfil_us: undefined;
};

const BottomTab = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { width } = Dimensions.get('window');
    const [selectedTab, setSelectedTab] = useState<string | null>(null);

    const handleTabPress = (tabName: string, route: keyof RootStackParamList) => {
        setSelectedTab(tabName);
        navigation.navigate(route);
    };

    const getIconColor = (tabName: string) => (selectedTab === tabName ? '#63B4FF' : 'white');

    return (
        <View style={style.bottomTab}>
            <View style={[style.topLine, { width }]} />

            <TouchableOpacity 
                style={[style.tabButton, selectedTab === 'Explorer' && style.activeTab]} 
                onPress={() => handleTabPress('Explorer', 'Explorer')}
            >
                <View style={style.iconWithLabel}>
                    <Octicons name="home" size={24} color={getIconColor('Explorer')} />
                    {selectedTab === 'Explorer' && <Text style={[style.tabLabel, { color: getIconColor('Explorer') }]}>Início</Text>}
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[style.tabButton, selectedTab === 'Map' && style.activeTab]} 
                onPress={() => handleTabPress('Map', 'Mapa')}
            >
                <View style={style.iconWithLabel}>
                    <Feather name="map" size={24} color={getIconColor('Map')} />
                    {selectedTab === 'Map' && <Text style={[style.tabLabel, { color: getIconColor('Map') }]}>Mapa</Text>}
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[style.tabButton, selectedTab === 'Chat' && style.activeTab]} 
                onPress={() => handleTabPress('Chat', 'Chat')}
            >
                <View style={style.iconWithLabel}>
                    <Ionicons name="chatbox-ellipses-outline" size={24} color={getIconColor('Chat')} />
                    {selectedTab === 'Chat' && <Text style={[style.tabLabel, { color: getIconColor('Chat') }]}>Chat</Text>}
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[style.tabButton, selectedTab === 'Profile' && style.activeTab]} 
                onPress={() => handleTabPress('Profile', 'Perfil_us')}
            >
                <View style={style.iconWithLabel}>
                    <Ionicons name="person-outline" size={24} color={getIconColor('Profile')} />
                    {selectedTab === 'Profile' && <Text style={[style.tabLabel, { color: getIconColor('Profile') }]}>Perfil</Text>}
                </View>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    bottomTab: {
        position: 'absolute',
        bottom: 0, 
        left: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#001f3f',
        paddingVertical: 10,
        paddingHorizontal: 15,
        height: 60,
        width: '100%',
    },
    topLine: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 1,
        backgroundColor: 'white',
    },
    tabButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: -10
    },
    iconWithLabel: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: '#003366',
        borderRadius: 20,
        paddingHorizontal: 12,
    },
    tabLabel: {
        fontSize: 12,
        marginLeft: 8,
        fontWeight: 'bold',
        marginTop: 2
    },
});

export default BottomTab;
