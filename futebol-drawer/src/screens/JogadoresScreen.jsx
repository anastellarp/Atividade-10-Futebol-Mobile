import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import { Card } from 'react-native-paper'

export default function JogadoresScreen(props) {

  const { nome,numero,posicao,idade,imagem } = props

  return (
    <Card style={{ margin: 10 }}>
      <Card.Content>
        <Text></Text>
      </Card.Content>
      <Card.Cover source={{ uri: imagem }} />
      <Card.Actions>
        <FlatList
            data={jogadores}
            keyExtractor={(item) => item.numero.toString()}
            renderItem={({ item }) => (
                <Card>
                    <Card.Cover source={{ uri: item.imagem }} />
                    <Card.Content>
                        <Title>{item.nome}</Title>
                        <Text>{item.posicao} - {item.idade} anos</Text>
                    </Card.Content>
                </Card>
            )}
        />
      </Card.Actions>
    </Card>
  )
}

const styles = StyleSheet.create({})