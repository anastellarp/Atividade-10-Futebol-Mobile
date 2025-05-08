import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function TitulosScreen({ titulos }) {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Títulos Conquistados</Text>
      <FlatList
        data={titulos}
        renderItem={({ item }) => (
          <View style={styles.titulo}>
            <Text>{item.nome}</Text>
            <Text>Ano(s): {item.anos.join(', ')}</Text>
          </View>
        )}
        keyExtractor={(item) => item.nome}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    marginBottom: 20,
  },
});
