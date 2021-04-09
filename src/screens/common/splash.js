import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
    StatusBar
  } from 'react-native';


export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {};
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.replace('LandingPage')
        }, 2000);
    }


    render () {
      return (
        <View style={styles.maincontainer}>
        <StatusBar
           backgroundColor = "#4F45F0"
           barStyle = "light-content"
         />
        <ImageBackground source={require('../../assets/image/splash_bg.png')} style={styles.backgroundImage} resizeMode='stretch' >
        <View style={styles.subcontainer}>
                <View style={styles.CircleShapeView}>
                <Image source={require('../../assets/image/splash_logo.png')} style={{height:400,width:400}} resizeMode='contain'></Image>
                </View>

                <Text style={styles.logotext}>Diamand</Text>
        </View>
        </ImageBackground> 
        </View>
      );
    }
}

const styles = StyleSheet.create({
    maincontainer:{
        flex:1 ,
        backgroundColor:"#fff" 
    },
    subcontainer:{
        flex:1 ,
        alignItems:'center',
        justifyContent:'center' 
    },
    logotext:{
        color:'#4F45F06a',
        fontSize:40,
        alignItems:'center',
        marginTop:40
    },
    logoimage:{
        height:100,
        width:200
    },
    backgroundImage: {
        flex: 1,
    },
    CircleShapeView: {
        width: 300,
        height: 300,
        borderRadius: 300/2,
        backgroundColor: '#4F45F0',
        alignItems:'center',
        justifyContent:'center'
    },
})