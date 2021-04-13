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
  import LottieView from 'lottie-react-native';

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
      this.onHomeClick = this.onHomeClick.bind(this);
      this.onTrackOrderClick = this.onTrackOrderClick.bind(this);
    }

    componentDidMount(){}

    onBackClick(){
        this.props.navigation.goBack();
    }

    onHomeClick(){
        this.props.navigation.navigate('Home');
    }

    onTrackOrderClick(){
        this.props.navigation.navigate('Home');
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
        
        <View style={{height:Dimensions.get('window').height,alignItems:"center",justifyContent:"center"}}>

            <View style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height/4}}>
            <LottieView source={require('../../assets/animation/success.json')} autoPlay loop />
            </View>

            <View style={{}}>
                <Text style={{fontSize:25}}>Confirmation</Text>
            </View>
            <View style={{marginTop:15,alignItems:"center",justifyContent:"center"}}>
                <Text style={{fontSize:16,color:"#0000006a"}}>you have successfully</Text>
                <Text style={{fontSize:16,color:"#0000006a"}}>completed your payment procedure</Text>
            </View>
            <View style={{marginTop:15,alignItems:"center",justifyContent:"center"}}>
                <Text style={{fontSize:16,color:"#0000006a"}}>ID : 2560XXXXXXXXXXXXXX</Text>
            </View>


            <TouchableOpacity onPress={this.onTrackOrderClick} activeOpacity={0.9} 
            style={{
                alignItems:'center',
                backgroundColor:'#4F45F0',
                marginTop:50,
                height:45,
                width:Dimensions.get('window').width/2,
                borderRadius:7,
                justifyContent:'center',
                alignSelf:'center'
            }}>
                <Text style={{color:'white',fontSize:20}}>Track Order</Text>
            </TouchableOpacity>

        </View>

        <TouchableOpacity onPress={this.onHomeClick} activeOpacity={0.9} style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Back to Home</Text>
        </TouchableOpacity>
        
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