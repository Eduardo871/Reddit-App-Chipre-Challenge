import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, SafeAreaView, FlatList} from 'react-native';
import List from './list/List';
import NavBar from './navBar/NavBar';
import { fetchingSubreddit } from '../../data/fetching';

const Principal = ({ navigation }) => {
  const [data, setData] = React.useState({
    data:[],
    loading: false,
    error: false,
  });

  React.useState(()=>{
   
    fetchingSubreddit('pics', 50, 'hot', setData, data)
    
  }, [])
  
    return (
            <View style={styles.container}>
              <List  
              data={data}
              />

              <NavBar
              fetchingSubreddit={fetchingSubreddit}
              data={data}
              setData={setData}
              />
            </View>
    )
}

export default Principal;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    }
  });
  