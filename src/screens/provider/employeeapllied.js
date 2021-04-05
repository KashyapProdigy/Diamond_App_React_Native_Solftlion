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
    Linking
  } from 'react-native';

  import Icon1 from 'react-native-vector-icons/Entypo';
  import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
  import Icon3 from 'react-native-vector-icons/FontAwesome';
  import Icon4, { FA5Style } from 'react-native-vector-icons/FontAwesome5';
  import Icon5 from 'react-native-vector-icons/AntDesign';
  import Icon6 from 'react-native-vector-icons/Ionicons';
  import Icon7 from 'react-native-vector-icons/EvilIcons';
  import Icon8 from 'react-native-vector-icons/SimpleLineIcons';
  import Icon9 from 'react-native-vector-icons/Fontisto';

  import Accordion from 'react-native-collapsible/Accordion';

export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        activeSections: [],
        sectionlist:[
            {   
                date:'01-04-2021',
                experience:'1-5 years',
                location:'Surat,Gujarat',
                company:'Shree Ram Krishna',
                skills:['Fancy','Purity','4p','Grader','Test','Demo'],
                mobile:'9827381234',
                email:"test@test.com",
                name:"Employeee 1",
                id:1
            },
            {   
                date:'03-05-2021',
                experience:'1-5 years',
                location:'Navsari,Gujarat',
                company:'Pavan Impex',
                skills:['Fancy','Purity','4p','Grader','Test','Demo'],
                mobile:'9827381234',
                email:"test@test.com",
                name:"Employeee 2",
                id: 2
            },
            {   

                date:'03-05-2021',
                experience:'1+ years',
                company:'Agarwal Impex',
                skills:['Fancy','Purity','4p','Grader','Test','Demo'],
                mobile:'9827381234',
                email:"test@test.com",
                name:"Employeee 3",
                id: 3
            },
            {   
                date:'03-05-2021',
                experience:'1-5 years',
                location:'Surat,Gujarat',
                company:'Pavan Impex',
                skills:['Fancy','Purity','4p','Grader','Test','Demo'],
                mobile:'9827381234',
                email:"test@test.com",
                name:"Employeee 4",
                id: 4
            },
            {   
                date:'03-05-2021',
                experience:'1-5 years',
                location:'Navsari,Gujarat',
                company:'Pavan Impex',
                skills:['Fancy','Purity','4p','Grader','Test','Demo'],
                mobile:'9827381234',
                email:"test@test.com",
                name:"Employeee 5",
                id: 5
            },
            {   
                date:'03-05-2021',
                experience:'1-5 years',
                location:'Navsari,Gujarat',
                skills:['Fancy','Purity','4p','Grader','Test','Demo'],
                title:'4p Operator',
                mobile:'9827381234',
                email:"test@test.com",
                name:"Employeee 6",
                id: 6
            },
        ],
          toggleOptionsVisibility:true,
          toggleCardID:0,
          loading:false,
      };

      this.onBackButtonClick = this.onBackButtonClick.bind(this);
      this.onSettingClick = this.onSettingClick.bind(this);

    }

    componentDidMount(){}

    onBackButtonClick(){
        this.props.navigation.goBack();
    }

    onSettingClick(){
        this.props.navigation.navigate('SettingProvider');
    }


    _renderHeader = section => {
        return (
          <View style={{marginTop:20,backgroundColor:'#4F45F02a',borderWidth:0.8,borderColor:'gray',borderTopLeftRadius:10,borderTopRightRadius:10}}>
                <View style={{padding:20}}>
                        <View>
                            <Text style={{fontSize:18}}>{section.name}</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:15}}>
                            <View>
                            <Text style={{fontSize:13}}>Email</Text>
                            <Text style={{fontSize:13}}>{section.email}</Text>
                            </View>
                            <TouchableOpacity   onPress={() =>
                                Linking.openURL(`mailto:${section.email}?subject=Job Recruitment From Di'Mand&body=Hello ${section.name},\n This email is regarding ......`)
                                } 
                                style={{padding:8,backgroundColor:"#4F45F0",borderRadius:7}}>
                            <Icon9 name="email" color={'white'} size={22} />
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:15}}>
                            <View>
                            <Text style={{fontSize:13}}>Mobile</Text>
                            <Text style={{fontSize:13}}>{section.mobile}</Text>
                            </View>
                            <TouchableOpacity  onPress={()=>{Linking.openURL(`tel:${section.mobile}`)}} style={{padding:8,backgroundColor:"#4F45F0",borderRadius:7}}>
                            <Icon9 name="phone" color={'white'} size={22} />
                            </TouchableOpacity>
                        </View>
                </View>
          </View>
        );
      };

      _renderContent = section => {
        return (
            <View style={{backgroundColor:'#4F45F02a',borderWidth:0.8,borderColor:'gray',borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
            <View style={{padding:20}}>
                    <View style={{}}>
                        <Text style={{fontSize:15}}>Current Job Status</Text>
                        <Text style={{fontSize:14,}}>{section.company}</Text>
                    </View>
                    <View style={{marginTop:10,flexDirection:'row'}}>
                        <View>         
                            <Text style={{fontSize:15}}>Experience</Text>
                            <Text style={{fontSize:14,}}>{section.experience}</Text>
                        </View>
                        <View style={{marginLeft:70}}>         
                            <Text style={{fontSize:15}}>Applied Date</Text>
                            <Text style={{fontSize:14,}}>{section.date}</Text>
                        </View>
                    </View>

                    <View style={{marginTop:15}}>
                        <Text style={{fontSize:15}}>Skills</Text>
                        <View style={{marginTop:10,marginBottom:10,marginLeft:-10}}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {
                                section.skills.map((item)=>{
                                    return(
                                        <View style={{backgroundColor: '#4F45F02a',borderRadius:15,padding:15,marginHorizontal:10}}>
                                        <Text>{item}</Text>
                                        </View>
                                    )
                                })
                                }
                            </ScrollView>
 
                        </View>
                    </View>

            </View>
      </View>
        );
      };

      _updateSections = activeSections => {
        this.setState({ activeSections });
      };
    
    render () {
      return (
        <View style={styles.maincontainer}>
        <ImageBackground source={require('../../assets/image/splash_bg.png')} style={styles.backgroundImage} resizeMode='stretch' >
        <View style={{backgroundColor : '#4F45F0' , flex:8}}>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>

            <TouchableOpacity onPress={this.onBackButtonClick}
            style={{marginTop:20,marginLeft:20,flexDirection:'row',alignItems:'center'}}>
                <Icon5 name="left" color={'white'} size={26} />
                <Text style={{color:'white',fontSize:22,marginLeft:4}}>Applied Employees</Text>
            </TouchableOpacity>

            <View style={{alignSelf:'flex-end',flexDirection:'row',marginHorizontal:10,marginTop:20}}>
                <TouchableOpacity  onPress={this.onSettingClick} style={{marginHorizontal:10}}>
                <Icon6 name="settings-outline" color={'white'} size={26} />
                </TouchableOpacity>
            </View>

            </View>
        </View>
        
        <View style={{ flex:75 ,marginHorizontal:20}}>

        <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 200,paddingTop:10 }}
        >

        <Accordion
                    sections={this.state.sectionlist}
                    activeSections={this.state.activeSections}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                    underlayColor={"#fff"}                  
                    containerStyle={{ backgroundColor: "transparent" }}
                />  
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