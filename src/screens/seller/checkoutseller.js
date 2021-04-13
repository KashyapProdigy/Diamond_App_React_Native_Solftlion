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

  import DropdownAlert from 'react-native-dropdownalert';

  import Icon1 from 'react-native-vector-icons/Entypo';
  import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
  import Icon3 from 'react-native-vector-icons/FontAwesome';
  import Icon4 from 'react-native-vector-icons/FontAwesome5';
  import Icon5 from 'react-native-vector-icons/AntDesign';
  import Icon6 from 'react-native-vector-icons/Ionicons';
  import Icon7 from 'react-native-vector-icons/EvilIcons';
  import Icon8 from 'react-native-vector-icons/Fontisto';

export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        renderProducts:[
            {   
                name:'Blocking Machine',
                price:'99',
                sellingprice:'55',
                stars:'4.5',
                company:'Bata LTD',
                quantity:1,
                image: require(`../../assets/productimage/1.png`),
                id:1
            },
            {   
                name:'Brutter Wheel',
                price:'76',
                sellingprice:'33',
                stars:'3.5',
                company:'Bata LTD',
                quantity:1,
                image: require(`../../assets/productimage/2.png`),
                id: 2
            },
            {   
                name:'Polishing Machine',
                price:'199',
                sellingprice:'101',
                company:'Bata LTD',
                quantity:1,
                stars:'4.8',
                image: require(`../../assets/productimage/3.png`),
                id: 3
            },
            {   
                name:'Demo Test',
                price:'99',
                sellingprice:'55',
                company:'Bata LTD',
                quantity:1,
                stars:'1.7',
                image: require(`../../assets/productimage/4.png`),
                id: 4
            },
            {   
                name:'Blocking Machine',
                price:'99',
                sellingprice:'55',
                company:'Bata LTD',
                quantity:1,
                stars:'3.7',
                image: require(`../../assets/productimage/5.png`),
                id: 5
            },
            {   
                name:'Blocking Machine',
                price:'99',
                sellingprice:'55',
                company:'Bata LTD',
                quantity:1,
                stars:'3.7',
                image: require(`../../assets/productimage/6.png`),
                id: 6
            },
        ],
        billing:{
                subtotal:160.00,
                discount:5,
                shipping:10.00,
                total:170,
                name:'Kashyap Karkar',
                phone:'+1823362123',
                addressLane:"bdabsdbasdbabbdjasbca , adas, adasbjdbjab jsd,asd asbhdbhasbjbd ,, adasbjdbjab jsd,asd asbhdbhasbjbd ,, adasbjdbjab jsd,asd asbhdbhasbjbd ,, adasbjdbjab jsd,asd asbhdbhasbjbd",
                city:'Surat',
                state:'Gujarat',
            },
        loading:false,
      };

      this.onBackClick = this.onBackClick.bind(this);
      this.onNotificationClick = this.onNotificationClick.bind(this);
      this.onQuantityMinusClick = this.onQuantityMinusClick.bind(this);
      this.onQuantityPlusClick = this.onQuantityPlusClick.bind(this);
      this.onProductRemoveFromCartClick = this.onProductRemoveFromCartClick.bind(this);
      this.onBuyClick = this.onBuyClick.bind(this);
    }

    componentDidMount(){}

    onBackClick(){
        this.props.navigation.goBack();
    }

    onBuyClick(){
        this.props.navigation.navigate('OrderCompletionSeller');
    }

    onNotificationClick(){
        this.props.navigation.navigate('NotificationSeller');
    }

    onQuantityMinusClick(index){
        var productArray = this.state.renderProducts;
        var clickedProduct = productArray[index];

        if(clickedProduct.quantity > 1)
        {
            var updatedQuantity = clickedProduct.quantity - 1 ;
            productArray[index].quantity = updatedQuantity;
            this.setState({renderProducts:productArray})
        }
    }

    onQuantityPlusClick(index){
        var productArray = this.state.renderProducts;
        var clickedProduct = productArray[index];

        if(clickedProduct.quantity > 0)
        {
            var updatedQuantity = clickedProduct.quantity + 1 ;
            productArray[index].quantity = updatedQuantity;
            this.setState({renderProducts:productArray})
        }
    }

    onProductRemoveFromCartClick(){
        this.dropDownAlertRef.alertWithType('error', 'Product Removed From Cart!','',null,1500)
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
        
        <View style={{height:Dimensions.get('window').height/100*93}}>

        <View style={{marginHorizontal:20,marginTop:10,flexDirection:'row',}}>
                <Text style={{color:'#000',fontSize:20,fontWeight:"bold"}}>Checkout</Text>
        </View>

        <View style={{marginTop:10,marginHorizontal:10,height:Dimensions.get('window').height/100*40}}>
            <FlatList
            contentContainerStyle={{paddingBottom:10}}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={this.state.renderProducts}
            keyExtractor={item => item.value}
            renderItem={({ item , index}) => 
                        
                    <View style={{backgroundColor:"#fff",elevation:9,marginHorizontal:15,flexDirection:"row",marginVertical:10}}>

                            <View >
                            <Image
                                source={item.image}  
                                style={{
                                    borderRadius:7,
                                    height:140,
                                    width:110,
                                    backgroundColor:"#fff",
                                }} 
                                resizeMode='center' />
                            </View>

                            <View style={{flex:1}}>
                            
                            <View>
                            <TouchableOpacity 
                                onPress={this.onProductRemoveFromCartClick} 
                                activeOpacity={0.5}
                                style= {{
                                        //Here is the trick
                                        position: 'absolute',
                                        alignSelf:'flex-end',
                                        justifyContent:'center',
                                        width: 30,
                                        height: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        right: 5,
                                        top: 5,
                                    }}>
                                    <Icon5 name="close" color={'#0000005a'} size={25} />
                                </TouchableOpacity>
                                </View>

                                <View style={{marginTop:15,paddingHorizontal:10}}>
                                    <Text style={{fontSize:15}}>{item.name}</Text>
                                </View>

                                <View style={{marginTop:5,paddingHorizontal:10}}>
                                    <Text style={{fontSize:15,color:"#0000005a"}}>{item.company}</Text>
                                </View>

                                <View style={{marginTop:5,paddingHorizontal:10}}>
                                    <Text style={{fontSize:15,color:"#4F45F0"}}>${item.sellingprice}</Text>
                                </View>

                                <View style={{marginTop:5,paddingHorizontal:10,backgroundColor:"#fafafa",borderRadius:5,paddingVertical:5,marginBottom:5,alignSelf:"center",alignItems:"center",flexDirection:"row"}}>

                                <TouchableOpacity 
                                onPress={()=>{this.onQuantityMinusClick(index)}}
                                activeOpacity={0.5}
                                style= {{marginRight:25}}>
                                <Icon5 name="minus" color={'#0000005a'} size={20} />
                                </TouchableOpacity>

                                   <Text style={{fontSize:15,color:"#4F45F0"}}>{item.quantity}</Text>

                                <TouchableOpacity 
                                onPress={()=>{this.onQuantityPlusClick(index)}}
                                activeOpacity={0.5}
                                style= {{marginLeft:25}}>
                                <Icon5 name="plus" color={'#0000005a'} size={20} />
                                </TouchableOpacity>
                                </View>
                            </View>

                        </View>
     
                        }
                />
        </View>

        <ScrollView style={{height:Dimensions.get('window').height/100*53}} contentContainerStyle={{paddingBottom:150}}>
        <View style={{marginHorizontal:10}}>
                <View style={{marginTop:15,paddingHorizontal:10}}>
                    <Text style={{fontSize:15,fontWeight:"600"}}>{this.state.billing.addressLane}</Text>
                </View>
                <View style={{marginTop:10,paddingHorizontal:10}}>
                    <Text style={{fontSize:12}}>Name: {this.state.billing.name}</Text>
                </View>

                <View style={{marginTop:5,paddingHorizontal:10}}>
                    <Text style={{fontSize:12}}>Number: {this.state.billing.phone}</Text>
                </View>



                <View style={{marginTop:5,paddingHorizontal:10}}>
                    <Text style={{fontSize:12}}>City: {this.state.billing.city}</Text>
                </View>

                <View style={{marginTop:5,paddingHorizontal:10}}>
                    <Text style={{fontSize:12}}>State: {this.state.billing.state}</Text>
                </View>
        </View>

        <View style={{marginHorizontal:20,marginTop:20,borderTopWidth:1}}>
                <View style={{flexDirection:'row',justifyContent:"space-between",marginTop:15}}>
                <Text style={{color:'#0000008a',fontSize:16}}>Subtotal</Text>
                <Text style={{color:'#000',fontSize:16}}>${this.state.billing.subtotal}.00</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:"space-between",marginTop:15}}>
                <Text style={{color:'#0000008a',fontSize:16}}>Discount</Text>
                <Text style={{color:'#000',fontSize:16}}>{this.state.billing.discount}%</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:"space-between",marginTop:15}}>
                <Text style={{color:'#0000008a',fontSize:16}}>Shipping</Text>
                <Text style={{color:'#000',fontSize:16}}>${this.state.billing.shipping}.00</Text>
                </View>
                <View style={{borderTopWidth:1,marginTop:10}}></View>
                <View style={{flexDirection:'row',justifyContent:"space-between",marginTop:10}}>
                <Text style={{color:'#0000008a',fontSize:16}}>Total</Text>
                <Text style={{color:'#000',fontSize:16}}>${this.state.billing.total}.00</Text>
                </View>
        </View>

        </ScrollView>

        <TouchableOpacity onPress={this.onBuyClick} activeOpacity={0.9} style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Buy</Text>
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
    loginButtonContainer:{
        position:"absolute",
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#4F45F0',
        marginHorizontal:20,
        bottom:15,
        height:55,
        width:Dimensions.get('window').width-60,
        borderRadius:7,
        justifyContent:'center',
        alignSelf:'center'
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