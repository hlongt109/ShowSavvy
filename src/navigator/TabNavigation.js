import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../srceens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import Video from '../srceens/VideoPage';
import Notification from '../srceens/Notification';
import Personal from '../srceens/Personal';
import { BlurView } from '@react-native-community/blur';
import { rMS } from '../../styles/responsive';
import VideoPage from '../srceens/VideoPage';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: st.tabBar,
    
        tabBarBackground: () => (
          <BlurView overlayColor='' blurAmount={10} style={(st.ViewTab)} />
        )
      }}
    >
      <Tab.Screen name='Home' component={Home}
        options={{
          // tabBarLabel: 'Home',
          tabBarLabelStyle:{color: (focused) =>focused ? '#fe724c' :'#808080', fontSize:13} ,
          // tabBarLabelStyle: ({ focused }) => ({
          //   color: focused ? '#fe724c' : '#808080',
          //   fontSize: 13
          // }),
          tabBarIcon: ({ focused, color, size }) => (
            
            <Ionicons name="home-outline" size={22} color={focused ? "#fe724c" : "#808080"} />
          )
        }} />

      <Tab.Screen name='Video' component={VideoPage}
       options={{
        // tabBarLabel: 'Video',
        tabBarLabelStyle:{color:'#808080', fontSize:13} ,
        tabBarIcon: ({ focused, color, size }) => (
          <Octicons name="video" size={21} color={
            focused ? "#fe724c" : "#808080"
          } />
        ),
        tabBarStyle: {
          ...st.tabBar,
          backgroundColor: 'rgba(255,255,255,0)', // Set màu nền trong suốt
        }
      }} />

      <Tab.Screen name='Notification' component={Notification}
       options={{
        // tabBarLabel: 'Notification',
        tabBarLabelStyle:{color:'#808080', fontSize:13} ,
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name="notifications-outline" size={22} color={
            focused ? "#fe724c" : "#808080"
          } />
        )
      }} />

      <Tab.Screen name='Me' component={Personal}
       options={{
        // tabBarLabel: 'Me',
        tabBarLabelStyle:{color:'#808080', fontSize:13} ,
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name="person-outline" size={22} color={
            focused ? "#fe724c" : "#808080"
          } />
        )
      }} />
    </Tab.Navigator>
  )
}

export default TabNavigation

const st = StyleSheet.create({
  tabBar: {
    height: rMS(50),
    position: 'absolute',
    backgroundColor: "#fff",
    borderTopWidth: 0,
    borderTopColor: 'transparent',
    elevation: 10, // Độ đổ bóng
    shadowColor: '#000', // Màu đổ bóng
    shadowOffset: { width: 0, height: 2 }, // Độ dịch chuyển của đổ bóng
    shadowOpacity: 0.25, // Độ trong suốt của đổ bóng
    shadowRadius: 3.84,
  },
  ViewTab: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  }
})