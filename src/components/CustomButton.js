import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { rMS } from '../../styles/responsive'

const CustomButton = ({ title, style, onPress, style2 }) => {
    return (
        <TouchableOpacity  style={[st.container, style]}
            onPress={onPress}>
            <Text style={[st.txt,style2]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const st = StyleSheet.create({
    container: {
        width: "60%",
        padding: rMS(10),
        backgroundColor: "#fe724c",
        borderRadius: rMS(10),
        justifyContent: 'center',
        alignItems: 'center',


    },
    txt: {
        fontSize: rMS(18),
        color: "#fff",
        fontWeight: '600'
    }
})