import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'
import logo from "../assets/logo.png";
import back from "../assets/back.jpeg";
import LoginForm from '../components/loginForm/LoginForm';
const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
          <ImageBackground source={back} resizeMode="cover" style={styles.image}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={logo} />
            </View>
            <LoginForm navigation={navigation} />
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
        marginTop: -350,
        marginBottom:20,
      },
    });

export default LoginScreen