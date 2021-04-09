import React from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    ImageBackground,
    Image,
    FlatList,
    Dimensions, 
    TouchableOpacity,
    StatusBar
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
          loading:false,
      };

      this.onBackButtonClick = this.onBackButtonClick.bind(this);
      this.onAboutUsClick = this.onAboutUsClick.bind(this);
      this.onContactUsClick = this.onContactUsClick.bind(this);
      this.onPrivacyPolicyClick = this.onPrivacyPolicyClick.bind(this);
      this.onTermsConditionClick = this.onTermsConditionClick.bind(this);
      this.onRateAppClick = this.onRateAppClick.bind(this);
      this.onLogoutCLick = this.onLogoutCLick.bind(this);

    }

    componentDidMount(){}

    onBackButtonClick(){
        this.props.navigation.goBack();
    }

    onAboutUsClick(){
        this.props.navigation.navigate('AboutUs');
    }

    onContactUsClick(){
        this.props.navigation.navigate('ContactUs');
    }

    onPrivacyPolicyClick(){
        this.props.navigation.navigate('PrivacyPolicy');
    }

    onTermsConditionClick(){
        this.props.navigation.navigate('TermsAndCondition');
    }

    onRateAppClick(){
        this.props.navigation.navigate('RateApp');
    }
 
    onLogoutCLick(){
        this.props.navigation.popToTop();
        this.props.navigation.replace('LandingPage');
    }

    render () {
      return (
        <View style={styles.maincontainer}>
        <StatusBar
           backgroundColor = "#4F45F0"
           barStyle = "light-content"
         />
        <ImageBackground source={require('../../assets/image/splash_bg.png')} style={styles.backgroundImage} resizeMode='stretch' >
        <View style={{backgroundColor : '#4F45F0' , flex:8}}>

            <TouchableOpacity onPress={this.onBackButtonClick}
            style={{marginTop:20,marginLeft:20,flexDirection:'row',alignItems:'center'}}>
                <Icon5 name="left" color={'white'} size={26} />
                <Text style={{color:'white',fontSize:22,marginLeft:4}}>Setting</Text>
            </TouchableOpacity>

        </View>
        
        <View style={{ flex:92 ,}}>

        <View style={{margin:20,borderRadius:15 , backgroundColor:'#4F45F01a'}}>

        <TouchableOpacity onPress={this.onAboutUsClick}>
                <Text style={{color:'#000',fontSize:20,marginHorizontal:20,borderBottomWidth:0.8,paddingVertical:10}}>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onContactUsClick}>
                <Text style={{color:'#000',fontSize:20,marginHorizontal:20,borderBottomWidth:0.8,paddingVertical:10}}>Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onPrivacyPolicyClick}>
                <Text style={{color:'#000',fontSize:20,marginHorizontal:20,borderBottomWidth:0.8,paddingVertical:10}}>Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onTermsConditionClick}>
                <Text style={{color:'#000',fontSize:20,marginHorizontal:20,borderBottomWidth:0.8,paddingVertical:10}}>Terms and Condition</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onRateAppClick}>
                <Text style={{color:'#000',fontSize:20,marginHorizontal:20,paddingVertical:10}}>Rate App</Text>
        </TouchableOpacity>

        </View>

        <View style={{margin:20,borderRadius:15 , backgroundColor:'#4F45F01a'}}>
        <TouchableOpacity onPress={this.onLogoutCLick}>
                <Text style={{color:'#000',fontSize:20,alignSelf:'center',marginHorizontal:20,paddingVertical:10}}>Logout</Text>
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
        flex:100 ,
        backgroundColor:"#fff" 
    },
    item: {
        backgroundColor: '#4F45F02a',
        borderRadius:15,
        padding:15,
        marginHorizontal:10
      },
      title: {
        fontSize: 18,
      },
    subcontainer1:{
        height:Dimensions.get('window').height/100*20,
        justifyContent:'center',
        marginLeft:'15%'
    },
    subcontainer2:{
        height:Dimensions.get('window').height/100*70,
        alignItems:'center',
        marginTop:10
    },

    backgroundImage: {
        flex: 1,
    },
    pageheader:{
        fontSize:28,
        color:'#4F45F0'
    },
    forgotPasswordText:{
        fontSize:22,
        color:'#4F45F0',
    },
    forgotPasswordContainer:{
        marginTop:15,
        marginRight:'10%',
        alignSelf:'flex-end'
    },
    pagesubheader:{
        marginTop:8,
        fontSize:18
    },
    iconInputContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        height:55,
        width:Dimensions.get('window').width-40,
        borderRadius:7,
    },
    iconInputField:{
        marginLeft:5,
        flex:1,
        color:"#000"
    },
    iconInputImage:{
        marginRight:20
    },
    loginButtonContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#4F45F0',
        marginHorizontal:'10%',
        marginTop:15,
        height:55,
        width:Dimensions.get('window').width-70,
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center'
    },
    loginButtonText:{
        color:'white',
        fontSize:25
    },
    socialButtonContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#4F45F01a',
        marginTop:20,
        marginHorizontal:10,
        height:55,
        width:Dimensions.get('window').width/2-60,
        borderRadius:7,
    },
    socialButtonText:{
        color:'#4F45F0'
    },
    socialButtonImage:{
        height:25,
        width:25,
        margin:10
    },
    



})