import React, { Component } from 'react';
import { View, ImageBackground,Image } from "react-native"
import { Container, Header, Title, Content, Footer, FooterTab, Button, FontAwesome, Left, Right, Body, Text, InputGroup, Form, Item, Input, Label,Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/FontAwesome';
const LoginScreen = (props) => {
    const { navigate } = props.navigation;
    return (
        
        <ImageBackground source={require("../../images/Mask_Group_9.png")}
            resizeMode='cover'
            style={{
                flex: 1,
                width: '100%',
                height: '100%'
            }}>


<Image source={require("../../images/test.png")} style={{width: 330, height: 70,marginTop:150,marginLeft:348}} />


            <View style={{flex:1, marginTop:70, justifyContent: "center", alignItems: "center" }}>
                <View style={{   width: 330 }}>
                    <Form style={{  justifyContent: "center" }}>
                        <Item regular  style={{backgroundColor:"#FFFFFFCC", borderWidth: 0.5,borderColor: '#00A6CE',borderRadius: 5}}  >
                            <Icon  type="FontAwesome" name='user' style={{ color: '#00C497' }} />
                            <Input  placeholder='1234567'  />
                        </Item>
                        <Item regular style={{backgroundColor:"#FFFFFFCC", borderWidth: 0.5,borderColor: '#00A6CE',borderRadius: 5,marginTop:20}} >
                            <Icon active name='lock' style={{ color: '#00C497' }} />
                            <Input placeholder='รหัสผ่าน' />
                        </Item>

                        <Text style={{color:"#00A6CE",marginTop:10,textAlign: 'right',fontSize:20}}>ลืมรหัสผ่าน?</Text>
                    
                        <Button style={{height:50,marginTop:20,borderWidth: 0.5,borderColor: '#00A6CE',borderRadius: 5 }} onPress={() => navigate("Home")}>
                        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                            <Text style={{fontSize:20,color:"#FFFFFF"}}>เข้าระบบ</Text>
                            </View>
                        </Button>
                    

                        <Button style={{backgroundColor:"#FFFFFF", height:50,marginTop:20,borderWidth: 0.5,borderColor: '#00A6CE',borderRadius: 5 }} onPress={() => navigate("Home")}>
                            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                            <Text style={{fontSize:20,color:"#00A6CE"}}>ลงทะเบียน</Text>
                            </View>
                        </Button>

                    </Form>
                   
                   
                   
                    
                       
                       
        
                </View>



            </View>
            {/* <InputGroup borderType='rounded' border-width='1'  >
            <Icon active name='user' style={{color:'#00C497'}} />
            <Input placeholder='Icon Textbox'  />
          </InputGroup>
       
          <InputGroup borderType='rounded'  >
            <Icon active name='lock' style={{color:'#00C497'}} />
            <Input placeholder='Icon Textbox'  />
          </InputGroup> */}








        </ImageBackground>
    );
};

export default LoginScreen;