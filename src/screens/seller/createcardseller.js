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
    KeyboardAvoidingView ,
    StatusBar,
    ScrollView
  } from 'react-native';

  import Icon1 from 'react-native-vector-icons/Entypo';
  import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
  import Icon3 from 'react-native-vector-icons/FontAwesome';
  import Icon4 from 'react-native-vector-icons/FontAwesome5';
  import Icon5 from 'react-native-vector-icons/AntDesign';
  import Icon6 from 'react-native-vector-icons/Ionicons';
  import Icon7 from 'react-native-vector-icons/EvilIcons';
  import Icon8 from 'react-native-vector-icons/Fontisto';

  import DropdownAlert from 'react-native-dropdownalert';
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
  import {Picker} from '@react-native-picker/picker';
  import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        name:'',
        address:'',
        city:'',
        state:'',
        postal:'',
        phone:'',
        loading:false,
      };

      this.onBackClick = this.onBackClick.bind(this);
      this.onNotificationClick = this.onNotificationClick.bind(this);
      this.onAddCardClick = this.onAddCardClick.bind(this);
    }

    componentDidMount(){}

    onBackClick(){
        this.props.navigation.goBack();
    }

    onNotificationClick(){
        this.props.navigation.navigate('NotificationSeller');
    }

    onAddCardClick(){
        this.dropDownAlertRef.alertWithType('success', 'Card Added !', "",null,1500)

        setTimeout(() => {
            this.props.navigation.goBack();
            }, 2000);
    }

    searchViewHandler = function(options) {
        if(this.state.toggleSeachBarVisible)
        {
            return {
                height:Dimensions.get('window').height/100*15,
              }
        }else{
            return {
                height:Dimensions.get('window').height/100*7,
              }
        }
      }

      productViewHandler = function(options) {
        if(this.state.toggleSeachBarVisible)
        {
            return {
                height:Dimensions.get('window').height/100*85,
              }
        }else{
            return {
                height:Dimensions.get('window').height/100*93,
              }
        }
      }

      _onChange(){

      }
 
    render () {
      return (
        <View style={styles.maincontainer}>
        <StatusBar
           backgroundColor = "#4F45F0"
           barStyle = "light-content"
         />
        <DropdownAlert inactiveStatusBarStyle="light-content" inactiveStatusBarBackgroundColor="#4F45F0" ref={ref => this.dropDownAlertRef = ref} />
        <ImageBackground source={require('../../assets/image/splash_bg.png')} style={styles.backgroundImage} resizeMode='stretch' >
        
        <View style={this.searchViewHandler()} >
        <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row',marginHorizontal:10,marginTop:20}}>
            <View>        
                <TouchableOpacity  onPress={this.onBackClick} style={{marginHorizontal:10}}>
                <Icon5 name="arrowleft" color={'#0000008a'} size={26} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity  onPress={this.onNotificationClick} style={{marginHorizontal:10}}>
                <Icon6 name="notifications-outline" color={'#0000008a'} size={26} />
                </TouchableOpacity>
            </View>
        </View>
        </View>
        
        <KeyboardAwareScrollView 
            style={this.productViewHandler()}
            extraHeight={200} enableOnAndroid>

        <View style={{marginHorizontal:20,marginTop:10,flexDirection:'row',}}>
                <Text style={{color:'#000',fontSize:20,fontWeight:"bold"}}>Add Card</Text>
        </View>

        <ScrollView 
        style={{marginTop:50}}
        contentContainerStyle={{paddingRight:20}}
        horizontal
        >   
        <CreditCardInput onChange={this._onChange} />

        </ScrollView>

        <TouchableOpacity onPress={this.onAddCardClick}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Add Card</Text>
            </TouchableOpacity>

        </KeyboardAwareScrollView>

        </ImageBackground> 
        </View>
      );
    }
}

const styles = StyleSheet.create({
    maincontainer:{
        height:Dimensions.get('window').height,        
        backgroundColor:"#fff" ,
    },
    item: {
        borderRadius:15,
        paddingHorizontal:20,
        paddingVertical:10,
        marginHorizontal:10,
      },
      title: {
        fontSize: 15,
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
        fontSize:14
    },
    iconInputContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'transparent',
        height:45,
        borderBottomWidth:0.8,
        width:Dimensions.get('window').width-40,
    },
    iconInputField:{
        flex:1,
        color:"#000",
    },
    iconInputAddressContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'transparent',
        height:90,
        borderBottomWidth:0.8,
        width:Dimensions.get('window').width-40,
    },
    iconInputAddressField:{
        flex:1,
        color:"#000",
        minHeight:50,
    },
    iconInputImage:{
        marginLeft:10
    },
    loginButtonContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#4F45F0',
        marginHorizontal:20,
        marginVertical:80,
        height:55,
        width:Dimensions.get('window').width-60,
        borderRadius:7,
        justifyContent:'center',
        alignSelf:'center'
    },
    loginButtonText:{
        color:'white',
        fontSize:18
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