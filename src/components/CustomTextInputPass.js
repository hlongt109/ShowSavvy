import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { rMS, rVerScale } from '../../styles/responsive';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomTextInputPass = ({ style, err, nameIcon, ...restProps }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hidenPassword, sethidenPassword] = useState(true);

    const TogglePassword = () => {
        sethidenPassword(!hidenPassword)
    }

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <View style={{ width: '100%', marginBottom: 5 }}>
            <View style={[st.inputContainer, isFocused && st.focusedInput]}>
                {nameIcon && <Icon name={nameIcon} size={20} color="#555555" style={st.icon} />}
                <TextInput
                    {...restProps}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    secureTextEntry={hidenPassword}
                    style={[st.input, style]}
                />
                <TouchableOpacity onPress={TogglePassword} style={st.iconEnd}>
              <Icon name={hidenPassword ? 'eye-off-outline' : 'eye-outline'} size={rMS(20)} />
            </TouchableOpacity>
            </View>
            {err ? <Text style={{ color: "#fe724c" }}>{err}</Text> : null}
        </View>
    );
};

export default CustomTextInputPass

const st = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: rMS(12),
        marginBottom: rMS(5),
        borderWidth: 1.5,
        borderColor: "#b6b5bd",
        borderRadius: rMS(15),
        width: "100%",
        fontSize: rMS(15),
        color: "#555555",
        fontWeight: '500',
        letterSpacing: 1,
    },
    input: {
        flex: 1,
        height: rVerScale(50),
        fontSize: rMS(15),
    },
    focusedInput: {
        borderColor: "#fe724c",
    },
    icon: {
        marginRight: rMS(10),
    },
    iconEnd: {
        marginLeft: rMS(10),
        justifyContent: 'flex-end'
    },
});