import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: JSX.Element;
}

const WrapperView = ({ style, children }: Props): JSX.Element => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          flex: 1,
          // not required if there's the top header
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default WrapperView;
