import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { rMS, rScale, rVerScale } from '../../../styles/responsive'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconAnt from 'react-native-vector-icons/AntDesign'
import Ionicon from 'react-native-vector-icons/Ionicons'
import IconM from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ItemMenu from '../componentPersonal/ItemMenu'
import CustomTextInput from '../CustomTextInput'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const listTab = [
  {
    status: "All"
  },
  {
    status: "Product Categories"
  }
]

const ShopManage = () => {
  const [tabActive, setTabActive] = useState("All")
  const setStatusFilter = tabActive => {
    setTabActive(tabActive)
  }
  const navigation = useNavigation();
  const [shopInfo, setShopInfo] = useState([])
  const [orderNumber, setOrderNumber] = useState(0)
  const [pickupNumber, setpickupNumber] = useState(0)
  const [transitNumber, settransitNumber] = useState(0)
  const [feedbackNumber, setFeedbackNumber] = useState(0)

  const [productsShop, setProductShop] = useState([])

  const [searchText, setSearchText] = useState("")

  const listShop = useSelector(state => state.listShop.listShop)
  const getUserID = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      return userId;
    } catch (error) {
      console.log(error)
    }
  }

  const getShopInfo = async () => {
    const ownerId = await getUserID()
    if (ownerId) {
      const owner = listShop.find(o => o.ownerId === ownerId)
      setShopInfo(owner)
      return
    }
    setShopInfo(null)
  }

  useEffect(() => {
    getShopInfo()

  }, [])

  const renderEmptyShopAcc = () => (
    <View style={st.emptyContainer}>
      <TouchableOpacity style={{ width: "80%", justifyContent: 'center', alignItems: 'center', borderRadius: rMS(7), borderWidth: rMS(2), borderColor: '#fe724c', padding: rMS(10), backgroundColor: '#ffece7' }}
        onPress={() => navigation.navigate("ShopRegister")}>
        <Text style={{ color: '#383838', fontSize: rMS(16), fontWeight: '700' }}>Register your shop now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View style={{ paddingHorizontal: rMS(7), paddingVertical: rMS(15), backgroundColor: shopInfo !== 0 ? "#fe724c" : "#fff", flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Icon name={"arrow-left"} color={"#fff"} size={28} />
          </TouchableOpacity>
          <TextInput
            style={st.textInput}
            placeholder='Search in the shop'
            placeholderTextColor={"#fe724c"}
            returnKeyType='search'
            value={searchText}
            onChangeText={txt => setSearchText(txt)}
            onSubmitEditing={() => { }} // su ly tim kiem
          />
          {/* <Text style={{ textAlign: 'center', fontSize: rMS(20), color: '#fff', marginLeft: rMS(10), fontWeight: '600' }}>My shop</Text> */}
        </View>

        <TouchableOpacity
          style={{ marginRight: rMS(15) }}
          onPress={() => {
            // chuyen sang man hinh setting
          }}>
          <View>
            <Ionicon name={"settings-outline"} size={rMS(25)} color={"#fff"} />
          </View>
        </TouchableOpacity>
      </View>
      {shopInfo && shopInfo.length === 0 ? renderEmptyShopAcc() : (
        <View style={{ flex: 1 }}>
          <View style={{ width: '100%', backgroundColor: '#fe724c', height: HEIGHT * 0.1, paddingTop: rMS(15), paddingHorizontal: rMS(10), paddingBottom: rMS(10), flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: rMS(50), height: rMS(50), backgroundColor: '#ddd', borderRadius: rMS(25), alignItems: 'center', justifyContent: 'center' }}>
                {shopInfo && shopInfo.avatar && shopInfo.avatar !== "" ? (
                  <Image source={{ uri: shopInfo.avatar }} style={{ width: rMS(50), height: rMS(50), resizeMode: 'contain' }} />
                ) : (
                  <IconAnt name={"user"} size={rMS(25)} color={"#505050"} />
                )}
              </View>
              <View style={{ marginLeft: rMS(10) }}>
                <Text style={{ fontSize: rMS(18), fontWeight: '700', color: "#fff" }}>{shopInfo && shopInfo.shopName !== "" ? shopInfo.shopName : "shop#xzlhb"}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontSize: rMS(14), fontWeight: '400', color: "#fff" }}>Followers {<Text style={{ fontSize: rMS(14), fontWeight: '700', color: "#fff" }}>{0}</Text>}</Text>
                  <Text style={{ fontSize: rMS(14), fontWeight: '400', color: "#D3D3D3", marginHorizontal: rMS(5) }}>|</Text>
                  <Text style={{ fontSize: rMS(14), fontWeight: '400', color: "#fff" }}>5.0/{<Text style={{ fontSize: rMS(14), fontWeight: '700', color: "#fff" }}>{5}</Text>}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ width: '100%', marginTop: rMS(7), backgroundColor: '#FFF', paddingHorizontal: rMS(7), paddingBottom: rMS(7) }}>
            <ItemMenu
              onPress={() => navigation.navigate("Order")}
              style={{ borderTopWidth: 0, borderBottomWidth: 0 }}
              color={"#336699"}
              title={"Orders"}
              title2={"Order history"} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
              <View style={{ width: '23%', flexDirection: 'column', alignItems: 'center', borderWidth: rMS(1), borderColor: "#d3d3d3", paddingVertical: rMS(10), borderRadius: rMS(7) }}>
                <Text style={{ fontSize: rMS(16), color: "#fe724c", }}>{orderNumber}</Text>
                <Text style={{ textAlign: 'justify', fontSize: rMS(9), color: "#707070", marginTop: rMS(7) }}>Pending Confirm</Text>
              </View>
              <View style={{ width: '23%', flexDirection: 'column', alignItems: 'center', borderWidth: rMS(1), borderColor: "#d3d3d3", paddingVertical: rMS(10), borderRadius: rMS(7) }}>
                <Text style={{ fontSize: rMS(16), color: "#fe724c", }}>{pickupNumber}</Text>
                <Text style={{ textAlign: 'justify', fontSize: rMS(9), color: "#707070", marginTop: rMS(7) }}>Pending Pickup</Text>
              </View>
              <View style={{ width: '23%', flexDirection: 'column', alignItems: 'center', borderWidth: rMS(1), borderColor: "#d3d3d3", paddingVertical: rMS(10), borderRadius: rMS(7) }}>
                <Text style={{ fontSize: rMS(16), color: "#fe724c", }}>{transitNumber}</Text>
                <Text style={{ textAlign: 'justify', fontSize: rMS(9), color: "#707070", marginTop: rMS(7) }}>In Transit</Text>
              </View>
              <View style={{ width: '23%', flexDirection: 'column', alignItems: 'center', borderWidth: rMS(1), borderColor: "#d3d3d3", paddingVertical: rMS(10), borderRadius: rMS(7) }}>
                <Text style={{ fontSize: rMS(16), color: "#fe724c", }}>{feedbackNumber}</Text>
                <Text style={{ fontSize: rMS(9), color: "#707070", marginTop: rMS(7) }}>Feedback</Text>
              </View>
            </View>
          </View>
          <View style={{ width: '100%', marginTop: rMS(7), backgroundColor: '#fff', paddingTop: rMS(7), paddingHorizontal: rMS(5) }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableOpacity style={{ width: rMS(80), height: rMS(80), alignItems: 'center' }}>
                <IconAnt name={"inbox"} size={rMS(24)} color={"#fe724c"} style={st.menuItem} />
                <Text style={st.menuNameItem}>My products</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: rMS(80), height: rMS(80), alignItems: 'center' }}>
                <Icon name={"ticket-percent-outline"} size={rMS(24)} color={"#fe724c"} style={st.menuItem} />
                <Text style={st.menuNameItem}>Shop Voucher</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: rMS(80), height: rMS(80), alignItems: 'center' }}>
                <Icon name={"brightness-percent"} size={rMS(24)} color={"#fe724c"} style={st.menuItem} />
                <Text style={st.menuNameItem}>Shop flash sale</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: rMS(80), height: rMS(80), alignItems: 'center' }}>
                <IconM name={"support-agent"} size={rMS(24)} color={"#fe724c"} style={st.menuItem} />
                <Text style={st.menuNameItem}>Support center</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/** Tablayout */}
          <SafeAreaView style={st.containerTab}>
            <View style={st.listTab}>
              {
                listTab.map((tab, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[st.btnTab, tabActive === tab.status && st.btnTabActive]}
                    onPress={() => setStatusFilter(tab.status)}>
                    <Text style={[st.txtTab, tabActive === tab.status && st.txtTabActive]}>{tab.status}</Text>
                  </TouchableOpacity>
                ))
              }
            </View>

            <FlatList
              data={productsShop} />
          </SafeAreaView>

        </View>
      )}
      <TouchableOpacity style={st.btnAdd}
        onPress={() => navigation.navigate("AddProduct")}>
        <Icon name={"plus"} size={rMS(24)} color={"#fff"} />
      </TouchableOpacity>
    </View>
  )
}

export default ShopManage

const st = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: rMS(7),
    marginTop: rMS(7)
  },
  menuItem: {
    paddingHorizontal: rMS(10),
    paddingVertical: rMS(10),
    margin: rMS(5),
    backgroundColor: '#fff',
    borderRadius: rMS(10),
    borderWidth: rMS(1),
    borderColor: "#d3d3d3",
    // elevation: 7, // Shadow for Android
    // shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  menuNameItem: {
    color: '#707070',
    fontSize: rMS(10),
    textAlign: 'justify'
  },
  textInput: {
    width: '80%',
    height: rMS(40),
    borderWidth: rMS(2),
    borderRadius: rMS(7),
    borderColor: '#fff',
    paddingHorizontal: rMS(10),
    fontSize: rMS(15),
    backgroundColor: '#fff',
    marginLeft: rMS(10)
  },
  containerTab: {
    width: "100%",
    paddingHorizontal: rMS(10),
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 0.5,
    borderColor: "#ebebeb",
  },
  listTab: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: rMS(7)
  },
  btnTab: {
    width: WIDTH / 2.1,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: "#ebebeb",
    padding: rMS(5),
    justifyContent: 'center'
  },
  txtTab: {
    fontSize: rMS(15),
    color: '#707070'
  },
  btnTabActive: {
    backgroundColor: "#fe724c",
  },
  txtTabActive: {
    color: '#fff'
  },
  btnAdd: {
    width: rMS(50), height: rMS(50), backgroundColor: '#fe724c', borderRadius: rMS(25), position: 'absolute', right: rMS(7), bottom: rMS(7), justifyContent: 'center', alignItems: 'center'
  }
})