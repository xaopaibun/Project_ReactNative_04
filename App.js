import * as React from 'react';
import { CheckBox,Button,StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, FlatList, Alert, Image} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer , DrawerActions } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/Screen/Home';
import Submitsuccess from './src/Screen/Submitsuccess';
import Detail from './src/Screen/Detail';
import DangKy from './src/Screen/DangKy';
import DangNhap from './src/Screen/DangNhap'; 
import CaNhan from './src/Screen/CaNhan';
import TaiKhoan from './src/Screen/TaiKhoan';
import TaiKhoanDraw from './src/Screen/TaiKhoanDraw';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const StackThaoTac = () =>{
  return(
      <Stack.Navigator initialRouteName="DangNhap">
        <Stack.Screen name="DangNhap" component={DangNhap} options={{headerTitle: 'Đăng Nhập', headerTitleAlign: 'center'}}/>
        <Stack.Screen name = "DangKy" component = {DangKy} options={{headerTitle: 'Đăng Ký'}}/>
      </Stack.Navigator> 
  );
}
const StackHome = ({navigation})=>{
  return(
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerTitleAlign: 'center', title: '',headerLeft: () => <TouchableOpacity onPress={() =>navigation.dispatch(DrawerActions.openDrawer())}><Image  style={{width: 35, height: 35, marginLeft: 12}} source={ require('./src/assets/IMG/icon2.png')} /></TouchableOpacity>}}/>
        <Stack.Screen name = "Submitsuccess" component = {Submitsuccess} options={{headerTitle: 'Submit Success', headerLeft: null}}/>
        <Stack.Screen name = "Detail" component = {Detail} options={{headerTitle: 'Detail',headerLeft: null,  headerRight: ()=><TouchableOpacity onPress={() =>navigation.navigate('Home')}><Text> Back</Text></TouchableOpacity>}}/>
      </Stack.Navigator>
  );
}
const StackTaiKhoan= ()=>{
  return(
      <Stack.Navigator initialRouteName="TaiKhoan">
        <Stack.Screen name="TaiKhoan" component={TaiKhoan} options={{headerTitleAlign: 'center', headerTitle: 'Tài Khoản', headerLeft: null}}/>
        <Stack.Screen name="CaNhan" component={CaNhan} options={{headerTitleAlign: 'center', headerTitle: 'Thông Tin Cá Nhân'}}/>
      </Stack.Navigator>
  );
}
const TabViewApp = () =>{
  return(
        <Tab.Navigator tabBarOptions = {{activeTintColor :'#DB2522', inactiveTintColor:'#999999'}}>
          <Tab.Screen name="TrangChu" component={StackHome} options={{title:'Trang Chủ', tabBarIcon:({color}) => <FontAwesome name = "home" color={color} />}} />
          <Tab.Screen name = 'Taikhoan' component={StackTaiKhoan} options={{title:'Tài Khoản', tabBarIcon:({color}) => <FontAwesome name = "user" color={color}/>}}/>
        </Tab.Navigator>
    
  );
}
const DrawerApp = () =>{
  return(
      <Drawer.Navigator initialRouteName="Home" drawerContent = {props => <TaiKhoanDraw {...props} />} >
        <Drawer.Screen name="Home" component={TabViewApp}/>
      </Drawer.Navigator>
  );
}
const App = () =>{
    return(
      <NavigationContainer>
       <Stack.Navigator initialRouteName="DangNhap" >
        <Stack.Screen name="DangNhap" component={DangNhap} options={{headerShown :false,headerTitle: 'Đăng Nhập', headerTitleAlign: 'center'}}/>
        <Stack.Screen name = "DangKy" component = {DangKy} options={{headerShown :false, headerTitle: 'Đăng Ký'}}/>
        <Stack.Screen name = "HomeApp" component = {DrawerApp} options={{headerShown :false}}/>

      </Stack.Navigator>
      
    </NavigationContainer>
    );
}
const styles = StyleSheet.create({
   
});
export default  App;