import React, { useState } from 'react'; // Importando o useState
import { View, Image, Text, Button, TextInput, SafeAreaView, StyleSheet } from 'react-native'; // importando ferramentas de react native

/*
export default function App() {
  const [message, setMessage] = useState(''); // Inicializando o useState

  const handlePress = () => {
    setMessage('Você me pressionou seu safado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meu primeiro botão em React Native</Text> {// Corrigido Style para style}

      <Button title="Pressione-me!" onPress={handlePress} /> {// Botão que chama a função handlePress}

      {// Exibindo a mensagem após o botão ser pressionado}
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
});*/

// Componente: Text
/*
const TextoAninhado = () => {
  const [titulo, setTitulo] = useState("Clique em mim");

  const modificaTexto = () => {
    if (titulo == "Clique em mim") {
      setTitulo("Você clicou em mim")
    } else {
	setTitulo("Clique em mim");
    }
  };

  return (
	<Text style={styles.baseText}>
	  <Text style={styles.titulo} onPress={modificaTexto}>
		{titulo}
		{"\n"}
		{"\n"}
	  </Text>
	</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  baseText: {
	fontFamily: "Verdana",
	marginTop:50,
	marginLeft:10
  },

  titulo: {
	marginTop:10,
	fontSize: 18,
	fontWeight: "bold",
  textAlign: "center",
  },
});

export default TextoAninhado;
*/

//Componente: Img
/*
const styles = StyleSheet.create({
  container: {
	paddingTop: 200,
  },
  imagem: {
	width: 200,
	height: 200,
	alignSelf: 'center'
  }
});

const ComponenteSimplesImage = () => {
  return (
	<View style={styles.container}>
	  <Image
		style={styles.imagem}
		source={{
		  uri: 'https://img.freepik.com/vetores-premium/hello-world-e-uma-palavra-simples-para-a-primeira-programacao-do-programador_48644-298.jpg',
		}}
	  />
	</View>
  );
}

export default ComponenteSimplesImage;
*/

// Componente: TextInput
/*
const MeuTextInput = () => {
  const [texto, setTexto] = React.useState(null);
  const [numero, setNumero] = React.useState(0);

  return (
	<SafeAreaView>
	  <TextInput
		style={styles.meutextinput}
		value={texto}
	  />
	  <TextInput
		style={styles.meutextinput}
		onChangeText={setNumero}
		value={numero}
		keyboardType="numeric"
	  />
	</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  meutextinput: {
	marginTop:100,
	height: 40,
	margin: 12,
	borderWidth: 1,
  },
});

export default MeuTextInput;
*/