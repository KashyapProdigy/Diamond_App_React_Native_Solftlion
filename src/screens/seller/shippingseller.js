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
    Alert
  } from 'react-native';

  import DropdownAlert from 'react-native-dropdownalert';

  import Icon1 from 'react-native-vector-icons/Entypo';
  import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
  import Icon3 from 'react-native-vector-icons/FontAwesome';
  import Icon4 from 'react-native-vector-icons/FontAwesome5';
  import Icon5 from 'react-native-vector-icons/AntDesign';
  import Icon6 from 'react-native-vector-icons/Ionicons';
  import Icon7 from 'react-native-vector-icons/EvilIcons';
  import Icon8 from 'react-native-vector-icons/Fontisto';
  import { ScrollView } from 'react-native-gesture-handler';

export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        renderAddress:[
            {   
                name:'Kashyap Karkar',
                phone:'+1823362123',
                addressLane:"bdabsdbasdbabbdjasbca , adas, adasbjdbjab jsd,asd asbhdbhasbjbd ,, adasbjdbjab jsd,asd asbhdbhasbjbd ,, adasbjdbjab jsd,asd asbhdbhasbjbd ,, adasbjdbjab jsd,asd asbhdbhasbjbd",
                city:'Surat',
                state:'Gujarat',
                postal:'392003',
                selected:true,
                id:1
            },
            {   
                name:'Kashyap Karkar',
                phone:'+991888823362123',
                addressLane:"bdabsdbasdbabb, adasbjdbjab jsd,asd asbhdbhasbjbd ,, adasbjdbjab jsd,asd asbhdbhasbjbd ",
                city:'Navsari',
                state:'Gujarat',
                postal:'392003',
                selected:false,
                id:2
            },
            {   
                name:'Kashyap Karkar',
                phone:'1823362123',
                addressLane:"bdabsdbasdbabbd",
                city:'Valsad',
                state:'Gujarat',
                postal:'392003',
                selected:false,
                id:3
            },
            {   
                name:'Kashyap Karkar',
                phone:'+991823362123',
                addressLane:"bdabsdbasdbabbdjasbca , adasbjdbjab jsd,asd asbhdbhasbjbd ,",
                city:'Mumbai',
                state:'Maharastra',
                postal:'392003',
                selected:false,
                id:4
            },
            {   
                name:'Kashyap Karkar',
                phone:'+991823362123',
                addressLane:"bdab, adasbjdbjab jsd,asd asbhdbhasbjbd adasbjdbjab jsd,asd asbhdbhasbjbd adasbjdbjab jsd,asd asbhdbhasbjbdadasbjdbjab jsd,asd asbhdbhasbjbd adasbjdbjab jsd,asd asbhdbhasbjbd  adasbjdbjab jsd,asd asbhdbhasbjbd  adasbjdbjab jsd,asd asbhdbhasbjbd adasbjdbjab jsd,asd asbhdbhasbjbd  adasbjdbjab jsdasd asbhdbhasbjbd",
                city:'Surat',
                state:'Gujarat',
                postal:'392003',
                selected:false,
                id:5
            },
            {   
                name:'Kashyap Karkar',
                phone:'+991823362123',
                addressLane:"bdabsdbasdbabbdjasbca, adasbjdbjab jsd,asd asbhdbhasbjbd ,, adasbjdbjab jsd,asd asbhdbhasbjbd ",
                city:'Surat',
                state:'Gujarat',
                postal:'392003',
                selected:false,
                id:6
            },
        ],
          loading:false,
      };

      this.onBackClick = this.onBackClick.bind(this);
      this.onNotificationClick = this.onNotificationClick.bind(this);
      this.onChangeAddressClick = this.onChangeAddressClick.bind(this);
      this.onAddressDeleteClick = this.onAddressDeleteClick.bind(this);
      this.onContinueToPaymentClick = this.onContinueToPaymentClick.bind(this);
      this.onAddAddressClick = this.onAddAddressClick.bind(this);
      this.deleteAddress = this.deleteAddress.bind(this);
    }

    componentDidMount(){}

    onBackClick(){
        this.props.navigation.goBack();
    }

    onNotificationClick(){
        this.props.navigation.navigate('NotificationSeller');
    }

    onChangeAddressClick(index){
        var addressArray = this.state.renderAddress;
        var clickedAddress = addressArray[index];

        addressArray.forEach(function (item, i) {
            addressArray[i].selected = false;
        });

        if(clickedAddress.selected == false)
        {
            addressArray[index].selected = true;
            this.setState({renderAddress:addressArray})
        }
    }

    onAddressDeleteClick(){
        Alert.alert(
            'Delete Address',
            'want to delete this address ?',
            [
              {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Yes', onPress: () =>  this.deleteAddress()},
            ],
            {cancelable: false},
          );
    }

    onContinueToPaymentClick(){
        this.props.navigation.navigate('PaymentSeller');
    }

    onAddAddressClick(){
        this.props.navigation.navigate('CreateAddressSeller');
    }

    deleteAddress(){
        this.dropDownAlertRef.alertWithType('error', 'Address Deleted !','',null,1500)
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
        
        <View style={{height:Dimensions.get('window').height/100*7}} >
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
        
        <View style={{height:Dimensions.get('window').height/100*93,}}>

        <View style={{marginHorizontal:20,marginTop:10,flexDirection:'row',}}>
                <Text style={{color:'#000',fontSize:20,fontWeight:"bold"}}>Address</Text>
        </View>

        <View style={{marginTop:10,marginHorizontal:10}}>
            <FlatList
            contentContainerStyle={{paddingBottom:100}}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={this.state.renderAddress}
            keyExtractor={item => item.value}
            renderItem={({ item , index}) => 
                        
                    <View style={{backgroundColor:"#fff",elevation:9,borderWidth:1,borderColor:`${item.selected?'#4F45F0':'transparent'}`,marginHorizontal:15,marginVertical:10}}>

                            <View style={{flex:1}}>
                                <View style={{marginTop:15,paddingHorizontal:10}}>
                                    <Text style={{fontSize:15,fontWeight:"600"}}>{item.addressLane}</Text>
                                </View>
                                <View style={{marginTop:10,paddingHorizontal:10}}>
                                    <Text style={{fontSize:12}}>Name: {item.name}</Text>
                                </View>

                                <View style={{marginTop:5,paddingHorizontal:10}}>
                                    <Text style={{fontSize:12}}>Number: {item.phone}</Text>
                                </View>



                                <View style={{marginTop:5,paddingHorizontal:10}}>
                                    <Text style={{fontSize:12}}>City: {item.city}</Text>
                                </View>

                                <View style={{marginTop:5,paddingHorizontal:10}}>
                                    <Text style={{fontSize:12}}>State: {item.state}</Text>
                                </View>

                                <View style={{flexDirection:"row",alignSelf:"flex-end"}}>
                                {
                                    item.selected?
                                    null
                                    :
                                    <View>
                                    <TouchableOpacity 
                                        onPress={this.onAddressDeleteClick} 
                                        activeOpacity={0.5}
                                        style={{marginTop:10,padding:8,backgroundColor:"#4F45F0",borderRadius:5,marginBottom:10,marginRight:30,alignSelf:"flex-end",alignItems:"center",flexDirection:"row"}}>
                                            <Icon6 name="ios-trash-outline" color={'#fff'} size={20} />
                                        </TouchableOpacity>
                                    </View>
                                }

                                {
                                    item.selected ? 
                                    <View style={{marginTop:10,padding:8,backgroundColor:"#4F45F0",borderRadius:5,marginBottom:10,marginRight:10,alignSelf:"flex-end",alignItems:"center",flexDirection:"row"}}>
                                        <View>
                                        <Icon6 name="ios-checkmark-done-circle-sharp" color={'#fff'} size={20} />
                                        </View>
                                    </View>
                                    :
                                    <TouchableOpacity 
                                    onPress={()=>{this.onChangeAddressClick(index)}}
                                    style={{marginTop:10,padding:8,backgroundColor:"#4F45F0",borderRadius:5,marginBottom:10,marginRight:10,alignSelf:"flex-end",alignItems:"center",flexDirection:"row"}}>
                                        <View style= {{}}>
                                        <Icon6 name="md-arrow-redo-circle-sharp" color={'#fff'} size={20} />
                                        </View>
                                    </TouchableOpacity>
                                }
                                </View>
                            </View>

                        </View>
     
                        }
                />


        </View>

        <TouchableOpacity 
        onPress={this.onAddAddressClick}  
        activeOpacity={0.9} 
        style={{
            position:"absolute",
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:'#fafafa',
            marginHorizontal:20,
            bottom:70,
            height:50,
            width:Dimensions.get('window').width-60,
            borderRadius:7,
            borderWidth:1.2,
            borderStyle:'dashed',
            borderColor:"#4F45F0",
            justifyContent:'center',
            alignSelf:'center'
            }}>
                <Text style={{color:'#4F45F0',fontSize:22}}>+   Add Address</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={this.onContinueToPaymentClick} 
            activeOpacity={0.9} 
            style={{        
            position:"absolute",
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:'#4F45F0',
            marginHorizontal:20,
            bottom:10,
            height:50,
            width:Dimensions.get('window').width-60,
            borderRadius:7,
            justifyContent:'center',
            alignSelf:'center'
            }}>
                <Text style={styles.loginButtonText}>Continue To Payment</Text>
        </TouchableOpacity>
        </View>

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
        fontSize:15
    },
    iconInputContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        marginHorizontal:20,
        marginTop:20,
        height:45,
        width:Dimensions.get('window').width-40,
        borderRadius:7,
        elevation:9
    },
    iconInputField:{
        marginLeft:5,
        flex:1,
        color:"#000"
    },
    iconInputImage:{
        marginLeft:10
    },
    loginButtonContainer2:{
        position:"absolute",
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fafafa',
        marginHorizontal:20,
        bottom:65,
        height:45,
        width:Dimensions.get('window').width-60,
        borderRadius:7,
        borderWidth:1.2,
        borderStyle:'dashed',
        borderColor:"#4F45F0",
        justifyContent:'center',
        alignSelf:'center'
    },
    loginButtonContainer:{
        position:"absolute",
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#4F45F0',
        marginHorizontal:20,
        bottom:10,
        height:45,
        width:Dimensions.get('window').width-60,
        borderRadius:7,
        justifyContent:'center',
        alignSelf:'center'
    },
    loginButtonText:{
        color:'white',
        fontSize:22
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