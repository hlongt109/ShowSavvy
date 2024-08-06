import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/navigator/TabNavigation';
import Welcom from './src/srceens/Welcom';
import Login from './src/srceens/Login';
import SignUp from './src/srceens/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/srceens/Home';
import Details from './src/srceens/Details';
import Personal from './src/srceens/Personal';
import Notification from './src/srceens/Notification';
import ShopManage from './src/components/componentShop/ShopManage';
import ShopRegister from './src/components/componentShop/ShopRegister';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AddProduct from './src/srceens/AddProduct';


const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="#181818" barStyle="light-content" />
        <Stack.Navigator
          initialRouteName='Welcome'
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: ({ current, layouts }) => ({
              cardStyle: {
                opacity: current.progress, // hieu ung lam mo
                transform: [ // hieu ung chuyen slide
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0]
                    }),
                  },
                  {  // hieu ung zoom
                    scale: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.5, 1]
                    }),
                  }
                ],
              }
            }),
          }}>
          <Stack.Screen name='Welcome' component={Welcom} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='TabNav' component={TabNavigation} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Details' component={Details} />
          <Stack.Screen name='Notify' component={Notification} />
          <Stack.Screen name='Me' component={Personal} />
          {/** Shop */}
          <Stack.Screen name='ShopManage' component={ShopManage} />
          <Stack.Screen name='ShopRegister' component={ShopRegister} />
          <Stack.Screen name='AddProduct' component={AddProduct} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App