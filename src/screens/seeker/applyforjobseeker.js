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

  import Icon1 from 'react-native-vector-icons/Entypo';
  import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
  import Icon3 from 'react-native-vector-icons/FontAwesome';
  import Icon4 from 'react-native-vector-icons/FontAwesome5';
  import Icon5 from 'react-native-vector-icons/AntDesign';
  import Icon6 from 'react-native-vector-icons/Ionicons';
  import Icon7 from 'react-native-vector-icons/EvilIcons';
  import Icon8 from 'react-native-vector-icons/Fontisto';

  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        user: {   name: "Kashyap Karkar", number: "+918758787898" , email:"kashyapdprodigy@gmail.com" , location:"Surat,Gujarat"},
        jobtitle:'',
        experience:'',
        leavedate:'',
        totalexpereince:'',
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
        <KeyboardAwareScrollView style={styles.maincontainer} extraHeight={100} enableOnAndroid>
        <StatusBar
           backgroundColor = "#4F45F0"
           barStyle = "light-content"
         />
        <ImageBackground source={require('../../assets/image/splash_bg.png')} style={styles.backgroundImage} resizeMode='stretch' >
            <Text style={{marginTop:30,marginLeft:50,fontSize:28,color:'#000'}}>Apply Now</Text>

            <View style={{borderRadius:15,borderWidth:0.7,marginHorizontal:50,marginTop:15,paddingBottom:10,backgroundColor:'#fff'}}>

            <View style={styles.iconInputContainer}>
            <Icon4 name="user" color={'#4F45F08a'} size={26}  style={styles.iconInputImage}/>
            <TextInput style = {styles.iconInputField}
                underlineColorAndroid = "transparent"
                placeholder = "Email Address"
                placeholderTextColor = "#000"
                autoCapitalize = "none"
                value={this.state.user.name}
                editable={false}
                onChangeText={(email) => this.setState({email})}  />
            </View>

            <View style={styles.iconInputContainer}>
            <Icon6 name="call" color={'#4F45F08a'} size={26}  style={styles.iconInputImage}/>
            <TextInput style = {styles.iconInputField}
                underlineColorAndroid = "transparent"
                placeholder = "Email Address"
                placeholderTextColor = "#000"
                autoCapitalize = "none"
                value={this.state.user.number}
                editable={false}
                onChangeText={(email) => this.setState({email})}  />
            </View>

            <View style={styles.iconInputContainer}>
            <Icon8 name="email" color={'#4F45F08a'} size={24}  style={styles.iconInputImage}/>
            <TextInput style = {styles.iconInputField}
                underlineColorAndroid = "transparent"
                placeholder = "Email Address"
                placeholderTextColor = "#000"
                autoCapitalize = "none"
                value={this.state.user.email}
                editable={false}
                onChangeText={(email) => this.setState({email})}  />
            </View>

            <View style={styles.iconInputContainer}>
            <Icon2 name="home-map-marker" color={'#4F45F08a'} size={28}  style={styles.iconInputImage}/>
            <TextInput style = {styles.iconInputField}
                underlineColorAndroid = "transparent"
                placeholder = "Email Address"
                placeholderTextColor = "#000"
                autoCapitalize = "none"
                value={this.state.user.location}
                editable={false}
                onChangeText={(email) => this.setState({email})}  />
            </View>

            </View>

            <Text style={{marginTop:70,marginLeft:50,fontSize:28,color:'#000'}}>Previous Job Info</Text>

            <View style={{borderRadius:15,borderWidth:0.7,marginHorizontal:50,marginTop:15,paddingBottom:10,backgroundColor:'#fff'}}>

            <View style={styles.iconInputContainer}>
            <Icon2 name="briefcase" color={'#4F45F08a'} size={26}  style={styles.iconInputImage}/>
            <TextInput style = {styles.iconInputField}
                underlineColorAndroid = "transparent"
                placeholder = "Last Job title"
                placeholderTextColor = "#000"
                autoCapitalize = "none"
                value={this.state.jobtitle}
                onChangeText={(jobtitle) => this.setState({jobtitle})}  />
            </View>

            <View style={styles.iconInputContainer}>
            <Icon2 name="file-certificate" color={'#4F45F08a'} size={26}  style={styles.iconInputImage}/>
            <TextInput style = {styles.iconInputField}
                underlineColorAndroid = "transparent"
                placeholder = "Last Experience"
                placeholderTextColor = "#000"
                autoCapitalize = "none"
                value={this.state.experience}
                onChangeText={(experience) => this.setState({experience})}  />
            </View>

            <View style={styles.iconInputContainer}>
            <Icon2 name="calendar" color={'#4F45F08a'} size={26}  style={styles.iconInputImage}/>
            <TextInput style = {styles.iconInputField}
                underlineColorAndroid = "transparent"
                placeholder = "Last Job Leave Date"
                placeholderTextColor = "#000"
                autoCapitalize = "none"
                value={this.state.leavedate}
                onChangeText={(leavedate) => this.setState({leavedate})}  />
            </View>

            <View style={styles.iconInputContainer}>
            <Icon4 name="user-graduate" color={'#4F45F08a'} size={25}  style={styles.iconInputImage}/>
            <TextInput style = {styles.iconInputField}
                underlineColorAndroid = "transparent"
                placeholder = "Total Experience"
                placeholderTextColor = "#000"
                autoCapitalize = "none"
                value={this.state.totalexpereince}
                onChangeText={(totalexpereince) => this.setState({totalexpereince})}  />
            </View>

            </View>

            <TouchableOpacity onPress={this.onSubmitClick}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Submit</Text>
            </TouchableOpacity>
        
        </ImageBackground> 
        </KeyboardAwareScrollView>
      );
    }
}

const styles = StyleSheet.create({
    maincontainer:{
        flex:1 ,
        backgroundColor:"#fff" 
    },
    subcontainer1:{
        height:Dimensions.get('window').height,
    },
    subcontainer2:{
        height:Dimensions.get('window').height/100*0,
        alignItems:'center',
        marginTop:10
    },

    backgroundImage: {
        flex: 1,
        paddingBottom:120
    },
    pageheader:{
        fontSize:28,
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
    pagesubheader:{
        marginTop:8,
        fontSize:18
    },
    iconInputContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        height:45,
        margin:10,
    },
    iconInputField:{
        marginLeft:5,
        flex:1,
        color:"#000",
        borderBottomWidth:1
    },
    iconInputImage:{
        height:25,
        width:25,
        margin:10
    },
    loginButtonContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        marginHorizontal:'10%',
        marginTop:60,
        height:55,
        width:Dimensions.get('window').width-180,
        borderRadius:30,
        justifyContent:'center',
        alignSelf:'center',
        borderWidth:0.7,
        marginBottom:50
    },
    loginButtonText:{
        color:'#4F45F0',
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