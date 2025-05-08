import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function EscudoScreen({ escudo }) {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Escudo do Time</Text>
      <Image source={{ uri: escudo }} style={styles.escudo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  escudo: {
    width: 200,
    height: 200,
    marginTop: 20,
  }
});
