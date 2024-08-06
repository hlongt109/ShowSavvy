import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { rMS } from '../../../styles/responsive'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ItemMenu = ({ onPress, style, IconName, color, title, title2,}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[st.container, style]}>
            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon name={IconName} size={rMS(22)} color={color}/>
                    <Text style={{fontSize:rMS(14), fontWeight:'400', color:"#383838", marginLeft:rMS(7)}}>{title}</Text>
                </View>

                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:rMS(13), fontWeight:'400', color:"#707070"}}>{title2}</Text>
                    <Icon name={"chevron-right"} size={rMS(22)} color={[st.iconColor]} />
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default ItemMenu

const st = StyleSheet.create({
    container: {
        width: '100%', paddingVertical: rMS(10), borderTopWidth: 0.6, borderColor: '#DCDCDC'
    },
    iconColor:{
    color:"707070"
    }
})