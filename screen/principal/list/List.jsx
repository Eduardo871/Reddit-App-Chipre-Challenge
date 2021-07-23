import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity  } from 'react-native';

const fecha = (dateUtc) => {
  const date = new Date(dateUtc * 1000)  // requiere de milimetros para poder brindarme la fecha
  const resul = date.toLocaleString()
  return resul
}

const Item = ({data,navigation}) => (
  <View style={styles.containerItem} key={data.id}>
    <TouchableOpacity
     style={styles.itemOne}
     onPress={()=>{navigation.navigate('WebView',{url:`https://www.reddit.com/gallery/${data.id}`})}}
     >
      <Image 
            style={styles.img}
            source={{uri: `${data.thumbnail}`}}
            />
    </TouchableOpacity>
    
    <View style={styles.itemTwo}>
      <View>
         <View style={{flexDirection:'row'}}>
          <Text style={styles.text2}>{data.author}</Text>
          <Text style={styles.text2}>{fecha(data.created_utc)}</Text>
         </View>
         <Text style={styles.title}>{data.title}</Text>
      </View>
      <View style={styles.textDate}>
        <Text style={styles.text1}>Score: {data.score}</Text>
        <Text style={styles.text1}>Comments: {data.num_comments}</Text>
      </View>
    </View>
  </View>
);

const List= ({ data, navigation }) => {
  const renderItem = ({ item }) => (
    <Item data={item.data} navigation={navigation} key={item.data.id}/>
  );
  

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.data}
        renderItem={renderItem}
        keyExtractor={data => data.data.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width:'100%'
  },
  item: {
    backgroundColor: '#F5B7B1',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    position: 'absolute',
    bottom: 54,
    left: 10,
    width: 200,
    overflow: 'scroll',
    height: 60
  },
  containerItem:{
    width: '100%',
    margin:10,
    marginLeft:0,
    flexDirection: 'row',
  },
  img:{
    width: 100,
    height: 100,
    margin:0
  },
  textDate: {
    flexDirection: 'row',
    position: 'absolute',
    bottom:1, 
    width: 190,
    justifyContent: 'space-around'
  },
  text1:{
    fontSize:11,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  text2:{
    fontSize:10,
    fontWeight: 'bold',
    marginLeft: 10,
  }
});

export default List;