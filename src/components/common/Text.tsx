import React, { ReactNode } from "react";
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
  StyleSheet,
} from "react-native";

interface Props {
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const WrapperText = ({ style, children, onPress }: Props): JSX.Element => {
  return (
    <Text onPress={onPress} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 14,
  },
});

export default WrapperText;
