import { Animated, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { rMS, rVerScale } from '../../styles/responsive';



const Welcom = () => {
  const navigation = useNavigation();

  useEffect(()=>{
    const switchScreen = setTimeout(() =>{
      navigation.navigate("Login");
    },2000)
    return () => clearTimeout(switchScreen);
  },[])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.Image source={require("../../assets/logo.png")} style={st.image} />
    </View>
  )
}

export default Welcom

const st = StyleSheet.create({
  image: {
    width: '100%',
    height: rMS(300)
  },
})