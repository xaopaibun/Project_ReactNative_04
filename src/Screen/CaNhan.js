import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';


import Column from '../componnents/column';
const CaNhan = () =>{
    return (
        <View style={{flex: 1, backgroundColor:'#E5E5E5'}}>
            <View style={styles.box}>
                <Image
                        style={styles.anhimg}
                        source={{
                        uri: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/141162747_190481106106245_2204885355751272197_n.jpg?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_ohc=EKf625AzIeYAX91-s3-&_nc_ht=scontent.fhan4-1.fna&oh=3df2f2e9c188d6d61703f31bc20e5d82&oe=602FFFA0',
                        }}
                    />
                    <View style={{height: "20%", marginTop: 30, justifyContent: 'center', alignItems:'center', }}>
                        <Text style={{fontSize:18, fontWeight:'bold', lineHeight: 27, textTransform:'uppercase'}}>Phạm Jin</Text>
                        <TouchableOpacity style={{marginTop: 12}}><Text style={{color:'#3784FF', fontSize: 12}}>Thay đổi ảnh đại diện</Text></TouchableOpacity>
                    </View>
                    <Column Text_Left = 'Số điện thoại' Text_Right = '0352343938'/>
                    <Column Text_Left = 'Ngày Sinh' Text_Right = '05/10/2000'/>
                    <Column Text_Left = 'Số điện thoại' Text_Right = '099 360 1731'/>
                    <Column Text_Left = 'Email' Text_Right = 'vanquy33338888@gmail.com'/>
                    <Column Text_Left = 'Địa Chỉ' Text_Right = 'Thôn Trần Phú, xã Minh Cường, huyện Thường Tín, TP Hà Nội'/>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
   box:{
       marginTop: 70,
       borderRadius: 10, 
    height: 353, marginHorizontal: 18, backgroundColor: '#ffffff', shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    position:'relative'
   },
   anhimg:{
       width: 60,
       height: 60,
       borderRadius: 50,
       position: 'absolute',
       top: -30,
       left: 160,
       zIndex: 500000000,
   },
});
export default CaNhan;