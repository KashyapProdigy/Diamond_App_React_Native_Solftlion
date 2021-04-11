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
  import Icon9 from 'react-native-vector-icons/Feather';
  import Icon10 from 'react-native-vector-icons/MaterialIcons';

import { ScrollView } from 'react-native-gesture-handler';

export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          loading:false,
      };

      this.onEditProfileClick = this.onEditProfileClick.bind(this);
      this.onShippingAddressClick = this.onShippingAddressClick.bind(this);
      this.onWishlistClick = this.onWishlistClick.bind(this);
      this.onOrderHistoryClick = this.onOrderHistoryClick.bind(this);
      this.onTrackOrderClick = this.onTrackOrderClick.bind(this);
      this.onPaymentOptionClick = this.onPaymentOptionClick.bind(this);
      this.onNotificationClick = this.onNotificationClick.bind(this);
      this.onLogoutCLick = this.onLogoutCLick.bind(this);

    }

    componentDidMount(){}

    onEditProfileClick(){
        this.props.navigation.navigate('Profile');
    }

    onShippingAddressClick(){
        // this.props.navigation.navigate('AboutUs');
    }

    onWishlistClick(){
        this.props.navigation.navigate('FavouriteSeller');
    }

    onOrderHistoryClick(){
        this.props.navigation.navigate('My Orders');
    }

    onTrackOrderClick(){
        // this.props.navigation.navigate('TermsAndCondition');
    }

    onPaymentOptionClick(){
        // this.props.navigation.navigate('RateApp');
    }

    onNotificationClick(){
        this.props.navigation.navigate('NotificationSeller');
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
        <View style={styles.subcontainer1}>
            <Text style={{color:'black',fontSize:22,textAlignVertical:'center'}}>Kashyap Karkar</Text>
            <Text style={{color:'black',fontSize:18,textAlignVertical:'center',marginTop:15}}>kashyapdprodigy@gmail.com</Text>
        </View>
        
        <ScrollView style={styles.subcontainer2} contentContainerStyle={{alignItems:"center"}}>

        <TouchableOpacity style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:Dimensions.get('window').width-80,marginTop:35}} onPress={this.onEditProfileClick}>
            <View style={{alignItems:'center',flexDirection:"row"}}>
            <Icon9  style={{backgroundColor:"#4F45F0",padding:8,borderRadius:7}} name="edit" color={'#fff'} size={22} />
            <Text style={{color:'#000',fontSize:18,paddingHorizontal:20}}>Edit Profile</Text>
            </View>
            <View>
            <Icon9 name="chevron-right" color={'#0000008a'} size={26} />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:Dimensions.get('window').width-80,marginTop:35}} onPress={this.onShippingAddressClick}>
            <View style={{alignItems:'center',flexDirection:"row"}}>
            <Icon7  style={{backgroundColor:"#4F45F0",padding:8,borderRadius:7}} name="location" color={'#fff'} size={26} />
            <Text style={{color:'#000',fontSize:18,paddingHorizontal:20}}>Shipping Address</Text>
            </View>
            <View>
            <Icon9 name="chevron-right" color={'#0000008a'} size={26} />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:Dimensions.get('window').width-80,marginTop:35}} onPress={this.onWishlistClick}>
            <View style={{alignItems:'center',flexDirection:"row"}}>
            <Icon9  style={{backgroundColor:"#4F45F0",padding:8,borderRadius:7}} name="star" color={'#fff'} size={22} />
            <Text style={{color:'#000',fontSize:18,paddingHorizontal:20}}>Wishlist</Text>
            </View>
            <View>
            <Icon9 name="chevron-right" color={'#0000008a'} size={26} />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:Dimensions.get('window').width-80,marginTop:35}} onPress={this.onOrderHistoryClick}>
            <View style={{alignItems:'center',flexDirection:"row"}}>
            <Icon9  style={{backgroundColor:"#4F45F0",padding:8,borderRadius:7}} name="rotate-ccw" color={'#fff'} size={22} />
            <Text style={{color:'#000',fontSize:18,paddingHorizontal:20}}>Order History</Text>
            </View>
            <View>
            <Icon9 name="chevron-right" color={'#0000008a'} size={26} />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:Dimensions.get('window').width-80,marginTop:35}} onPress={this.onTrackOrderClick}>
            <View style={{alignItems:'center',flexDirection:"row"}}>
            <Icon9  style={{backgroundColor:"#4F45F0",padding:8,borderRadius:7}} name="box" color={'#fff'} size={22} />
            <Text style={{color:'#000',fontSize:18,paddingHorizontal:20}}>Track Order</Text>
            </View>
            <View>
            <Icon9 name="chevron-right" color={'#0000008a'} size={26} />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:Dimensions.get('window').width-80,marginTop:35}} onPress={this.onPaymentOptionClick}>
            <View style={{alignItems:'center',flexDirection:"row"}}>
            <Icon9  style={{backgroundColor:"#4F45F0",padding:8,borderRadius:7}} name="credit-card" color={'#fff'} size={22} />
            <Text style={{color:'#000',fontSize:18,paddingHorizontal:20}}>Payment Option</Text>
            </View>
            <View>
            <Icon9 name="chevron-right" color={'#0000008a'} size={26} />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:Dimensions.get('window').width-80,marginTop:35}} onPress={this.onNotificationClick}>
            <View style={{alignItems:'center',flexDirection:"row"}}>
            <Icon9  style={{backgroundColor:"#4F45F0",padding:8,borderRadius:7}} name="bell" color={'#fff'} size={22} />
            <Text style={{color:'#000',fontSize:18,paddingHorizontal:20}}>Notification</Text>
            </View>
            <View>
            <Icon9 name="chevron-right" color={'#0000008a'} size={26} />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:Dimensions.get('window').width-80,marginTop:35}} onPress={this.onLogoutCLick}>
            <View style={{alignItems:'center',flexDirection:"row"}}>
            <Icon10  style={{backgroundColor:"#4F45F0",padding:8,borderRadius:7}} name="logout" color={'#fff'} size={22} />
            <Text style={{color:'#000',fontSize:18,paddingHorizontal:20}}>Logout</Text>
            </View>
            <View>
            </View>
        </TouchableOpacity>


        </ScrollView>
        </ImageBackground> 
        </View>
      );
    }
}

const styles = StyleSheet.create({
    maincontainer:{
        height:Dimensions.get('window').height,
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
        height:Dimensions.get('window').height/100*15,
        justifyContent:'center',
        alignItems:"center",
        marginHorizontal:20
    },
    subcontainer2:{
        height:Dimensions.get('window').height/100*85,
        marginHorizontal:20,
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