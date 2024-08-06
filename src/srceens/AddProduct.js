import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { rMS } from '../../styles/responsive'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const AddProduct = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
            <View style={{ paddingHorizontal: rMS(7), paddingVertical: rMS(15), backgroundColor: "#fff", flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Icon name={"arrow-left"} color={"#505050"} size={28} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: rMS(20), color: '#505050', marginLeft: rMS(10), fontWeight: '600' }}>Add new product</Text>
                </View>

            </View>
            <ScrollView style={st.constainerScrollView}>
                <View style={st.constainerItem}>
                    <TouchableOpacity style={{ width: rMS(80), height: rMS(80), borderWidth: rMS(1), borderColor: "#fe724c", justifyContent: 'center', alignItems: 'center', marginRight: rMS(7) }}>
                        <Text style={{ color: '#fe724c', fontSize: rMS(12) }}>Add photo</Text>
                    </TouchableOpacity>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                        {/* {photos.map((photo, index) => (
                            <View key={index} style={{ marginRight: rMS(7) }}>
                                <Image
                                    source={{ uri: photo.uri }}
                                    style={{ width: rMS(80), height: rMS(80), borderWidth: rMS(1), borderColor: "#fe724c" }}
                                />
                            </View>
                        ))} */}
                    </ScrollView>
                </View>
                <View style={st.constainerItem}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: rMS(7) }}>
                        <Text style={{ color: "#383838", fontSize: rMS(15) }}>Name product{<Text style={{ color: '#fe724c' }}> *</Text>}</Text>
                        <Text style={{ textAlign: 'center', fontSize: rMS(14), color: '#656565' }}>{0}/150</Text>
                    </View>
                    <TextInput
                        placeholder='Enter name product'
                        style={{fontSize:rMS(14)}} 
                        multiline={true} />
                </View>
                <View style={st.constainerItem}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: rMS(7) }}>
                        <Text style={{ color: "#383838", fontSize: rMS(15) }}>Description{<Text style={{ color: '#fe724c' }}> *</Text>}</Text>
                        <Text style={{ textAlign: 'center', fontSize: rMS(14), color: '#656565' }}>{0}/3000</Text>
                    </View>
                    <TextInput
                        placeholder='Enter description'
                        style={{fontSize:rMS(14)}}
                        multiline={true} />
                </View>
            </ScrollView>
        </View>
    )
}

export default AddProduct

const st = StyleSheet.create({
    constainerItem: {
        width: '100%',
        backgroundColor: '#fff',
        padding: rMS(10),
        marginTop: rMS(5)
    },
    constainerScrollView: {
        width: '100%',
        backgroundColor: '#f5f5f5',
    }
})