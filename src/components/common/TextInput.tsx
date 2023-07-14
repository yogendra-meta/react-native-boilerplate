import React from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";

const WrapperTextInput = ({
  onChangeText,
  style,
  ...props
}: TextInputProps) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={[styles.textInput, style]}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: "#1d394d",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginTop: 20,
    alignItems: "center",
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    width: "100%",
    color: "#fff",
  },
});

export default WrapperTextInput;
