///////////////////////////////////////////////////////////////////////////////////////////////////////
// Importando dependências necessárias
///////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react'; // React é a biblioteca base para construir componentes em React Native
import { View, Text, StyleSheet } from 'react-native'; // Biblioteca para renderizar componentes

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Componente para relatórios
///////////////////////////////////////////////////////////////////////////////////////////////////////
const Relatorios = () => {
  return ( // Renderiza o texto de relatórios
    <View style={styles.container}>
      <Text>Relatórios (Em desenvolvimento)</Text>
    </View>
  );
};

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Estilos do componente
///////////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: { // Define os estilos do container
    flex: 1, // Define que o container seja um flexbox
    justifyContent: 'center', // Define que o conteúdo do container seja centralizado verticalmente
    alignItems: 'center', // Define que o conteúdo do container seja centralizado horizontalmente
  },
});

///////////////////////////////////////////////////////////////////////////////////////////////////////

export default Relatorios;

///////////////////////////////////////////////////////////////////////////////////////////////////////