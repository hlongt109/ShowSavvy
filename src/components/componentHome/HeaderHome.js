import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { rMS } from '../../../styles/responsive'


const HeaderHome = ({ navigation, style, scrollY }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    // console.log(scrollY)
    const backgroundColorInterpolation = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: ['rgba(255, 255, 255, 0)', '#ffffff'],
        extrapolate: 'clamp',
    });
    useEffect(() => {
        const listener = scrollY.addListener(({ value }) => {
            setIsScrolled(value > 0);
        });
        return () => scrollY.removeListener(listener);
    }, [scrollY]);

    const bgSearchColor = isScrolled ? "#fe724c" : "#fff";
    const bgInputSearch =  isScrolled ? "#F0F0F0" : "#fff";



    return (
        <Animated.View style={[st.container, { backgroundColor: backgroundColorInterpolation }]}>
            <TouchableOpacity style={st.searchContainer}>
                <TextInput
                    style={[st.textInput, { backgroundColor: bgInputSearch, borderColor:bgInputSearch }]}
                    placeholder='Search'
                    placeholderTextColor={"#fe724c"}
                    caretHidden={true}
                    editable={false} />
                <Icon name={"search1"} size={rMS(20)} style={st.searchIcon} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    // chuyen sang man hinh cart;
                }}>
                 <View style={st.iconContainer}>
                    <Icon name={"shoppingcart"} size={rMS(25)} color={bgSearchColor} />
                    <View style={st.badge}>
                        <Text style={st.badgeText}>{10}</Text>
                    </View>
                 </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ paddingHorizontal: rMS(5), borderRadius: rMS(10) }}
                onPress={() => {
                    // chuyen sang man hinh chat;
                }}>
                <View style={st.iconContainer}>
                    <Icon name={"message1"} size={rMS(23)} color={bgSearchColor} />
                    <View style={st.badge}>
                        <Text style={st.badgeText}>{"5+"}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default HeaderHome

const st = StyleSheet.create({
    container: {
        width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: rMS(7),
    },
    searchContainer: {
        width: '70%',
    },
    textInput: {
        width: '100%',
        height: rMS(40),
        borderWidth: rMS(2),
        borderRadius: rMS(7),
        borderColor: '#fff',
        paddingHorizontal: rMS(40),
        fontSize: rMS(15),
        backgroundColor: '#fff'
    },
    searchIcon: {
        position: 'absolute',
        left: rMS(10),
        top: rMS(10),
        color: '#fe724c',
    },
    iconContainer: {
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: rMS(-7),
        right: rMS(-7),
        backgroundColor: '#FF6347',
        borderRadius: rMS(15),
        padding: rMS(3),
        minWidth: rMS(20), 
        justifyContent: 'center', 
        alignItems: 'center',
        borderWidth:rMS(1),borderColor:'#fff'
    },
    badgeText: {
        color: '#fff',
        fontSize: rMS(10), 
        fontWeight: 'bold', 
    },
})