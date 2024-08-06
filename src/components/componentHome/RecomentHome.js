import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { rMS } from '../../../styles/responsive';

const WIDTH = Dimensions.get('window').width;

const RecomentHome = () => {
  const fakeProductData = [
    { id: '1' }, { id: '2' }, { id: '3' }, { id: '4' },
    { id: '5' }, { id: '6' }, { id: '7' }, { id: '8' },
  ];

  const [listProduct, setlistProduct] = useState([])

  const dataToShow = listProduct.length > 0 ? listProduct : fakeProductData;

  const renderItemFake = ({ item, index }) => {
    return (
      <TouchableOpacity style={st.itemContainer}>
        <View style={st.itemInnerContainer}>
          <View style={{ width: '100%', height: rMS(100), overflow: 'hidden', alignItems: 'center', justifyContent: 'center' }}>
            <IonIcon name={"images-outline"} size={rMS(28)} />
          </View>
          <View style={{ width: '100%', padding: rMS(5), flexDirection: 'column' }}>
            <View style={{ width: '100%', height: rMS(10), backgroundColor: "#ddd" }} />
            <View style={{ width: '100%', height: rMS(10), backgroundColor: "#ddd", marginTop: rMS(5) }} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const renderItemReal = (item) => (
    <TouchableOpacity style={st.itemContainer}>
      <View style={st.itemInnerContainer}>
        <View style={{ overflow: 'hidden' }}>
          <Image style={{ width: "100%", height: 100 }} source={{ uri: item.image }} />
        </View>
        <View style={{ width: '100%', padding: 5, flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IonIcon name={"star"} size={rMS(22)} />
            <Text>5</Text>
          </View>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#333' }}>{item.name}</Text>
          <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 15, fontWeight: '600', color: '#fe724c' }}>{formatPrice(item.price)}</Text>
            <Text style={{ fontSize: 14, fontWeight: '600', color: '#333' }}>sold {"2k"}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )

  const renderItem = listProduct.length > 0 ? renderItemReal : renderItemFake;

  return (
    <View style={st.container}>
      <View style={{ padding: rMS(10) }}>
        <Text style={{ fontSize: rMS(18), fontWeight: '600', color: '#fe724c' }}>Today's Recommendations</Text>
      </View>
      <View style={st.listContainer}>
        <FlatList
          nestedScrollEnabled={true}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          data={dataToShow}
          keyExtractor={(item, index) => item.id + index}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={st.flatListContent}
        />
      </View>
    </View>
  )
}

export default RecomentHome

const st = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    marginTop: rMS(10)
  },
  listContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: rMS(5),
  },
  flatListContent: {
    width: '100%',
    alignItems: 'center',
    marginBottom:rMS(55)

  },
  itemContainer: {
    width: '48%',
    borderRadius: rMS(5),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
    margin: rMS(4),

  },
  itemInnerContainer: {
    width: '100%',
  },
});