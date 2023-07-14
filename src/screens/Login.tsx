import React from "react";
import { Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { NavigationType } from "../../Routes";
import { Dispatch } from "..";
import { fetchAuthUser } from "../thunks/auth";
import WrapperView from "../components/common/View";
import WrapperText from "../components/common/Text";

interface Props {
  navigation: NavigationType;
}

function Login({ navigation }: Props) {
  const dispatch = useDispatch<Dispatch>();
  return (
    <WrapperView style={styles.container}>
      <>
        <WrapperText>This is Login screen.</WrapperText>
        <Button
          title="Go to dashboard"
          onPress={() => dispatch(fetchAuthUser())}
        />
      </>
    </WrapperView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101012",
  },
});

export default Login;
