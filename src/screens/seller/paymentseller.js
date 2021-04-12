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
  import CreditCardDisplay from 'react-native-credit-card-display';

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
        renderCards:[
            {   
                name:'Kashyap J Karkar',
                cvc:'123',
                expiration:'04/21',
                number:'4242424242424242',
                selected:false,
                id:1
            },
            {   
                name:'My Card 2',
                cvc:'793',
                expiration:'10/11',
                number:'5324264232669069',
                selected:true,
                id:2
            },
            {   
                name:'User 3',
                cvc:'321',
                expiration:'04/22',
                number:'377593672852950',
                selected:false,
                id:3
            },
            {   
                name:'Demo 4',
                cvc:'342',
                expiration:'04/19',
                number:'6011706318543689',
                selected:false,
                id:4
            },
        ],
        billing:{
            subtotal:160.00,
            discount:5,
            shipping:10.00,
            total:170
        },
          loading:false,
      };

      this.onBackClick = this.onBackClick.bind(this);
      this.onNotificationClick = this.onNotificationClick.bind(this);
      this.onChangeCardClick = this.onChangeCardClick.bind(this);
      this.onCardDeleteClick = this.onCardDeleteClick.bind(this);
      this.onCheckoutClick = this.onCheckoutClick.bind(this);
      this.onAddCardClick = this.onAddCardClick.bind(this);
      this.deleteCard = this.deleteCard.bind(this);
    }

    componentDidMount(){}

    onBackClick(){
        this.props.navigation.goBack();
    }

    onNotificationClick(){
        this.props.navigation.navigate('NotificationSeller');
    }

    onChangeCardClick(index){
        var addressArray = this.state.renderCards;
        var clickedAddress = addressArray[index];

        addressArray.forEach(function (item, i) {
            addressArray[i].selected = false;
        });

        if(clickedAddress.selected == false)
        {
            addressArray[index].selected = true;
            this.setState({renderCards:addressArray})
        }
    }

    onCardDeleteClick(){
        Alert.alert(
            'Delete Card',
            'want to delete this card ?',
            [
              {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Yes', onPress: () =>  this.deleteCard()},
            ],
            {cancelable: false},
          );
    }

    onCheckoutClick(){        
        this.props.navigation.navigate('Home');
    }

    onAddCardClick(){
        this.props.navigation.navigate('CreateCardSeller');
    }

    deleteCard(){
        this.dropDownAlertRef.alertWithType('error', 'Card Deleted !','',null,1500)
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
                <Text style={{color:'#000',fontSize:20,fontWeight:"bold"}}>Payment</Text>
        </View>

        <View style={{marginTop:30}}>
            <FlatList
            horizontal={true}
            contentContainerStyle={{}}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={this.state.renderCards}
            keyExtractor={item => item.value}
            renderItem={({ item , index}) => 
                        
                        <View style={{marginHorizontal:20}}>
                        <CreditCardDisplay
                            number={item.number}
                            cvc={item.cvc}
                            expiration={item.expiration}
                            name={item.name}
                        />

                        {
                                    item.selected ? 
                                    <View style={{top:0,right:15,position:'absolute',marginTop:10,padding:8,backgroundColor:"#4F45F0",borderRadius:5,alignItems:'center'}}>
                                        <Icon6 name="ios-checkmark-done-circle-sharp" color={'#fff'} size={20} />
                                    </View>
                                    :
                                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                                    <TouchableOpacity 
                                    onPress={()=>{this.onChangeCardClick(index)}}
                                    style={{padding:8,backgroundColor:"#4F45F0",borderRadius:5,margin:7,alignSelf:"center",alignItems:"center",marginRight:20}}>
                                        <View style= {{}}>
                                        <Icon6 name="md-arrow-redo-circle-sharp" color={'#fff'} size={20} />
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity 
                                    onPress={()=>{this.onCardDeleteClick(index)}}
                                    style={{padding:8,backgroundColor:"#4F45F0",borderRadius:5,margin:7,alignSelf:"center",alignItems:"center",marginLeft:20}}>
                                        <View style= {{}}>
                                        <Icon6 name="ios-trash-outline" color={'#fff'} size={20} />
                                        </View>
                                    </TouchableOpacity>

                                    </View>
                                }
                        </View>
                        }
                />
        </View>

        <View style={{marginHorizontal:20,marginTop:40}}>
                <View style={{flexDirection:'row',justifyContent:"space-between",marginTop:15}}>
                <Text style={{color:'#0000008a',fontSize:20}}>Subtotal</Text>
                <Text style={{color:'#000',fontSize:20}}>${this.state.billing.subtotal}.00</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:"space-between",marginTop:15}}>
                <Text style={{color:'#0000008a',fontSize:20}}>Discount</Text>
                <Text style={{color:'#000',fontSize:20}}>{this.state.billing.discount}%</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:"space-between",marginTop:15}}>
                <Text style={{color:'#0000008a',fontSize:20}}>Shipping</Text>
                <Text style={{color:'#000',fontSize:20}}>${this.state.billing.shipping}.00</Text>
                </View>
                <View style={{borderTopWidth:1,marginTop:10}}></View>
                <View style={{flexDirection:'row',justifyContent:"space-between",marginTop:10}}>
                <Text style={{color:'#0000008a',fontSize:20}}>Total</Text>
                <Text style={{color:'#000',fontSize:20}}>${this.state.billing.total}.00</Text>
                </View>
        </View>

        <TouchableOpacity 
        onPress={this.onAddCardClick}  
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
                <Text style={{color:'#4F45F0',fontSize:22}}>+   Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={this.onCheckoutClick} 
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
                <Text style={styles.loginButtonText}>Checkout</Text>
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