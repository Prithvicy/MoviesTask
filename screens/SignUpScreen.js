import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import SignUpForm from "../components/signUpForm/SignUpForm";
import logo from "../assets/logo.png";
import back from "../assets/back.jpeg";

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={back} resizeMode="cover" style={styles.image}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />
        </View>
        <SignUpForm navigation={navigation} />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    position: "absolute",
    width: 100,
    height: 100,
    zIndex: 100,
    borderRadius: 25,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom:20,
  },
});

export default SignUpScreen;
