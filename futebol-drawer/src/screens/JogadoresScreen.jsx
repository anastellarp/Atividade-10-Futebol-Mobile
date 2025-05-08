import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

export default function JogadoresScreen({ jogadores }) {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Jogadores</Text>
      <FlatList
        data={jogadores}
        renderItem={({ item }) => (
          <View style={styles.jogador}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <Text>{item.nome}</Text>
            <Text>Posição: {item.posicao}</Text>
            <Text>Idade: {item.idade}</Text>
            <Text>Número: {item.numero}</Text>
          </View>
        )}
        keyExtractor={(item) => item.numero.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  jogador: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
