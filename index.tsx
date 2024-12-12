import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Botao from './botao';

export default function App() {
  const [firstnumb, setFirstNumb] = useState(0);
  const [secondnumb, setSecondNumb] = useState(0);
  const [sinal, setSinal] = useState("");
  const [stringCalculo, setStringCalculo] = useState("0");

  const numeros = Array.from({ length: 10 }, (_, i) => i);

  function logCalc(n:number|string) {
    if (typeof n === 'number') {
      if (sinal === "") {
        const novoNumero = parseInt(firstnumb.toString() + n.toString());
        setFirstNumb(novoNumero);
        setStringCalculo(novoNumero.toString());
      } else {
        const novoNumero = parseInt(secondnumb.toString() + n.toString());
        setSecondNumb(novoNumero);
        setStringCalculo(`${firstnumb} ${sinal} ${novoNumero}`);
      }
    } else if (n === "+" || n === "-" || n === "x" || n === "/") {
      setSinal(n);
      setStringCalculo(`${firstnumb} ${n}`);
    } else if (n === "=") {
      let resultado = 0;
      if (sinal === "+") resultado = firstnumb + secondnumb;
      if (sinal === "-") resultado = firstnumb - secondnumb;
      if (sinal === "x") resultado = firstnumb * secondnumb;
      if (sinal === "/") resultado = firstnumb / secondnumb;

      setStringCalculo(resultado.toString());
      setFirstNumb(resultado);
      setSecondNumb(0);
      setSinal("");
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar hidden />
      <View style={styles.topo}>
        <Text style={styles.txt}>{stringCalculo}</Text>
      </View>

      <View style={{ flexDirection: 'row', height: '16.6%', alignItems: 'center' }}>
        {["+", "-", "/", "x", "="].map((op) => (
          <TouchableOpacity key={op} style={styles.btnSin} onPress={() => logCalc(op)}>
            <Text style={{ fontSize: 24, color: 'white' }}>{op}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.numerosContainer}>
        {numeros.map((numero) => (
          <Botao key={numero} logCalc={logCalc} numero={numero} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topo: {
    padding: 25,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    height: '16.6%',
    justifyContent: 'center',
    paddingLeft: 30,
  },
  txt: {
    fontSize: 40,
    color: 'white',
  },
  btnSin: {
    width: '20%',
    backgroundColor: 'rgb(20,20,20)',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  numerosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopColor: 'black',
    borderTopWidth: 2,
    height: '66.8%',
  },
});
