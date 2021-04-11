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
    StatusBar
  } from 'react-native';


export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          firstname:'',
          lastname:'',
          email:'',
          mobile1:'',
          password:'',
          togglePasswordVisibility:true,
          loading:false,
      };


      this.onLoginClick = this.onLoginClick.bind(this);
      this.onFacebookClick = this.onFacebookClick.bind(this);
      this.onGoogleClick = this.onGoogleClick.bind(this);
      this.onRegisterClick = this.onRegisterClick.bind(this);
    }

    componentDidMount(){}

    onLoginClick(){
        this.props.navigation.navigate('LoginSeller');
    }

    onFacebookClick(){
        this.props.navigation.replace('MainTabSeller');
    }

    onGoogleClick(){
        this.props.navigation.replace('MainTabSeller');
    }

    onRegisterClick(){
        this.props.navigation.replace('MainTabSeller');
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

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <View style={styles.socialButtonContainer}>
                <Image source={require('../../assets/icon/user.png')} style={styles.socialButtonImage} resizeMode='contain'></Image>
                <TextInput style = {styles.socialButtonText}
                underlineColorAndroid = "transparent"
                placeholder = "First Name"
                placeholderTextColor = "#000"
                autoCapitalize = "none"
                onChangeText={(firstname) => this.setState({firstname})}  />
                </View>

                <View style={styles.socialButtonContainer}>
                <Image source={require('../../assets/icon/user.png')} style={styles.socialButtonImage} resizeMode='contain'></Image>
                <TextInput style = {styles.socialButtonText}
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
                underlineColorAndroid = "transparent"
                placeholder = "Mobile Number"
                placeholderTextColor = "#000"
                autoCapitalize = "none"
                keyboardType="number-pad"
                onChangeText={(mobile1) => this.setState({mobile1})}  />
            </View>

            <View style={styles.iconInputContainer}>
            <Image source={require('../../assets/icon/padlock.png')} style={styles.iconInputImage} resizeMode='contain'></Image>
            <TextInput style = {styles.iconInputField}
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

            <Text style={{fontSize:18,color:'#000',alignSelf:'center',marginTop:20}}>Or Continue With</Text>

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

            <Text style={{marginTop:15,fontSize:17,color:'#000',alignSelf:'center'}}>by continuing you confirm that you agree</Text>
            <Text style={{marginTop:2,fontSize:17,color:'#000',alignSelf:'center'}}>with our Terms and Condition</Text>
            <View style={{flexDirection:'row',marginTop:25}}>
            <Text style={{fontSize:17,color:'#000',alignSelf:'center'}}>Already have an account?</Text>
            <TouchableOpacity onPress={this.onLoginClick}>
                <Text style={{fontSize:17,color:'#4F45F0',alignSelf:'center'}}>  LOGIN</Text>
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
        height:Dimensions.get('window').height/100*15,
        justifyContent:'center',
        marginLeft:'15%'
    },
    subcontainer2:{
        height:Dimensions.get('window').height/100*70,
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