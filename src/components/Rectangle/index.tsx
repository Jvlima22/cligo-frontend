import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RectangleProps {
  width: number;
  height: number;
  children?: React.ReactNode; // Permite que passe filhos para o retângulo
}

const Rectangle: React.FC<RectangleProps> = ({ width, height, children }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.rectangle, { width, height }]}>
        {React.Children.map(children, (child) => {
          // Se o child for texto, o envolva com um componente <Text>
          if (typeof child === 'string') {
            return <Text>{child}</Text>;
          }
          return child;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    position: 'relative', 
  },
  rectangle: {
    borderColor: '#000',
    backgroundColor: '#fff',
    top: 30,
    marginLeft: 36, 
    borderRadius: 20, 
    position: 'absolute', 
  },
});

export default Rectangle;
