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
    StatusBar,
    Keyboard,
  } from 'react-native';

  import Icon1 from 'react-native-vector-icons/Entypo';
  import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
  import Icon3 from 'react-native-vector-icons/FontAwesome';
  import Icon4 from 'react-native-vector-icons/FontAwesome5';
  import Icon5 from 'react-native-vector-icons/AntDesign';
  import Icon6 from 'react-native-vector-icons/Ionicons';
  import Icon7 from 'react-native-vector-icons/EvilIcons';
  import Icon8 from 'react-native-vector-icons/MaterialIcons';

  import { launchImageLibrary} from 'react-native-image-picker';

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
          userdata:{},
          totalpost:0,
          totalactive:0,
          firstname:'',
          lastname:'',
          email:'',
          mobile:'',
          address:'',
          city:'',
          state:'',
          cname:'',
          cdesc:'',
          cwebsite:'',
          cemail:'',
          imageOBJ:null,
          apiimageObJ:null,
          aadharOBJ:null,
          panOBJ:{uri:null},
          aadhar_status:null,
          pan_status:null,
          appLoading:false,
          appFetchingLoader:false,
          myCustomAlert:0,
      };

      this.onNotificationClick = this.onNotificationClick.bind(this);
      this.onSettingClick = this.onSettingClick.bind(this);
      this.onUpdateProfileClick = this.onUpdateProfileClick.bind(this);

    }

    componentDidMount(){
        var that = this;
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            that.getUserData();
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
            this.ProviderProfileApiCall();
        })
    }

    async ProviderProfileApiCall(){

        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {  

        let myFormData = new FormData();
        myFormData.append("user_id",this.state.userdata._id)

        try {
            const { data } = await ProviderServices.ProviderProfile(myFormData)
            console.log(data);

            if( data.status == 0 ){
                this.dropDownAlertRef.alertWithType('error', 'Api Status = 0');
            }

            if( data.status == 1){
                this.setState({
                    totalpost:data.totalpost,
                    totalactive:data.totalactive,
                    firstname:data.data.firstname,
                    lastname:data.data.lastname,
                    email:data.data.email,
                    mobile:data.data.mobile_no,
                    address:data.data.address,
                    city:data.data.city,
                    state:data.data.state,
                    cname:data.companay.company_name,
                    cdesc:data.companay.description,
                    cwebsite:data.companay.website,
                    cemail:data.companay.email,
                    imageOBJ:{uri:data.data.image},
                    apiimageObJ:{uri:data.data.image},
                    aadharOBJ:{uri:data.data.adhar_image_f},
                    panOBJ:{uri:data.data.pan_image},
                    aadhar_status:data.data.adhar_status,
                    pan_status:data.data.pan_status,
                    profile_edited:false,
                    aadhar_edited:false,
                    pan_edited:false
                })
            }

            console.log("Aadhar Status === " , this.state.aadhar_status);
            console.log("Pan Status === " , this.state.pan_status);
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
        this.props.navigation.navigate('ProfileProvider');
    }

    onSettingClick(){
        this.props.navigation.navigate('SettingProvider');
    }

    async onUpdateProfileClick(){
        Keyboard.dismiss();

        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {  

        if(this.state.imageOBJ == null || this.state.imageOBJ.uri == null){
            this.dropDownAlertRef.alertWithType('error',"Image cannot be blank");
          return
        }


        let myFormData = new FormData();
        myFormData.append("user_id",this.state.userdata._id)

        myFormData.append("firstname",this.state.firstname)
        myFormData.append("lastname",this.state.lastname)
        myFormData.append("email",this.state.email)
        myFormData.append("address",this.state.address)
        myFormData.append("city",this.state.city)
        myFormData.append("state",this.state.state)
        myFormData.append("company_name",this.state.cname)
        myFormData.append("description",this.state.cdesc)
        myFormData.append("website",this.state.cwebsite)
        myFormData.append("emailc",this.state.cemail)

        // myFormData.append("pan_image",this.state.category)
        // myFormData.append("adhar_image_f",this.state.category)
        // myFormData.append("adhar_image_b",this.state.category)
        // myFormData.append("langid",this.state.category)

        myFormData.append("image", {
            name: "filedocument.png",
            uri: this.state.imageOBJ.uri,
            type: "*/*"
        })

        myFormData.append("pan_image", {
            name: "filedocument.png",
            uri: this.state.panOBJ.uri,
            type: "*/*"
        })

        try {
            this.setState({appLoading: true})
            const { data } = await ProviderServices.ProviderProfile(myFormData)
            console.log(data);

            if( data.status == 0 ){
                this.setState({appFetchingLoader:false,appLoading:false})
                this.dropDownAlertRef.alertWithType('error', 'Something went wrong ...', "Try Again");
            }

            if( data.status == 1){
                this.setState({appFetchingLoader:false,appLoading:false})
                this.dropDownAlertRef.alertWithType('success',"Profile Saved !");
                this.ProviderProfileApiCall();
            }

            this.setState({appLoading: false})
          }
          catch(error){
            console.log(error)
            this.setState({appFetchingLoader:false,appLoading:false})
            console.log(error.data)
            this.dropDownAlertRef.alertWithType('error', 'Failed', "Authentication Failed");
          }
        }
        else{
            this.dropDownAlertRef.alertWithType('error', 'No Internet Connection', "please check your device connection");
        }
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
            this.setState({
                imageOBJ:this.state.apiimageObJ
              });
            console.log('User cancelled image picker');
          } else if (res.error) {
            console.log('ImagePicker Error: ', res.error);
          } else {
            const source = { uri: res.uri };
            console.log('response', JSON.stringify(res));
            this.setState({
                imageOBJ:res
            });
          }
        });
    }

    onAadharCardClick = () => {

        let options = {
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
    
        launchImageLibrary(options, (res) => {
          console.log('Response = ', res);
    
          if (res.didCancel) {
            this.setState({
                aadharOBJ:null
              });
            console.log('User cancelled image picker');
          } else if (res.error) {
            console.log('ImagePicker Error: ', res.error);
          } else {
            const source = { uri: res.uri };
            console.log('response', JSON.stringify(res));
            this.setState({
                aadharOBJ:res
            });
          }
        });
    }

    onPanCardClick = () => {

        let options = {
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
    
        launchImageLibrary(options, (res) => {
          console.log('Response = ', res);
          if (res.didCancel) {
            this.setState({
                panOBJ:{uri:null}
              });
            console.log('User cancelled image picker');
          } else if (res.error) {
            console.log('ImagePicker Error: ', res.error);
          } else {
            const source = { uri: res.uri };
            console.log('response', JSON.stringify(res));
            this.setState({
                panOBJ:res
            });
          }
        });
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
                    this.state.imageOBJ == null || this.state.imageOBJ.uri === ""  || this.state.imageOBJ.uri == null ?
                    <Image source={require('../../assets/image/dummy_avatar.png')} style={{height:150,width:150,borderRadius:75}} resizeMode='contain'></Image>
                    :
                    <Image source={{uri: `${this.state.imageOBJ.uri}`}} style={{height:150,width:150,borderRadius:150/2}} />
                }    
            </TouchableOpacity>
            </View>

            <View style={{alignItems:'center',alignSelf:"center",flexDirection:"row",marginTop:115}}>
                <Text style={{fontSize:18}}>{this.state.firstname}</Text>
                {
                    this.state.pan_status == 2 && this.state.aadhar_status == 2 ?
                    <Icon8 name="verified" color={"#4F45F0"} size={26} style={{bottom:5,left:2}} />
                    :null
                }                
            </View>

            <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row',borderTopWidth:0.8,borderBottomWidth:0.8,marginHorizontal:20,marginTop:15}}>
                <View style={{justifyContent:"center",alignItems:"center",margin:15}}>
                        <Text>Active Post</Text>
                        <Text style={{padding:4,backgroundColor:"#4F45F05a",marginTop:5,borderRadius:5}}>{this.state.totalactive}</Text>
                </View>

                <View style={{justifyContent:"center",alignItems:"center",margin:15}}>
                        <Text>Total Post</Text>
                        <Text style={{padding:4,backgroundColor:"#4F45F05a",marginTop:5,borderRadius:5}}>{this.state.totalpost}</Text>
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
                ref={(input) => { this.firstnameInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.lastnameInputRef.focus(); }}
                blurOnSubmit={false}
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
                ref={(input) => { this.lastnameInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.emailInputRef.focus(); }}
                blurOnSubmit={false}
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
                ref={(input) => { this.emailInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.addressInputRef.focus(); }}
                blurOnSubmit={false}
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
                editable={false}
                value={this.state.mobile}
                onChangeText={(mobile) => this.setState({mobile})}  />
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Address</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.addressInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.cityInputRef.focus(); }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Address"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.address}
                onChangeText={(address) => this.setState({address})}  />
            </View>

            <View style={{marginTop:15,marginHorizontal:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{}}>
                <Text style={{fontSize:18}}>City</Text>
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
                ref={(input) => { this.cityInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.stateInputRef.focus(); }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Current City"
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
                ref={(input) => { this.stateInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.cnameInputRef.focus(); }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Current State"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.state}
                onChangeText={(state) => this.setState({state})}  />
            </View>
            </View>
            </View>

            <View style={{height:1,borderBottomWidth:1,marginTop:35,borderColor:"#0000003a"}}></View>


            <View style={{marginHorizontal:20,marginTop:15,justifyContent:'space-between',flexDirection:'row'}}>
                <Text style={{color:"#fff",alignSelf:'flex-start',backgroundColor:"#4F45F0",padding:5,borderRadius:5,fontSize:18}}>Company Details</Text>
            </View>


            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Name</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.cnameInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.cdescInputRef.focus(); }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Company Name"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.cname}
                onChangeText={(cname) => this.setState({cname})}  />
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Description</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.cdescInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.cwebsiteInputRef.focus(); }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Company Description"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.cjobexperience}
                onChangeText={(cjobexperience) => this.setState({cjobexperience})}  />
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Website</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.cwebsiteInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.cemailInputRef.focus(); }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Company Website"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.cwebsite}
                onChangeText={(cwebsite) => this.setState({cwebsite})}  />
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Email</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.cemailInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { Keyboard.dismiss(); }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Company Email"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.cemail}
                onChangeText={(cemail) => this.setState({cemail})}  />
            </View>
            {
                this.state.pan_status==2 && this.state.aadhar_status==2 ? null :
                <View>
                                    <View style={{height:1,borderBottomWidth:1,marginTop:35,borderColor:"#0000003a"}}></View>

                                    <View style={{marginHorizontal:20,marginTop:15,justifyContent:'space-between',flexDirection:'row'}}>
                                        <Text style={{color:"#fff",alignSelf:'flex-start',backgroundColor:"#4F45F0",padding:5,borderRadius:5,fontSize:18}}>Know Your Customer</Text>
                                    </View>
                                    <View style={{height:1,borderBottomWidth:1,marginTop:15,borderColor:"#0000003a"}}></View>

                                    <Text style={{color:"#0000005a",alignSelf:'center',marginTop:5,backgroundColor:"#4F45F01a",padding:5,borderRadius:5,fontSize:13}}>Upload the following documents to get verified user badge</Text>


                                    {
                                        this.state.pan_status == 0 && (this.state.panOBJ.uri == null || this.state.panOBJ.uri == 'null' )?
                                        <TouchableOpacity onPress={this.onPanCardClick} style={{alignItems:"center",flexDirection:"row",borderRadius:7,marginHorizontal:20,marginTop:15,borderStyle:'dashed',borderWidth:1,borderColor:'#4F45F0',backgroundColor:"#4F45F01a"}}>
                                        <View style={{marginHorizontal:20,marginVertical:10,backgroundColor:"#fff",height:55,width:55,borderRadius:7,alignItems:"center",justifyContent:"center"}}>
                                        <Icon4 name="address-card" color={"#4F45F0"} size={26} />
                                        </View>
                                        <View style={{alignSelf:"center",flex:1,justifyContent:"center"}}>
                                        <Text style={{fontSize:18,color:"#4F45F0",paddingHorizontal:50}}>Pan Card</Text>
                                        </View>
                                        </TouchableOpacity>
                                        :null
                                    }

                                    {
                                        this.state.pan_status == 0 && this.state.panOBJ.uri != null ?
                                        <TouchableOpacity onPress={this.onPanCardClick} style={{alignItems:"center",flexDirection:"row",borderRadius:7,marginHorizontal:20,marginTop:15,borderStyle:'dashed',borderWidth:1,borderColor:'#4F45F0',backgroundColor:"#4F45F01a"}}>
                                        <View style={{marginHorizontal:20,marginVertical:10,backgroundColor:"#fff",height:55,width:55,borderRadius:7,alignItems:"center",justifyContent:"center"}}>
                                        <Image style={{
                                                    width: 55,
                                                    height: 55,
                                                }}
                                                source={{uri: `${this.state.panOBJ.uri}`}}/>  
                                        </View>
                                        <View style={{alignSelf:"center",flex:1,justifyContent:"center"}}>
                                        <Text style={{fontSize:18,color:"#4F45F0",paddingHorizontal:50}}>Pan Card</Text>
                                        </View>

                                        </TouchableOpacity>
                                        :null
                                    }

                                    {
                                        this.state.pan_status == 1 ?
                                        <View style={{alignItems:"center",flexDirection:"row",borderRadius:7,marginHorizontal:20,marginTop:15,borderStyle:'dashed',borderWidth:1,borderColor:'#4F45F0',backgroundColor:"#4F45F01a"}}>
                                        <View style={{marginHorizontal:20,marginVertical:10,backgroundColor:"#fff",height:55,width:55,borderRadius:7,alignItems:"center",justifyContent:"center"}}>
                                        <Icon4 name="clock" color={"#4F45F0"} size={26} />  
                                        </View>
                                        <View style={{alignSelf:"center",flex:1,justifyContent:"center"}}>
                                        <Text style={{fontSize:18,color:"#4F45F0",paddingHorizontal:50}}>Pan Card</Text>
                                        <Text style={{fontSize:12,color:"#4F45F0",paddingHorizontal:50}}>Approval Pending</Text>
                                        </View>

                                        </View>
                                        :null
                                    }

                                    {
                                        this.state.pan_status == 2 ?
                                        <View style={{alignItems:"center",flexDirection:"row",borderRadius:7,marginHorizontal:20,marginTop:15,borderStyle:'dashed',borderWidth:1,borderColor:'#4F45F0',backgroundColor:"#4F45F01a"}}>
                                        <View style={{marginHorizontal:20,marginVertical:10,backgroundColor:"#fff",height:55,width:55,borderRadius:7,alignItems:"center",justifyContent:"center"}}>
                                        <Icon8 name="verified" color={"#4F45F0"} size={26} />  
                                        </View>
                                        <View style={{alignSelf:"center",flex:1,justifyContent:"center"}}>
                                        <Text style={{fontSize:18,color:"#4F45F0",paddingHorizontal:50}}>Pan Card</Text>
                                        <Text style={{fontSize:12,color:"#4F45F0",paddingHorizontal:50}}>Approved</Text>
                                        </View>

                                        </View>
                                        :null
                                    }

                                    {
                                        this.state.pan_status == 3 && (this.state.panOBJ.uri == null || this.state.panOBJ.uri == 'null' )?
                                        <TouchableOpacity onPress={this.onPanCardClick} style={{alignItems:"center",flexDirection:"row",borderRadius:7,marginHorizontal:20,marginTop:15,borderStyle:'dashed',borderWidth:1,borderColor:'#4F45F0',backgroundColor:"#4F45F01a"}}>
                                        <View style={{marginHorizontal:20,marginVertical:10,backgroundColor:"#fff",height:55,width:55,borderRadius:7,alignItems:"center",justifyContent:"center"}}>
                                        <Icon8 name="do-not-disturb" color={"#4F45F0"} size={26} />  
                                        </View>
                                        <View style={{alignSelf:"center",flex:1,justifyContent:"center"}}>
                                        <Text style={{fontSize:18,color:"#4F45F0",paddingHorizontal:50}}>Pan Card</Text>
                                        <Text style={{fontSize:12,color:"#4F45F0",paddingHorizontal:50}}>Rejected</Text>
                                        </View>
                                        </TouchableOpacity>
                                        :null
                                    }

                                    {
                                        this.state.pan_status == 3 && this.state.panOBJ.uri != null ?
                                        <TouchableOpacity onPress={this.onPanCardClick} style={{alignItems:"center",flexDirection:"row",borderRadius:7,marginHorizontal:20,marginTop:15,borderStyle:'dashed',borderWidth:1,borderColor:'#4F45F0',backgroundColor:"#4F45F01a"}}>
                                        <View style={{marginHorizontal:20,marginVertical:10,backgroundColor:"#fff",height:55,width:55,borderRadius:7,alignItems:"center",justifyContent:"center"}}>
                                        <Image style={{
                                                    width: 55,
                                                    height: 55,
                                                }}
                                                source={{uri: `${this.state.panOBJ.uri}`}}/>  
                                        </View>
                                        <View style={{alignSelf:"center",flex:1,justifyContent:"center"}}>
                                        <Text style={{fontSize:18,color:"#4F45F0",paddingHorizontal:50}}>Pan Card</Text>
                                        <Text style={{fontSize:12,color:"#4F45F0",paddingHorizontal:50}}>Rejected</Text>
                                        </View>

                                        </TouchableOpacity>
                                        :null
                                    }

                </View>
            }
 


            <TouchableOpacity onPress={this.onUpdateProfileClick}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Update Profile</Text>
            </TouchableOpacity>

            </ScrollView>
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
        marginTop:55,
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