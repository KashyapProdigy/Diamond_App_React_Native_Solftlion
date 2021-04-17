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
    Keyboard
  } from 'react-native';

  import Icon1 from 'react-native-vector-icons/Entypo';
  import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
  import Icon3 from 'react-native-vector-icons/FontAwesome';
  import Icon4 from 'react-native-vector-icons/FontAwesome5';
  import Icon5 from 'react-native-vector-icons/AntDesign';
  import Icon6 from 'react-native-vector-icons/Ionicons';
  import Icon7 from 'react-native-vector-icons/EvilIcons';

  import DropDownPicker from 'react-native-dropdown-picker';
  import {Picker} from '@react-native-picker/picker';
  import { launchImageLibrary} from 'react-native-image-picker';
  import { CheckBox } from 'react-native-elements';
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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
          category:'',
          jobtitle:'',
          experience:'',
          salary:'',
          jobdesc:'',
          emptype:'',
          emprole:'',
          empskill:'',
          qualification:'',
          vacancy:'',
          location:'',
          imageOBJ:null,
          savechecked:false,
          appLoading:false,
      };

      this.onBackButtonClick = this.onBackButtonClick.bind(this);
      this.onInfoClick = this.onInfoClick.bind(this);
      this.onPostJobClick = this.onPostJobClick.bind(this);
      this.onChooseImageClick = this.onChooseImageClick.bind(this);
      this.onSaveCheckBoxToggle = this.onSaveCheckBoxToggle.bind(this);

    }

    componentDidMount(){
        this.getUserData();   
    }

    async getUserData(){
        var value = await AsyncStorage.getItem('User');
        value = JSON.parse(value);
        this.setState({userdata: value})
    }

    onBackButtonClick(){
        this.props.navigation.goBack();
    }

    onInfoClick(){
        
    }

    async onPostJobClick(){

        Keyboard.dismiss();

        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {  

        if(this.state.jobtitle.trim() == ''){
            this.setState({jobtitle:''},()=>{this.jobtitleInputRef.focus(); })
            this.dropDownAlertRef.alertWithType('error',"Job Title cannot be blank");
          return
        }
        if(this.state.experience.trim() == ''){
            this.setState({experience:''},()=>{this.experienceInputRef.focus(); })
            this.dropDownAlertRef.alertWithType('error',"Experience cannot be blank");
          return
        }
        if(this.state.salary.trim() == ''){
            this.setState({salary:''},()=>{this.salaryInputRef.focus(); })
            this.dropDownAlertRef.alertWithType('error',"Salary cannot be blank");
          return
        }
        if(this.state.jobdesc.trim() == ''){
            this.setState({jobdesc:''},()=>{this.jobdescriptionInputRef.focus(); })
            this.dropDownAlertRef.alertWithType('error',"Job Description cannot be blank");
          return
        }
        if(this.state.emprole.trim() == ''){
            this.setState({emprole:''},()=>{this.emproleInputRef.focus(); })
            this.dropDownAlertRef.alertWithType('error',"Employment Role cannot be blank");
          return
        }
        if(this.state.empskill.trim() == ''){
            this.setState({empskill:''},()=>{this.empskillsInputRef.focus(); })
            this.dropDownAlertRef.alertWithType('error',"Employment Skills cannot be blank");
          return
        }
        if(this.state.qualification.trim() == ''){
            this.setState({qualification:''},()=>{this.qualificationInputRef.focus(); })
            this.dropDownAlertRef.alertWithType('error',"Qualification cannot be blank");
          return
        }
        if(this.state.vacancy.trim() == ''){
            this.setState({vacancy:''},()=>{this.vacancyInputRef.focus(); })
            this.dropDownAlertRef.alertWithType('error',"Vacancy cannot be blank");
          return
        }
        if(this.state.location.trim() == ''){
            this.setState({location:''},()=>{this.locationInputRef.focus(); })
            this.dropDownAlertRef.alertWithType('error',"Location cannot be blank");
          return
        }
        if(this.state.imageOBJ == null){
            this.dropDownAlertRef.alertWithType('error',"Image cannot be blank");
          return
        }


        let myFormData = new FormData();
        myFormData.append("user_id",this.state.userdata._id)
        myFormData.append("category",this.state.category)
        myFormData.append("job_title", this.state.jobtitle)
        myFormData.append("experience", this.state.experience)
        myFormData.append("salary", this.state.salary)
        myFormData.append("description", this.state.jobdesc)
        myFormData.append("emp_type", this.state.emptype)
        myFormData.append("emp_role", this.state.emprole)
        myFormData.append("skills", this.state.empskill)
        myFormData.append("qualification", this.state.qualification)
        myFormData.append("vacancy", this.state.vacancy)
        myFormData.append("location", this.state.location)
        myFormData.append("images", {
            name: "filedocument.png",
            uri: this.state.imageOBJ.uri,
            type: "*/*"
        })
        if(this.state.savechecked == false){myFormData.append("status",1)}
        if(this.state.savechecked == true){myFormData.append("status",0)}

        try {
            this.setState({appLoading: true})
            const { data } = await ProviderServices.ProviderPostJob(myFormData)
            console.log(data);

            if( data.status == 0 ){
                this.setState({appLoading: false})
                this.dropDownAlertRef.alertWithType('error', 'Something went wrong ...', "Try Again");
            }

            if( data.status == 1){
                this.setState({appLoading: false})
                this.dropDownAlertRef.alertWithType('success',"Job Created Successfully !");
                this.props.navigation.goBack();
            }

            this.setState({appLoading: false})
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

    onChooseImageClick = () => {

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
                this.setState({
                    imageOBJ: null
                  });
              } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
              } else {
                console.log('response', JSON.stringify(res));
                this.setState({
                  imageOBJ: res
                });
              }
            });
    }

    onSaveCheckBoxToggle(){
        if(this.state.savechecked == false){this.setState({savechecked:true})}
        if(this.state.savechecked == true){this.setState({savechecked:false})}
    }

    render () {
      return (
        <View style={styles.maincontainer}>
        <StatusBar
           backgroundColor = "#4F45F0"
           barStyle = "light-content"
         />
        <View style={{backgroundColor : '#4F45F0' , flex:0.1}}>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>

            <TouchableOpacity onPress={this.onBackButtonClick}
            style={{marginTop:20,marginLeft:20,flexDirection:'row',alignItems:'center'}}>
                <Icon5 name="left" color={'white'} size={26} />
                <Text style={{color:'white',fontSize:22,marginLeft:4}}>Post Job</Text>
            </TouchableOpacity>

            <View style={{alignSelf:'flex-end',flexDirection:'row',marginHorizontal:10,marginTop:20}}>
                <TouchableOpacity  onPress={this.onInfoClick} style={{marginHorizontal:10}}>
                <Icon2 name="information-outline" color={'white'} size={30} />
                </TouchableOpacity>
            </View>

            </View>

        </View>
        
        <KeyboardAwareScrollView style={{flex:1,backgroundColor:"#fff"}} extraHeight={100} enableOnAndroid>
        <ImageBackground source={require('../../assets/image/splash_bg.png')} style={styles.backgroundImage} resizeMode='stretch' >

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Category</Text> 
            </View>
            <View style={styles.iconInputContainer}>
            <Picker
                mode="dropdown"
                style = {styles.iconInputField}
                selectedValue={this.state.category}
                enabled={true}
                dropdownIconColor={'#4F45F0'}
                onValueChange={(category) => this.setState({category: category})}
            >
               <Picker.Item label={'Grader'} value={'Grader'} key={1}/>
               <Picker.Item label={'Shiner'} value={'Shiner'} key={2}/>
               <Picker.Item label={'4p'} value={'4p'} key={3}/>
               <Picker.Item label={'Fancy'} value={'Fancy'} key={4}/>
               <Picker.Item label={'Office Staff'} value={'Office Staff'} key={5}/>
            </Picker>
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Job Title (Designation)</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.jobtitleInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.experienceInputRef.focus(); }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Job Title"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.jobtitle}
                onChangeText={(jobtitle) => this.setState({jobtitle})}  />
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Experience</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.experienceInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { 
                    this.salaryInputRef.focus();
                    
                    // if(this.state.experience){
                    //     this.setState({experience:`${this.state.experience+' Years'}`})
                    // }
                }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Experience"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                keyboardType='number-pad'
                value={this.state.experience}
                onChangeText={(experience) => this.setState({experience})}  />
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Salary</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.salaryInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { 
                    this.jobdescriptionInputRef.focus();
                    // if(this.state.salary){
                    //     this.setState({salary:`${this.state.salary+' INR'}`})
                    // }
                }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Salary"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                keyboardType='number-pad'
                value={this.state.salary}
                onChangeText={(salary) => this.setState({salary})}  />
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Job Description</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.jobdescriptionInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.emproleInputRef.focus(); }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Job Description"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.jobdesc}
                onChangeText={(jobdesc) => this.setState({jobdesc})}  />
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Employment Type</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <Picker
                mode="dropdown"
                style = {styles.iconInputField}
                selectedValue={this.state.emptype}
                enabled={true}
                dropdownIconColor={'#4F45F0'}
                onValueChange={(emptype) => {
                    this.setState({emptype: emptype})
                }}
            >
               <Picker.Item label={'Full Time'} value={'Full-Time'} key={1}/>
               <Picker.Item label={'Part Time'} value={'Part-Time'} key={2}/>
            </Picker>
            </View>


            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Employment Role</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.emproleInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.empskillsInputRef.focus(); }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Employment Role"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.emprole}
                onChangeText={(emprole) => this.setState({emprole})}  />
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Employment Skills</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.empskillsInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.qualificationInputRef.focus(); }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Employment Skills"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.empskill}
                onChangeText={(empskill) => this.setState({empskill})}  />
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Qualification</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.qualificationInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.vacancyInputRef.focus(); }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Qualification"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.qualification}
                onChangeText={(qualification) => this.setState({qualification})}  />
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Vacancy</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.vacancyInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { 
                    this.locationInputRef.focus(); 
                }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Vacancy"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                keyboardType="number-pad"
                value={this.state.vacancy}
                onChangeText={(vacancy) => this.setState({vacancy})}  />
            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Location</Text>
            </View>
            <View style={styles.iconInputContainer}>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.locationInputRef = input }}
                onSubmitEditing={() => { Keyboard.dismiss() }}
                underlineColorAndroid = "transparent"
                placeholder = "Location"
                placeholderTextColor = "#0000005a"
                autoCapitalize = "none"
                value={this.state.location}
                onChangeText={(location) => this.setState({location})}  />
            </View>

            <TouchableOpacity onPress={this.onChooseImageClick}  style={{alignItems:"center",flexDirection:"row",borderRadius:7,marginHorizontal:20,marginTop:25,borderStyle:'dashed',borderWidth:1,borderColor:'#4F45F0',backgroundColor:"#4F45F01a"}}>
                <View style={{marginHorizontal:20,marginVertical:10,backgroundColor:"#fff",height:55,width:55,borderRadius:7,alignItems:"center",justifyContent:"center"}}>
                {
                    this.state.imageOBJ == null || this.state.imageOBJ.uri === "" ?

                    <Icon4 name="user" color={"#4F45F0"} size={26} />
                    :
                        <Image style={{
                            width: 55,
                            height: 55,
                        }}
                        source={{uri: `${this.state.imageOBJ.uri}`}}/>
                }    

                </View>
                <View style={{justifyContent:"center",alignItems:"center",paddingHorizontal:35}}></View>
                <Text style={{fontSize:18,color:"#4F45F0"}}>Choose Image</Text>
            </TouchableOpacity>


            <View style={{marginTop:15}}>
            <CheckBox
            title='Save for later'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            uncheckedColor={'#4F45F05a'}
            checkedColor={'#4F45F0'}
            textStyle={{color:"black",fontWeight:"300",fontStyle:'normal',fontSize:15}}
            checked={this.state.savechecked}
            containerStyle={{backgroundColor:"transparent",borderWidth:0,marginHorizontal:20}}
            onPress={this.onSaveCheckBoxToggle} 
            />
            </View>

            <TouchableOpacity onPress={this.onPostJobClick}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Post Job</Text>
            </TouchableOpacity>
            </ImageBackground> 
            </KeyboardAwareScrollView>
            <DropdownAlert inactiveStatusBarStyle="light-content" inactiveStatusBarBackgroundColor="#4F45F0" ref={ref => this.dropDownAlertRef = ref} />
            <AppLoader isAppLoading={this.state.appLoading}/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    maincontainer:{
        flex:1 ,
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
        color:"#000",
    },
    iconInputImage:{
        marginRight:20
    },
    loginButtonContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#4F45F0',
        alignSelf:'center',
        marginTop:25,
        height:55,
        width:Dimensions.get('window').width-40,
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:100
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