import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { rMS } from '../../../styles/responsive'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconAnt from 'react-native-vector-icons/AntDesign'
import ItemMenu from './ItemMenu'
import { useNavigation } from '@react-navigation/native'

const ListMenu = () => {
    const navigation = useNavigation();
    return (
        <View style={{width:'100%',marginBottom:rMS(50)}}>
            <View style={{ width: '100%', marginTop: rMS(7), backgroundColor: '#fff', padding: rMS(7) }}>
                
                <ItemMenu
                    onPress={() => navigation.navigate("Favourite")}
                    style={{ borderTopWidth: 0, borderBottomWidth: 0.6, }}
                    IconName={"cards-heart-outline"}
                    color={"#fe724c"}
                    title={"Favourite"}
                    title2={""} />

                <ItemMenu
                    onPress={() => navigation.navigate("ShopFollow")}
                    style={{ borderTopWidth: 0, borderBottomWidth: 0.6, }}
                    IconName={"home-heart"}
                    color={"#F0E68C"}
                    title={"Following Shop"}
                    title2={""} />

                <ItemMenu
                    onPress={() => navigation.navigate("Recently")}
                    style={{ borderTopWidth: 0, borderBottomWidth: 0.6, }}
                    IconName={"history"}
                    color={"#336699"}
                    title={"Recently Viewed"}
                    title2={""} />
                <ItemMenu
                    onPress={() => navigation.navigate("MyReview")}
                    style={{ borderTopWidth: 0, borderBottomWidth: 0.6, }}
                    IconName={"star-outline"}
                    color={"#20B2AA"}
                    title={"My Reviews"}
                    title2={""} />
            </View>

            <View style={{ width: '100%', marginTop: rMS(7), backgroundColor: '#fff', padding: rMS(7) }}>
                <ItemMenu
                    onPress={() => navigation.navigate("Recently")}
                    style={{ borderTopWidth: 0, borderBottomWidth: 0.6, }}
                    IconName={"account-outline"}
                    color={"#336699"}
                    title={"Account Settings"}
                    title2={""} />
                <ItemMenu
                    onPress={() => navigation.navigate("ShopCoin")}
                    style={{ borderTopWidth: 0, borderBottomWidth: 0.6, }}
                    IconName={"help-circle-outline"}
                    color={"#20B2AA"}
                    title={"Help Center"}
                    title2={""} />
                <ItemMenu
                    onPress={() => navigation.navigate("MyReview")}
                    style={{ borderTopWidth: 0, }}
                    IconName={"chat-question-outline"}
                    color={"#fe724c"}
                    title={"Chat with ShopSavvy"}
                    title2={""} />
            </View>
        </View>

    )
}

export default ListMenu

const styles = StyleSheet.create({})