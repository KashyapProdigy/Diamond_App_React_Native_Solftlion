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
    ScrollView,
    ActivityIndicator,
    Modal
  } from 'react-native';
  import ImageViewer from 'react-native-image-zoom-viewer';

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
  import { SliderBox } from "react-native-image-slider-box";

export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        renderProducts:{   
                name:'Blocking Machine',
                price:'99',
                sellingprice:'55',
                stars:'3.7',
                zoomImages: [ 
                    {
                        url: '',
                        props: {
                            // Or you can set source directory.
                            source: require(`../../assets/productimage/1.png`)
                        }
                    },
                    {
                        url: '',
                        props: {
                            // Or you can set source directory.
                            source: require(`../../assets/productimage/6.png`)
                        }
                    },
                    {
                        url: '',
                        props: {
                            // Or you can set source directory.
                            source: require(`../../assets/productimage/4.png`)
                        }
                    },
                ],
                image:[ require(`../../assets/productimage/1.png`),require(`../../assets/productimage/6.png`),require(`../../assets/productimage/4.png`) ],
                reviewsnumber:49,
                description:"semi adasd asdkkakdsn aksdakkd kasd kkasd kasd as dkadb abskdkasd akd akdkakd asbdbabfjajbjbfbafbbsdfbabs fsbf bsfbbf basbfbsfbsb fbsbf bsfbasbfb sdbfsbdfbsd bfsdbfb sdbfsbdfb sdbfsbdfb sdbfsbdfbs dbfas sdasds dasdaasfsdfsd fsdfsdf sdfs",
                companyname:"Hari Krishna Pvt. Ltd",
                companysince:"1976",
                companyemployeenumber:'10-20 Employees',
                id:1
            },
        imageModalVisible:false,
        loading:false,
      };

      this.onBackClick = this.onBackClick.bind(this);
      this.onCartClick = this.onCartClick.bind(this);
      this.onNotificationClick = this.onNotificationClick.bind(this);
      this.onSliderBoxImageClick = this.onSliderBoxImageClick.bind(this);
      this.onReviewsClick = this.onReviewsClick.bind(this);
      this.onAddToCartClick = this.onAddToCartClick.bind(this);
      this.onAddToFavouriteClick = this.onAddToFavouriteClick.bind(this);
      this.onBuyNowClick = this.onBuyNowClick.bind(this);

    }

    componentDidMount(){}

    onBackClick(){
        this.props.navigation.goBack();
    }

    onCartClick(){
        this.props.navigation.navigate('My Cart');
    }

    onNotificationClick(){
        this.props.navigation.navigate('NotificationSeller');
    }

    onReviewsClick(){
        this.props.navigation.navigate('NotificationSeller');
    }

    onLayout = e => {
        this.setState({
          sliderWidth: e.nativeEvent.layout.width
        });
      };

    onSliderBoxImageClick(){
        this.dropDownAlertRef.alertWithType('success', 'Product Added To Cart !', "",null,1500)
        // setTimeout(() => {
        //     this.props.navigation.goBack();
        //     }, 2000);
    }

    onAddToCartClick(){
        this.dropDownAlertRef.alertWithType('success', 'Product Added To Cart !', "",null,1500)
        // setTimeout(() => {
        //     this.props.navigation.navigate('My Cart');
        //     }, 2000);
    }

    onBuyNowClick(){
        this.props.navigation.navigate('ShippingSeller');
    }

    onAddToFavouriteClick(){
        this.dropDownAlertRef.alertWithType('success', 'Product Wishlisted !', "",null,1500)
        // setTimeout(() => {
        //     this.props.navigation.goBack();
        //     }, 2000);
    }
 
    render () {
      return (
        <View style={styles.maincontainer}>
                {this.state.imageModalVisible ?
                        <Modal
                            visible={this.state.imageModalVisible}
                            transparent={true}
                        >
                            <View style={{flex: 1, backgroundColor: "#000", justifyContent: "center"}}>
                                <View style={styles.imagemodal}>
                                    <ImageViewer
                                        style={{width: "100%", height: "80%"}}
                                        imageUrls={this.state.renderProducts.zoomImages}
                                        enableImageZoom={true}
                                        enablePreload
                                        loadingRender={() => (
                                            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                                                <ActivityIndicator size="large" color="#4F45F0"/>
                                                <Text style={{marginTop: 10, color: "#4F45F0"}}>Loading ...</Text>
                                            </View>)}

                                    />

                                    <TouchableOpacity onPress={() => this.setState({imageModalVisible: false})} style={{
                                        width: "100%",
                                        height: "7%",
                                        borderTopLeftRadius:20,
                                        borderTopRightRadius:20,
                                        backgroundColor: "#4F45F0",
                                        alignItems: "center",
                                        alignSelf:"center",
                                        justifyContent: "center"
                                    }}>
                                        <Text style={{color: "#fff", fontSize:18, fontWeight: "bold"}}>Back</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </Modal>
                : null}

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
                <TouchableOpacity  onPress={this.onCartClick} style={{marginHorizontal:10}}>
                <Icon6 name="md-cart-sharp" color={'#0000008a'} size={26} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.onNotificationClick} style={{marginHorizontal:10}}>
                <Icon6 name="notifications-outline" color={'#0000008a'} size={26} />
                </TouchableOpacity>
            </View>
        </View>
        </View>
        
        <ScrollView style={{marginBottom:50}} contentContainerStyle={{paddingBottom:100}} showsVerticalScrollIndicator={false}>

        <View style={{marginHorizontal:20,marginVertical:30,}} onLayout={this.onLayout}>
            <SliderBox
            images={this.state.renderProducts.image}
            sliderBoxHeight={200}
            parentWidth={this.state.sliderWidth}
            onCurrentImagePressed={index => {
                this.setState({imageModalVisible: true})
            }}
            dotColor="#4F45F0"
            inactiveDotColor="#4F45F05a"
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            imageLoadingColor="#4F45F0"
            />
        </View>


        <View style={{marginHorizontal:20}}>
            <Text style={{fontSize:22}}>{this.state.renderProducts.name}</Text>
        </View>

        <View style={{marginHorizontal:20,marginTop:20,flexDirection:"row"}}>
            <View style={{}}>
                <Text style={{fontSize:18,fontWeight:"bold",color:"#4F45F08a"}}>${this.state.renderProducts.sellingprice}</Text>
            </View>

            <View style={{marginHorizontal:35,top:2}}>
                <Text style={{fontSize:15,color:"#000",textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>$ {this.state.renderProducts.price}</Text>
            </View>

            <View style={{flexDirection:"row",alignItems:'center',justifyContent:"center",backgroundColor:"#4F45F0",margin:5,borderRadius:20}}>
                <Icon5 name="star" color={'#fff'} size={11} style={{padding:5}}/>
                <Text style={{fontSize:15,color:"#fff",paddingRight:5}}>{this.state.renderProducts.stars}</Text>
            </View>
        </View>

        <View style={{borderTopWidth:0.5,borderBottomWidth:0.5,paddingVertical:10,marginVertical:15}}>
            <View style={{marginHorizontal:20,flexDirection:"row"}}>
                <View style={{justifyContent:"center",backgroundColor:"#4F45F0",paddingVertical:10,paddingHorizontal:25,borderRadius:5}}>
                    <Text style={{fontSize:18,color:"#fff"}}>{this.state.renderProducts.stars}</Text>
                </View>

                <View style={{justifyContent:"center",marginLeft:20,marginRight:40}}>
                    <Text style={{fontSize:18,color:"#000"}}>Very Good</Text>
                </View>

                <TouchableOpacity onPress={this.onReviewsClick} style={{justifyContent:"center",alignItems:"center",flexDirection:"row" , marginLeft:50}}>
                    <Text style={{fontSize:15,fontWeight:"bold",color:"#4F45F08a"}}>{this.state.renderProducts.reviewsnumber} Reviews</Text>
                    <Icon5 name="right" color={'#4F45F08a'} size={13} style={{paddingHorizontal:7,top:2}}/>
                </TouchableOpacity>
            </View>        
        </View>

        <View style={{marginHorizontal:20}}>
            <Text style={{fontSize:18, color:"#4F45F0"}}>Description</Text>
        </View>

        <View style={{marginHorizontal:20,marginTop:3}}>
            <Text style={{fontSize:13,color:"#0000008a"}}>{this.state.renderProducts.description}</Text>
        </View>


        <View style={{marginHorizontal:20,marginTop:30}}>
            <Text style={{fontSize:18 , color:"#4F45F0"}}>About The Company</Text>
        </View>

        <View style={{marginHorizontal:20,marginTop:12}}>
            <Text style={{fontSize:15,color:"#0000008a"}}>Company Name</Text>
        </View>
        <View style={{marginHorizontal:20,marginTop:3}}>
            <Text style={{fontSize:15,color:"#000"}}>{this.state.renderProducts.companyname}</Text>
        </View>

        <View style={{marginHorizontal:20,marginTop:15}}>
            <Text style={{fontSize:15,color:"#0000008a"}}>Year Of Establishment</Text>
        </View>
        <View style={{marginHorizontal:20,marginTop:3}}>
            <Text style={{fontSize:15,color:"#000"}}>{this.state.renderProducts.companysince}</Text>
        </View>

        <View style={{marginHorizontal:20,marginTop:15}}>
            <Text style={{fontSize:15,color:"#0000008a"}}>Number Of Employees</Text>
        </View> 
        <View style={{marginHorizontal:20,marginTop:3}}>
            <Text style={{fontSize:15,color:"#000"}}>{this.state.renderProducts.companyemployeenumber}</Text>
        </View>

        </ScrollView>
        <TouchableOpacity onPress={this.onAddToFavouriteClick} 
        activeOpacity={0.5}
        style= {{
                //Here is the trick
                position: 'absolute',
                alignItems:'center',
                justifyContent:'center',
                width: 40,
                height: 40,
                borderRadius:20,
                backgroundColor:"#4F45F0",
                right: 15,
                bottom: 80,
            }}>
                    <Icon5 name="hearto" color={'#fff'} size={26}  style={{top:1}}/>
        </TouchableOpacity>

        <View style={{position: 'absolute',flexDirection:"row",bottom:0}}>
                <TouchableOpacity onPress={this.onAddToCartClick} style={{borderTopLeftRadius:15,backgroundColor:"#fafafa",paddingVertical:15,justifyContent:"center",alignItems:"center",width:Dimensions.get('window').width/2}}>
                    <Text style={{fontSize:18,color:"#000"}}>Add To Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onBuyNowClick} style={{borderTopRightRadius:15,backgroundColor:"#4F45F0",paddingVertical:15,justifyContent:"center",alignItems:"center",width:Dimensions.get('window').width/2}}>
                    <Text style={{fontSize:18,color:"#fff"}}>Buy Now</Text>
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
        color:"#000"
    },
    iconInputImage:{
        marginLeft:10
    },
    imagemodal: {
        alignSelf: "center",
        width: "100%",
        height: "100%",
        borderColor: '#DCDCDC',
    },
    loginButtonContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#4F45F0',
        marginHorizontal:20,
        marginVertical:50,
        height:55,
        width:Dimensions.get('window').width/2,
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