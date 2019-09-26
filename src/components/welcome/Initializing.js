import React from 'react';
import { View, ImageBackground, Image } from "react-native"
import { Spinner } from "native-base"

const InitialzingScreen = (props) => {
  return (
    <ImageBackground source={require("../../images/welcome/Group_3464.png")}
      resizeMode='cover' style={{ flex: 1, width: '100%', height: '100%', backgroundColor: "#0096BA" }}>
      <Image style={{ position: "absolute", top: 130, left: 200 }} source={require("../../images/welcome/Group_3463.png")} />
      <View style={{ flex: 1 , alignItems:"center", justifyContent:"center" }}>
        <Spinner color="#00A6CE" size={50} />
      </View>

    </ImageBackground>
  );
};

export default InitialzingScreen;