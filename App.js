import React, { useState } from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [result, setresult] = useState(0);
  const [number, setnumber] = useState(5);
  const [i, seti] = useState(0);

  const onClickHandler = () => {
    setresult(result + number);
    seti(i + 1);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Adım adım çarpma öğrenelim</Text>
      <Text style={styles.text}>{result}</Text>

      <Button title={`${number} Arttır`} onPress={onClickHandler}></Button>
      <Text style={styles.text}>{i} kere tıkladınız</Text>
      <Text style={styles.text}>Yani {number} x {i} = {result}</Text>
      <Button
        title="sıfırla"
        onPress={() => {
          setresult(0)
          seti(0)
        }}></Button>
      <Button
        title="Sayıyı arttır"
        onPress={() => {
          setnumber(number+1)
          setresult(0)
          seti(0)
        }}
      ></Button>
      <Button
        title="sayıyı azalt"
        onPress={() => {
          setnumber(number-1)
          setresult(0)
          seti(0)
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#065275',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
  design: {
    margin: 10,
  },
});

export default App;