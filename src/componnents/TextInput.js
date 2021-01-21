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
const TextInPut = ({TenLabel, Input}) =>{
    return(
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 12,fontWeight: '600',lineHeight: 18, color:'#444444'}}>{TenLabel}</Text>
        <TextInput style={{ borderBottomWidth: 1, borderBottomColor:'#DDDDDD', paddingVertical:  10}}  keyboardType = 'default' value='' />
    </View>
    );
}
export default TextInPut;