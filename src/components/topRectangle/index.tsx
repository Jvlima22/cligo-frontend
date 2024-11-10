// TopRectangle.js
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const TopRectangle = () => {
  return (
    <View style={style.rectangle} />
  );
};

const style = StyleSheet.create({
  rectangle: {
    width: Dimensions.get('window').height/2.16,
    height: 180,
    borderColor: '#000', // Cor da borda
    backgroundColor: '#022440', // Cor de fundo do retângulo
    position: 'absolute', // Para que fique no topo
    top: 0, // Alinha no topo
    borderRadius: 20,
    marginTop: -10
  },
});

export default TopRectangle;
