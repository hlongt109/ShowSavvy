import { Dimensions, FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { rMS } from '../../styles/responsive'
import Icon from 'react-native-vector-icons/AntDesign'

const WIDTH = Dimensions.get("window").width;

const Notification = () => {
  const [dataNotify, setdataNotify] = useState([])

  const renderEmptyNotify = () => (
    <View style={st.emptyContainer}>
      <Image source={require("../../assets/notification_empty.png")} style={{width:rMS(100),height:rMS(100)}}/>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={{ paddingHorizontal: rMS(7), paddingVertical: rMS(15), backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between',alignItems:'center' }}>

        <Text style={{ textAlign: 'center', fontSize: rMS(20), color: '#383838', marginLeft: WIDTH / 3 }}>Notification</Text>
        <View style={{ flexDirection: 'row', }}>

          <TouchableOpacity
            style={{ marginRight: rMS(15) }}
            onPress={() => {
              // chuyen sang man hinh cart;
            }}>
            <View style={st.iconContainer}>
              <Icon name={"shoppingcart"} size={rMS(25)} color={"#fe724c"} />
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
              <Icon name={"message1"} size={rMS(23)} color={"#fe724c"} />
              <View style={st.badge}>
                <Text style={st.badgeText}>{"5+"}</Text>
              </View>
            </View>
          </TouchableOpacity>

        </View>
      </View>
      {dataNotify.length === 0 ? renderEmptyNotify() : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataNotify}
        />
      )}
    </View>
  )
}

export default Notification

const st = StyleSheet.create({
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
    borderWidth: rMS(1), borderColor: '#fff'
  },
  badgeText: {
    color: '#fff',
    fontSize: rMS(10),
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})