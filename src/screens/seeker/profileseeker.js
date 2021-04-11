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
    ScrollView,
    StatusBar
  } from 'react-native';

  import Icon1 from 'react-native-vector-icons/Entypo';
  import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
  import Icon3 from 'react-native-vector-icons/FontAwesome';
  import Icon4 from 'react-native-vector-icons/FontAwesome5';
  import Icon5 from 'react-native-vector-icons/AntDesign';
  import Icon6 from 'react-native-vector-icons/Ionicons';
  import Icon7 from 'react-native-vector-icons/EvilIcons';

  import Modal from 'react-native-modal';
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
  import DropdownAlert from 'react-native-dropdownalert';


export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          firstname:'',
          lastname:'',
          email:'',
          mobile:'',
          address:'',
          city:'',
          state:'',
          cname:'',
          cjobexperience:'',
          cjobtitle:'',
          clastjobexperience:'',
          ctotalexperience:'',
          cstartdate:'',
          cenddate:'',
          companyArray:[],
          CompanyModalVisible: false,
          editting:false,
          loading:false,
      };

      this.onNotificationClick = this.onNotificationClick.bind(this);
      this.onSettingClick = this.onSettingClick.bind(this);
      this.onUpdateProfileClick = this.onUpdateProfileClick.bind(this);
      this.onCompanyModalSubmitClick = this.onCompanyModalSubmitClick.bind(this);
      this.onCompanyEditClick = this.onCompanyEditClick.bind(this);
      this.onCompanySubmitClick = this.onCompanySubmitClick.bind(this);
    }

    componentDidMount(){}


    onNotificationClick(){
        this.props.navigation.navigate('ProfileSeeker');
    }

    onSettingClick(){
        this.props.navigation.navigate('SettingSeeker');
    }

    onUpdateProfileClick(){
        this.dropDownAlertRef.alertWithType('success', 'Update Successfull', "User Profile Updated !",null,1500)

        setTimeout(() => {
            this.props.navigation.navigate('ProfileSeeker')
            }, 2500);    
    }

    onProfilePictureClick = () => {
        let options = {
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
    
        launchImageLibrary(options, (res) => {
          console.log('Response = ', res);
    
          if (res.didCancel) {
            console.log('User cancelled image picker');
          } else if (res.error) {
            console.log('ImagePicker Error: ', res.error);
          } else {
            const source = { uri: res.uri };
            console.log('response', JSON.stringify(res));
            this.setState({
              imageURI: res.uri
            });
          }
        });
    }

    CompanyModal = () => {
        this.setState({
            CompanyModalVisible: !this.state.CompanyModalVisible,            
            cname:'',
            cjobexperience:'',
            cjobtitle:'',
            clastjobexperience:'',
            cstartdate:'',
            cenddate:'',
            ctotalexperience:'',
            editting:false
        });
      };

    onCompanyModalSubmitClick(editable){
        if(editable){
            let CompanyName = this.state.cname;
            let CompanyWorkExperience = this.state.cjobexperience;
            let LastJobTitle = this.state.cjobtitle;
            let LastJobExperience = this.state.clastjobexperience;
            let LastJobStartDate = this.state.cstartdate;
            let LastJobEndDate = this.state.cenddate;
            let TotalExperience = this.state.ctotalexperience;
    
    
            let obj ={CompanyName,CompanyWorkExperience,LastJobTitle,LastJobExperience,LastJobStartDate,LastJobEndDate,TotalExperience}
            let finalArray = this.state.companyArray;
            finalArray[this.state.editIndex] = obj;
            this.setState({companyArray:finalArray,CompanyModalVisible:false,editIndex:null,editting:false})

        }else{
            let CompanyName = this.state.cname;
            let CompanyWorkExperience = this.state.cjobexperience;
            let LastJobTitle = this.state.cjobtitle;
            let LastJobExperience = this.state.clastjobexperience;
            let LastJobStartDate = this.state.cstartdate;
            let LastJobEndDate = this.state.cenddate;
            let TotalExperience = this.state.ctotalexperience;
    
    
            let obj ={CompanyName,CompanyWorkExperience,LastJobTitle,LastJobExperience,LastJobStartDate,LastJobEndDate,TotalExperience}
            let finalArray = this.state.companyArray;
            finalArray.push(obj);
            this.setState({companyArray:finalArray,CompanyModalVisible:false,editIndex:null,editting:false})
        }
    }

    onCompanyEditClick(item,index){
        this.setState({
            cname:item.CompanyName,
            cjobexperience:item.CompanyWorkExperience,
            cjobtitle:item.LastJobTitle,
            clastjobexperience:item.LastJobExperience,
            cstartdate:item.LastJobStartDate,
            cenddate:item.LastJobEndDate,
            ctotalexperience:item.TotalExperience,
            editting:true,
            editIndex:index,
            CompanyModalVisible:true
        })
    }

    onCompanySubmitClick(){
        this.dropDownAlertRef.alertWithType('success', 'Save Successfull', "Company Profile Saved !",null,1500)

        setTimeout(() => {
            this.props.navigation.navigate('ProfileSeeker')
            }, 2500);
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
                <Text style={{color:'white',fontSize:22}}>Profile</Text>
            </View>

            <View style={{alignSelf:'flex-end',flexDirection:'row',marginHorizontal:10,marginTop:20}}>
                <TouchableOpacity  onPress={this.onNotificationClick} style={{marginHorizontal:10}}>
                <Icon6 name="briefcase-outline" color={'white'} size={26} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.onSettingClick} style={{marginHorizontal:10}}>
                <Icon6 name="settings-outline" color={'white'} size={26} />
                </TouchableOpacity>
            </View>

            </View>

        </View>
        
        <View style={{ flex:92 }}>
            <ScrollView style={{flex:1,}}
            contentContainerStyle={{paddingBottom:50}}
            showsVerticalScrollIndicator={false}
            >

            <View style={{backgroundColor:"#4F45F0",alignItems:'center',}}>
            <TouchableOpacity  onPress={this.onProfilePictureClick} 
            style={{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: Dimensions.get('window').width * 0.5,
                height: Dimensions.get('window').width * 0.5,
                backgroundColor:'#4F45F0',
                justifyContent: 'center',
                alignItems: 'center',
                top:95}}>
                {
                    this.state.imageURI == null || this.state.imageURI == "" ?
                    <Image source={require('../../assets/image/dummy_avatar.png')} style={{height:150,width:150,borderRadius:75}} resizeMode='contain'></Image>
                    :
                    <Image source={{uri: `${this.state.imageURI}`}} style={{height:150,width:150,borderRadius:150/2}} />
                }    
            </TouchableOpacity>
            </View>

            <View style={{alignItems:'center',marginTop:115}}>
                <Text style={{fontSize:18}}>Softlion Infotech</Text>
            </View>

            <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row',borderTopWidth:0.8,borderBottomWidth:0.8,marginHorizontal:20,marginTop:15}}>
                <View style={{justifyContent:"center",alignItems:"center",margin:15}}>
                        <Text>Saved Job</Text>
                        <Text style={{padding:4,backgroundColor:"#4F45F05a",marginTop:5,borderRadius:5}}>2</Text>
                </View>

                <View style={{justifyContent:"center",alignItems:"center",margin:15}}>
                        <Text>Applied Job</Text>
                        <Text style={{padding:4,backgroundColor:"#4F45F05a",marginTop:5,borderRadius:5}}>5</Text>
                </View>
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{color:"#fff",alignSelf:'flex-start',backgroundColor:"#4F45F0",padding:5,borderRadius:5,fontSize:18}}>Personal Details</Text>
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>First Name</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                underlineColorAndroid = "transparent"
                placeholder = "First Name"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.firstname}
                onChangeText={(firstname) => this.setState({firstname})}  />
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Last Name</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                underlineColorAndroid = "transparent"
                placeholder = "Last Name"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.lastname}
                onChangeText={(lastname) => this.setState({lastname})}  />
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Email ID</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                underlineColorAndroid = "transparent"
                placeholder = "Email ID"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                keyboardType="email-address"
                value={this.state.email}
                onChangeText={(email) => this.setState({email})}  />
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Mobile Number</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                underlineColorAndroid = "transparent"
                placeholder = "Primary Mobile"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                keyboardType='phone-pad'
                value={this.state.mobile}
                onChangeText={(mobile) => this.setState({mobile})}  />
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Address</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                underlineColorAndroid = "transparent"
                placeholder = "Address"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.address}
                onChangeText={(address) => this.setState({address})}  />
            </View>

            <View style={{marginTop:15,marginHorizontal:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{}}>
                <Text style={{fontSize:18}}>Current City</Text>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    backgroundColor:'#4F45F01a',
                    marginTop:5,
                    height:45,
                    width:Dimensions.get('window').width/2.5,
                    borderRadius:7,
                    }}>
            <TextInput style = {styles.iconInputField}
                underlineColorAndroid = "transparent"
                placeholder = "City"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.city}
                onChangeText={(city) => this.setState({city})}  />
            </View>
            </View>

            <View style={{}}>
                <Text style={{fontSize:18}}>State</Text>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    backgroundColor:'#4F45F01a',
                    marginTop:5,
                    height:45,
                    width:Dimensions.get('window').width/2.5,
                    borderRadius:7,
                    }}>
            <TextInput style = {styles.iconInputField}
                underlineColorAndroid = "transparent"
                placeholder = "State"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.state}
                onChangeText={(state) => this.setState({state})}  />
            </View>
            </View>
            </View>

            <TouchableOpacity onPress={this.onUpdateProfileClick}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Update Profile</Text>
            </TouchableOpacity>

            <View style={{height:1,borderBottomWidth:1,marginTop:35,borderColor:"#0000003a"}}></View>


            <View style={{marginHorizontal:20,marginTop:15,justifyContent:'space-between',flexDirection:'row'}}>
                <Text style={{color:"#fff",alignSelf:'flex-start',backgroundColor:"#4F45F0",padding:5,borderRadius:5,fontSize:18}}>Company Details</Text>
                <TouchableOpacity onPress={this.CompanyModal}  style={{padding:5,alignItems:'center',justifyContent:'center',backgroundColor:'#4F45F0',borderRadius:10}}><Icon6 name="add" color={'white'} size={24} /></TouchableOpacity>
            </View>
            
        <View style={{marginHorizontal:20,marginTop:5}}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20,paddingTop:10 }}
                    data={this.state.companyArray}
                    keyExtractor={item => item.CompanyName}
                    renderItem={({ item , index }) => 
                        
                    <View style={{marginTop:15,padding:10,justifyContent:'space-between',alignItems:'center',flexDirection:'row',backgroundColor:'#4F45F01a',borderRadius:7}}>
                    <View>
                        <Text>{item.CompanyName}</Text>
                        <Text>{item.CompanyWorkExperience}</Text>
                        <Text>{item.LastJobStartDate} - {item.LastJobEndDate}</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{this.onCompanyEditClick(item,index)}}  style={{paddingVertical:5,paddingHorizontal:15,alignItems:'center',justifyContent:'center',backgroundColor:'#4F45F0',borderRadius:10}}><Text style={{color:'#fff'}}>Edit</Text></TouchableOpacity>
                </View>
                        }
                />
        </View>
            
            {
                this.state.companyArray.length ?
                <TouchableOpacity onPress={this.onCompanySubmitClick}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Submit</Text>
                </TouchableOpacity>
                :
                null
            }
 

            </ScrollView>
        </View>
        </ImageBackground> 

        <Modal isVisible={this.state.CompanyModalVisible} avoidKeyboard={false}>
        <KeyboardAwareScrollView 
            style={{borderWidth:1,width:"100%",height:"70%",borderRadius:15, backgroundColor:"#fff",alignSelf:"center"}} 
            extraHeight={200} enableOnAndroid>

                    <View style={{marginTop:15,alignSelf:"flex-end",marginRight:15}}>
                                <TouchableOpacity onPress={this.CompanyModal}>
                                <Icon5 name="closecircleo" color="#4F45F0" size={25}/>
                                </TouchableOpacity>
                    </View>
                        <View style={{height:40,flexDirection:"row",marginTop:30}}>
                            <View style={{marginTop:3,alignSelf:"center",width:"100%"}}>
                            <Text style={{textAlign:"center",fontSize:20,color:"#4F45F0"}}>Company Profile</Text>
                            </View>
                        </View>

                        <View style={{marginHorizontal:20,marginTop:35}}>
                            <Text style={{fontSize:18}}>Company Name</Text>
                        </View>
                        <View style={styles.iconInputContainerModal}>
                        <TextInput style = {styles.iconInputField}
                            underlineColorAndroid = "transparent"
                            placeholder = "Company Name"
                            placeholderTextColor = "#0000005a"
                            autoCapitalize = "none"
                            value={this.state.cname}
                            onChangeText={(cname) => this.setState({cname})}  />
                        </View>

                        <View style={{marginHorizontal:20,marginTop:25}}>
                            <Text style={{fontSize:18}}>Work Experience</Text>
                        </View>
                        <View style={styles.iconInputContainerModal}>
                        <TextInput style = {styles.iconInputField}
                            underlineColorAndroid = "transparent"
                            placeholder = "Experience"
                            placeholderTextColor = "#0000005a"
                            autoCapitalize = "none"
                            value={this.state.cjobexperience}
                            onChangeText={(cjobexperience) => this.setState({cjobexperience})}  />
                        </View>

                        <View style={{marginHorizontal:20,marginTop:25}}>
                            <Text style={{fontSize:18}}>Last Job Title</Text>
                        </View>
                        <View style={styles.iconInputContainerModal}>
                        <TextInput style = {styles.iconInputField}
                            underlineColorAndroid = "transparent"
                            placeholder = "Job Title"
                            placeholderTextColor = "#0000005a"
                            autoCapitalize = "none"
                            value={this.state.cjobtitle}
                            onChangeText={(cjobtitle) => this.setState({cjobtitle})}  />
                        </View>

                        <View style={{marginHorizontal:20,marginTop:25}}>
                            <Text style={{fontSize:18}}>Last Job Experience</Text>
                        </View>
                        <View style={styles.iconInputContainerModal}>
                        <TextInput style = {styles.iconInputField}
                            underlineColorAndroid = "transparent"
                            placeholder = "Last Job Experience"
                            placeholderTextColor = "#0000005a"
                            autoCapitalize = "none"
                            value={this.state.clastjobexperience}
                            onChangeText={(clastjobexperience) => this.setState({clastjobexperience})}  />
                        </View>

                        <View style={{marginHorizontal:20,marginTop:25}}>
                            <Text style={{fontSize:18}}>Last Job TimeStamps</Text>
                        </View>
                        <View style={{marginTop:4,marginHorizontal:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{}}>
                            <Text style={{fontSize:18}}>Start Date</Text>
                            <View style={{
                                flexDirection:'row',
                                alignItems:'center',
                                backgroundColor:'#4F45F01a',
                                marginTop:5,
                                height:45,
                                width:Dimensions.get('window').width/3,
                                borderRadius:7,
                                }}>
                        <TextInput style = {styles.iconInputField}
                            underlineColorAndroid = "transparent"
                            placeholder = "Start Date"
                            placeholderTextColor = "#0000005a"
                            autoCapitalize = "none"
                            value={this.state.cstartdate}
                            onChangeText={(cstartdate) => this.setState({cstartdate})}  />
                        </View>
                        </View>

                        <View style={{}}>
                            <Text style={{fontSize:18}}>End Date</Text>
                            <View style={{
                                flexDirection:'row',
                                alignItems:'center',
                                backgroundColor:'#4F45F01a',
                                marginTop:5,
                                height:45,
                                width:Dimensions.get('window').width/3,
                                borderRadius:7,
                                }}>
                        <TextInput style = {styles.iconInputField}
                            underlineColorAndroid = "transparent"
                            placeholder = "End Date"
                            placeholderTextColor = "#0000005a"
                            autoCapitalize = "none"
                            value={this.state.cenddate}
                            onChangeText={(cenddate) => this.setState({cenddate})}  />
                        </View>
                        </View>
                        </View>

                        <View style={{marginHorizontal:20,marginTop:25}}>
                            <Text style={{fontSize:18}}>Total Experience</Text>
                        </View>
                        <View style={styles.iconInputContainerModal}>
                        <TextInput style = {styles.iconInputField}
                            underlineColorAndroid = "transparent"
                            placeholder = "Total Experience"
                            placeholderTextColor = "#0000005a"
                            autoCapitalize = "none"
                            value={this.state.ctotalexperience}
                            onChangeText={(ctotalexperience) => this.setState({ctotalexperience})}  />
                        </View>

                        <TouchableOpacity onPress={()=>{this.state.editting == true ? this.onCompanyModalSubmitClick(true) : this.onCompanyModalSubmitClick(false) }}  style={{width:"70%",height:55,borderRadius:20,alignSelf:"center",alignItems:"center",justifyContent:"center",marginTop:50,marginBottom:50,backgroundColor:"#4F45F0"}}>
                            <Text style={{color:"#fff"}}>{this.state.editting == true ? 'Update Details' : 'Add Details'}</Text>
                        </TouchableOpacity>

                    </KeyboardAwareScrollView>
            </Modal>
        <DropdownAlert inactiveStatusBarStyle="light-content" inactiveStatusBarBackgroundColor="#4F45F0" ref={ref => this.dropDownAlertRef = ref} />

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
        backgroundColor:'#4F45F01a',
        marginLeft:20,
        marginRight:20,
        marginTop:5,
        height:45,
        width:Dimensions.get('window').width-40,
        borderRadius:7,
    },
    iconInputContainerModal:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#4F45F01a',
        marginLeft:20,
        marginRight:20,
        marginTop:5,
        height:45,
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
        alignSelf:'center',
        marginTop:35,
        height:55,
        width:Dimensions.get('window').width/2,
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center'
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