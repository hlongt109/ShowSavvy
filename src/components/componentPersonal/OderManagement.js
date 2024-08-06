import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ItemMenu from './ItemMenu'
import { useNavigation } from '@react-navigation/native'
import { rMS } from '../../../styles/responsive'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconAnt from 'react-native-vector-icons/AntDesign'

const OderManagement = () => {
    const navigation = useNavigation();

    const [orderNumber, setorderNumber] = useState(5) //demo
    const [pickupNumber, setpickupNumber] = useState(3) // demo
    const [transitNumber, settransitNumber] = useState(0) // demo


    return (
        <View style={{ width: '100%', marginTop: rMS(7), backgroundColor: '#fff', padding: rMS(7) }}>
            <ItemMenu
                onPress={() => navigation.navigate("Order")}
                style={{ borderTopWidth: 0, borderBottomWidth: 0.6 }}
                IconName={"clipboard-list-outline"}
                color={"#336699"}
                title={"Purchase Order"}
                title2={"purchase history"} />

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingVertical: rMS(15) }}>
                <View style={{ width: '25%', flexDirection: 'column', alignItems: 'center' }}>
                    <Icon name={"text-box-check-outline"} size={rMS(28)} color={"#484848"} />
                    {orderNumber > 0 && (
                        <View style={st.badge}>
                            <Text style={st.badgeText}>{orderNumber}</Text>
                        </View>
                    )}
                    <Text style={{ textAlign: 'justify', fontSize: rMS(11), color: "#707070", marginTop: rMS(7) }}>Pending Confirm</Text>
                </View>
                <View style={{ width: '25%', flexDirection: 'column', alignItems: 'center' }}>
                    <IconAnt name={"inbox"} size={rMS(28)} color={"#484848"} />
                    {pickupNumber > 0 && (
                        <View style={st.badge}>
                            <Text style={st.badgeText}>{pickupNumber}</Text>
                        </View>
                    )}
                    <Text style={{ textAlign: 'justify', fontSize: rMS(11), color: "#707070", marginTop: rMS(7) }}>Pending Pickup</Text>
                </View>
                <View style={{ width: '25%', flexDirection: 'column', alignItems: 'center' }}>
                    <Icon name={"truck-delivery-outline"} size={rMS(28)} color={"#484848"} />
                    {transitNumber > 0 && (
                        <View style={st.badge}>
                            <Text style={st.badgeText}>{transitNumber}</Text>
                        </View>
                    )}
                    <Text style={{ textAlign: 'justify', fontSize: rMS(11), color: "#707070", marginTop: rMS(7) }}>In Transit</Text>
                </View>
                <View style={{ width: '25%', flexDirection: 'column', alignItems: 'center' }}>
                    <Icon name={"star-circle-outline"} size={rMS(28)} color={"#484848"} />
                    <Text style={{ fontSize: rMS(11), color: "#707070", marginTop: rMS(7) }}>Review</Text>
                </View>
            </View>

            <ItemMenu
                onPress={() => navigation.navigate("OrderFoodDrink")}
                style={{}}
                IconName={"food-outline"}
                color={"#fe724c"}
                title={"Food & Drink Order"}
                title2={""} />
        </View>
    )
}

export default OderManagement

const st = StyleSheet.create({
    // badge: {
    //     position: 'absolute',
    //     top: rMS(-5),
    //     right: rMS(-5),
    //     backgroundColor: '#fe724c',
    //     borderRadius: rMS(10),
    //     paddingHorizontal: rMS(5),
    //     paddingVertical: rMS(2),
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // badgeText: {
    //     color: '#fff',
    //     fontSize: rMS(10),
    //     fontWeight: 'bold',
    // },
    iconContainer: {
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: "-15%",
        right: "15%",
        backgroundColor: '#FF6347',
        borderRadius: rMS(15),
        padding: rMS(3),
        minWidth: rMS(20),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: rMS(1), borderColor: '#fff'
    },
    badgeText: {
        color: '#fff',
        fontSize: rMS(10),
        fontWeight: 'bold',
    },
})