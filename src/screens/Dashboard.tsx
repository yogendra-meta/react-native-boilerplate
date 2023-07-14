import React from "react";
import { Button, Text } from "react-native";
import { useDispatch } from "react-redux";
import { Dispatch } from "..";
import WrapperView from "../components/common/View";
import { logoutUser } from "../slices/auth";
import storage from "../utils/storage";

const Dashboard = (): JSX.Element => {
  const dispatch = useDispatch<Dispatch>();
  return (
    <WrapperView>
      <>
        <Text>This is dashboard screen</Text>
        <Button
          title="Logout"
          onPress={async () => {
            await storage.removeToken();
            dispatch(logoutUser());
          }}
        />
      </>
    </WrapperView>
  );
};

export default Dashboard;
