import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FoodListItems from '../components/FoodListItems';




export default function App() {
  return (
    <View style={styles.container}>
     <FoodListItems item = {{label:'pizza',cal:488,quantity:3,brand:`andrea's pizza`}}/>
  
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding:5,
    borderRadius:20,
    gap: 10,
  },
});
