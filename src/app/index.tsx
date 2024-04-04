import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,TextInput, Button,ActivityIndicator } from 'react-native';
import FoodListItems from '../components/FoodListItems';
import { useState } from 'react';
import{ gql,useLazyQuery} from'@apollo/client';

const query = gql `
query myQuery($ingr: String) {
  myQuery(ingr: $ingr) {
    parsed
    text
    hints {
      food {
        label
        category
        foodId
        knownAs
        nutrients {
          ENERC_KCAL
        }
      }
    }
  }
}
`;


export default function SearchQuery() {
  const [search,setSearch] = useState('');
  const [runSearch,{data,loading,error}] = useLazyQuery(query,{variables:{ingr:'Beef'}});


  const performSearch = () => {
    runSearch({variables:{ingr:search}});
    setSearch('');
  }

  // if(loading) {
  //   return <ActivityIndicator/>
  // }

  if(error){
    return <Text>Failed to Error!</Text>
  }

  const item  = data?.myQuery?.hints || [];

  console.log(JSON.stringify(data,null,2));

  return (
    <View style={styles.container}>
      <TextInput value={search} onChangeText={setSearch} placeholder='Search...' style={styles.input}/>
      {search && <Button title='search' onPress={performSearch}/> }

      {loading && <ActivityIndicator/>} 
      <FlatList
          data={item} // Wrap FoodListItems inside square brackets
          renderItem={({ item }) => <FoodListItems item={item} />}
          ListEmptyComponent={<Text>Search a food.</Text>}
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