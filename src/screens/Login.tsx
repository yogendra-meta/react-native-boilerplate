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

function Login({ navigation }: Props) {
  const dispatch = useDispatch<Dispatch>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <WrapperView style={styles.container}>
      <>
        <Image source={require("./images/logo.png")} style={styles.logo} />
        <WrapperTextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={COLORS.SECONDARY}
          onChangeText={email => setEmail(email)}
        />
        <WrapperTextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={COLORS.SECONDARY}
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />

        <TouchableOpacity>
          <WrapperText style={styles.forgot_button}>
            Forgot Password?
          </WrapperText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => dispatch(fetchAuthUser())}
        >
          <WrapperText>LOGIN</WrapperText>
        </TouchableOpacity>

        <WrapperText style={styles.signUpTextWrapper}>
          Not having an account?{" "}
          <WrapperText
            style={styles.signUpText}
            onPress={() => navigation.navigate("Signup")}
          >
            Signup
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
  },
  forgot_button: {
    margin: 10,
    marginBottom: 25,
  },
  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.TERTIARY,
  },
  signUpTextWrapper: {
    marginTop: 10,
  },
  signUpText: {
    color: COLORS.TERTIARY,
  },
});

export default Login;
