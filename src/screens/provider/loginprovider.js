import React from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions, 
    TouchableOpacity,
    StatusBar,
    Keyboard
  } from 'react-native';

import AppLoader from '../component/loader';
import DropdownAlert from 'react-native-dropdownalert';
import AuthServices from '../../api/authservices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetworkCheck from '../../utils/networkcheck';

export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          mobile:'',
          password:'',
          togglePasswordVisibility:true,
          appLoading:false,
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

    async onLoginClick(){

        Keyboard.dismiss();

        const isConnected = await NetworkCheck.isNetworkAvailable();

        if (isConnected) {  

            if(this.state.mobile.trim() == ''){
                this.setState({mobile:''},()=>{this.mobileInputRef.focus(); })
                this.dropDownAlertRef.alertWithType('error',"Mobile Number cannot be blank");
              return
            }
            if(this.state.mobile.length < 10 ){
                this.mobileInputRef.focus();
                this.dropDownAlertRef.alertWithType('error',"Number should contain atleast 10 digits");
              return
            }
            if(this.state.password == ''){
                this.passwordInputRef.focus();
                this.dropDownAlertRef.alertWithType('error',"Password cannot be blank");
              return
            }
            if(this.state.password.length < 6 ){
                this.passwordInputRef.focus();
                this.dropDownAlertRef.alertWithType('error',"Password should contain atleast 6 letters");
              return
            }

            let myFormData = new FormData();
            myFormData.append("mobile_no",this.state.mobile)
            myFormData.append("password", this.state.password)
            myFormData.append("type",1)
            myFormData.append("device_type",'test123')
            myFormData.append("device_token",'test123')

            try {
                this.setState({appLoading: true})
                const { data } = await AuthServices.LoginUser(myFormData)
                console.log(data);

                if( data.status == 0 ){
                    this.setState({appLoading: false})
                    this.dropDownAlertRef.alertWithType('error', 'Invalid Number or Password', "Try Again");
                }

                if( data.status == 1){
                    this.setState({appLoading: false})
                    await AsyncStorage.setItem('User',JSON.stringify(data.userdata[0]));
                    this.dropDownAlertRef.alertWithType('success', 'Login', "Login Success");
                    this.props.navigation.popToTop();
                    this.props.navigation.replace('MainTabProvider');
                }
                this.setState({appLoading: false})
            }
            catch(error){
                console.log(error)
                this.setState({appLoading: false})
                console.log(error.data)
                this.dropDownAlertRef.alertWithType('error', 'Failed', "Authentication Failed");
            }
        }
        else{
            this.dropDownAlertRef.alertWithType('error', 'No Internet Connection', "please check your device connection");
        }
    }

    onFacebookClick(){
        // this.props.navigation.replace('MainTabProvider');
    }

    onGoogleClick(){
        // this.props.navigation.replace('MainTabProvider');
    }

    onRegisterClick(){
        this.props.navigation.navigate('RegisterProvider');
    }

    render () {
       return (
        <View style={styles.maincontainer}>
        <StatusBar
           backgroundColor = "#4F45F0"
           barStyle = "light-content"
         />
        <ImageBackground source={require('../../assets/image/splash_bg.png')} style={styles.backgroundImage} resizeMode='stretch' >
        <View style={styles.subcontainer1}>
            <Text style={styles.pageheader}>Login</Text>
        </View>
        <View style={styles.subcontainer2}>

            <View style={styles.iconInputContainer}>
            <Image source={require('../../assets/icon/mobile-phone.png')} style={styles.iconInputImage} resizeMode='contain'></Image>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.mobileInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.passwordInputRef.focus(); }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Mobile Number"
                placeholderTextColor = "#000"
                autoCapitalize = "none"
                keyboardType="phone-pad"
                onChangeText={(mobile) => this.setState({mobile})}  />
            </View>


            <View style={styles.iconInputContainer}>
            <Image source={require('../../assets/icon/padlock.png')} style={styles.iconInputImage} resizeMode='contain'></Image>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.passwordInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { Keyboard.dismiss() }}
                blurOnSubmit={false}            
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#000"
                autoCapitalize = "none"
                secureTextEntry={this.state.togglePasswordVisibility}
                onChangeText={(password) => this.setState({password})}  />
            </View>

            <TouchableOpacity  onPress={this.onForgotPasswordClick} style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.onLoginClick}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <Text style={{fontSize:18,color:'#000',alignSelf:'center',marginTop:30}}>Or Continue With</Text>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity onPress={this.onFacebookClick}style={styles.socialButtonContainer}>
                <Image source={require('../../assets/icon/facebook.png')} style={styles.socialButtonImage} resizeMode='contain'></Image>
                <Text style={styles.socialButtonText}>Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onGoogleClick} style={styles.socialButtonContainer}>
                <Image source={require('../../assets/icon/google-glass-logo.png')} style={styles.socialButtonImage} resizeMode='contain'></Image>
                <Text style={styles.socialButtonText}>Google</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginTop:35}}>
            <Text style={{fontSize:18,color:'#000',alignSelf:'center'}}>Don't have an account?</Text>
            <TouchableOpacity onPress={this.onRegisterClick}>
                <Text style={{fontSize:18,color:'#4F45F0',alignSelf:'center'}}>  REGISTER</Text>
            </TouchableOpacity>
            </View>

        </View>
        </ImageBackground> 
        <DropdownAlert inactiveStatusBarStyle="light-content" inactiveStatusBarBackgroundColor="#4F45F0" ref={ref => this.dropDownAlertRef = ref} />
        <AppLoader isAppLoading={this.state.appLoading}/>
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
        height:Dimensions.get('window').height/100*85,
        alignItems:'center',
        marginTop:10
    },

    backgroundImage: {
        flex: 1,
    },
    pageheader:{
        fontSize:24,
        color:'#4F45F0'
    },
    forgotPasswordText:{
        fontSize:18,
        color:'#4F45F0',
    },
    forgotPasswordContainer:{
        marginTop:15,
        marginRight:'10%',
        alignSelf:'flex-end'
    },
    pagesubheader:{
        marginTop:8,
        fontSize:16
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
        fontSize:21
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