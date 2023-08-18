import React, { useState } from 'react';
import { Alert, Button, Image, ImageBackground, Modal, Pressable, RefreshControl, ScrollView, SectionList, StyleSheet, Text, TextInput, ToastAndroid, Touchable, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import CustomisedButton from './CustomButton';
import Header  from './Header';

const App = () => {
  const [name,setName] = useState('')
  const [kimlikNumarası, setKimlikNumarası] =useState()
  const [email, setEmail] = useState('')
  const [telefonnum, setTelefonnum] = useState()
  const [sifre, SetSifre] = useState('')
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false)
  const onPressHandler = () => {
    if(name.length > 3){
      setSubmitted(!submitted);
    }else{
      setShowWarning(true);
    }
  }

  return (
    <ScrollView>
    <ImageBackground 
    source={require('../assets/Background.png')}
    style = {styles.body}>
      <Header /> 
      <Modal
      animationType='slide'
      hardwareAccelerated
      visible = {showWarning}
      transparent
      onRequestClose={ () => 
      setShowWarning(false)}
      >
        <View style = {styles.centered_view}>
        <View style= {styles.warning_modal}>
          <View style = {styles.warning_title}>
            <Text style = {styles.text}>WARNING!</Text>
          </View>
          <View style = {styles.warning_body}>
          <Text style = {styles.text}>Name must be longer than 3 characters</Text>
          </View>
          <Pressable
          android_ripple={{color:'#ffffff'}}
          onPress = {() => setShowWarning(false)}
          style = {styles.warning_button}
          >
            <Text style= {styles.text}>OK</Text>
          </Pressable>
        </View> 
        </View>
      </Modal>
      <Text style= {styles.text}>
        Kullanici adinizi giriniz:
      </Text>
      <TextInput style = {styles.input} 
      multiline
      placeholder='e.g. Jhon'
      onChangeText = {(value)=> setName(value)}
/>
<Text style= {styles.text}>
        e-mail adresinizi giriniz:
      </Text>
      <TextInput style = {styles.input} 
      multiline
      keyboardType='email-address'
      onChangeText = {(value)=> setEmail(value)}
/>

<Text style= {styles.text}>
        TC Kimlik numaranizi giriniz:
      </Text>
      <TextInput style = {styles.input} 
      multiline
      maxLength={11}
      keyboardType='number-pad'
      onChangeText = {(value)=> setKimlikNumarası(value)}
/>
<Text style= {styles.text}>
        Telefon numaranizi giriniz:
      </Text>
      <TextInput style = {styles.input} 
      multiline
      keyboardType='phone-pad'
      placeholder='5XXX'
      onChangeText = {(value)=> setTelefonnum(value)}
/>
<Text style= {styles.text}>
        Şifre belirleyiniz:
      </Text>
      <TextInput style = {styles.input} 
      secureTextEntry
      multiline
      onChangeText = {(value)=> SetSifre(value)}
/>

{ <CustomisedButton
onPressFunction={onPressHandler}
title={submitted ? 'Onayla' : 'Temizle'}
color = {'#df7777'}
/> }

{ <CustomisedButton
onPressFunction={onPressHandler}
title={'Test'}
color = {'#df5222'}
style ={{margin : 10}}
/> }


{submitted ? 
  <View style ={styles.body}>
    <Text style= {styles.text}>
      <Text>Kullanıcı adiniz: {name} </Text>
    </Text>
    <Text style= {styles.text}>
      <Text>Email adresiniz: {email}</Text>
    </Text>
    <Image
style = {styles.image}
 source={require('../assets/Done.png')} />
  </View>
  : 
<Image
style = {styles.image}
 source={require('../assets/Error.png')} />}


    </ImageBackground>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
  
    alignItems: 'center',

  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin : 10,
    textAlign: 'center',
  },
  input: {
    width:200,
    borderWidth: 1,
    borderColor:'grey',
    borderRadius:5,
    textAlign:'center',
    fontSize: 20,
    backgroundColor: 'white',
  margin :10,  },
  button: {
    backgroundColor: 'lightblue',
    borderRadius:5,
    margin :10,
    alignItems : 'center',
  },
  warning_modal:{
width: 300,
height: 300,
backgroundColor:'white',
borderWidth:1,
borderColor: 'black',
borderRadius: 20,

  },
  centered_view: {
flex:1,
justifyContent:'center',
alignItems: 'center',
backgroundColor: '#00000099'
  },
  warning_title:{
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body:{
    height: 200,
    justifyContent:'center',
    alignItems:'center',
  },
  warning_button:{
    backgroundColor: 'yellow',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,

  },
  image: {
    width: 100,
    height: 100,
    margin :10,


  }
  
});

export default App;