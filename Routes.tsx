import React, { useEffect } from "react";
import { StatusBar, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  logoutUser,
  restoreTokenLoaded,
  restoreTokenLoading,
} from "./src/slices/auth";
import Login from "./src/screens/Login";
import Dashboard from "./src/screens/Dashboard";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import storage from "./src/utils/storage";
import store from "./src/store";
import { useSelector } from "react-redux";
import { RootState } from "./src";
import WrapperText from "./src/components/common/Text";

export type StackParamList = {
  Login: undefined;
  Dashboard: undefined;
};

export type NavigationType = NativeStackNavigationProp<StackParamList>;

const Stack = createNativeStackNavigator<StackParamList>();

const Routes = () => {
  const isDarkMode = useColorScheme() === "dark";
  const authUserData = useSelector((state: RootState) => state.authUser);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let token;

      store.dispatch(restoreTokenLoading());
      try {
        // await storage.setToken("response");
        token = await storage.getToken();
        if (token) store.dispatch(restoreTokenLoaded({ token }));
        else store.dispatch(logoutUser());
      } catch (e) {
        store.dispatch(logoutUser());
        // Restoring token failed
      }
    };

    bootstrapAsync();
  }, []);

  console.log("hello", isDarkMode);
  if (authUserData.isLoading) {
    return <WrapperText>Loading...</WrapperText>;
  }

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={authUserData.token ? "Dashboard" : "Login"}
          screenOptions={{ headerShown: false }}
        >
          {authUserData.token ? (
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ title: "Dashboard" }}
            />
          ) : (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: "Login" }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
