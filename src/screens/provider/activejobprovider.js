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
    Alert,
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

  import AsyncStorage from '@react-native-async-storage/async-storage';
  import AppLoader from '../component/loader';
  import DropdownAlert from 'react-native-dropdownalert';
  import moment from 'moment';
  import ProviderServices from '../../api/providerservices';
  import NetworkCheck from '../../utils/networkcheck';

export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          renderjobs:null,
          userdata:{},
          toggleOptionsVisibility:false,
          toggleCardID:null,
          appLoading:false,
          appFetchingLoader:false,
          myCustomAlert:0,
      };

      this.onFilterClick = this.onFilterClick.bind(this);
      this.onNotificationClick = this.onNotificationClick.bind(this);
      this.onSettingClick = this.onSettingClick.bind(this);
      this.onOptionClick = this.onOptionClick.bind(this);
      this.onDeactivatePostClick = this.onDeactivatePostClick.bind(this);
      this.onDeletePostClick = this.onDeletePostClick.bind(this);
      this.onEmployeeAppliedClick = this.onEmployeeAppliedClick.bind(this);
      this.onCloseRecruitmentClick = this.onCloseRecruitmentClick.bind(this);

    }

    componentDidMount(){
        this.getUserData();
        var that = this;
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            that.ProviderActivePostApiCall();
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
            this.ProviderActivePostApiCall();
        })
    }

    async ProviderActivePostApiCall(){

        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {  

        this.setState({appFetchingLoader:true})

        let myFormData = new FormData();
        myFormData.append("user_id",this.state.userdata._id)
        myFormData.append("status",1)

        try {
            const { data } = await ProviderServices.ProvideActivePosts(myFormData)
            console.log(data);

            if( data.status == 0 ){
                this.setState({
                    renderjobs:null,
                    appFetchingLoader:false,
                    appLoading:false
                })
            }

            if( data.status == 1 ){
                this.setState({
                    renderjobs:data.data,
                    appFetchingLoader:false,
                    appLoading:false
                })
            }

            if(this.state.myCustomAlert == 0){}
            if(this.state.myCustomAlert == 1){
                this.setState({myCustomAlert:0})
                this.dropDownAlertRef.alertWithType('success', "Job Deactivated");
            }
            if(this.state.myCustomAlert == 2){
                this.setState({myCustomAlert:0})
                this.dropDownAlertRef.alertWithType('success', "Job Recruitment Closed");
            }
            if(this.state.myCustomAlert == 3){
                this.setState({myCustomAlert:0})
                this.dropDownAlertRef.alertWithType('success', "Job Deleted");
            }

          }
          catch(error){
            this.setState({appFetchingLoader:false})
            console.log(error)
            console.log(error.data)
            this.dropDownAlertRef.alertWithType('error', 'Failed', "Authentication Failed");
          }
        }
        else{
            this.dropDownAlertRef.alertWithType('error', 'No Internet Connection', "please check your device connection");
        }
    }

    onFilterClick(){
        this.props.navigation.navigate('HomeProvider');
    }

    onNotificationClick(){
        this.props.navigation.navigate('HomeProvider');
    }

    onSettingClick(){
        this.props.navigation.navigate('SettingProvider');
    }

    onOptionClick(paramid){
        if(this.state.toggleOptionsVisibility == false && this.state.toggleCardID == null){
            this.setState({toggleCardID:paramid,toggleOptionsVisibility:true,})
            return
        }
        if(this.state.toggleOptionsVisibility == true && this.state.toggleCardID != null && this.state.toggleCardID != paramid){
            this.setState({toggleCardID:paramid,toggleOptionsVisibility:true})
            return
        }
        if(this.state.toggleOptionsVisibility == true && this.state.toggleCardID != null){
            this.setState({toggleCardID:null,toggleOptionsVisibility:false})
            return
        }
    }

    onDeactivatePostClick(postid){
        this.setState({toggleCardID:null,toggleOptionsVisibility:false,})
        Alert.alert(
            'Deactivate Post',
            'want to deactivate this job post ?',
            [
              {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Yes', onPress: () =>  this.deactivateJobPost(postid)},
            ],
            {cancelable: false},
          );
    }

    onDeletePostClick(postid){
        this.setState({toggleCardID:null,toggleOptionsVisibility:false,})
        Alert.alert(
            'Delete Post',
            'want to delete this job post ?',
            [
              {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Yes', onPress: () =>  this.deleteJobPost(postid)},
            ],
            {cancelable: false},
          );
    }
 
    onEmployeeAppliedClick(){
        this.props.navigation.navigate('EmployeeApplied');
    }

    onCloseRecruitmentClick(postid){
        Alert.alert(
            'Close Recruitment',
            'want to close recruitment for this job ?',
            [
              {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Yes', onPress: () =>  this.closeRecruitment(postid)},
            ],
            {cancelable: false},
          );
    }

    async deleteJobPost(postID){
        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {  

        this.setState({appLoading:true})

        let myFormData = new FormData();
        myFormData.append("_id",postID)
        myFormData.append("status",3)

        try {
            const { data } = await ProviderServices.ProvideTogglePosts(myFormData)
            console.log(data);

            if( data.status == 3 ){
                this.setState({myCustomAlert:3})
            }
            
            this.ProviderActivePostApiCall();
          }
          catch(error){
            this.setState({appLoading:false})
            console.log(error)
            console.log(error.data)
            this.dropDownAlertRef.alertWithType('error', 'Failed', "Authentication Failed");
          }
        }
        else{
            this.dropDownAlertRef.alertWithType('error', 'No Internet Connection', "please check your device connection");
        }
    }

    async deactivateJobPost(postID){
        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {  

        this.setState({appLoading:true})

        let myFormData = new FormData();
        myFormData.append("_id",postID)
        myFormData.append("status",2)

        try {
            const { data } = await ProviderServices.ProvideTogglePosts(myFormData)
            console.log(data);

            if( data.status == 2){
                this.setState({myCustomAlert:1})
            }
            
            this.ProviderActivePostApiCall();
          }
          catch(error){
            this.setState({appLoading:false})
            console.log(error)
            console.log(error.data)
            this.dropDownAlertRef.alertWithType('error', 'Failed', "Authentication Failed");
          }
        }
        else{
            this.dropDownAlertRef.alertWithType('error', 'No Internet Connection', "please check your device connection");
        }
    }

    async closeRecruitment(postID){
        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {  

        this.setState({appLoading:true})

        let myFormData = new FormData();
        myFormData.append("_id",postID)
        myFormData.append("status",0)

        try {
            const { data } = await ProviderServices.ProvideTogglePosts(myFormData)
            console.log(data);

            if( data.status == 0 ){
                this.setState({myCustomAlert:2})
            }
            
            this.ProviderActivePostApiCall();
          }
          catch(error){
            this.setState({appLoading:false})
            console.log(error)
            console.log(error.data)
            this.dropDownAlertRef.alertWithType('error', 'Failed', "Authentication Failed");
          }
        }
        else{
            this.dropDownAlertRef.alertWithType('error', 'No Internet Connection', "please check your device connection");
        }
    }

    render () {
      return (
        <View style={styles.maincontainer}>
        <StatusBar
           backgroundColor = "#4F45F0"
           barStyle = "light-content"
         />
        <ImageBackground source={require('../../assets/image/splash_bg.png')} style={styles.backgroundImage} resizeMode='stretch' >
        <View style={{backgroundColor : '#4F45F0' , flex:8}}>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>

            <View style={{marginTop:20,marginLeft:20}}>
                <Text style={{color:'white',fontSize:22}}>Active Jobs</Text>
            </View>

            <View style={{alignSelf:'flex-end',flexDirection:'row',marginHorizontal:10,marginTop:20}}>
                <TouchableOpacity  onPress={this.onFilterClick} style={{marginHorizontal:10}}>
                <Icon5 name="filter" color={'white'} size={26} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.onNotificationClick} style={{marginHorizontal:10}}>
                <Icon6 name="briefcase-outline" color={'white'} size={26} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.onSettingClick} style={{marginHorizontal:10}}>
                <Icon6 name="settings-outline" color={'white'} size={26} />
                </TouchableOpacity>
            </View>

            </View>

        </View>
        
        <View style={{ flex:92,}}>

        {this.state.renderjobs == null ? 
            
                this.state.appFetchingLoader == true ? 
                null 
                :
                <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
                    <Text style={{color:'#4F45F0',fontSize:22}}>No Active Jobs Found</Text>
                </View>

            :

            <View style={{marginHorizontal:20}}>
            <FlatList
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 170,paddingTop:10 }}
                        data={this.state.renderjobs}
                        keyExtractor={item => item._id}
                        renderItem={({ item }) => 
                            
                            <View style={{borderRadius:15,borderWidth:0.5,marginTop:20,backgroundColor:'#0000000a'}}>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{marginVertical:10,marginLeft:20}}><Icon4 name="user" color={'#4F45F0'} size={48} /></View>
                                    <View style={{marginVertical:10,marginLeft:30,width:'60%'}}> 
                                        <Text style={{fontSize:18,fontWeight:'bold'}}>{item.category}</Text>
                                        <Text style={{marginTop:6}}>{item.job_title}</Text>
                                    </View >
                                    <View>
                                    <TouchableOpacity onPress={()=>this.onOptionClick(item._id)} 
                                        style={{paddingVertical:10,paddingHorizontal:10}}>
                                        <Icon8 name="options-vertical"color={'#4F45F0'} size={26} />
                                    </TouchableOpacity>
                                    {this.state.toggleOptionsVisibility && (this.state.toggleCardID == item._id) ?
                                    <View style={{backgroundColor:'#ffffff5a',right:15,top:55,justifyContent:'center',alignItems:'center',borderRadius:12,width:130,borderWidth:0.8,position:"absolute"}}>
                                        <TouchableOpacity onPress={()=>{this.onDeactivatePostClick(item._id)}} style={{borderBottomWidth:0.8}}>
                                        <Text style={{padding:10}}>Deactivate Post</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=>{this.onDeletePostClick(item._id)}} style={{padding:10}}>
                                        <Text>Delete Post</Text>
                                        </TouchableOpacity>
                                    </View>
                                    :null
                                    }
                                    </View>
                                </View>
    
                                <View style={{flexDirection:'row',marginLeft:20,marginTop:20,alignItems:'center'}}>
                                    <Icon7 name="location" color={'#000'} size={25} />
                                    <Text style={{marginLeft:5}}>{item.location}</Text>
                                </View>
    
                                <View style={{flexDirection:'row',marginLeft:20,marginTop:10,alignItems:'center'}}>
                                    <Icon6 name="briefcase-outline" color={'#000'} size={20} />
                                    <Text style={{marginLeft:10}}>experience   {item.experience} Years</Text>
                                </View>
    
    
                                <View style={{flexDirection:'row',marginLeft:20,marginTop:10,alignItems:'center'}}>
                                    <Icon7 name="calendar" color={'#000'} size={25} />
                                    <Text style={{marginLeft:5}}>posted   {moment(item.updated_at).format('Do MMMM,YYYY')}</Text>
                                </View>
    
                                <View style={{flexDirection:'row',marginTop:25,alignItems:'center',paddingVertical:10,justifyContent:'space-between',backgroundColor:'#fff',borderRadius:15}}>
                                    <TouchableOpacity onPress={this.onEmployeeAppliedClick} style={{flexDirection:'row',alignItems:'center'}}>
                                    <Text style={{marginLeft:25,color:'#4F45F0',fontSize:15,fontWeight:"900"}}>Employee Applied (2)</Text>
                                    </TouchableOpacity>
    
                                    <View style={{width:1,borderWidth:0.5,height:30}}></View>
    
                                    <TouchableOpacity onPress={()=>{this.onCloseRecruitmentClick(item._id)}} style={{flexDirection:'row',alignItems:'center'}}>
                                    <Text style={{marginRight:25,color:'#4F45F0',fontSize:15,fontWeight:"900"}}>Close Recruitment</Text>
                                    </TouchableOpacity>
                                    
                                </View>
                            </View>
                            }
                    />
            </View>
        }

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
        backgroundColor:"#fff" 
    },
    item: {
        backgroundColor: '#4F45F02a',
        borderRadius:15,
        padding:15,
        marginHorizontal:10
      },
      job_title: {
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


           // [
            //     {   
            //         status:'Open',
            //         description:'we provide full time jobs in grading diamonds',
            //         updated_at:'01-04-2021',
            //         experience:'1-5 years',
            //         location:'Surat,Gujarat',
            //         company:'Shree Ram Krishna',
            //         job_title:'Grader',
            //         _id:1
            //     },
            //     {   
            //         status:'Closed',
            //         description:'full time jobs in shining diamonds',
            //         updated_at:'03-05-2021',
            //         experience:'1-5 years',
            //         location:'Navsari,Gujarat',
            //         company:'Pavan Impex',
            //         job_title:'Shiner',
            //         _id: 2
            //     },
            //     {   
            //         status:'Open',
            //         description:'full time jobs in shining diamonds',
            //         updated_at:'03-05-2021',
            //         experience:'1+ years',
            //         location:'Mumbai',
            //         company:'Agarwal Impex',
            //         job_title:'Office Staff',
            //         _id: 3
            //     },
            //     {   
            //         status:'Open',
            //         description:'full time jobs in shining diamonds',
            //         updated_at:'03-05-2021',
            //         experience:'1-5 years',
            //         location:'Surat,Gujarat',
            //         company:'Pavan Impex',
            //         job_title:'FancyCutting',
            //         _id: 4
            //     },
            //     {   
            //         status:'Closed',
            //         description:'full time jobs in shining diamonds',
            //         updated_at:'03-05-2021',
            //         experience:'1-5 years',
            //         location:'Navsari,Gujarat',
            //         company:'Pavan Impex',
            //         job_title:'Shiner',
            //         _id: 5
            //     },
            //     {   
            //         status:'Closed',
            //         description:'full time jobs in shining diamonds',
            //         updated_at:'03-05-2021',
            //         experience:'1-5 years',
            //         location:'Navsari,Gujarat',
            //         company:'Pavan Impex',
            //         job_title:'4p Operator',
            //         _id: 6
            //     },
            // ]