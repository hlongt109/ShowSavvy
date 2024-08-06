import { Animated, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

import { rMS } from '../../styles/responsive';
import HeaderHome from '../components/componentHome/HeaderHome';
import Banner from '../components/componentHome/Banner';
import Menu from '../components/componentHome/Menu';
import FlashSale from '../components/componentHome/FlashSale';
import RecomentHome from '../components/componentHome/RecomentHome';


const Home = () => {
  const navigation = useNavigation();

  const scrollY = useRef(new Animated.Value(0)).current;

  // const backgroundColorInterpolation = scrollY.interpolate({
  //   inputRange: [0, 100],
  //   outputRange: ['rgba(255, 255, 255, 0)', '#ffffff'],
  //   extrapolate: 'clamp',
  // });

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'#F5F5F5'}}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        onScroll={handleScroll}

      >
        <HeaderHome
          navigation={navigation}
          // style={{ position: 'sticky', top: 0, left: 0,}}
          scrollY={scrollY} />
        <Banner />
        <Menu/>
        <FlashSale/>
        <RecomentHome />

      </Animated.ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})