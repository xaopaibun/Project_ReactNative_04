import * as React from 'react';
import { CheckBox,Button,StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, FlatList, Alert} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
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
import Icon from 'react-native-vector-icons/FontAwesome';
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
const StackHome = ()=>{
  return(

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerTitleAlign: 'center', headerLeft: null}}/>
        <Stack.Screen name = "Submitsuccess" component = {Submitsuccess} options={{headerTitle: 'Submit Success', headerLeft: null}}/>
        <Stack.Screen name = "Detail" component = {Detail} options={{headerTitle: 'Detail',headerLeft: null,  headerRight: ()=><TouchableOpacity><Text>Back</Text></TouchableOpacity>}}/>
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
    
        <Tab.Navigator>
          <Tab.Screen name="TrangChu" component={StackHome} options={{title:'Trang Chủ'}} />
          <Tab.Screen name = 'Taikhoan' component={StackTaiKhoan} options={{title:'Tài Khoản'}}/>
        </Tab.Navigator>
    
  );
}
// const DrawerApp = () =>{
//   return(
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={} />
        
//       </Drawer.Navigator>
//   );
// }
const App = () =>{
    return(
      <NavigationContainer>
       <Stack.Navigator initialRouteName="DangNhap" >
        <Stack.Screen name="DangNhap" component={DangNhap} options={{headerShown :false,headerTitle: 'Đăng Nhập', headerTitleAlign: 'center'}}/>
        <Stack.Screen name = "DangKy" component = {DangKy} options={{headerShown :false, headerTitle: 'Đăng Ký'}}/>
        <Stack.Screen name = "TabViewApp" component = {TabViewApp} options={{headerShown :false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
}
const styles = StyleSheet.create({
   
});
export default  App;