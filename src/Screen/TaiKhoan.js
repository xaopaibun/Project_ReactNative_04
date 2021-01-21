import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const TaiKhoan = ({navigation}) =>{
    return(
        <View style={styles.container}>
            
            <View style={styles.thongtin}>
                <View style={styles.thongtin_trai}>
                    <Text style={styles.name}>Jin</Text>
                    <TouchableOpacity onPress= {() => {navigation.navigate('CaNhan')}}><Text>Chạm để xem thông tin</Text></TouchableOpacity>
                </View>
                <View style={styles.thongtin_phai}>
                    <Image
                            style={{width: 60, height: 60, borderRadius: 50}}
                            source={{
                            uri: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/141162747_190481106106245_2204885355751272197_n.jpg?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_ohc=EKf625AzIeYAX91-s3-&_nc_ht=scontent.fhan4-1.fna&oh=3df2f2e9c188d6d61703f31bc20e5d82&oe=602FFFA0',
                            }}
                        />
                </View>
            </View>
            <TouchableOpacity style={styles.nutdangxuat} onPress={() => navigation.navigate('DangNhap')}><Text style={{color : '#C3333C'}}>Đăng Xuất</Text></TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    thongtin:{
        marginTop: 50,
        height: 101,
        backgroundColor: '#FFFFFF',
        flexDirection:'row',
        padding: 12,
        alignItems:'center',
        justifyContent: 'space-between'
    },
    name:{
        fontSize: 24,
        fontWeight:'bold',
        color:'#444444',
        paddingBottom: 6,
    },
    nutdangxuat:{
        marginTop: 50,
        height: 51,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default TaiKhoan;