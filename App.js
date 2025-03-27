import React, { useState } from 'react'; // Importando o useState
import { View, Text, Button, StyleSheet } from 'react-native'; // importando ferramentas de react native

export default function App() {
  const [message, setMessage] = useState(''); // Inicializando o useState

  const handlePress = () => {
    setMessage('Você me pressionou seu safado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meu primeiro botão em React Native</Text> {/* Corrigido Style para style */}

      <Button title="Pressione-me!" onPress={handlePress} /> {/* Botão que chama a função handlePress */}

      {/* Exibindo a mensagem após o botão ser pressionado */}
      {message && <Text style={styles.text}>{message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  text: {
    fontSize: 10,
    color: 'white',
    marginBottom: 10, // Adicionando um pouco de espaço entre os textos
  },
});
