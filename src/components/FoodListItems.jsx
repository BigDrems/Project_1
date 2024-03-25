import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

const FoodListItems = ({item}) =>{
    return(
        <View style={{backgroundColor:'gainsboro',padding:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{flex:1,gap:5}}>
        <Text style={{color:'black', fontWeight:'bold',fontSize:16,padding:3,}}>
            {item.label}
        </Text>
        <Text style={{fontSize:12,color:'gray',padding:3,letterSpacing:.8}}>{item.cal} cal, {item.quantity} pieces, {item.brand}</Text>
        </View>
        <AntDesign name="pluscircleo" size={24} color='royalblue' />
  
        </View>
    );
  }

  export default FoodListItems;