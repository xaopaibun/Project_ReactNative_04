import React from 'react';

import {
  
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import TextInPut from '../componnents/TextInput';
const DangKy = ({navigation}) => {
  return (
    <View style={styles.container}>
        <StatusBar barStyle = 'light-content'></StatusBar>
        <View style={styles.header}></View>
        <View style={styles.content}></View>
        <View style={styles.Form}>
            <View style={styles.Form_TieuDe}>
                <Text style={{fontSize: 24, fontWeight: '800', fontStyle:'normal', margin: 20, marginTop: 30}}>Đăng Ký</Text>
            </View>
            <View style={styles.From_All_Input}>
                <TextInPut TenLabel='Số điện thoại'/>
                <TextInPut TenLabel='Tên Đăng Nhập'/>
                <TextInPut TenLabel='Mật Khẩu'/>
                <TextInPut TenLabel='Xác Nhận Mật Khẩu'/>
                <View style={{marginTop: 50}}>
                    <TouchableOpacity style={{height: 40, backgroundColor:"#C3333C", borderRadius:4 ,alignItems:'center', justifyContent:'center'}}>
                        <Text style = {styles.text_nut}>Đăng Ký</Text>
                    </TouchableOpacity>
                    <Text style={{textAlign:'center', color: '#555555', marginTop: 20}}>Bạn đã có Tài Khoản ?<Text style = {{color:'#3784FF'}} onPress={() =>{navigation.navigate('DangNhap')}}> Đăng Nhập Ngay</Text></Text>
                </View>
            </View>
        </View>
        
    </View>
    
  );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        height: 300,
        flex: 2,
        backgroundColor:'#B12B32',
        position:'relative',
        borderBottomEndRadius:95,
        borderBottomStartRadius: 95
    },
    footer:{
        flex: 0.5,
        
    },
    content:{
        flex: 3.5
    },
    Form:{
        height: 650,
       
        width:'90%',
        backgroundColor: 'white',
        position:'absolute',
        marginHorizontal: 20,
        top: 200,
        left: 0,
        
        zIndex: 1111,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    Form_TieuDe:{
        flex: 0.5
    },
    From_All_Input:{
        margin: 20, flex: 3
    },
    text_nut:{
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '700',
        color:'white',
        
    },
});
export default DangKy;