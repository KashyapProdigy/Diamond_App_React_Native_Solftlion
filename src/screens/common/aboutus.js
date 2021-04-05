import React from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
    ScrollView, 
    TouchableOpacity
  } from 'react-native';


export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          email:'',
          password:'',
          togglePasswordVisibility:true,
          loading:false,
      };

      this.onForgotPasswordClick = this.onForgotPasswordClick.bind(this);
      this.onLoginClick = this.onLoginClick.bind(this);
      this.onFacebookClick = this.onFacebookClick.bind(this);
      this.onGoogleClick = this.onGoogleClick.bind(this);
      this.onRegisterClick = this.onRegisterClick.bind(this);
    }

    componentDidMount(){}

    onForgotPasswordClick(){
        this.props.navigation.navigate('ForgotPassword');
    }

    onLoginClick(){
        this.props.navigation.replace('MainTabSeeker');
    }

    onFacebookClick(){
        this.props.navigation.replace('MainTabSeeker');
    }

    onGoogleClick(){
        this.props.navigation.replace('MainTabSeeker');
    }

    onRegisterClick(){
        this.props.navigation.navigate('RegisterSeeker');
    }

    render () {
      return (
        <View style={styles.maincontainer}>
        <ImageBackground source={require('../../assets/image/splash_bg.png')} style={styles.backgroundImage} resizeMode='stretch' >
        <View style={styles.subcontainer1}>
            <Text style={styles.pageheader}>About Us</Text>
        </View>
        <View style={styles.subcontainer2}>
        <Image source={require('../../assets/icon/main.png')} style={{height:350,width:350}} resizeMode='contain'></Image>
        </View>
        <ScrollView style={styles.subcontainer3}
        contentContainerStyle={{padding:20}}>
            <Text style={[styles.pagesubheader,{alignSelf:"center",textAlign:"center"}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

        </ScrollView>
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
        height:Dimensions.get('window').height/100*15,
        justifyContent:'center',
        marginLeft:'15%'
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
        backgroundColor:'#4F45F01a',
        marginHorizontal:'10%',
        marginTop:15,
        height:55,
        width:Dimensions.get('window').width-70,
        borderRadius:7,
    },
    iconInputField:{
        marginLeft:5,
        flex:1,
        color:"#000"
    },
    iconInputImage:{
        height:25,
        width:25,
        margin:10
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