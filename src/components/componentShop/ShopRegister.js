import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { rMS } from '../../../styles/responsive'
import CustomTextInput from '../CustomTextInput'
import CheckBox from '@react-native-community/checkbox'
import CustomButton from '../CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createShopAPI } from '../../redux/action/SsAction'

const ShopRegister = () => {
    const navigation = useNavigation();
    const [expressDelivery, setExpressDelivery] = useState(false);
    const [economicalDelivery, setEconomicalDelivery] = useState(false);

    const [shopName, setShopName] = useState("")
    const [pickupLocation, setPickupLocation] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const [shopNameErr, setShopNameErr] = useState("")
    const [pickupLocationErr, setPickupLocationErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [phoneNumberErr, setPhoneNumberErr] = useState("")
    const [deliveryServiceErr, setDeliveryServiceErr] = useState("")


    const userList = useSelector(state => state.listUser.listUser)
    const [currentUser, setCurrentUser] = useState([])
    const dispatch = useDispatch()

    const getUserID = async () => {
        try {
            const userId = await AsyncStorage.getItem("userId");
            return userId;
        } catch (error) {
            console.log(error)
        }
    }

    const getUserInfo = async () => {
        const userId = await getUserID()
        if (userId) {
            const user = userList.find(u => u.id === userId)
            setCurrentUser(user)
            return
        }
        setCurrentUser(null)
    }

    useEffect(() => {
        getUserInfo()
        if(currentUser){
            setShopName(currentUser.username)
            setEmail(currentUser.email)
            setPhoneNumber(currentUser.phoneNumber)
        }
    }, [])

    const handleRegisteShop = async()=>{
        const deliveryServices =[]
        if(expressDelivery){
            deliveryServices.push({ id:"dsv1", name: "Express Delivery" })
        }
        if(economicalDelivery){
            deliveryServices.push({ id: "dsv2", name: "Economical Delivery"})
        }
        const obj = {
            ownerId : currentUser.id, 
            shopName :shopName, 
            pickupLocation : pickupLocation, 
            email : email,
            phoneNumber : phoneNumber, 
            deliveryService : deliveryServices, 
            avatar:currentUser.avatar
        }
        const result = await dispatch(createShopAPI(obj))
        if (result) {
            // ownerId, shopName, pickupLocation, email, phoneNumber, deliveryService, avatar
            navigation.navigate("ShopManage")
        } else {
            ToastAndroid.show("Register error")
        }
    }

    const validateRegister = () => {
        const phoneRegex = /^(0|\+84)[1-9]\d{8}$/
        const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/

        if (shopName.trim() === "" || pickupLocation.trim() === "" || email.trim() === "" || phoneNumber.trim() === "" || (expressDelivery === false && economicalDelivery === false)) {
            if (shopName.trim() === "") {
                setShopNameErr("Enter your shop name")
            } else {
                setShopNameErr("")
            }
            if (pickupLocation.trim() === "") {
                setPickupLocationErr("Enter your pick up location")
            } else {
                setPickupLocationErr("")
            }
            if (email.trim() === "") {
                setEmailErr("Enter your email address")
            } else {
                setEmailErr("")
            }
            if (phoneNumber.trim() === "") {
                setPhoneNumberErr("Enter your phone number")
            } else {
                setPhoneNumberErr("")
            }
            if (expressDelivery === false && economicalDelivery === false) {
                setDeliveryServiceErr("You haven't selected any delivery service")
            } else {
                setDeliveryServiceErr("")
            }
        } else {
            if (!phoneRegex.test(phoneNumber.trim())) {
                setPhoneNumberErr("Invalid phone number")
                return
            }
            handleRegisteShop()
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: rMS(7), paddingVertical: rMS(15), backgroundColor: '#fff', flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Icon name={"arrow-left"} color={"#f2724c"} size={28} />
                    </TouchableOpacity>
                    <Text style={{ textAlign: 'center', fontSize: rMS(20), color: '#383838', marginLeft: rMS(10), fontWeight: '600' }}>Shop Information</Text>
                </View>

                <View style={{ marginTop: rMS(7), backgroundColor: '#fff', padding: rMS(10), }}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: rMS(7) }}>
                        <Text style={{ textAlign: 'center', fontSize: rMS(16), color: '#383838', fontWeight: '600' }}>Shop Name</Text>
                        <Text style={{ textAlign: 'center', fontSize: rMS(14), color: '#383838', fontWeight: '500' }}>{shopName.length}/30</Text>
                    </View>
                    <CustomTextInput
                        style={{ height: rMS(40), borderRadius: rMS(7) }}
                        onChangeText={txt => {setShopName(txt), setShopNameErr("") }}
                        value={shopName}
                        maxLength={30}
                        err={shopNameErr} />
                </View>

                <View style={{ marginTop: rMS(7), backgroundColor: '#fff', padding: rMS(10), }}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: rMS(7) }}>
                        <Text style={{ textAlign: 'center', fontSize: rMS(16), color: '#383838', fontWeight: '600' }}>Pickup Location</Text>
                        <Text style={{ textAlign: 'center', fontSize: rMS(14), color: '#383838', fontWeight: '500' }}>{pickupLocation.length}/150</Text>
                    </View>
                    <CustomTextInput
                        style={{ height: rMS(40), borderRadius: rMS(7) }}
                        onChangeText={txt => { setPickupLocation(txt), setPickupLocationErr("") }}
                        maxLength={150}
                        multiline={true}
                        numberOfLines={3}
                        err={pickupLocationErr}
                    />

                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: rMS(7), marginTop: rMS(7) }}>
                        <Text style={{ textAlign: 'center', fontSize: rMS(16), color: '#383838', fontWeight: '600' }}>Email</Text>
                    </View>
                    <CustomTextInput
                        style={{ height: rMS(40), borderRadius: rMS(7) }}
                        onChangeText={txt => { setEmail(txt), setEmailErr("") }}
                        value={email}
                        err={emailErr} />

                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: rMS(7), marginTop: rMS(7) }}>
                        <Text style={{ textAlign: 'center', fontSize: rMS(16), color: '#383838', fontWeight: '600' }}>Phone number</Text>
                    </View>
                    <CustomTextInput
                        style={{ height: rMS(40), borderRadius: rMS(7) }}
                        onChangeText={txt => { setPhoneNumber(txt), setPhoneNumberErr("") }}
                        value={phoneNumber}
                        err={phoneNumberErr}
                        keyboardType="numeric" />
                </View>

                <View style={{ marginTop: rMS(7), backgroundColor: '#fff', padding: rMS(10), }}>
                    <Text style={{ fontSize: rMS(16), color: '#383838', fontWeight: '600' }}>Select Delivery Service</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CheckBox
                            value={expressDelivery}
                            onValueChange={value => {
                                setExpressDelivery(value), setDeliveryServiceErr("")
                            }}

                        />
                        <Text style={{ marginLeft: rMS(5), fontSize: rMS(15), color: '#383838', }}>Express Delivery</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CheckBox
                            value={economicalDelivery}
                            onValueChange={value => { 
                                setEconomicalDelivery(value), setDeliveryServiceErr("")
                            }}
                        />
                        <Text style={{ marginLeft: rMS(5), fontSize: rMS(15), color: '#383838', }}>Economical Delivery</Text>
                    </View>
                    {deliveryServiceErr !== "" ? (
                        <Text style={{ marginLeft: rMS(7), fontSize: rMS(12), color: '#fe724c', fontWeight: '600' }}>{deliveryServiceErr}</Text>
                    ) : (
                        null
                    )}
                </View>
            </ScrollView>
            <View style={{ width: '100%', height: rMS(100), backgroundColor: '#fff', padding: rMS(7), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <CustomButton
                    onPress={() => navigation.goBack()}
                    title={"EXIT"}
                    style={{ width: '49%', backgroundColor: 'rgba(255,255,255,0)', borderColor: "#C0C0C0", borderWidth: 1, }}
                    style2={{ color: "#C0C0C0" }} />
                <CustomButton
                    title={"SAVE"}
                    onPress={() => validateRegister()}
                    style={{ width: '49%' }} />
            </View>
        </View>
    )
}

export default ShopRegister

const st = StyleSheet.create({})