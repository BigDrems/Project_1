import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import FoodListItems from '../components/FoodListItems';

const FoodItems = [{
  label: 'Pizza',
  calarie: 56,
  brand: 'Dominos',
  place: 'Home',
},
{
  label: 'Apple', 
  calarie: 20,
  brand: 'Fuji',
  place: 'Japan',
},
];


export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
          data={FoodItems} // Wrap FoodListItems inside square brackets
          renderItem={({ item }) => <FoodListItems item={item} />}
          contentContainerStyle={{gap: 5}}
      />
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
