import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Botao({ logCalc, numero }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => logCalc(numero)}
        style={styles.touchable}
      >
        <Text style={styles.text}>{numero}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    width: '33.3%',
    height: '25%',
  },
  touchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});
