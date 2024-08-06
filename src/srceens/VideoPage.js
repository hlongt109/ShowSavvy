import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Video from 'react-native-video'
import Icon from 'react-native-vector-icons/Ionicons'
import { rMS } from '../../styles/responsive';
import IconFaw from 'react-native-vector-icons/FontAwesome5'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const dataFake = [
  require("../../assets/video/vd1.mp4"),
  require("../../assets/video/vd2.mp4"),
  require("../../assets/video/vd3.mp4"),
  require("../../assets/video/vd4.mp4")
];


const VideoPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleScroll = (e) => {
    const index = Math.round(e.nativeEvent.contentOffset.y / HEIGHT);
    setSelectedIndex(index);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#181818' }}>
      <FlatList
        data={dataFake}
        onScroll={handleScroll}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ width: WIDTH, height: HEIGHT }}>
            <Video
              paused={selectedIndex == index ? false : true}
              style={{ width: WIDTH, height: HEIGHT }}
              source={item}
              resizeMode={'cover'}
            />
            <TouchableOpacity
              style={{ width: WIDTH, height: HEIGHT, position: 'absolute', top: 0, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => {
                selectedIndex == -1 ? setSelectedIndex(index) : setSelectedIndex(-1)
              }}>
              {selectedIndex == -1 ? (
                <Icon name={"pause-circle"} size={rMS(35)} />
              ) : (
                null
              )}
              <View style={{ width: '100%', position: 'absolute', bottom: rMS(60) }}>
                <Text style={{ color: '#fff', fontSize: rMS(16), fontWeight: '800', marginLeft: rMS(10) }}>@funnyvideo</Text>
                <Text style={{ color: '#fff', fontSize: rMS(16), fontWeight: '800', marginLeft: rMS(10) }}>#funnyvideo</Text>

                <View
                  style={{ flexDirection: 'row', alignItems: 'center', marginLeft: rMS(10), marginTop: rMS(7) }}>
                  <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require("../../assets/user.png")} style={{ width: rMS(30), height: rMS(30), borderRadius: rMS(15), }} />
                    <Text style={{ color: '#fff', fontSize: rMS(16), fontWeight: '800', marginLeft: rMS(10) }}>demo_funny_user</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ height: rMS(25), paddingHorizontal: rMS(10), borderRadius: rMS(5), justifyContent: 'center', alignItems: 'center', marginLeft: rMS(20), backgroundColor: '#f20' }}>
                    <Text style={{ color: '#fff', fontSize: rMS(14), fontWeight: '600', }}>FOLLOW</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{position:'absolute', right:rMS(10), bottom:rMS(55),flexDirection:'column',alignItems:'center'}}>
                 <Icon name={"heart-outline"} color={"#fff"} size={rMS(35)}/>
                 <Text style={{ color: '#fff', fontSize: rMS(15), fontWeight: '600', }}>5.5k</Text>

                 <IconFaw name={"comment-dots"} color={"#fff"} size={rMS(30)}  style={{marginTop:rMS(10)}}/>
                 <Text style={{ color: '#fff', fontSize: rMS(15), fontWeight: '600', }}>5.5k</Text>

                 <IconFaw name={"share"} color={"#fff"} size={rMS(28)}  style={{marginTop:rMS(10)}}/>

                 <Image source={require("../../assets/music.png")} style={{width:rMS(40), height:rMS(40), borderRadius:rMS(20),marginTop:rMS(30)}} resizeMode='stretch'/>
                 
              </View>
            </TouchableOpacity>
          </View >
        )} />
    </View >
  )
}

export default VideoPage

const styles = StyleSheet.create({})