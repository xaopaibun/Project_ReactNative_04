import React from 'react';
import {
  
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Alert,
} from 'react-native';
import axios from 'axios';
import {login} from '../componnents/api';
const DangNhap = ({navigation}) => {
    const [SDT, setTK] = React.useState("");
    const [MK, setMK] = React.useState("");
    const onLogin = async () => {
        try {
          const result = await login({
            "email": SDT ,
            "password": MK 
          })
            Alert.alert('Thông báo', 'Bạn đã đăng nhập thành công');
            navigation.navigate('HomeApp');
            setTK("");
            setMK("");
        } catch (error) {
            Alert.alert('Thông báo', error + '');
          
        }
      }
  return (
    <View style={styles.container}>
        <StatusBar barStyle = 'light-content'></StatusBar>
        <View style={styles.header}></View>
        <View style={styles.content}></View>
        <View style={styles.Form}>
            <View style={styles.Form_TieuDe}>
                <Text style={{fontSize: 24, fontWeight: '800', fontStyle:'normal', margin: 20, marginTop: 30}}>Đăng Nhập</Text>
            </View>
            <View style={styles.From_All_Input}>
                 <View style={{marginTop: 20}}>
                    <Text style={{fontSize: 12,fontWeight: '600',lineHeight: 18, color:'#444444'}}>Số điện thoại</Text>
                    <TextInput style={{ borderBottomWidth: 1, borderBottomColor:'#DDDDDD', paddingVertical:  10}}  keyboardType = 'numeric' onChangeText= {(value) => setTK(value)}  value={SDT}/>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={{fontSize: 12,fontWeight: '600',lineHeight: 18, color:'#444444'}}>Mật Khẩu</Text>
                    <TextInput style={{ borderBottomWidth: 1, borderBottomColor:'#DDDDDD', paddingVertical:  10}}  keyboardType = 'default' secureTextEntry ={true} value={MK} onChangeText= {(value) => setMK(value)} />
                </View>
                
                <TouchableOpacity >
                        <Text style = {{color:'#3784FF', marginVertical: 20}}>Quên Mật Khẩu</Text>
                    </TouchableOpacity>
                <View>
                    <TouchableOpacity style={{height: 40, backgroundColor:"#C3333C", borderRadius:4 ,alignItems:'center', justifyContent:'center'}} onPress={onLogin}>
                        <Text style = {styles.text_nut}>Đăng Nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
        <View style={styles.footer}>
            <Text style={{textAlign:'center', color: '#555555'}}>Bạn Chưa Có Tài Khoản ?<Text style = {{color:'#3784FF'}} onPress={() =>{navigation.navigate('DangKy')}}> Đăng Ký Ngay</Text></Text>
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
        flex: 1,
        height: 385,
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
        flex: 1
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
export default DangNhap;