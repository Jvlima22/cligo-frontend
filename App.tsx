import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/pages/welcome';
import Home from './src/pages/home';
import Login from './src/pages/login';
import Register from './src/pages/register';
import Recovery from './src/pages/recovery';
import Interesse1 from './src/pages/interesses/interesse1';
import Interesse2 from './src/pages/interesses/interesse2';
import RegisterPj from './src/pages/registerpj';
import Perfil_us from './src/pages/perfil_us';
import Chat from './src/pages/chat';
import ChatScreen from './src/pages/chatScreen';
import Mapa from './src/pages/mapa';
import Cardapio from './src/pages/cardapio';
import Perfil_pj from './src/pages/perfil_pj';
import Avaliacoes from './src/pages/avaliacoes';
import Explorer from './src/pages/explorer';
import Eventos from './src/pages/eventos';
import EventoDetails from './src/pages/eventos/eventoDetails';
import EventoAval from './src/pages/eventos/eventoAval';
import Config from './src/pages/configs/config';
import ConfigPerfil from './src/pages/configs/configPerfil';
import ConfigDP from './src/pages/configs/configDP';
import ConfigInterests from './src/pages/configs/configInterests/índex';
import ConfigPC from './src/pages/configs/configPC';
import ConfigMC from './src/pages/configs/configMC';
import ConfigCC from './src/pages/configs/configCC';
import ConfigAcess from './src/pages/configs/configAcess';

type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Login: undefined;
  Register: undefined;
  RegisterPj: undefined;
  Recovery: undefined;
  Interesse1: undefined;
  Interesse2: undefined;
  Explorer: undefined;
  Mapa: undefined;
  Chat: undefined;
  ChatScreen: undefined;
  Perfil_us: undefined;
  Perfil_pj: undefined;
  Cardapio: undefined;
  Eventos: undefined;
  EventoAval: undefined;
  EventoDetails: undefined;
  Avaliacoes: undefined;
  Config: undefined;
  ConfigPerfil: undefined;
  ConfigDP: undefined;
  ConfigInterests: undefined;
  ConfigPC: undefined;
  ConfigMC: undefined;
  ConfigCC: undefined;
  ConfigAcess: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterPj" component={RegisterPj} />
        <Stack.Screen name="Recovery" component={Recovery} />
        <Stack.Screen name="Interesse1" component={Interesse1} />
        <Stack.Screen name="Interesse2" component={Interesse2} />
        <Stack.Screen name="Explorer" component={Explorer} />
        <Stack.Screen name="Mapa" component={Mapa} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="Perfil_us" component={Perfil_us} />
        <Stack.Screen name="Perfil_pj" component={Perfil_pj} />
        <Stack.Screen name="Cardapio" component={Cardapio} />
        <Stack.Screen name="Avaliacoes" component={Avaliacoes} />
        <Stack.Screen name="Eventos" component={Eventos} />
        <Stack.Screen name="EventoDetails" component={EventoDetails} />
        <Stack.Screen name="EventoAval" component={EventoAval} />
        <Stack.Screen name="Config" component={Config} />
        <Stack.Screen name="ConfigPerfil" component={ConfigPerfil} />
        <Stack.Screen name="ConfigDP" component={ConfigDP} />
        <Stack.Screen name="ConfigInterests" component={ConfigInterests} />
        <Stack.Screen name="ConfigPC" component={ConfigPC} />
        <Stack.Screen name="ConfigMC" component={ConfigMC} />
        <Stack.Screen name="ConfigCC" component={ConfigCC} />
        <Stack.Screen name="ConfigAcess" component={ConfigAcess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
