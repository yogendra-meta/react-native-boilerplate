import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { NavigationType } from "../../Routes";
import { Dispatch } from "..";
import { fetchAuthUser } from "../thunks/auth";
import WrapperView from "../components/common/View";
import WrapperText from "../components/common/Text";
import WrapperTextInput from "../components/common/TextInput";
import { COLORS } from "../utils/constants";

interface Props {
  navigation: NavigationType;
}

function Signup({ navigation }: Props) {
  const dispatch = useDispatch<Dispatch>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <WrapperView style={styles.container}>
      <>
        <Image source={require("./images/logo.png")} style={styles.logo} />
        <WrapperTextInput
          style={styles.textInput}
          placeholder="Name"
          placeholderTextColor={COLORS.SECONDARY}
          onChangeText={name => setName(name)}
        />
        <WrapperTextInput
          style={styles.textInput}
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor={COLORS.SECONDARY}
          onChangeText={email => setEmail(email)}
        />
        <WrapperTextInput
          style={styles.textInput}
          placeholder="New Password"
          placeholderTextColor={COLORS.SECONDARY}
          onChangeText={password => setPassword(password)}
          secureTextEntry
        />
        <WrapperTextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          placeholderTextColor={COLORS.SECONDARY}
          onChangeText={password => setConfirmPassword(password)}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => dispatch(fetchAuthUser())}
        >
          <WrapperText>SIGN UP</WrapperText>
        </TouchableOpacity>

        <WrapperText style={styles.loginTextWrapper}>
          Already have an account?{" "}
          <WrapperText
            style={styles.loginText}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </WrapperText>
        </WrapperText>
      </>
    </WrapperView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: { width: 100, height: 100 },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    width: "100%",
    color: COLORS.SECONDARY,
  },
  loginBtn: {
    width: "70%",
    marginTop: 20,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.TERTIARY,
  },
  loginTextWrapper: {
    marginTop: 10,
  },
  loginText: {
    color: COLORS.TERTIARY,
  },
});

export default Signup;
