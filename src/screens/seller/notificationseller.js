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
        renderNotifications:[
            {   
                name:'asdasdsadasdasdasdasdasdaasasadasdasdasdasdsadasdasdasdasddassaasddaasdasdasdasd',
                price:'99',
                sellingprice:'55',
                stars:'4.5',
                company:'Bata LTD',
                orderdate:'11:30 AM',
                quantity:1,
                image: require(`../../assets/productimage/1.png`),
                id:1
            },
            {   
                name:'Test',
                price:'76',
                sellingprice:'33',
                stars:'3.5',
                company:'Bata LTD',
                orderdate:'9:30 AM',
                quantity:1,
                image: require(`../../assets/productimage/2.png`),
                id: 2
            },
            {   
                name:'asdasdsadasdasdasdasdasdaasasadasdasdasd',
                price:'199',
                sellingprice:'101',
                company:'Bata LTD',
                orderdate:'12:00 PM',
                quantity:1,
                stars:'4.8',
                image: require(`../../assets/productimage/3.png`),
                id: 3
            },
            {   
                name:'asdasdsadasdaasdasdasdasd',
                price:'99',
                sellingprice:'55',
                company:'Bata LTD',
                orderdate:'9:30 AM',
                quantity:1,
                stars:'1.7',
                image: require(`../../assets/productimage/4.png`),
                id: 4
            },
            {   
                name:'asdasdsadasdasdasdasdasdaasasadasdasdasdasdsadasdasdasdasddassaasddaasdasdasdasd',
                price:'99',
                sellingprice:'55',
                stars:'4.5',
                company:'Bata LTD',
                orderdate:'11:30 AM',
                quantity:1,
                image: require(`../../assets/productimage/1.png`),
                id:5
            },
            {   
                name:'Test',
                price:'76',
                sellingprice:'33',
                stars:'3.5',
                company:'Bata LTD',
                orderdate:'9:30 AM',
                quantity:1,
                image: require(`../../assets/productimage/2.png`),
                id: 6
            },
            {   
                name:'asdasdsadasdasdasdasdasdaasasadasdasdasd',
                price:'199',
                sellingprice:'101',
                company:'Bata LTD',
                orderdate:'12:00 PM',
                quantity:1,
                stars:'4.8',
                image: require(`../../assets/productimage/3.png`),
                id: 7
            },
            {   
                name:'asdasdsadasdaasdasdasdasd',
                price:'99',
                sellingprice:'55',
                company:'Bata LTD',
                orderdate:'9:30 AM',
                quantity:1,
                stars:'1.7',
                image: require(`../../assets/productimage/4.png`),
                id: 8
            },
            {   
                name:'asdasdsadasdasdasdasdasdaasasadasdasdasdasdsadasdasdasdasddassaasddaasdasdasdasd',
                price:'99',
                sellingprice:'55',
                stars:'4.5',
                company:'Bata LTD',
                orderdate:'11:30 AM',
                quantity:1,
                image: require(`../../assets/productimage/1.png`),
                id:9
            },
            {   
                name:'Test',
                price:'76',
                sellingprice:'33',
                stars:'3.5',
                company:'Bata LTD',
                orderdate:'9:30 AM',
                quantity:1,
                image: require(`../../assets/productimage/2.png`),
                id: 10
            },
            {   
                name:'asdasdsadasdasdasdasdasdaasasadasdasdasd',
                price:'199',
                sellingprice:'101',
                company:'Bata LTD',
                orderdate:'12:00 PM',
                quantity:1,
                stars:'4.8',
                image: require(`../../assets/productimage/3.png`),
                id: 11
            },
            {   
                name:'asdasdsadasdaasdasdasdasd',
                price:'99',
                sellingprice:'55',
                company:'Bata LTD',
                orderdate:'9:30 AM',
                quantity:1,
                stars:'1.7',
                image: require(`../../assets/productimage/4.png`),
                id: 12
            },

        ],
          loading:false,
      };

      this.onNotificationClick = this.onNotificationClick.bind(this);

    }

    componentDidMount(){}

    onNotificationClick(){
        this.props.navigation.goBack();
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
            <Text style={{color:'black',fontSize:22,textAlignVertical:'center',fontWeight:"bold",marginHorizontal:25,marginVertical:20}}>Notifications</Text>
        </View>
        
        <View style={styles.subcontainer2}>
            <FlatList
            contentContainerStyle={{paddingBottom:100,        width:Dimensions.get('window').width-20,}}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={this.state.renderNotifications}
            keyExtractor={item => item.value}
            renderItem={({ item , index}) => 
                        
                    <TouchableOpacity
                    onPress={this.onNotificationClick} 
                    style={{marginHorizontal:10,flexDirection:"row",alignContent:"center",paddingVertical:10}}>

                                <View 
                                style= {{
                                        alignSelf:"center",
                                        alignItems:'center',
                                        justifyContent:'center',
                                        width: 60,
                                        height: 60,
                                        bottom:5,
                                        borderRadius:30,
                                        backgroundColor:"#4F45F0",
                                        elevation:8,

                                    }}>
                                    <Icon5 name="hearto" color={'#fff'} size={30} />
                                </View>

                            <View style={{flex:1,borderBottomWidth :0.5,borderColor:"#0000005a" ,alignItems:"center",justifyContent:"space-between", flexDirection:"row"}}>

                                <View style={{marginLeft:10,width:"65%"}}>
                                    <Text style={{fontSize:15}}>{item.name}</Text>
                                </View>

                                <View style={{marginLeft:20,alignSelf:"flex-start"}}>
                                    <Text style={{fontSize:15,color:"#0000005a"}}>{item.orderdate}</Text>
                                </View>

                            </View>

                        </TouchableOpacity>
     
                        }
                />
        </View>
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
        height:Dimensions.get('window').height/100*8,
    },
    subcontainer2:{
        height:Dimensions.get('window').height/100*92,
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