import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image  } from 'react-native';



const Item = ({data }) => (
  <View style={styles.containerItem}>
    <View style={styles.itemOne}>
      <Image 
            style={styles.img}
            source={{uri: `${data.thumbnail}`}}
            />
    </View>
    <View style={styles.itemTwo}>
     <Text style={styles.title}>{data.title}</Text>
    </View>
  </View>
);

const List= ({ data }) => {
  const renderItem = ({ item }) => (
    <Item data={item.data} />
  );
  

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3
  },
  item: {
    backgroundColor: '#F5B7B1',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
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
  }
});

export default List;