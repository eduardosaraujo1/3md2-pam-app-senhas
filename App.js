import { Button, Text, SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingInline:8}}>
        <View style={{flexDirection:'row',gap:4}}>
          <View style={{flex:1}}>
            <Button title="Normal" color="#4ea72e" />
          </View>
          <View style={{flex:1}}>
            <Button title="Prioritário" color="#4ea72e" />
          </View>
          <View style={{flex:1}}>
            <Button title="Alta Prioridade" color="#4ea72e" />
          </View>
        </View>
        <View>
          <Text style={{fontWeight:700,fontSize:24}}>Senhas</Text>
          <ScrollView style={{padding:6}}>
            <Text>N01</Text>
            <Text>P01</Text>
            <Text>AP01</Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8
  },
});
