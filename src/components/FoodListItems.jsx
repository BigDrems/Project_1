import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';


const FoodListItems = ({item}) =>{
    return(
        <View style = {style.container}>
            <View style={style.insideContainer}>
                <Text style={style.text}>
                    {item.food.label} 
                </Text>
                <Text style = {style.description}>
                    {item.food.nutrients.ENERC_KCAL} calories, 
                    {item.food.category}, 
                    {item.food. knownAs}
                </Text>
            </View>
        <AntDesign name="pluscircleo" style= {style.button} />
  
        </View>
    );
  }

  const style = StyleSheet.create({
    container: {
        backgroundColor:'gainsboro',
        padding:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    insideContainer:{
        flex:1,
        gap:5,
    },
    text:{
        color:'black', 
        fontWeight:'bold',
        fontSize:16,
        padding:3,
    },
    description:{
        fontSize:12,
        color:'gray',
        padding:3,
        letterSpacing:1,
    },
    button:{
        fontSize: 24,
        color:'royalblue',
    },
  });
  
  export default FoodListItems;