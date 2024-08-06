import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { rMS } from '../../styles/responsive';
import HeaderPn from '../components/componentPersonal/HeaderPn';
import OderManagement from '../components/componentPersonal/OderManagement';
import { useNavigation } from '@react-navigation/native';
import ListMenu from '../components/componentPersonal/ListMenu';
import ListUtilities from '../components/componentPersonal/ListUtilities';



const Personal = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
    
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginBottom: rMS(85)}}
        showsVerticalScrollIndicator={false}>

        <HeaderPn/>

        <OderManagement/>

        <ListUtilities/>

        <ListMenu/>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Personal

const st = StyleSheet.create({

})