import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Pressable,
    TouchableOpacity,
    Alert,
  } from "react-native";
  import React, { useState } from "react";
  import { Formik } from "formik";
  import * as Yup from "yup";
  import Validator from "email-validator";
  //firebase import
  import {firebase, db} from '../../firebase';
  
  
  const LoginForm = ({ navigation }) => {
    const LoginFormSchema = Yup.object().shape({
      email: Yup.string().email().required("An email is needed"),
      password: Yup.string()
        .required()
        .min(8, "Password must be at least 8 characters"),
    });
  
    const onLogin = async (email, password) => {
      try {
        const authUser = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        console.log('firebase signup successful', email, password);
      } catch (error) {
        Alert.alert(
          'Prith says',
          error.message + '\n\n... baka theres an syntax error!!!',
          [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
              style: 'cancel',
            },
            {text: 'Sign Up', onPress: () => navigation.push('SignUpScreen')},
          ],
        );
      }
    };
  
    return (
      <View style={styles.wrapper}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            onLogin(values.email, values.password);
          }}
          validationSchema={LoginFormSchema}
          validateOnMount={true}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
            <>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      values.email.length < 1 || Validator.validate(values.email)
                        ? "black"
                        : "red",
                  },
                ]}
              >
                <TextInput
                  placeholderTextColor="#ff0080"
                  placeholder="Phone number, username or email"
                  autoCapitalize="none"
                  textContentType="emailAddress"
                  autoFocus={true}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
              </View>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      1 > values.password.length || values.password.length > 7
                        ? "black"
                        : "red",
                  },
                ]}
              >
                <TextInput
                  placeholderTextColor="#ff0080"
                  placeholder="Password"
                  autoCapitalize="none"
                  secureTextEntry={true}
                  autoCorrect={false}
                  textContentType="password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
              </View>
              <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
                <Text style={{ color: "white" }}>Forgot Password ^.^ ?</Text>
              </View>
  
              <Pressable
                titleSize={20}
                style={styles.button(isValid)}
                onPress={handleSubmit}
                disabled={!isValid}
              >
                <Text style={styles.buttonText}>Log In</Text>
              </Pressable>
  
              <View style={styles.signupContainer}>
                <Text style={{ fontWeight: "600" }}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.push("SignUpScreen")}>
                  <Text style={{ color: "white" }}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    signupContainer: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      marginTop: 50,
    },
    wrapper: {
      marginTop: 80,
    },
    inputField: {
      borderRadius: 4,
      padding: 12,
      backgroundColor: "#FAFAFA",
      marginBottom: 10,
      borderWidth: 1,
      textAlign: "center",
    },
    button: (isValid) => ({
      backgroundColor: isValid ? "#0096f6" : "#9acaf7",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 42,
    }),
  });
  
  export default LoginForm;
  