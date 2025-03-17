import React, { useState } from 'react'; // Importando o useState
import { View, Text, Button, StyleSheet } from 'react-native'; // Certifique-se de importar o Button

export default function App() {
  const [message, setMessage] = useState(''); // Inicializando o useState

  const handlePress = () => {
    setMessage('Você pressionou o botão!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World! Meu primeiro botão em React Native</Text> {/* Corrigido Style para style */}

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
    fontSize: 25,
    color: 'white',
    marginBottom: 10, // Adicionando um pouco de espaço entre os textos
  },
});
