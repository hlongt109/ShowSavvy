import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { rMS } from '../../../styles/responsive';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const images = [
    require("../../../assets/b1.jpg"),
    require("../../../assets/b3.jpg"),
    require("../../../assets/b2.jpg"),
    require("../../../assets/b4.jpg"),
    require("../../../assets/b5.jpg"),
    require("../../../assets/b6.jpg"),

]

const Banner = () => {
    const [imgActive, setImgActive] = useState(0);
    const scrollViewRef = useRef(null);
    const intervalRef = useRef(null);;

    useEffect(() => {
        const nextSlide = () => {
            const nextIndex = (imgActive + 1) % images.length;
            setImgActive(nextIndex);
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollTo({
                    x: WIDTH * nextIndex,
                    animated: true,
                });
            }
        };

        intervalRef.current = setInterval(nextSlide, 3000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [imgActive]);


    onChange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setImgActive(slide);
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                    ref={scrollViewRef}
                    onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}>
                    {
                        images.map((e, index) =>
                            <Image
                                key={e}
                                resizeMode='stretch'
                                style={styles.wrap}
                                source={e}
                            />
                        )
                    }
                </ScrollView>
                <View style={styles.wrapDot}>
                    {
                        images.map((e, index) =>
                            <Text
                                key={e}
                                style={imgActive == index ? styles.dotActive : styles.dot}
                            ></Text>
                        )
                    }
                </View>
            </View>
        </SafeAreaView>
    )

}

export default Banner

const styles = StyleSheet.create({
    container: {
        width: '100%',
        overflow: 'hidden',
        marginTop:"-15%"
    },
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.25
    },
    wrapDot: {
        position: 'absolute',
        bottom: rMS(5),
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        marginHorizontal: rMS(5),marginBottom:rMS(10),
        color: "#000", width: rMS(5), height: rMS(5), borderRadius: rMS(5), backgroundColor: "#000"
    },
    dot: {
        marginHorizontal: rMS(5),marginBottom:rMS(10),
        color: "#fff", width: rMS(5), height: rMS(5), borderRadius: rMS(5), backgroundColor: "#fff"
    }
})