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
    KeyboardAvoidingView,
    StatusBar
  } from 'react-native';

  import { Header } from '@react-navigation/stack';

  import Icon1 from 'react-native-vector-icons/Entypo';
  import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
  import Icon3 from 'react-native-vector-icons/FontAwesome';
  import Icon4 from 'react-native-vector-icons/FontAwesome5';
  import Icon5 from 'react-native-vector-icons/AntDesign';
  import Icon6 from 'react-native-vector-icons/Ionicons';
  import Icon7 from 'react-native-vector-icons/EvilIcons';
  import Icon8 from 'react-native-vector-icons/SimpleLineIcons';
  import Icon9 from 'react-native-vector-icons/Fontisto';

  import AsyncStorage from '@react-native-async-storage/async-storage';
  import AppLoader from '../component/loader';
  import DropdownAlert from 'react-native-dropdownalert';
  import ProviderServices from '../../api/providerservices';
  import NetworkCheck from '../../utils/networkcheck';

export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          userdata:{},
          activeNumber:0,
          appliedNumber:0,
          totalNumber:0,
          togglePasswordVisibility:true,
          appLoading:false,
      };

      this.onNotificationClick = this.onNotificationClick.bind(this);
      this.onSettingClick = this.onSettingClick.bind(this);
      this.onActivePostClick = this.onActivePostClick.bind(this);
      this.onAppliedUserClick = this.onAppliedUserClick.bind(this);
      this.onTotalPostClick = this.onTotalPostClick.bind(this);
      this.onAddPostClick = this.onAddPostClick.bind(this);

    }

    componentDidMount(){
        this.getUserData();
        var that = this;
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            that.ProviderHomeApiCall();
          });
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    async getUserData(){
        var value = await AsyncStorage.getItem('User');
        value = JSON.parse(value);
        this.setState({userdata: value},()=>{
            console.log(this.state.userdata)
            this.ProviderHomeApiCall();
        })
    }

    async ProviderHomeApiCall(){

        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {  

        let myFormData = new FormData();
        myFormData.append("user_id",this.state.userdata._id)

        try {
            const { data } = await ProviderServices.ProviderHome(myFormData)
            console.log(data);

            if( data.status == 0 ){
                this.dropDownAlertRef.alertWithType('error', 'Something went wrong ...');
            }

            if( data.status == 1){
                this.setState({
                    activeNumber: data.total_active,
                    appliedNumber: data.totalpost_apply,
                    totalNumber: data.totalpost
                })
            }

          }
          catch(error){
            console.log(error)
            this.setState({appLoading: false})
            console.log(error.data)
            this.dropDownAlertRef.alertWithType('error', 'Failed', "Authentication Failed");
          }
        }
        else{
            this.dropDownAlertRef.alertWithType('error', 'No Internet Connection', "please check your device connection");
        }
    }

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
        <StatusBar
           backgroundColor = "#4F45F0"
           barStyle = "light-content"
         />
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
                <Text style={{color:'#4F45F0',fontSize:22}}>Welcome, {this.state.userdata.firstname}</Text>
        </View>

        <View style={{flexDirection:'row',marginTop:35,marginHorizontal:13,justifyContent:'space-between'}}>
            <TouchableOpacity  onPress={this.onActivePostClick} style={{borderRadius:15,backgroundColor:'#4F45F01a'}}>
                <View style={{}}>
                <Icon6 name="md-documents-outline" color={'#4F45F08a'} size={85}  style={{paddingVertical:10,paddingLeft:10}}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                <View style={{marginHorizontal:17}}><Text style={{color:'#4F45F0',fontSize:15}}>Active Post</Text></View>
                <View style={{marginHorizontal:17}}><Text style={{color:'#4F45F0',fontSize:17}}>({this.state.activeNumber})</Text></View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={this.onAppliedUserClick} style={{borderRadius:15,backgroundColor:'#4F45F01a'}}>
                <View style={{}}>
                <Icon4 name="user" color={'#4F45F08a'} size={85}  style={{paddingVertical:10,paddingLeft:15}}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                <View style={{marginHorizontal:17}}><Text style={{color:'#4F45F0',fontSize:15}}>Today's{`\n`}Applied User</Text></View>
                <View style={{marginHorizontal:17}}><Text style={{color:'#4F45F0',fontSize:17}}>({this.state.appliedNumber})</Text></View>
                </View>
            </TouchableOpacity>
        </View>
        
        <TouchableOpacity  onPress={this.onTotalPostClick} style={{borderRadius:15,backgroundColor:'#4F45F01a',marginHorizontal:13,marginTop:30}}>
                <View style={{}}>
                <Icon2 name="text-box-check-outline" color={'#4F45F08a'} size={85}  style={{paddingVertical:10,paddingLeft:8}}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                <View style={{marginHorizontal:17}}><Text style={{color:'#4F45F0',fontSize:15}}>Total Post</Text></View>
                <View style={{marginHorizontal:17}}><Text style={{color:'#4F45F0',fontSize:17}}>({this.state.totalNumber})</Text></View>
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
        <DropdownAlert inactiveStatusBarStyle="light-content" inactiveStatusBarBackgroundColor="#4F45F0" ref={ref => this.dropDownAlertRef = ref} />
        <AppLoader isAppLoading={this.state.appLoading}/>
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
        width:Dimensions.get('window').width,
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