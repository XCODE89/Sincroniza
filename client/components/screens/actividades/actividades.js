import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import Checklist from './CheckList';

const Actividades = () => {
    return (
        <View>
            <Text>BIENVENIDO : Usuario</Text>
            <TextInput style={styles.input} placeholder='Escriba para buscar el proyecto'></TextInput>
            <Checklist/>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
      padding: 10,
      backgroundColor: "lightgrey",
      margin: 10,
      borderRadius: 10
    },
  });
export default Actividades