import { Text, View, SafeAreaView, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [normal, setNormal] = useState(1);
  const [prioritario, setPrioritario] = useState(1);
  const [altaPrioridade, setAltaPrioridade] = useState(1);
  const [display, setDisplay] = useState("Nenhuma senha definida");

  function definirSenha(tipo) {
    if (tipo == "normal") {
      let num = normal+1;
      setDisplay("N0" + num);
      setNormal(num);
    }
    else if (tipo == "prioritario") {
      let num = prioritario+1;
      setDisplay("P0" + num);
      setPrioritario(num);
    }
    else if (tipo == "alta prioridade") {
      let num = altaPrioridade+1;
      if (num < 10) {
        setDisplay("AP00" + num);
      } else {
        setDisplay("AP0" + num);
      }
      setAltaPrioridade(num);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Normal" color="green" onPress={() => definirSenha("normal")}></Button>
        <Button title="Prioritario" color="green" onPress={() => definirSenha("prioritario")}></Button>
        <Button title="Alta Prioridade" color="green" onPress={() => definirSenha("alta prioridade")}></Button>
      </View>
      <Text style={styles.password}>
        {display}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  password: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
