import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomisedButton =(props) => {
    
  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: pressed ? '#dddddd' : props.color },
        styles.button,
        {...props.style}
      ]}
      onPress={props.onPressFunction}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({

    text: {
      color: '#000000',
      fontSize: 20,
      margin : 10,
      textAlign: 'center',
    },
   
    button: {
      borderRadius:5,
      alignItems : 'center',
      margin :10,
    },
    
    
  });
export default CustomisedButton