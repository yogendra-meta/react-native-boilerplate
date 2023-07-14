import React, { ReactNode } from "react";
import { StyleProp, Text, TextStyle } from "react-native";

interface Props {
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
}

const WrapperText = ({ style, children }: Props): JSX.Element => {
  return <Text style={style}>{children}</Text>;
};

export default WrapperText;
