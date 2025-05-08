import React from 'react';
import 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import EscudoScreen from './src/screens/EscudoScreen';
import JogadoresScreen from './src/screens/JogadoresScreen';
import TitulosScreen from './src/screens/TitulosScreen';

const time = {
  nome: "Flamengo",
  escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  fundacao: "15 de novembro de 1895",
  estadio: "Maracanã",
  mascote: "Urubu",
  cores: ["Vermelho", "Preto"]
};

const jogadores = [
  {
    nome: "Gabriel Barbosa",
    numero: 9,
    posicao: "Atacante",
    idade: 27,
    imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg"
  },
  {
    nome: "Arrascaeta",
    numero: 14,
    posicao: "Meia",
    idade: 29,
    imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg"
  },
  {
    nome: "Everton Ribeiro",
    numero: 7,
    posicao: "Meia",
    idade: 33,
    imagem: "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg"
  },
  {
    nome: "David Luiz",
    numero: 23,
    posicao: "Zagueiro",
    idade: 35,
    imagem: "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg"
  },
  {
    nome: "Pedro",
    numero: 21,
    posicao: "Atacante",
    idade: 26,
    imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg"
  }
];

const titulos = [
  {
    nome: "Campeonato Brasileiro",
    anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020]
  },
  {
    nome: "Copa Libertadores da América",
    anos: [1981, 2019, 2022]
  },
  {
    nome: "Copa do Brasil",
    anos: [1990, 2006, 2013, 2022, 2024]
  },
  {
    nome: "Supercopa do Brasil",
    anos: [2020, 2021, 2025]
  }
];

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Escudo"
            options={{
              title: "Escudo",
              drawerIcon: ({ color, size }) => <Ionicons name="shield" color={color} size={size} />
            }}
          >
            {(props) => <EscudoScreen {...props} escudo={time.escudo} />}
          </Drawer.Screen>
          <Drawer.Screen
            name="Jogadores"
            options={{
              title: "Jogadores",
              drawerIcon: ({ color, size }) => <Ionicons name="people" color={color} size={size} />
            }}
          >
            {(props) => <JogadoresScreen {...props} jogadores={jogadores} />}
          </Drawer.Screen>
          <Drawer.Screen
            name="Títulos"
            options={{
              title: "Títulos",
              drawerIcon: ({ color, size }) => <Ionicons name="trophy" color={color} size={size} />
            }}
          >
            {(props) => <TitulosScreen {...props} titulos={titulos} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
