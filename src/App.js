import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  View,
} from 'react-native';

const App = () => {
  const [numero, setNumero] = useState(0);

  function handleNumber() {
    const novo_numero = Math.floor(Math.random() * 10);
    setNumero(novo_numero);
  }

  function esterEgg() {
    alert('Te amooooooo <3');
  }

  return (
    <View style={style.container}>
      <Text style={style.logo}>NZT</Text>
      <View style={style.edit2}>
        <Text style={style.numero}>{numero}</Text>
        <TouchableOpacity onPress={handleNumber} style={style.botao}>
          <Text style={style.edit}>Gerar numero</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={esterEgg} style={style.botao2}>
          <Text style={style.edit3}>NÃO CLIQUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FF0000',
    flex: 1,
  },
  numero: {
    fontSize: 38,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  edit3: {
    fontSize: 14,
    color: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 30,
    minHeight: 30,
    top: '4%',
  },
  edit2: {
    fontSize: 24,
    color: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 30,
    minHeight: 40,
    top: '50%',
  },
  edit: {
    fontSize: 24,
    color: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 30,
    minHeight: 40,
  },
  logo: {
    fontSize: 50,
    color: '#000000',
  },
  botao: {
    backgroundColor: '#FFFFFF',
    width: '60%',
    paddingHorizontal: 30,
    paddingTop: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  botao2: {
    backgroundColor: '#FFFFFF',
    width: '30%',
    paddingHorizontal: 10,
    paddingTop: 1,
    borderRadius: 10,
    marginTop: 130,
  },
});

export default App;
