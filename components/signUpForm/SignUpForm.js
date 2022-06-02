import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { firebase , db} from "../../firebase";


const SignUpForm = ({navigation}) => {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required("An email is required"),
        username: Yup.string().required().min(2, "A username is required"),
        password: Yup.string()
          .required()
          .min(8, "Your password has to have at least 8 characteres"),
      });
    
      const getRandomProfilePicture = async () => {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        return data.results[0].picture.large;
      };
      const onSignup = async (email, username, password) => {
        try {
          const authUser = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);
          console.log("firebase signup successful", email, password, username);
          db.collection("users")
            .doc(authUser.user.email)//user id ko email banaya
            .set({
              owner_uid: authUser.user.uid,
              username: username,
              email: authUser.user.email,
              profile_picture: await getRandomProfilePicture(),
            });
          navigation.push("HomeScreen");
        } catch (error) {
          Alert.alert("uff yaar check credentials", error.message);
        }
      };
      return (
        <View style={styles.wrapper}>
          <Formik
            initialValues={{ email: "", username: "", password: "" }}
            onSubmit={(values) => {
              onSignup(values.email, values.username, values.password); //passing all 3 values so can be easily used in the onSignup function
            }}
            validationSchema={SignupFormSchema}
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
                    autoCorrect={false}
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
                        1 > values.username.length || values.username.length > 2
                          ? "black"
                          : "red",
                    },
                  ]}
                >
                  <TextInput
                    placeholderTextColor="#ff0080"
                    placeholder="Username"
                    autoCapitalize="none"
                    textContentType="username"
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    value={values.username}
                    autoCorrect={false}
                    autoComplete="off"
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
                <Pressable
                  titleSize={20}
                  style={styles.button(isValid)}
                  onPress={handleSubmit}
                  disabled={!isValid}
                >
                  <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
                <View style={styles.loginContainer}>
                  <Text style={{ fontWeight: "600" , color:"#ff0080" }}>
                    Already have an account?
                  </Text>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ color: "#ff0080" }}> Log In</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      );
    };
    
    export default SignUpForm;
    
    const styles = StyleSheet.create({
      wrapper: {
        marginTop: 80,
      },
      inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: "#FAFAFA",
        marginBottom: 10,
        borderWidth: 1,
      },
      loginContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        marginTop: 50,
      },
      button: (isValid) => ({
        backgroundColor: isValid ? "#0096F5" : "#9ACAF7",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 42,
        borderRadius: 4,
        marginTop: 50,
      }),
      buttonText: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 20,
      },
    });
    