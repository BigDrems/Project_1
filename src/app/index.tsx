import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,TextInput, Button } from 'react-native';
import FoodListItems from '../components/FoodListItems';
import { useState } from 'react';

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
  const [search,setSearch] = useState('');

  const performSearch = () => {
    console.warn("Searching for:", search);

    setSearch('');
  }

  return (
    <View style={styles.container}>
      <TextInput value={search} onChangeText={setSearch} placeholder='Search...' style={styles.input}/>
      {search && <Button title='search' onPress={performSearch}/> }
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
  input:{   
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 20,
  }
});


/*
EMAM PASS: cy76j7sn3KJ!DnM 
API ID: cd8739b1 
API KEY: 
0806cf9b0fd84df1736b2cfcd5b78f47	
*/