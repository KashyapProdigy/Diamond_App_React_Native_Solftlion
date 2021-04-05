import React from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions, 
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

      this.onSubmitClick = this.onSubmitClick.bind(this);
    }

    componentDidMount(){}

    onSubmitClick(){
        this.props.navigation.goBack();
    }

    render () {
      return (
        <View style={styles.maincontainer}>
        <ImageBackground source={require('../../assets/image/splash_bg.png')} style={styles.backgroundImage} resizeMode='stretch' >
        <View style={styles.subcontainer1}>
            <Text style={styles.pageheader}>Forgot Password ?</Text>
            <Text style={styles.pagesubheader}>Don't worry we will help you recover it</Text>
        </View>
        <View style={styles.subcontainer2}>

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

            <TouchableOpacity onPress={this.onSubmitClick}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Submit</Text>
            </TouchableOpacity>

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
        height:'25%',
        justifyContent:'center',
        marginLeft:'15%'
    },
    subcontainer2:{
        height:'60%',
        alignItems:'center',
    },

    backgroundImage: {
        flex: 1,
    },
    pageheader:{
        fontSize:28,
        color:'#4F45F0'
    },
    pagesubheader:{
        marginTop:10,
        fontSize:18,
        color:'#000'
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
        marginTop:40,
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