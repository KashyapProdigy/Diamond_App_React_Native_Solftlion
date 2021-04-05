import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions, 
    TouchableOpacity
  } from 'react-native';


  import Icon1 from 'react-native-vector-icons/Entypo';
  import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
  import Icon3 from 'react-native-vector-icons/FontAwesome';
  import Icon4 from 'react-native-vector-icons/FontAwesome5';
  import Icon5 from 'react-native-vector-icons/AntDesign';
  import Icon6 from 'react-native-vector-icons/Ionicons';
  import Icon7 from 'react-native-vector-icons/EvilIcons';
  import Icon8 from 'react-native-vector-icons/SimpleLineIcons';


export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        selectedButtonIndex:0
      };

      this.onSeekerClick = this.onSeekerClick.bind(this);
      this.onProviderClick = this.onProviderClick.bind(this);
      this.onSellerClick = this.onSellerClick.bind(this);
    }

    componentDidMount(){}

    onSeekerClick(){
        this.setState({selectedButtonIndex:1})
        this.props.navigation.navigate('LoginSeeker');
    }

    onProviderClick(){
        this.setState({selectedButtonIndex:2})
        this.props.navigation.navigate('LoginProvider');
    }

    onSellerClick(){
        this.setState({selectedButtonIndex:3})
        this.props.navigation.navigate('LandingPage');
    }

    render () {
      return (
        <View style={styles.maincontainer}>
        <ImageBackground source={require('../../assets/image/splash_bg.png')} style={styles.backgroundImage} resizeMode='stretch' >
        <View style={styles.subcontainer1}>
            <Text style={styles.pageheader}>Welcome To DI'mand Jobs</Text>
            <Text style={styles.pagesubheader}>you can now find the job that suits you</Text>
        </View>
        <View style={styles.subcontainer2}>
        <Image source={require('../../assets/icon/main.png')} style={{height:350,width:350}} resizeMode='contain'></Image>
        </View>
        <View style={styles.subcontainer3}>
            <Text style={[styles.pagesubheader,{marginLeft:'10%'}]}>Select Your Role</Text>

            <View style={{marginLeft:'10%',marginRight:'10%',marginTop:15}}>
                <TouchableOpacity onPress={this.onSeekerClick} style={{backgroundColor:this.state.selectedButtonIndex == 1 ? '#4F45F0' : '#4F45F01a',borderRadius:15}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon2 style={{margin:10,marginLeft:20}} name="briefcase-search" color={this.state.selectedButtonIndex == 1 ? '#fff' : '#4F45F0'} size={30} />
                    <Text style={{color:this.state.selectedButtonIndex == 1 ? 'white' : 'black',marginLeft:10,padding:20,fontSize:18}}>Job Seeker</Text>
                    </View>  
                </TouchableOpacity>
            </View>

            <View style={{marginLeft:'10%',marginRight:'10%',marginTop:15}}>
                <TouchableOpacity onPress={this.onProviderClick} style={{backgroundColor:this.state.selectedButtonIndex == 2 ? '#4F45F0' : '#4F45F01a',borderRadius:15}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon3 style={{margin:10,marginLeft:20}} name="diamond" color={this.state.selectedButtonIndex == 2 ? '#fff' : '#4F45F0'} size={30} />
                    <Text style={{color:this.state.selectedButtonIndex == 2 ? 'white' : 'black',marginLeft:10,padding:20,fontSize:18}}>Job Provider</Text>
                    </View>  
                </TouchableOpacity>
            </View>

            <View style={{marginLeft:'10%',marginRight:'10%',marginTop:15}}>
                <TouchableOpacity  onPress={this.onSellerClick} style={{backgroundColor:this.state.selectedButtonIndex == 3 ? '#4F45F0' : '#4F45F01a',borderRadius:15}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon4 style={{margin:10,marginLeft:20}} name="store" color={this.state.selectedButtonIndex == 3 ? '#fff' : '#4F45F0'} size={30} />
                    <Text style={{color:this.state.selectedButtonIndex == 3 ? 'white' : 'black',marginLeft:10,padding:20,fontSize:18}}>Job Seller</Text>
                    </View>  
                </TouchableOpacity>
            </View>

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
    subcontainer1:{
        height:'20%',
        alignItems:'center',
        justifyContent:'center'
    },
    subcontainer2:{
        height:'40%',
        alignItems:'center',
        justifyContent:'center'
    },
    subcontainer3:{
        height:'40%',
    },
    backgroundImage: {
        flex: 1,
    },
    pageheader:{
        fontSize:28
    },
    pagesubheader:{
        marginTop:8,
        fontSize:18
    }
})