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
    StatusBar
  } from 'react-native';

  import DropdownAlert from 'react-native-dropdownalert';

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
        renderProducts:[
            {   
                name:'Blocking Machine',
                price:'99',
                sellingprice:'55',
                stars:'3.7',
                image: require(`../../assets/productimage/1.png`),
                id:1
            },
            {   
                name:'Blocking Machine',
                price:'99',
                sellingprice:'55',
                stars:'3.7',
                image: require(`../../assets/productimage/2.png`),
                id: 2
            },
            {   
                name:'Blocking Machine',
                price:'99',
                sellingprice:'55',
                stars:'3.7',
                image: require(`../../assets/productimage/3.png`),
                id: 3
            },
            {   
                name:'Blocking Machine',
                price:'99',
                sellingprice:'55',
                stars:'3.7',
                image: require(`../../assets/productimage/4.png`),
                id: 4
            },
            {   
                name:'Blocking Machine',
                price:'99',
                sellingprice:'55',
                stars:'3.7',
                image: require(`../../assets/productimage/5.png`),
                id: 5
            },
            {   
                name:'Blocking Machine',
                price:'99',
                sellingprice:'55',
                stars:'3.7',
                image: require(`../../assets/productimage/6.png`),
                id: 6
            },
        ],
        categories:[
            {
                value: "Polishing Machine",
                image: require(`../../assets/productimage/6.png`)
            },
            {
                value: "Blocking Machine",
                image: require(`../../assets/productimage/2.png`)
            },
            {
                value: "Cutting Machine",
                image: require(`../../assets/productimage/3.png`)
            },
            {
                value: "Faceting Machine",
                image: require(`../../assets/productimage/4.png`)
            },
            {
                value: "Fancy",
                image: require(`../../assets/productimage/5.png`)
            },
            {
                value: "4P",
                image: require(`../../assets/productimage/1.png`)
            },
            {
                value: "demo",
                image: require(`../../assets/productimage/3.png`)
            }
        ],
          searchstring:'',
          togglePasswordVisibility:true,
          loading:false,
      };

      this.generateRandomColor = this.generateRandomColor.bind(this);
      this.onDrawerClick = this.onDrawerClick.bind(this);
      this.onFilterClick = this.onFilterClick.bind(this);
      this.onNotificationClick = this.onNotificationClick.bind(this);
      this.onCategoriesSeeAllClick = this.onCategoriesSeeAllClick.bind(this);
      this.onFeaturedSeeAllClick = this.onFeaturedSeeAllClick.bind(this);
      this.onBestSellSeeAllClick = this.onBestSellSeeAllClick.bind(this);
      this.onProductClick = this.onProductClick.bind(this);
      this.onCategoryClick = this.onCategoryClick.bind(this);
      this.onApplyNowClick = this.onApplyNowClick.bind(this);
      this.onSaveProductClick = this.onSaveProductClick.bind(this);
    }

    componentDidMount(){}

    generateRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        color = color + '7a';
        return color;
      }

    onDrawerClick(){
        this.props.navigation.toggleDrawer();
    }

    onFilterClick(){
        this.props.navigation.navigate('Home');
    }

    onNotificationClick(){
        this.props.navigation.navigate('NotificationSeller');
    }

    onCategoriesSeeAllClick(){
        
    }

    onFeaturedSeeAllClick(){
        this.props.navigation.navigate('FeaturedSeller');
    }

    onBestSellSeeAllClick(){
        this.props.navigation.navigate('BestSellSeller');
    }

    onProductClick(){
        // this.dropDownAlertRef.alertWithType('success', 'Product Description !', "",null,1500)
    }

    onCategoryClick(){
        this.props.navigation.navigate('ProfileSeeker');
    }

    onApplyNowClick(){
        this.props.navigation.navigate('ApplyForJobSeeker');
    }

    onSaveProductClick(){
        this.dropDownAlertRef.alertWithType('success', 'Product Saved Succcessfully !', "",null,1500)
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
        <View style={{flex:15}} >

        <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row',marginHorizontal:10,marginTop:20}}>
            <View>        
                <TouchableOpacity  onPress={this.onDrawerClick} style={{marginHorizontal:10}}>
                <Icon5 name="menuunfold" color={'black'} size={26} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity  onPress={this.onFilterClick} style={{marginHorizontal:10}}>
                <Icon5 name="filter" color={'black'} size={26} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.onNotificationClick} style={{marginHorizontal:10}}>
                <Icon6 name="notifications-outline" color={'black'} size={26} />
                </TouchableOpacity>
            </View>
        </View>

            <View style={styles.iconInputContainer}>
            <Icon3 name="search" color={'#0000008a'} size={24}  style={styles.iconInputImage}/>
            <TextInput style = {styles.iconInputField}
                underlineColorAndroid = "transparent"
                placeholder = "Search Your Product "
                placeholderTextColor = "#0000008a"
                autoCapitalize = "none"
                onChangeText={(value) => this.setState({searchstring:value})}  />
            </View>

        </View>
        
        <View style={{flex:15}}>

        <View style={{marginHorizontal:20,marginTop:10,justifyContent:"space-between",flexDirection:'row',}}>
                <Text style={{color:'#000',fontSize:15,fontWeight:"bold"}}>Categories</Text>
                <TouchableOpacity onPress={this.onCategoriesSeeAllClick} style={{}}>
                 <Text style={{color:'#0000008a',fontSize:15}}>see all</Text>
                </TouchableOpacity>
        </View>

        <View style={{marginTop:10}}>
            <FlatList
            horizontal={true}
            contentContainerStyle={{paddingLeft:10}}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={this.state.categories}
            keyExtractor={item => item.value}
            renderItem={({ item }) => 
      
                <ImageBackground 
                source={item.image}  
                style={{
                    borderRadius:15,
                    marginHorizontal:10,
                }} 
                imageStyle={{borderRadius:15,opacity:0.5,overflow:"hidden"}} 
                resizeMode='cover' >

                <TouchableOpacity  style={{
                    backgroundColor:this.generateRandomColor(),
                    height:90,
                    width:150,        
                    borderRadius:15,
                    paddingHorizontal:20,
                    paddingVertical:10,
                    alignItems:"center",
                    justifyContent:"center"}}>

                <Text style={{color:"#fff",fontSize: 11,fontWeight:"bold"}}>{item.value}</Text>

                </TouchableOpacity>
                </ImageBackground>
            }
            />
        </View>
        </View>

        <View style={{flex:35}}>
        <View style={{marginTop:20,marginHorizontal:20,justifyContent:"space-between",flexDirection:'row'}}>
                <Text style={{color:'#000',fontSize:15,fontWeight:"bold"}}>Featured</Text>
                <TouchableOpacity onPress={this.onFeaturedSeeAllClick} style={{}}>
                 <Text style={{color:'#0000008a',fontSize:15}}>see all</Text>
                </TouchableOpacity>
        </View>


        <View style={{marginTop:10}}>
            <FlatList
            horizontal={true}
            contentContainerStyle={{paddingLeft:10}}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={this.state.renderProducts}
            keyExtractor={item => item.value}
            renderItem={({ item }) => 
                        
                        <TouchableOpacity 
                        onPress={this.onProductClick} 
                        style={{backgroundColor:"transparent",marginHorizontal:10}}>

                            <View style={{flexDirection:'row',elevation:9}}>
                            <Image
                                source={item.image}  
                                style={{
                                    borderRadius:7,
                                    height:160,
                                    width:110,
                                    backgroundColor:"#fff",
                                }} 
                                resizeMode='center' />

                                <TouchableOpacity 
                                onPress={this.onSaveProductClick} 
                                activeOpacity={0.5}
                                style= {{
                                        //Here is the trick
                                        position: 'absolute',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        width: 30,
                                        height: 30,
                                        borderRadius:15,
                                        backgroundColor:"#4F45F0",
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        right: 5,
                                        top: 5,
                                    }}>
                                    <Icon5 name="hearto" color={'#fff'} size={18} />
                                </TouchableOpacity>
                            </View>

                            <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center",marginHorizontal:8}}>

                                <View>
                                    <Text style={{fontSize:17,fontWeight:"bold",color:"#4F45F08a"}}>${item.sellingprice}</Text>
                                </View>

                                <View>
                                    <Text style={{fontSize:13,color:"#000",textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>$ {item.price}</Text>
                                </View>

                                <View style={{flexDirection:"row",alignItems:'center',justifyContent:"center",backgroundColor:"#4F45F0",margin:5,borderRadius:20}}>
                                    <Icon5 name="star" color={'#fff'} size={10} style={{padding:5}}/>
                                    <Text style={{fontSize:13,color:"#fff",paddingRight:5}}>{item.stars}</Text>
                                </View>

                            </View>

                            <View>
                                    <Text style={{fontSize:14,color:"#000",paddingHorizontal:8}}>{item.name}</Text>
                            </View>

                        </TouchableOpacity>
                        }
                />
        </View>

        </View>

        <View style={{flex:35}}>
        <View style={{marginHorizontal:20,justifyContent:"space-between",flexDirection:'row'}}>
                <Text style={{color:'#000',fontSize:15,fontWeight:"bold"}}>Best Sellers</Text>
                <TouchableOpacity onPress={this.onBestSellSeeAllClick} style={{}}>
                 <Text style={{color:'#0000008a',fontSize:15}}>see all</Text>
                </TouchableOpacity>
        </View>


        <View style={{marginTop:10,marginBottom:8}}>
            <FlatList
            horizontal={true}
            contentContainerStyle={{paddingLeft:10}}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={this.state.renderProducts}
            keyExtractor={item => item.value}
            renderItem={({ item }) => 
                        
                        <TouchableOpacity 
                        onPress={this.onProductClick} 
                        style={{backgroundColor:"transparent",marginHorizontal:10}}>

                            <View style={{flexDirection:'row',elevation:9}}>
                            <Image
                                source={item.image}  
                                style={{
                                    borderRadius:7,
                                    height:160,
                                    width:110,
                                    backgroundColor:"#fff",
                                }} 
                                resizeMode='center' />

                                <TouchableOpacity 
                                onPress={this.onSaveProductClick} 
                                activeOpacity={0.5}
                                style= {{
                                        //Here is the trick
                                        position: 'absolute',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        width: 30,
                                        height: 30,
                                        borderRadius:15,
                                        backgroundColor:"#4F45F0",
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        right: 5,
                                        top: 5,
                                    }}>
                                    <Icon5 name="hearto" color={'#fff'} size={18} />
                                </TouchableOpacity>
                            </View>

                            <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center",marginHorizontal:8}}>

                                <View>
                                    <Text style={{fontSize:17,fontWeight:"bold",color:"#4F45F08a"}}>${item.sellingprice}</Text>
                                </View>

                                <View>
                                    <Text style={{fontSize:13,color:"#000",textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>$ {item.price}</Text>
                                </View>

                                <View style={{flexDirection:"row",alignItems:'center',justifyContent:"center",backgroundColor:"#4F45F0",margin:5,borderRadius:20}}>
                                    <Icon5 name="star" color={'#fff'} size={10} style={{padding:5}}/>
                                    <Text style={{fontSize:13,color:"#fff",paddingRight:5}}>{item.stars}</Text>
                                </View>

                            </View>

                            <View>
                                    <Text style={{fontSize:14,color:"#000",paddingHorizontal:8}}>{item.name}</Text>
                            </View>

                        </TouchableOpacity>
                        }
                />
        </View>
        </View>

        </ImageBackground> 
        </View>
      );
    }
}

const styles = StyleSheet.create({
    maincontainer:{
        flex:100 ,
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