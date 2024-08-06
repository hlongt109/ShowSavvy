import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { rMS } from '../../../styles/responsive';
import IonIcon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/Octicons'


const WIDTH = Dimensions.get('window').width;

// const formatTime = (time) => {
//     const hours = Math.floor(time / 3600);
//     const minutes = Math.floor((time % 3600) / 60);
//     const seconds = Math.floor(time % 60);
//     return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
// }

const FlashSale = () => {
    const navigation = useNavigation();
    const [stopRender, setStopRender] = useState(false)
    const [listProductSale, setlistProductSale] = useState([])

    const [timeRemaining, setTimeRemaining] = useState(3600);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

     // Tính toán giờ, phút và giây từ thời gian còn lại
     const hours = Math.floor(timeRemaining / 3600);
     const minutes = Math.floor((timeRemaining % 3600) / 60);
     const seconds = Math.floor(timeRemaining % 60);

    useEffect(() => {
        // Cập nhật trạng thái stopRender khi thành phần được render lần đầu tiên 
        setStopRender(true);
    }, []);


    const fakeProductData = [
        { id: '1' },{ id: '2'},{ id: '3'},{ id: '4'},
        { id: '5'}, { id: '6'},{ id: '7'},{ id: '8'},
        { id: '9'},{ id: '10'},{ id: '11'},{ id: '12'}
    ];
    const dataToShow = listProductSale.length > 0 ? listProductSale : fakeProductData;

    const renderItemSeparator = () => (
        <View style={{ width: rMS(10) }} />
    );
    const formatPrice = (price) => {
        return price.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    };

    const renderItemFake = ({ item, index }) => {
        if (index < 10 && stopRender) {
            return (
                <TouchableOpacity style={{ width: WIDTH / 3, borderRadius: rMS(5), overflow: 'hidden', borderWidth: 1, borderColor: '#ddd' }}
                    onPress={() => {
                        // navigation.navigate("Details", { item })
                        // saveRecentlyProduct(item.id);
                    }}>
                    <View style={{ width: '100%', }}>
                        <View style={{ width: '100%', height: rMS(100), overflow: 'hidden', alignItems: 'center', justifyContent: 'center' }}>
                            <IonIcon name={"images-outline"} size={rMS(28)} />
                        </View>
                        <View style={{ width: '100%', padding: rMS(5), flexDirection: 'column' }}>
                            {/* <Text>{index}</Text> */}
                            <View style={{ width: '100%', height: rMS(10), backgroundColor: "#ddd" }} />
                            <View style={{ width: '100%', height: rMS(10), backgroundColor: "#ddd", marginTop: rMS(5) }} />
                        </View>
                    </View>
                </TouchableOpacity>
            )
        } else if (index === 10) {
            return null;
        } else {
            return (
                <TouchableOpacity
                    style={{ width: WIDTH / 3, borderRadius: rMS(5), overflow: 'hidden', borderWidth: 1, borderColor: '#ddd', alignItems: 'center', justifyContent: 'center' }}
                // onPress see all
                >
                    <View style={{ width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                        <View style={{}}>
                            <Icon name={"chevron-right"} size={rMS(28)} />
                        </View>
                        <View style={{ padding: rMS(5), flexDirection: 'column' }}>
                            <Text style={{ fontSize: 14, fontWeight: '600', color: '#555555' }}>See all</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }
    }


    const renderItem = listProductSale.length > 0 ? renderItemReal : renderItemFake;

    const renderItemReal = (item) => (
        <TouchableOpacity style={{ width: WIDTH / 3, borderRadius: 10, overflow: 'hidden', borderWidth: 1, borderColor: '#ffece7' }}
            onPress={() => {
                navigation.navigate("Details", { item })
                saveRecentlyProduct(item.id);
            }}>
            <View style={{ width: '100%' }}>
                <View style={{ overflow: 'hidden' }}>
                    <Image style={{ width: "100%", height: 100 }} source={{ uri: item.image }} />
                </View>
                <View style={{ width: '100%', padding: 5, flexDirection: 'column' }}>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#333' }}>{item.name}</Text>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#333' }}>{formatPrice(item.price)}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )

    return (
        <View style={st.container}>
            {/* <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: rMS(18), fontWeight: '600', color: '#fe724c' }}>Flash Sale</Text>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#606060', fontSize: rMS(12) }}>See all</Text>
                    <Icon name={"chevron-right"} size={16} style={{ marginLeft: rMS(5) }} color={"#606060"} />
                </TouchableOpacity>
            </View> */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: rMS(18), fontWeight: '800', color: '#fe724c' }}>Flash Sale</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: rMS(7) }}>
                        {/* Phần hiển thị giờ */}
                        <View style={{ backgroundColor: '#202020', padding: rMS(1), borderRadius: rMS(3) }}>
                            <Text style={{ color: '#fff', paddingHorizontal: rMS(5),fontSize:rMS(12) }}>{hours.toString().padStart(2, '0')}</Text>
                        </View>
                        <Text style={{ color: '#181818', fontSize: rMS(16), marginHorizontal: rMS(2) }}>:</Text>
                        {/* Phần hiển thị phút */}
                        <View style={{ backgroundColor: '#202020', padding: rMS(1), borderRadius: rMS(3) }}>
                            <Text style={{ color: '#fff', paddingHorizontal: rMS(5),fontSize:rMS(12) }}>{minutes.toString().padStart(2, '0')}</Text>
                        </View>
                        <Text style={{ color: '#181818', fontSize: rMS(16), marginHorizontal: rMS(2) }}>:</Text>
                        {/* Phần hiển thị giây */}
                        <View style={{ backgroundColor: '#202020', padding: rMS(1), borderRadius: rMS(3) }}>
                            <Text style={{ color: '#fff', paddingHorizontal: rMS(5),fontSize:rMS(12)}}>{seconds.toString().padStart(2, '0')}</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#555555', fontSize: rMS(12) }}>See all</Text>
                    <Icon name={"chevron-right"} size={16} style={{ marginLeft: rMS(5) }} color={"#606060"} />
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', marginTop: rMS(10) }}>
                <FlatList
                    nestedScrollEnabled={true}
                    horizontal={true}
                    data={dataToShow}
                    keyExtractor={(item, index) => item.id + index}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={renderItemSeparator}
                />
            </View>
        </View>
    )
}

export default FlashSale

const st = StyleSheet.create({
    container: {
        width: '100%',
        padding: rMS(10),
        backgroundColor: '#fff',
        marginTop: rMS(10)
    }
})