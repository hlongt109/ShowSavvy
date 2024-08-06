import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemMenu from './ItemMenu'
import { rMS } from '../../../styles/responsive'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconAwe from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'

const ListUtilities = () => {
    const navigation = useNavigation();
    return (
        <View style={{ width: '100%', marginTop: rMS(7), backgroundColor: '#fff', padding: rMS(7) }}>

            <ItemMenu
                onPress={() => navigation.navigate("ShopManage")}
                style={{ borderTopWidth: 0, borderBottomWidth: 0.6}}
                IconName={"storefront-outline"}
                color={"#fe724c"}
                title={"My Shop"}
                title2={""} />


            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingVertical: rMS(15) }}>
                <View style={{ width: '25%', flexDirection: 'column', alignItems: 'center' }}>
                    <Icon name={"wallet-outline"} size={rMS(28)} color={"#fe724c"} />
                    <Text style={{ textAlign: 'justify', fontSize: rMS(11), color: "#707070", marginTop: rMS(7) }}>SsPay Wallet</Text>
                </View>
                <View style={{ width: '25%', flexDirection: 'column', alignItems: 'center' }}>
                    <IconAwe name={"coins"} size={rMS(28)} color={"#F0E68C"} />
                    <Text style={{ textAlign: 'justify', fontSize: rMS(11), color: "#707070", marginTop: rMS(7) }}>Ss coins</Text>
                </View>
                <View style={{ width: '25%', flexDirection: 'column', alignItems: 'center' }}>
                    <Icon name={"sale"} size={rMS(28)} color={"#fe724c"} />
                    <Text style={{ textAlign: 'justify', fontSize: rMS(11), color: "#707070", marginTop: rMS(7) }}>Voucher</Text>
                </View>
                <View style={{ width: '25%', flexDirection: 'column', alignItems: 'center' }}>
                    <Icon name={"gift-outline"} size={rMS(28)} color={"#336699"} />
                    <Text style={{ fontSize: rMS(11), color: "#707070", marginTop: rMS(7) }}>Ss Rewards</Text>
                </View>
            </View>

            <ItemMenu
                onPress={() => navigation.navigate("OrderFoodDrink")}
                style={{}}
                IconName={"cellphone-nfc"}
                color={"#66CDAA"}
                title={"Top-up & service"}
                title2={""} />
        </View>
    )
}

export default ListUtilities

const styles = StyleSheet.create({})