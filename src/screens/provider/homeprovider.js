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
    KeyboardAvoidingView 
  } from 'react-native';

  import { Header } from '@react-navigation/stack';

  import Icon1 from 'react-native-vector-icons/Entypo';
  import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
  import Icon3 from 'react-native-vector-icons/FontAwesome';
  import Icon4 from 'react-native-vector-icons/FontAwesome5';
  import Icon5 from 'react-native-vector-icons/AntDesign';
  import Icon6 from 'react-native-vector-icons/Ionicons';
  import Icon7 from 'react-native-vector-icons/EvilIcons';
  import Icon8 from 'react-native-vector-icons/Fontisto';
  import Icon9 from 'react-native-vector-icons/Octicons';

export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          togglePasswordVisibility:true,
          loading:false,
      };

      this.onNotificationClick = this.onNotificationClick.bind(this);
      this.onSettingClick = this.onSettingClick.bind(this);
      this.onActivePostClick = this.onActivePostClick.bind(this);
      this.onAppliedUserClick = this.onAppliedUserClick.bind(this);
      this.onTotalPostClick = this.onTotalPostClick.bind(this);
      this.onAddPostClick = this.onAddPostClick.bind(this);

    }

    componentDidMount(){}

    onNotificationClick(){
        this.props.navigation.navigate('HomeProvider');
    }

    onSettingClick(){
        this.props.navigation.navigate('SettingProvider');
    }

    onActivePostClick(){
        this.props.navigation.navigate('HomeProvider');
    }

    onAppliedUserClick(){
        this.props.navigation.navigate('HomeProvider');
    }

    onTotalPostClick(){
        this.props.navigation.navigate('HomeProvider');
    }

    onAddPostClick(){
        this.props.navigation.navigate('CreateJobProvider');
    }
 
  renderItem = ({ item }) => (
    <TouchableOpacity  style={styles.item}>
    <Text style={styles.title}>{item.value}</Text>
    </TouchableOpacity>
  );

    render () {
      return (

        <View style={styles.maincontainer}>
        <ImageBackground source={require('../../assets/image/splash_bg.png')} style={styles.backgroundImage} resizeMode='stretch' >
        <View  style={{backgroundColor : '#4F45F0' , flex:8}} >

            <View style={{alignSelf:'flex-end',flexDirection:'row',marginHorizontal:10,marginTop:20}}>
                <TouchableOpacity  onPress={this.onNotificationClick} style={{marginHorizontal:10}}>
                <Icon6 name="briefcase-outline" color={'white'} size={26} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.onSettingClick} style={{marginHorizontal:10}}>
                <Icon6 name="settings-outline" color={'white'} size={26} />
                </TouchableOpacity>
            </View>

        </View>
        
        <View style={{ flex:92 ,}}>

        <View style={{marginTop:20,marginLeft:20}}>
                <Text style={{color:'#4F45F0',fontSize:22}}>Welcome, User</Text>
        </View>

        <View style={{flexDirection:'row',marginTop:35,marginHorizontal:20,justifyContent:'space-between'}}>
            <TouchableOpacity  onPress={this.onActivePostClick} style={{borderRadius:15,backgroundColor:'#4F45F01a'}}>
                <View style={{}}>
                <Icon6 name="md-documents-outline" color={'#4F45F08a'} size={90}  style={{paddingVertical:10,paddingLeft:10}}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                <View style={{marginHorizontal:17}}><Text style={{color:'#4F45F0',fontSize:15}}>Active Post</Text></View>
                <View style={{marginHorizontal:17}}><Text style={{color:'#4F45F0',fontSize:17}}>(0)</Text></View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={this.onAppliedUserClick} style={{borderRadius:15,backgroundColor:'#4F45F01a'}}>
                <View style={{}}>
                <Icon4 name="user" color={'#4F45F08a'} size={90}  style={{paddingVertical:10,paddingLeft:15}}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                <View style={{marginHorizontal:17}}><Text style={{color:'#4F45F0',fontSize:15}}>Today's{`\n`}Applied User</Text></View>
                <View style={{marginHorizontal:17}}><Text style={{color:'#4F45F0',fontSize:17}}>(0)</Text></View>
                </View>
            </TouchableOpacity>
        </View>
        
        <TouchableOpacity  onPress={this.onTotalPostClick} style={{borderRadius:15,backgroundColor:'#4F45F01a',marginHorizontal:20,marginTop:30}}>
                <View style={{}}>
                <Icon2 name="text-box-check-outline" color={'#4F45F08a'} size={90}  style={{paddingVertical:10,paddingLeft:8}}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                <View style={{marginHorizontal:17}}><Text style={{color:'#4F45F0',fontSize:15}}>Total Post</Text></View>
                <View style={{marginHorizontal:17}}><Text style={{color:'#4F45F0',fontSize:17}}>(0)</Text></View>
                </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={this.onAddPostClick} 
        activeOpacity={0.5}
        style= {{
                //Here is the trick
                position: 'absolute',
                alignItems:'center',
                justifyContent:'center',
                width: 60,
                height: 60,
                borderRadius:30,
                backgroundColor:"#4F45F0",
                alignItems: 'center',
                justifyContent: 'center',
                right: 30,
                bottom: 30,
            }}>
                    <Icon5 name="addfile" color={'#fff'} size={30}  style={{}}/>
        </TouchableOpacity>

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
        backgroundColor: '#4F45F02a',
        borderRadius:15,
        padding:15,
        marginHorizontal:10
      },
      title: {
        fontSize: 18,
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