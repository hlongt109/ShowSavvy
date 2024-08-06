import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { rMS, rVerScale } from '../../../styles/responsive'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IonIcon from 'react-native-vector-icons/Ionicons'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

const Menu = () => {

    return (
        <View style={{ width: '100%', alignItems: 'center', backgroundColor: '#17314d' }}>
            <View style={{ width: '90%', backgroundColor: '#fff', flexDirection: 'row', padding: rMS(7), borderRadius: rMS(5), marginTop: rMS(-8), alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Icon name={"qr-code-scanner"} size={rMS(24)} color={"#707070"} />
                <View style={{ width: rMS(1), height: '100%', backgroundColor: '#757575', marginHorizontal: rVerScale(7) }} />
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <IonIcon name={"wallet-outline"} size={rMS(14)} color={"#fe724c"} />
                        <Text style={{ fontSize: rMS(11), fontWeight: '500', marginLeft: rMS(5), color: '#707070' }}>SsPay Wallet</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: rMS(10), color: '#606060' }}>Save $60 - Activate {"\n"}SsPay Wallet Today</Text>
                    </View>
                </View>
                <View style={{ width: rMS(1), height: '100%', backgroundColor: '#757575', marginHorizontal: rVerScale(7) }} />
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require("../../../assets/coin.png")} style={{ width: rMS(20), height: rMS(20) }} />
                        <Text style={{ fontSize: rMS(11), fontWeight: '500', marginLeft: rMS(5), color: '#707070' }}>10.000</Text>
                    </View>
                    <Text style={{ fontSize: rMS(10), color: '#606060' }}>My ShopSavvy coins</Text>
                </View>
            </View>

            <ScrollView
                 horizontal
                 style={styles.scrollView}
                 showsHorizontalScrollIndicator={false}
                >
                <View style={styles.menuContainer}>
                    <View style={{ flexDirection: 'column',}}>
                        <TouchableOpacity style={{ width: rMS(80), height: rMS(80), alignItems: 'center' }}>
                            <IonIcon name={"fast-food-outline"} size={rMS(24)} color={"#fe724c"} style={styles.menuItem} />
                            <Text style={styles.menuNameItem}>Food & Drink</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: rMS(80), height: rMS(80), alignItems: 'center' }}>
                            <IonIcon name={"shirt-outline"} size={rMS(24)} color={"#fe724c"} style={styles.menuItem} />
                            <Text style={styles.menuNameItem}>Fashion shop</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'column',marginHorizontal:rMS(5) }}>
                        <TouchableOpacity style={{ width: rMS(80), height: rMS(80), alignItems: 'center' }}>
                            <IconM name={"lipstick"} size={rMS(24)} color={"#fe724c"} style={styles.menuItem} />
                            <Text style={styles.menuNameItem}>Beauty Shop</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: rMS(80), height: rMS(80), alignItems: 'center' }}>
                            <IconM name={"sale"} size={rMS(24)} color={"#fe724c"} style={styles.menuItem} />
                            <Text style={styles.menuNameItem}>Voucher</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'column',marginHorizontal:rMS(5) }}>
                        <TouchableOpacity style={{ width: rMS(80), height: rMS(80), alignItems: 'center' }}>
                            <IonIcon name={"tv-outline"} size={rMS(24)} color={"#fe724c"} style={styles.menuItem} />
                            <Text style={styles.menuNameItem}>Electronics Shop</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: rMS(80), height: rMS(80), alignItems: 'center' }}>
                            <IconM name={"sofa-outline"} size={rMS(24)} color={"#fe724c"} style={styles.menuItem} />
                            <Text style={styles.menuNameItem}>Household Shop</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'column',marginHorizontal:rMS(5) }}>
                        <TouchableOpacity style={{ width: rMS(80), height: rMS(80), alignItems: 'center' }}>
                            <IonIcon name={"fast-food-outline"} size={rMS(24)} color={"#fe724c"} style={styles.menuItem} />
                            <Text style={styles.menuNameItem}>Super Sale Shop</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: rMS(80), height: rMS(80), alignItems: 'center' }}>
                            <IonIcon name={"shirt-outline"} size={rMS(24)} color={"#fe724c"} style={styles.menuItem} />
                            <Text style={styles.menuNameItem}>Children's Shop</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'column',marginHorizontal:rMS(5) }}>
                        <TouchableOpacity style={{ width: rMS(80), height: rMS(80), alignItems: 'center' }}>
                            <IonIcon name={"fast-food-outline"} size={rMS(24)} color={"#fe724c"} style={styles.menuItem} />
                            <Text style={styles.menuNameItem}>Top-up & service</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={{ width: rMS(80), height: rMS(80), alignItems: 'center' }}>
                            <IonIcon name={"shirt-outline"} size={rMS(24)} color={"#fe724c"} style={styles.menuItem} />
                            <Text style={styles.menuNameItem}>Shop child</Text>
                        </TouchableOpacity> */}
                    </View>

                </View>
            </ScrollView>
           
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    scrollView: {
        marginTop: rMS(10),
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingHorizontal: rMS(7),
        
    },
    menuContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: rMS(7),
    },
    menuItem: {
        paddingHorizontal: rMS(10),
        paddingVertical: rMS(10),
        margin: rMS(5),
        backgroundColor: '#fff',
        borderRadius: rMS(10),
        elevation: 3, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    menuNameItem: {
        color: '#fff',
        fontSize: rMS(10),
        textAlign:'justify'
    },
    customScrollBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 10, // Chiều cao của thanh cuộn
        backgroundColor: '#fff',
    },
    customScrollBarThumb: {
        height: '100%',
        width: '20%', // Chiều rộng của thanh cuộn
        backgroundColor: '#fe724c', // Màu của thanh cuộn
        borderRadius: 5, // Bo góc của thanh cuộn
    },
});
