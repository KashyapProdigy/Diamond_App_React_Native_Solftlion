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
    BackHandler,
    Alert
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

  import AsyncStorage from '@react-native-async-storage/async-storage';

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
                status:'Open',
                description:'full time jobs in shining diamonds',
                date:'03-05-2021',
                experience:'1-5 years',
                location:'Navsari,Gujarat',
                company:'Pavan Impex',
                title:'Shiner',
                id: 2
            },
            {   
                status:'Closed',
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
                status:'Open',
                description:'full time jobs in shining diamonds',
                date:'03-05-2021',
                experience:'1-5 years',
                location:'Navsari,Gujarat',
                company:'Pavan Impex',
                title:'Shiner',
                id: 5
            },
            {   
                status:'Open',
                description:'full time jobs in shining diamonds',
                date:'03-05-2021',
                experience:'1-5 years',
                location:'Navsari,Gujarat',
                company:'Pavan Impex',
                title:'4p Operator',
                id: 6
            },
        ],
        categories:[
            {
                value: "Grader"
            },
            {
                value: "Signer"
            },
            {
                value: "Office-Staff"
            },
            {
                value: "Round-Cut"
            },
            {
                value: "Fancy"
            },
            {
                value: "4P"
            },
            {
                value: "demo"
            }
        ],
          userdata:{},
          searchstring:'',
          togglePasswordVisibility:true,
          loading:false,
      };

      this.onFilterClick = this.onFilterClick.bind(this);
      this.onNotificationClick = this.onNotificationClick.bind(this);
      this.onSettingClick = this.onSettingClick.bind(this);
      this.onCategoryClick = this.onCategoryClick.bind(this);
      this.onApplyNowClick = this.onApplyNowClick.bind(this);
      this.onSaveJobClick = this.onSaveJobClick.bind(this);
    }

    componentDidMount(){
        this.getUserData();
    }

    async getUserData(){
        var value = await AsyncStorage.getItem('User');
        value = JSON.parse(value);
        this.setState({userdata: value},()=>{console.log(this.state.userdata)})
    }

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

    onSaveJobClick(){
        this.dropDownAlertRef.alertWithType('success', 'Saved !', "Job Saved Succcessfully !",null,1500)

        setTimeout(() => {
            this.props.navigation.navigate('SavedJobSeeker')
            }, 2500);
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
        <View style={{backgroundColor : '#4F45F0' , flex:25}} >

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

            <View style={{marginTop:20,marginLeft:20}}>
                <Text style={{color:'white',fontSize:22}}>Welcome, {this.state.userdata.firstname}</Text>
            </View>

            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                underlineColorAndroid = "transparent"
                placeholder = "What are you looking for ? "
                placeholderTextColor = "#0000003a"
                autoCapitalize = "none"
                onChangeText={(value) => this.setState({searchstring:value})}  />
               <Icon3 name="search" color={'#4F45F0'} size={26}  style={styles.iconInputImage}/>
            </View>

        </View>
        
        <View style={{ flex:75 ,}}>

        <View style={{marginTop:8,marginHorizontal:20}}>
                <Text style={{color:'#000',fontSize:18}}>Search by category</Text>
        </View>

        <View style={{marginTop:10,marginBottom:8}}>
            <FlatList
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={this.state.categories}
            renderItem={this.renderItem}
            keyExtractor={item => item.value}
            />
        </View>

        <View style={{marginTop:8,marginHorizontal:20}}>
                <Text style={{color:'#000',fontSize:18}}>Recommended Jobs</Text>
        </View>


        <View style={{marginHorizontal:20,marginTop:5}}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 170,paddingTop:10 }}
                    data={this.state.renderjobs}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => 
                        
                        <View style={{borderRadius:15,borderWidth:0.5,marginTop:10,backgroundColor:'#0000000a'}}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{marginVertical:10,marginLeft:20}}><Icon4 name="user" color={'#4F45F0'} size={45} /></View>
                                <View style={{marginVertical:10,marginLeft:30,width:'60%'}}> 
                                    <Text style={{fontSize:16,fontWeight:'bold'}}>{item.title}</Text>
                                    <Text style={{marginTop:6}}>{item.company}</Text>
                                </View >
                                <TouchableOpacity onPress={this.onSaveJobClick} style={{paddingVertical:10,paddingHorizontal:10}}><Icon3 name="bookmark" color={'#4F45F0'} size={28} /></TouchableOpacity>
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
                                <View style={{padding:10,backgroundColor:'#9af5a56a',alignItems:'center',borderRadius:10}}><Text style={{marginLeft:5,color:'#15d12c',fontWeight:"900"}}>{item.status}</Text></View>
                                <TouchableOpacity onPress={this.onApplyNowClick} style={{flexDirection:'row',alignItems:'center',marginRight:20}}>
                                    <Text style={{color:'#4F45F0',fontSize:16}}>Apply Now</Text>
                                    <Icon5 style={{top:2}} name="arrowright" color={'#4F45F0'} size={28} />
                                </TouchableOpacity> 
                            </View>
                        </View>
                        }
                />
        </View>

        </View>
        </ImageBackground> 
        <DropdownAlert inactiveStatusBarStyle="light-content" inactiveStatusBarBackgroundColor="#4F45F0" ref={ref => this.dropDownAlertRef = ref} />
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
        padding:10,
        marginHorizontal:10
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