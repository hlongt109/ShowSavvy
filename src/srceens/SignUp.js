import { Animated, Image, Keyboard, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/Feather"
import { useNavigation } from '@react-navigation/native';
import { rMS, rScale, rVerScale } from '../../styles/responsive';
import CustomTextInputPass from '../components/CustomTextInputPass';
import CustomTextInput from '../components/CustomTextInput';
import CheckBox from '@react-native-community/checkbox';
import CustomButton from '../components/CustomButton';
import { useDispatch } from 'react-redux';
import { checkEmailExists, registerAccountWithEmailPassword } from '../redux/action/SsAction';


const { width, height } = Dimensions.get('window');
const dpi = width / 5;
const is5Inch = dpi >= 300 && dpi;
const paddingScrol = is5Inch ? rMS(100) : rMS(10);
const marginTop = is5Inch ? rVerScale(10) : rVerScale(25);

const SignUp = () => {
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

  const dispatch = useDispatch();

  const validate = async () => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;

    if (userInput.email.trim() === "" || userInput.password.trim() === "" || userInput.password.length < 6 || toggleCheckBox !== true) {
      if (userInput.email.trim() === "") {
        setEmailError("Please provide us with your email address.")
      } else {
        setEmailError("")
      }

      if (userInput.password.trim() === "") {
        setPassError("Please enter your password.")
      } else if (userInput.password.length < 6) {
        setPassError("The password must be at least 6 characters long.")
      } else {
        setPassError("")
      }

      if (toggleCheckBox !== true) {
        ToastAndroid.show("You haven't agreed to the terms.", ToastAndroid.SHORT)
        return
      }
    } else {

      const isValidEmail = emailRegex.test(userInput.email.trim())
      if (!isValidEmail) {
        setEmailError("Please enter a valid email address.");
        return;
      } else {
        setEmailError("")
      }

      const emailExists = await dispatch(checkEmailExists(userInput.email))

      if (emailExists) {
        setEmailError("This email has already been registered.")
      } else {
        setEmailError("")
        const resultSignUp = await dispatch(registerAccountWithEmailPassword(userInput.email, userInput.password, "agree"))
        if (resultSignUp) {
          navigation.navigate("Login")
        }
      }
    }
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

      <KeyboardAvoidingView style={{}}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Image source={require("../../assets/ellipse1.png")} style={st.img1} />
        <Image source={require("../../assets/ellipse3.png")} style={st.img2} />
        <Image source={require("../../assets/ellipse2.png")} style={st.img3} />

        <TouchableOpacity style={st.btnBack}
          onPress={() => navigation.navigate("Login")}>
          <Icon name={"arrow-left"} size={24} />
        </TouchableOpacity>

        <ScrollView style={{ padding: rMS(15) }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: paddingScrol }}
        >
          <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: rVerScale(15), marginTop: marginTop, }}>
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
            color: "#555555", fontWeight: 700, textAlign: 'center', marginBottom: rScale(12),
            fontSize: animValue.interpolate({
              inputRange: [0.8, 1],
              outputRange: [rMS(33), rMS(30)]
            }),
          }}>Sign Up</Animated.Text>

          <View style={{ width: '100%', marginBottom: rVerScale(14) }}>
            <CustomTextInput
              placeholder="example@mail.com"
              onChangeText={txt => setUserInput({ ...userInput, email: txt })}
              err={emailError}
              style={{}}
              nameIcon={"email-outline"} />
          </View>

          <View style={{ width: '100%', marginBottom: rVerScale(14) }}>
            <CustomTextInputPass
              placeholder="******"
              onChangeText={txt => setUserInput({ ...userInput, password: txt })}
              err={passError}
              nameIcon={"account-key-outline"}
              style={{ paddingRight: rScale(34) }} />
          </View>

          <View style={{ width: '100%', flexDirection: 'row', }}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newVl) => settoggleCheckBox(newVl)} />
            <ScrollView horizontal={false}>
              <Text style={{ textAlign: 'justify', fontSize: rMS(14), color: '#505050', lineHeight: rMS(22) }}>
                I have read and agreed to the{' '}
                <Text style={{ color: '#fe724c', textDecorationLine: 'underline' }}>Terms of Service</Text>
                {' '}and{' '}
                <Text style={{ color: '#fe724c', textDecorationLine: 'underline' }}>Privacy Policy</Text>
                {' '}of ShopSavvy
              </Text>
            </ScrollView>
          </View>

          <View style={{ width: '100%', marginVertical: rVerScale(15) }}>
            <CustomButton onPress={() => validate()}
              title={"SIGN UP"}
              style={{ width: '100%' }}
            />
          </View>

          <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: '30%', borderWidth: rScale(0.4), borderColor: '#707070' }} />
            <Text style={{ marginHorizontal: rScale(10), fontSize: rMS(14), color: "#555555" }}>Or sign up with</Text>
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
            <Text style={{ color: "#505050", fontSize: rMS(15) }}>Already have an account ? </Text>
            <Text style={{ color: "#fe724c", fontSize: rMS(15), fontWeight: 'bold', textDecorationLine: 'underline' }}
              onPress={() => navigation.navigate("Login")}>Log In</Text>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

export default SignUp

const st = StyleSheet.create({
  btnBack: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: rMS(4),
    borderRadius: rMS(10),
    width: rMS(35), borderWidth: 2,
    borderColor: '#b6b5bd',
    // position: 'absolute',
    // top: rMS(20), left: rMS(15)
    marginTop: rMS(20), marginLeft: rMS(15)
  },
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
    borderWidth: rMS(1),
    width: rMS(50),
    borderColor: "#ddd"
  },
})