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
import NetworkCheck from '../../utils/networkcheck';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          firstname:'',
          lastname:'',
          email:'',
          mobile:'',
          password:'',
          togglePasswordVisibility:true,
          appLoading:false,
      };


      this.onLoginClick = this.onLoginClick.bind(this);
      this.onFacebookClick = this.onFacebookClick.bind(this);
      this.onGoogleClick = this.onGoogleClick.bind(this);
      this.onRegisterClick = this.onRegisterClick.bind(this);
    }

    componentDidMount(){}

    onLoginClick(){
        this.props.navigation.navigate('LoginProvider');
    }

    onFacebookClick(){
        // this.props.navigation.replace('MainTabProvider');
    }

    onGoogleClick(){
        // this.props.navigation.replace('MainTabProvider');
    }

    async onRegisterClick(){

        Keyboard.dismiss();

        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {  

        if(this.state.firstname.trim() == ''){
            this.setState({firstname:''},()=>{this.firstNameInputRef.focus(); })
            this.dropDownAlertRef.alertWithType('error',"First Name cannot be blank");
          return
        }
        if(this.state.lastname.trim() == ''){
            this.setState({lastname:''},()=>{this.lastNameInputRef.focus(); })
            this.dropDownAlertRef.alertWithType('error',"Last Name cannot be blank");
          return
        }
        if(this.state.email.trim() == ''){
            this.setState({email:''},()=>{this.emailInputRef.focus(); })
            this.dropDownAlertRef.alertWithType('error',"Email cannot be blank");
          return
        }
        if(this.state.email.length > 0){
            let expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (expression.test(this.state.email)) {} 
            else {
                this.setState({email:''},()=>{this.emailInputRef.focus(); })
                this.dropDownAlertRef.alertWithType('error',"Email format is invalid");
                return  
            }
        }
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
            this.passwordInputRef.focus()
            this.dropDownAlertRef.alertWithType('error',"Password cannot be blank");
          return
        }
        if(this.state.password.length < 6 ){
            this.passwordInputRef.focus();
            this.dropDownAlertRef.alertWithType('error',"Password should contain atleast 6 letters");
          return
        }

        let myFormData = new FormData();
        myFormData.append("firstname",this.state.firstname)
        myFormData.append("lastname", this.state.lastname)
        myFormData.append("email", this.state.email)
        myFormData.append("mobile_no", this.state.mobile)
        myFormData.append("password", this.state.password)
        myFormData.append("type",1)

        try {
            this.setState({appLoading: true})
            const { data } = await AuthServices.RegisterUser(myFormData)
            console.log(data);

            if( data.status == 0 ){
                this.setState({appLoading: false})
                if(data.existing == 1){
                    this.mobileInputRef.focus();
                    this.dropDownAlertRef.alertWithType('error', 'Number Already Registered', "try diffrent number");
                }else{
                    this.dropDownAlertRef.alertWithType('error', 'Something went wrong ...', "Try Again");
                }
            }

            if( data.status == 1){
                this.setState({appLoading: false})
                await AsyncStorage.setItem('User',JSON.stringify(data.userdata[0]));
                this.dropDownAlertRef.alertWithType('success',"Registered Successfully !");
                this.props.navigation.popToTop();
                this.props.navigation.replace('OtpProvider');
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

    render () {
      return (
        <View style={styles.maincontainer}>
            
        <StatusBar
           backgroundColor = "#4F45F0"
           barStyle = "light-content"
         />
        <ImageBackground source={require('../../assets/image/splash_bg.png')} style={styles.backgroundImage} resizeMode='stretch' >
        <View style={styles.subcontainer1}>
            <Text style={styles.pageheader}>Register</Text>
        </View>

        <View style={styles.subcontainer2}>

        <KeyboardAwareScrollView style={{backgroundColor:"transparent"}} extraHeight={100} enableOnAndroid enableAutomaticScroll>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <View style={styles.socialButtonContainer}>
                <Image source={require('../../assets/icon/user.png')} style={styles.socialButtonImage} resizeMode='contain'></Image>
                <TextInput style = {styles.socialButtonText}
                ref={(input) => { this.firstNameInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.lastNameInputRef.focus(); }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "First Name"
                placeholderTextColor = "#000"
                autoCapitalize = "none"
                onChangeText={(firstname) => this.setState({firstname})}  />
                </View>

                <View style={styles.socialButtonContainer}>
                <Image source={require('../../assets/icon/user.png')} style={styles.socialButtonImage} resizeMode='contain'></Image>
                <TextInput style = {styles.socialButtonText}
                ref={(input) => { this.lastNameInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.emailInputRef.focus(); }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Last Name"
                placeholderTextColor = "#000"
                autoCapitalize = "none"
                onChangeText={(lastname) => this.setState({lastname})}  />
                </View>
            </View>

            <View style={styles.iconInputContainer}>
            <Image source={require('../../assets/icon/gmail.png')} style={styles.iconInputImage} resizeMode='contain'></Image>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.emailInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.mobileInputRef.focus(); }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Email Address"
                placeholderTextColor = "#000"
                autoCapitalize = "none"
                keyboardType="email-address"
                onChangeText={(email) => this.setState({email})}  />
            </View>

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
                keyboardType="number-pad"
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

            <TouchableOpacity onPress={this.onRegisterClick}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Register</Text>
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

            <Text style={{marginTop:15,fontSize:16,color:'#000',alignSelf:'center'}}>by continuing you confirm that you agree</Text>
            <Text style={{marginTop:2,fontSize:16,color:'#000',alignSelf:'center'}}>with our Terms and Condition</Text>

            <View style={{flexDirection:'row',alignSelf:"center",marginTop:25,marginBottom:20}}>
            <Text style={{fontSize:18,color:'#000',alignSelf:'center'}}>Already have an account?</Text>
            <TouchableOpacity onPress={this.onLoginClick}>
                <Text style={{fontSize:18,color:'#4F45F0',alignSelf:'center'}}>  LOGIN</Text>
            </TouchableOpacity>
            </View>

            </KeyboardAwareScrollView>

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
        color:"#4F45F0"
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
        width:Dimensions.get('window').width/2-50,
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