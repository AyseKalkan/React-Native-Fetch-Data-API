import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import CustomisedButton from '../utils/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({navigation}){

    const [name,setName] = useState('');
    const [age,setAge] = useState('');

    useEffect(() => {
        getData();
      }, []);
      
    const getData = () => {
      try{
    AsyncStorage.getItem('UserName')
    .then(value=>{
      if(value!=null){
        navigation.navigate('Home')
      }
    }
    
    )
      }catch(error){
    console.log(error);
    
      }
    }

    const setData = async () => {
    if(name.length==0 || age.length == 0){

Alert.alert('Warning!','Please write your data.')
    }else {
        try{
            var user = {
                Name: name,
                Age: age,
            }
            await AsyncStorage.setItem('UserData', JSON.stringify(user));
            navigation.navigate('Home');
        }catch (error) {
            console.log(error);

        }

    }
}
return(
    <View
    style = {styles.body}>
        <Image
            style = {styles.logo}
            source = {require('../../assets/logo.png')}
            />
<Text style = {styles.text}>
    Async Storage
</Text>
<TextInput
placeholder='Enter your name'
style = {styles.input}
onChangeText = {(value) => setName(value)}

/>
<TextInput
placeholder='Enter your age'
style = {styles.input}
onChangeText = {(value) => setAge(value)}

/>
<CustomisedButton
onPressFunction={setData}
title = 'Login'
color= '#5a9e6d'
/>

    </View>
)

}
const styles = StyleSheet.create ({
body :{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#c1f5d0',

},
logo:{
    width: 100,
    height: 100,
    margin:20,
},
text:{
    fontSize:30,
    color: '#1c4a29',
    marginBottom:120,

},
input:{
    width: 300,
    borderWidth:1,
    borderColor:'#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop:10,
    marginBottom:10,
}
})