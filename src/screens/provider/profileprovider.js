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

  import { launchImageLibrary} from 'react-native-image-picker';

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
          cdesc:'',
          cjobtitle:'',
          cwebsite:'',
          cemail:'',
          cmobile:'',
          imageURI:null,

          loading:false,
      };

      this.onNotificationClick = this.onNotificationClick.bind(this);
      this.onSettingClick = this.onSettingClick.bind(this);
      this.onUpdateProfileClick = this.onUpdateProfileClick.bind(this);

    }

    componentDidMount(){}


    onNotificationClick(){
        this.props.navigation.navigate('ProfileProvider');
    }

    onSettingClick(){
        this.props.navigation.navigate('SettingProvider');
    }

    onUpdateProfileClick(){
        this.props.navigation.navigate('ProfileProvider');
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
                underlineColorAndroid = "transparent"
                placeholder = "Company Website"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.cjobtitle}
                onChangeText={(cjobtitle) => this.setState({cjobtitle})}  />
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Email</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                underlineColorAndroid = "transparent"
                placeholder = "Company Email"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.clastjobexperience}
                onChangeText={(clastjobexperience) => this.setState({clastjobexperience})}  />
            </View>


            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Number</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                underlineColorAndroid = "transparent"
                placeholder = "Company Contact Number"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.ctotalexperience}
                onChangeText={(ctotalexperience) => this.setState({ctotalexperience})}  />
            </View>

            <TouchableOpacity onPress={this.onUpdateProfileClick}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Update Profile</Text>
            </TouchableOpacity>

            </ScrollView>
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