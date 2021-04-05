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
    Alert
  } from 'react-native';

  import Icon1 from 'react-native-vector-icons/Entypo';
  import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
  import Icon3 from 'react-native-vector-icons/FontAwesome';
  import Icon4 from 'react-native-vector-icons/FontAwesome5';
  import Icon5 from 'react-native-vector-icons/AntDesign';
  import Icon6 from 'react-native-vector-icons/Ionicons';
  import Icon7 from 'react-native-vector-icons/EvilIcons';
  import Icon8 from 'react-native-vector-icons/SimpleLineIcons';

export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        renderjobs:[
            {   
                status:'Open',
                description:'we provide full time jobs in grading diamonds',
                date:'01-04-2021',
                experience:'1-5 years',
                location:'Surat,Gujarat',
                company:'Shree Ram Krishna',
                title:'Grader',
                id:1
            },
            {   
                status:'Closed',
                description:'full time jobs in shining diamonds',
                date:'03-05-2021',
                experience:'1-5 years',
                location:'Navsari,Gujarat',
                company:'Pavan Impex',
                title:'Shiner',
                id: 2
            },
            {   
                status:'Open',
                description:'full time jobs in shining diamonds',
                date:'03-05-2021',
                experience:'1+ years',
                location:'Mumbai',
                company:'Agarwal Impex',
                title:'Office Staff',
                id: 3
            },
            {   
                status:'Open',
                description:'full time jobs in shining diamonds',
                date:'03-05-2021',
                experience:'1-5 years',
                location:'Surat,Gujarat',
                company:'Pavan Impex',
                title:'FancyCutting',
                id: 4
            },
            {   
                status:'Closed',
                description:'full time jobs in shining diamonds',
                date:'03-05-2021',
                experience:'1-5 years',
                location:'Navsari,Gujarat',
                company:'Pavan Impex',
                title:'Shiner',
                id: 5
            },
            {   
                status:'Closed',
                description:'full time jobs in shining diamonds',
                date:'03-05-2021',
                experience:'1-5 years',
                location:'Navsari,Gujarat',
                company:'Pavan Impex',
                title:'4p Operator',
                id: 6
            },
        ],
          toggleOptionsVisibility:false,
          toggleCardID:null,
          loading:false,
      };

      this.onFilterClick = this.onFilterClick.bind(this);
      this.onNotificationClick = this.onNotificationClick.bind(this);
      this.onSettingClick = this.onSettingClick.bind(this);
      this.onCategoryClick = this.onCategoryClick.bind(this);
      this.onApplyNowClick = this.onApplyNowClick.bind(this);
      this.onOptionClick = this.onOptionClick.bind(this);
      this.onDeactivatePostClick = this.onDeactivatePostClick.bind(this);
      this.onActivatePostClick = this.onActivatePostClick.bind(this);
      this.onDeletePostClick = this.onDeletePostClick.bind(this);
    }

    componentDidMount(){}

    onFilterClick(){
        this.props.navigation.navigate('HomeSeeker');
    }

    onNotificationClick(){
        this.props.navigation.navigate('HomeSeeker');
    }

    onSettingClick(){
        this.props.navigation.navigate('SettingSeeker');
    }

    onCategoryClick(){
        this.props.navigation.navigate('ProfileSeeker');
    }

    onApplyNowClick(){
        this.props.navigation.navigate('ApplyForJobSeeker');
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

    onDeactivatePostClick(){
        this.setState({toggleCardID:null,toggleOptionsVisibility:false,})
        Alert.alert(
            'Deactivate Post',
            'want to deactivate this job post ?',
            [
              {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Yes', onPress: () =>  this.deactivateJobPost()},
            ],
            {cancelable: false},
          );
    }

    onActivatePostClick(){
        this.setState({toggleCardID:null,toggleOptionsVisibility:false,})
        Alert.alert(
            'Activate Post',
            'want to activate this job post ?',
            [
              {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Yes', onPress: () =>  this.activateJobPost()},
            ],
            {cancelable: false},
          );
    }


    onDeletePostClick(){
        this.setState({toggleCardID:null,toggleOptionsVisibility:false,})
        Alert.alert(
            'Delete Post',
            'want to delete this job post ?',
            [
              {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Yes', onPress: () =>  this.deleteJobPost()},
            ],
            {cancelable: false},
          );
    }
 
    deleteJobPost(){
        this.props.navigation.navigate('AllJobProvider');
    }

    deactivateJobPost(){
        this.props.navigation.navigate('AllJobProvider');
    }

    activateJobPost(){
        this.props.navigation.navigate('AllJobProvider');
    }
 
 

    render () {
      return (
        <View style={styles.maincontainer}>
        <ImageBackground source={require('../../assets/image/splash_bg.png')} style={styles.backgroundImage} resizeMode='stretch' >
        <View style={{backgroundColor : '#4F45F0' , flex:8}}>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>

            <View style={{marginTop:20,marginLeft:20}}>
                <Text style={{color:'white',fontSize:22}}>All Jobs</Text>
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
        
        <View style={{ flex:75 ,}}>

        <View style={{marginHorizontal:20}}>
        <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 170,paddingTop:10 }}
                    data={this.state.renderjobs}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => 
                        
                        <View style={{borderRadius:15,borderWidth:0.5,marginTop:10,backgroundColor:'#0000000a'}}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{marginVertical:10,marginLeft:20}}><Icon4 name="user" color={'#4F45F0'} size={60} /></View>
                                <View style={{marginVertical:10,marginLeft:30,width:'60%'}}> 
                                    <Text style={{fontSize:18,fontWeight:'bold'}}>{item.title}</Text>
                                    <Text style={{marginTop:6}}>{item.company}</Text>
                                </View >
                                <View>
                                <TouchableOpacity onPress={()=>this.onOptionClick(item.id)}  
                                style={{paddingVertical:10,paddingHorizontal:10}}>
                                    <Icon8 name="options-vertical" color={'#4F45F0'} size={28} />
                                </TouchableOpacity>
                                {this.state.toggleOptionsVisibility && (this.state.toggleCardID == item.id) ?
                                <View style={{backgroundColor:'#ffffff5a',right:15,top:55,justifyContent:'center',alignItems:'center',borderRadius:12,width:130,borderWidth:0.8,position:"absolute"}}>
                                    <TouchableOpacity onPress={()=>{item.status == 'Open' ? this.onDeactivatePostClick() : this.onActivatePostClick() }} 
                                    style={{borderBottomWidth:0.8}}>
                                    <Text style={{padding:10}}>{item.status == 'Open' ? 'Deactivate Post' : 'Activate Post'}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={this.onDeletePostClick} style={{padding:10}}>
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
                                <Text style={{marginLeft:10}}>{item.experience}</Text>
                            </View>

                            <View style={{flexDirection:'row',marginLeft:20,marginTop:10,alignItems:'center'}}>
                            <Icon6 name="briefcase-outline" color={'#000'} size={20} />
                                <Text style={{marginLeft:10}}>{item.description}</Text>
                            </View>

                            <View style={{flexDirection:'row',marginLeft:20,marginTop:10,alignItems:'center'}}>
                                <Icon7 name="calendar" color={'#000'} size={25} />
                                <Text style={{marginLeft:5}}>{item.date}</Text>
                            </View>

                            <View style={{flexDirection:'row',marginLeft:20,marginTop:25,marginBottom:15,alignItems:'center',justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{marginLeft:5,color:'#000',fontWeight:"900"}}>Status : </Text>
                                <View style={{padding:15,alignItems:'center',borderRadius:10,backgroundColor:(item.status == 'Open') ? '#9af5a56a' : '#0000003a'}}>
                                    <Text style={{color:(item.status == 'Open') ? '#15d12c' : '#000000',fontWeight:"900"}}>{item.status}</Text>
                                </View>
                                </View>
                                
                            </View>
                        </View>
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