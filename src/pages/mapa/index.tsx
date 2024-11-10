import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import TopRectangle from '../../components/topRectangle';
import BottomTab from '../../components/bottomTab/bottomTab';
import Map from '../../components/map';
import { Input } from '../../components/inputs/input2';
import { Octicons } from '@expo/vector-icons';
import Interests from '../../components/interest';

const Mapa = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <TopRectangle />
            </View>
            
            <View style={styles.boxMid}>
                <Input 
                    style={styles.input}
                    placeholder='Procure por eventos, bares e lojas'
                    placeholderTextColor="gray"
                    IconLeft={Octicons}
                    IconLeftName="search"
                    IconColor="white"
                />
            </View>

            {/* UsersHorizontal Section */}
            <View style={styles.users}>
                <Interests interestColor = 'black' />
            </View>

            <Map />
            <BottomTab />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        marginTop: -20,
        zIndex: 1
    }, 
    boxMid: {
        position: 'absolute',
        height: Dimensions.get('window').height / 5,
        width: '100%',
        paddingHorizontal: 37,
        top: 20,
        zIndex: 1,
    },
    input: {
        borderRadius: 5,
        color: '#000',
        backgroundColor: '#fff',
        height: 40,
    },
    users: {
        position: 'absolute',
        top: 80, 
        width: '100%',
        zIndex: 100, 
    }
});

export default Mapa;
