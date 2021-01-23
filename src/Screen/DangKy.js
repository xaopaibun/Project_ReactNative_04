import React from 'react';

import {
  
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Alert
} from 'react-native';
import TextInPut from '../componnents/TextInput';
import {signup} from '../componnents/api';
const DangKy = ({navigation}) => {
    const [TenDangNhap, setTenDangNhap] = React.useState("");
    const [SDT, setSDT] = React.useState("");
    const [MatKhau, setMatKhau] = React.useState("");
    const onSignup = async () => {
        try {
            const result = await signup({
                "email": SDT,
                "password": MatKhau,
                "userName": TenDangNhap
              })
              Alert.alert('Thông báo', 'Bạn đã đăng ký tài khoản thành công');
              navigation.navigate('DangNhap');
        } catch (error) {
            Alert.alert('Thông báo', error+ "");
        }
      }
  return (
    <View style={styles.container}>
        <StatusBar barStyle = 'light-content'></StatusBar>
        <View style={styles.header}></View>
        <View style={styles.content}></View>
        <View style={styles.Form}>
            <View style={styles.Form_TieuDe}>
                <Text style={styles.Text_TieuDe}>Đăng Ký</Text>
            </View>
            <View style={styles.From_All_Input}>
                <View style={{marginTop: 20}}>
                    <Text style={styles.Label}>Số điện thoại</Text>
                    <TextInput style={styles.Input}  keyboardType = 'numeric' onChangeText= {(value) => setSDT(value)}  value={SDT}/>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={styles.Label}>Tên đăng nhập</Text>
                    <TextInput style={styles.Input}  keyboardType = 'default' onChangeText= {(value) => setTenDangNhap(value)}  value={TenDangNhap}/>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={styles.Label}>Mật khẩu</Text>
                    <TextInput style={styles.Input}  keyboardType = 'default'  ecureTextEntry ={true} onChangeText= {(value) => setMatKhau(value)}  value={MatKhau}/>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={styles.Label}>Xác nhận mật khẩu</Text>
                    <TextInput style={styles.Input}  keyboardType = 'default' ecureTextEntry ={true} onChangeText= {(value) => setMatKhau(value)}  value={MatKhau}/>
                </View>
                <View style={{marginTop: 50}}>
                    <TouchableOpacity style={styles.nut} onPress={onSignup}>
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
    Label:{
        fontSize: 12,fontWeight: '600',lineHeight: 18, color:'#444444'
    },
    Input:{
        borderBottomWidth: 1, borderBottomColor:'#DDDDDD', paddingVertical:  10
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
    Text_TieuDe:{
        fontSize: 24, fontWeight: '800', fontStyle:'normal', margin: 20, marginTop: 30
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
    nut:{
        height: 40, backgroundColor:"#C3333C", borderRadius:4 ,alignItems:'center', justifyContent:'center'
    }
});
export default DangKy;