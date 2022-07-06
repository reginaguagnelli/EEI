import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import MeteorScreen from "./screens/MeteorScreen";
import IssLocationScreen from "./screens/IssLocationScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Principal"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Principal" component={HomeScreen} />
        <Stack.Screen name="UbicaciónEEI" component={IssLocationScreen} />
        <Stack.Screen name="Meteoros" component={MeteorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
