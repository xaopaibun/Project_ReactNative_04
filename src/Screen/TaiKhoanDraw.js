import React from 'react';
import { StyleSheet,
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
const TaiKhoanDraw = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                
                    <Image
                            style={styles.anhimg}
                            source={{
                            uri: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/141162747_190481106106245_2204885355751272197_n.jpg?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_ohc=EKf625AzIeYAX91-s3-&_nc_ht=scontent.fhan4-1.fna&oh=3df2f2e9c188d6d61703f31bc20e5d82&oe=602FFFA0',
                            }}
                        />
                        <TouchableOpacity onPress={() =>navigation.navigate('TaiKhoan')}>
                        <Text style={{fontSize:18, fontWeight:'bold', lineHeight: 27, marginTop: 14}}>Phạm Văn Quý</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.nutdangxuat} onPress={() => navigation.navigate('Taikhoan')}><Text style={{color : '#FFFFFF', fontSize: 14, fontWeight:'700'}}>Đăng Xuất</Text></TouchableOpacity>
            </View>
        

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    nutdangxuat:{
        marginTop: 50,
        height: 51,
        marginHorizontal: 20,
        backgroundColor: '#C3333C',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content:{
        marginTop: 70,
        flex: 5,
        alignItems:'center',

    },
    anhimg:{
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    footer:{
        flex: 1
    }

});
export default TaiKhoanDraw;