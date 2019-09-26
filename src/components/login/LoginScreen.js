import React, { Component } from 'react';
import { View, ImageBackground } from "react-native"
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

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
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Button onPress={() => navigate("Home")}>
                    <Text>Click Me!</Text>
                </Button>
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;