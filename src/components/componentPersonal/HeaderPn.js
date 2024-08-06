import { Dimensions, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { rMS } from '../../../styles/responsive'
import Icon from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFollowerAPI, fetchFollowingAPI, fetchUserApi } from '../../redux/action/SsAction';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const STATUSBAR_HEIGHT = StatusBar.currentHeight || 0;

const HeaderPn = () => {
  const [imgUser, setimgUser] = useState("")
  const [currentUser, setCurrentUser] = useState([])
  const [followerNumber, setFollowerNumber] = useState(0)
  const [followingNumber, setFollowingNumber] = useState(0)

  const userList = useSelector(state => state.listUser.listUser)
  const followerList = useSelector(state => state.listFollower.listFollower)
  const followingList = useSelector(state => state.listFollowing.listFollowing)

  const getUserID = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      return userId;
    } catch (error) {
      console.log(error)
    }
  }

  const getUserInfo = async () => {
    const userId = await getUserID()
    if (userId) {
      const user = userList.find(u => u.id === userId)
      setCurrentUser(user)
      return
    }
    setCurrentUser(null)
  }

  const dispatch = useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = await getUserID();
        await dispatch(fetchUserApi());
        await dispatch(fetchFollowerAPI(id));
        await dispatch(fetchFollowingAPI(id));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [dispatch])

  useEffect(() => {
    getUserInfo();
    if (currentUser) {
      const followers = followerList.filter(fw => fw.following === currentUser.id)
      setFollowerNumber(followers.length)

      const followings = followingList.filter(following => following.userId === currentUser.id);
      setFollowingNumber(followings.length);
    }
  }, [currentUser, followerList, followingList])



  return (
    <SafeAreaView style={{ width: '100%', backgroundColor: '#fe724c', height: HEIGHT * 0.18, paddingTop: rMS(15), paddingHorizontal: rMS(10), paddingBottom: rMS(10), flexDirection: 'column', justifyContent: "space-between" }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>

        <TouchableOpacity
          style={{ marginRight: rMS(15) }}
          onPress={() => {
            // chuyen sang man hinh setting
          }}>
          <View style={st.iconContainer}>
            <Icon name={"setting"} size={rMS(25)} color={"#fff"} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginRight: rMS(15) }}
          onPress={() => {
            // chuyen sang man hinh cart;
          }}>
          <View style={st.iconContainer}>
            <Icon name={"shoppingcart"} size={rMS(25)} color={"#fff"} />
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
            <Icon name={"message1"} size={rMS(23)} color={"#fff"} />
            <View style={st.badge}>
              <Text style={st.badgeText}>{"5+"}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ width: rMS(50), height: rMS(50), backgroundColor: '#ddd', borderRadius: rMS(25), alignItems: 'center', justifyContent: 'center' }}>
          {currentUser && currentUser.avatar &&  currentUser.avatar !== "" ? (
            <Image source={{ uri: currentUser.avatar }} style={{ width: rMS(50), height: rMS(50), resizeMode: 'contain' }} />
          ) : (
            <Icon name={"user"} size={rMS(25)} color={"#505050"} />
          )}
        </View>
        <View style={{ marginLeft: rMS(10) }}>
          <Text style={{ fontSize: rMS(18), fontWeight: '700', color: "#fff" }}>{currentUser && currentUser.username !== "" ? currentUser.username : "user#xzlhb"}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: rMS(14), fontWeight: '400', color: "#fff" }}>Followers {<Text style={{ fontSize: rMS(14), fontWeight: '700', color: "#fff" }}>{followerNumber}</Text>}</Text>
            <Text style={{ fontSize: rMS(14), fontWeight: '400', color: "#D3D3D3", marginHorizontal: rMS(5) }}>|</Text>
            <Text style={{ fontSize: rMS(14), fontWeight: '400', color: "#fff" }}>Following {<Text style={{ fontSize: rMS(14), fontWeight: '700', color: "#fff" }}>{followingNumber}</Text>}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HeaderPn

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
})