import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Perfil_pj: undefined;
};

const Map = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [watchId, setWatchId] = useState<Location.LocationSubscription | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão de localização necessária', 'Por favor, ative a localização para usar o mapa.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      const id = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          distanceInterval: 1,
        },
        (newLocation) => {
          setUserLocation({
            latitude: newLocation.coords.latitude,
            longitude: newLocation.coords.longitude,
          });
        }
      );

      setWatchId(id);
    };

    fetchLocation();

    return () => {
      if (watchId) {
        watchId.remove();
      }
    };
  }, [watchId]);

  // Função para navegar para a tela perfil_us
  const handleMarkerPress = () => {
    navigation.navigate('Perfil_pj');
  };

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: userLocation ? userLocation.latitude : -23.5505,
        longitude: userLocation ? userLocation.longitude : -46.6333,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
      loadingEnabled={true}
    >
      {userLocation && (
        <Marker
          coordinate={userLocation}
          title="Sua Localização"
          description="Aqui está você!"
        />
      )}

      {/* Novo marcador para o Bar do Xexéu com ícone personalizado */}
      <Marker
        coordinate={{ latitude: -23.555323, longitude: -46.655283 }}
        title="Bar do Xexéu"
        description="Localização do Bar do Xexéu"
        image={require('../../assets/xexeu.png')}
        onPress={handleMarkerPress} // Navega para a tela perfil_us ao clicar
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default Map;
