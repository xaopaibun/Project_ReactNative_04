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
const Column = ({Text_Left, Text_Right}) =>{
    return(
        <View style={styles.column}>
            <Text style={styles.column_left}>{Text_Left}</Text>
            <Text style={styles.column_right}>{Text_Right}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    column:{
        flexDirection:'row',
        padding: 14,
       
        justifyContent:'space-between',
        borderTopColor:'#E4E4E4',
        borderTopWidth: 1,
       
    },
    column_left :{
       color:'#888888',
       fontSize: 12,
       fontWeight:'600',
       
    },
    column_right:{
        color:'#323232',
        fontSize: 12,
        fontWeight:'600',
        textAlign:'right',
        marginLeft: 12,
    }
});
export default Column;