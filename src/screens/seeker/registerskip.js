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

      this.onInfoClick = this.onInfoClick.bind(this);
      this.onSubmitClick = this.onSubmitClick.bind(this);
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

    onInfoClick(){
        
    }

    async onSubmitClick(){
        this.props.navigation.replace('MainTabSeeker');
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
        <View style={{backgroundColor : '#fff' , flex:0.1}}>

        <View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between'}}>

        <View style={{marginTop:20,marginLeft:20}}>
            <Text style={{color:'#4F45F0',fontSize:16}}>What are you looking for ?</Text>
        </View>

        <View style={{alignSelf:'flex-end',flexDirection:'row',marginHorizontal:10,marginTop:20}}>
            <TouchableOpacity  onPress={this.onSubmitClick} style={{marginHorizontal:10,backgroundColor:"#4F45F05a",padding:10,borderRadius:5}}>
            <Text style={{color:'#4F45F0',fontSize:16}}>Skip</Text>
            </TouchableOpacity>
        </View>

        </View>

        </View>
        
        <View style={{flex:1,backgroundColor:"#fff"}}>
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
                <Text style={{fontSize:18}}>Color & Modify Cut</Text> 
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

            <View style={{flexDirection:'row', justifyContent:"space-around",marginTop:25}}>
            <View style={{alignItems:"center",justifyContent:"center" , backgroundColor:"#4F45F01a",borderRadius:10}}>
            <CheckBox
            title='3X OR VG-GOOD'
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

            <View style={{alignItems:"center",justifyContent:"center",backgroundColor:"#4F45F01a",borderRadius:10}}>
            <CheckBox
            title='GIA OR nonGIA'
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

            </View>
            <View style={{marginHorizontal:20,marginTop:15}}>
                <Text style={{fontSize:18}}>Shape & Color</Text> 
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

            <TouchableOpacity onPress={this.onSubmitClick}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Submit</Text>
            </TouchableOpacity>
            </ImageBackground> 
            </View>
            <DropdownAlert inactiveStatusBarStyle="light-content" inactiveStatusBarBackgroundColor="#4F45F0" ref={ref => this.dropDownAlertRef = ref} />
            <AppLoader isAppLoading={this.state.appLoading}/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
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