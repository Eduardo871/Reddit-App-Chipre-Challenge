import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';



const NavBar = ({data, setData, fetchingSubreddit}) => {

  const [active, setActive] = React.useState({
    new: false,
    top: false,
    hot: false,
    controversial: false,
  })


  const handleClick = (id)=>{
    if(id === 1){
      fetchingSubreddit('pics', 20, 'new', setData, data);
      setActive({
         new:true, top:false, hot:false,controversial:false,
      });
    };
    if(id === 2){
      fetchingSubreddit('pics', 20, 'top', setData, data);
      setActive({
         new:false, top:true, hot:false,controversial:false,
      });
    };
    if(id === 3){
      fetchingSubreddit('pics', 20, 'hot', setData, data);
      setActive({
         new:false, top:false, hot:true,controversial:false
      });
    };
    if(id === 4){
      fetchingSubreddit('pics', 20, 'controversial', setData, data);
      setActive({
         new:false, top:false, hot:false,controversial:true
      });
    };

  }


    return (
            <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity style={styles.btn}  onPress={()=> handleClick(1)}>
                    <Text style={ active.new ? (styles.active):(styles.txt)}>New</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={()=> handleClick(2)}>
                    <Text style={ active.top ? (styles.active):(styles.txt)}>Top</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}  onPress={()=> handleClick(3)}>
                    <Text style={ active.hot ? (styles.active):(styles.txt)}>Hot</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}  onPress={()=> handleClick(4)}>
                    <Text style={ active.controversial ? (styles.active):(styles.txt)}>Controversial</Text>
                </TouchableOpacity>
            </View>
            </View>
    )
}

export default NavBar;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      justifyContent: 'center',
      alignItems:'center'
    },
    nav: {
      position: 'absolute',
      height: 60,
      width: '97%',
      backgroundColor: '#EC7063',
      bottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderRadius:60,

    },
    btn: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    active:{
      fontWeight:'bold',
      color: '#fff',
      fontSize: 15
    },
    txt:{
      color: '#fff',
      fontSize: 15
    }
  });
  