import { Animated, Image, Keyboard, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import CheckBox from '@react-native-community/checkbox';
import { rMS, rScale, rVerScale } from '../../styles/responsive';

import { Dimensions } from 'react-native';
import CustomTextInputPass from '../components/CustomTextInputPass';
import { useDispatch } from 'react-redux';
import { loginAccount, signInWithEmailAndPassword } from '../redux/action/SsAction';

const windowHeight = Dimensions.get('window').height;

let marginTop = windowHeight > 667 ? rVerScale(30) : 0; 

const Login = () => {
  const navigation = useNavigation();
  const [userInput, setUserInput] = useState({ email: "", password: "" })
  const [emailError, setEmailError] = useState("")
  const [passError, setPassError] = useState("")
  const [toggleCheckBox, settoggleCheckBox] = useState(true)
  const animValue = new Animated.Value(1);


  const handleKeyboardDidShow = () => {
    Animated.timing(animValue, {
      toValue: 0.8,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }

  const handleKeyboardDidHide = () => {
    Animated.timing(animValue, {
      toValue: 1,
      duration: 250,
      useNativeDriver: false
    }).start();
  }

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", handleKeyboardDidShow)
    Keyboard.addListener("keyboardDidHide", handleKeyboardDidHide)
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow", handleKeyboardDidShow)
      Keyboard.removeAllListeners("keyboardDidHide", handleKeyboardDidHide)
    }
  })

  const dispatch = useDispatch()

  const validateLogin = async() =>{
    if(userInput.email.trim() === '' || userInput.password.trim() === ''){
      if(userInput.email.trim() === ''){
        setEmailError("Enter your email address")
      }else{
        setEmailError("")
      }

      if(userInput.password.trim() === ''){
        setPassError("Enter the password")
      }else{
        setPassError("")
      }
    }else{
      const checkAcc = await dispatch(loginAccount(userInput.email, userInput.password))
      const loginResult = await dispatch(signInWithEmailAndPassword(userInput.email, userInput.password))

      if(loginResult == 2){
        setPassError("Account does not exist")
      }else {
        setPassError("")
      }

      if(loginResult == 3){
        setPassError("Incorrect password")
      }else{
        setPassError("")
      }

      if(checkAcc == true && loginResult == 1){
        navigation.navigate("TabNav")
      }

    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <KeyboardAvoidingView style={{}}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Image source={require("../../assets/ellipse1.png")} style={st.img1} />
        <Image source={require("../../assets/ellipse3.png")} style={st.img2} />
        <Image source={require("../../assets/ellipse2.png")} style={st.img3} />
        <ScrollView style={{ padding: rMS(15) }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: rMS(100) }}
        >
          <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: rVerScale(20), marginTop: marginTop }}>
            <Animated.Text style={{
              color: "#fe724c",
              fontSize: animValue.interpolate({
                inputRange: [0.8, 1],
                outputRange: [rMS(22), rMS(30)]
              }),
              fontWeight: '700',
              // fontFamily: ''
            }}>SHOPSAVVY</Animated.Text>
            <Animated.Text style={{
              color: "#555555",
              fontSize: animValue.interpolate({
                inputRange: [0.8, 1],
                outputRange: [rMS(18), rMS(24)]
              }),
              fontWeight: '700',
            }}>Welcome to ShopSavvy</Animated.Text>
          </View>


          <Animated.Text style={{
            color: "#555555", fontWeight: 700, textAlign: 'center', marginBottom: rScale(10),
            fontSize: animValue.interpolate({
              inputRange:[0.8,1],
              outputRange:[rMS(33),rMS(30)]
            }),
          }}>Log In</Animated.Text>

          <View style={{ width: '100%', marginBottom: rVerScale(14) }}>
            <CustomTextInput
              placeholder="example@mail.com"
              onChangeText={txt => setUserInput({ ...userInput, email: txt })}
              err={emailError}
              style={{}}
              nameIcon={"email-outline"} />
          </View>

          <View style={{ width: '100%', marginBottom: rVerScale(5) }}>
            <CustomTextInputPass
              placeholder="******"
              onChangeText={txt => setUserInput({ ...userInput, password: txt })}
              err={passError}
              nameIcon={"account-key-outline"}
              style={{ paddingRight: rScale(34) }} />
          </View>

          <View style={{ width: '100%', marginBottom: rVerScale(10) }}>
            <Text style={{ textAlign: 'right', color: '#fe724c',fontSize: rMS(15) }}>Forgot password ?</Text>
          </View>

          <View style={{ width: '100%', flexDirection: 'row', }}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newVl) => settoggleCheckBox(newVl)} />
            <ScrollView horizontal={false}>
              <Text style={{ textAlign: 'justify', fontSize: rMS(14), color: '#505050', lineHeight: rMS(22) }}>
                By logging in, I have read and agreed to the{' '}
                <Text style={{ color: '#fe724c', textDecorationLine: 'underline' }}>Terms of Service</Text>
                {' '}and{' '}
                <Text style={{ color: '#fe724c', textDecorationLine: 'underline' }}>Privacy Policy</Text>
                {' '}of ShopSavvy
              </Text>
            </ScrollView>
          </View>

          <View style={{ width: '100%', alignItems: 'center', marginVertical: rVerScale(15) }}>
            <CustomButton onPress={() => validateLogin()}
              title={"LOGIN"}
              style={{ width: '100%' }}
            />
          </View>

          <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: '30%', borderWidth: rScale(0.4), borderColor: '#707070' }} />
            <Text style={{ marginHorizontal: rScale(10), fontSize: rMS(14), color: "#555555" }}>Or sign in with</Text>
            <View style={{ width: '30%', borderWidth: rScale(0.4), borderColor: '#707070' }} />
          </View>

          <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: rMS(20) }}>
            <TouchableOpacity style={st.btn} onPress={() => {

            }}>
              <Image source={require("../../assets/phone.png")}
                style={{ width: rMS(30), height: rMS(30) }} />
            </TouchableOpacity>

            <TouchableOpacity style={st.btn} onPress={() => {

            }}>
              <Image source={require("../../assets/gg.png")}
                style={{ width: rMS(30), height: rMS(30) }} />
            </TouchableOpacity>

            <TouchableOpacity style={st.btn} onPress={() => {

            }}>
              <Image source={require("../../assets/fb.png")}
                style={{ width: rMS(30), height: rMS(30) }} />
            </TouchableOpacity>

          </View>

          <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: rMS(15) }}>
            <Text style={{ color: "#505050", fontSize: rMS(15) }}>Dont't have an account ? </Text>
            <Text style={{ color: "#fe724c", fontSize: rMS(15), fontWeight: 'bold', textDecorationLine: 'underline' }}
              onPress={() => navigation.navigate("SignUp")}>Sign Up</Text>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Login

const st = StyleSheet.create({
  img1: {
    width: rMS(40), height: rMS(70),
    position: 'absolute', left: rMS(0), top: rMS(-13)
  },
  img2: {
    width: rMS(150), height: rMS(65),
    position: 'absolute', left: rMS(0), top: rMS(-10)
  },
  img3: {
    width: rMS(70), height: rMS(70),
    position: 'absolute', right: rMS(0), top: rMS(-10)
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: rMS(10),
    borderRadius: rMS(25),
    borderWidth:rMS(1),
    width: rMS(50),
    borderColor:"#ddd"
  },
})