// import * as React from 'react';
// import { CheckBox,Button,StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, FlatList, Alert} from 'react-native';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator} from '@react-navigation/stack';

// // import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Home from './Screen/Home';
// import Submitsuccess from './Screen/Submitsuccess';
// import Detail from './Screen/Detail';
// // import {Box} from './src/components/Box'
// const Stack = createStackNavigator();
// const App = ({navigation}) =>{
//     return(
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen name="Home" component={Home} options={{headerTitleAlign: 'center'}}/>
//           <Stack.Screen name = "Submitsuccess" component = {Submitsuccess} options={{headerTitle: 'Submit Success'}}/>
//           {/* headerRight: () =>  <FontAwesome name={"check-square"} size={20} / */}
//           <Stack.Screen name = "Detail" component = {Detail} options={{headerTitle: 'Detail', headerRight: ()=><TouchableOpacity><Text>Back</Text></TouchableOpacity>}}/>
//         </Stack.Navigator>
//     </NavigationContainer>
//     );
// }
// const styles = StyleSheet.create({
   
// });
// export default  App;
import * as React from 'react';
import { CheckBox,Button,StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, FlatList, Alert} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from './src/Screen/Home';
import Submitsuccess from './src/Screen/Submitsuccess';
import Detail from './src/Screen/Detail';
import DangKy from './src/Screen/DangKy';
import DangNhap from './src/Screen/DangNhap'; 
import CaNhan from './src/Screen/CaNhan';
import TaiKhoan from './src/Screen/TaiKhoan';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const StackHome = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DangNhap">
      <Stack.Screen name="ĐangNhap" component={DangNhap} options={{headerTitle: 'Đăng Nhập', headerTitleAlign: 'center'}}/>
        <Stack.Screen name = "ĐangKy" component = {DangKy} options={{headerTitle: 'Đăng Ký'}}/>
        <Stack.Screen name="Home" component={Home} options={{headerTitleAlign: 'center'}}/>
        <Stack.Screen name = "Submitsuccess" component = {Submitsuccess} options={{headerTitle: 'Submit Success'}}/>
        <Stack.Screen name = "Detail" component = {Detail} options={{headerTitle: 'Detail', headerRight: ()=><TouchableOpacity><Text>Back</Text></TouchableOpacity>}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const App = ({navigation}) =>{
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="TrangChu" component={StackHome} />
          
        </Tab.Navigator>
    </NavigationContainer>
    );
}
const styles = StyleSheet.create({
   
});
export default  App;