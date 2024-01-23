import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Details from "./screens/Details";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}
            options={{title: "Trending Products"}}
          />
          <Stack.Screen name="Details" component={Details}
            options={{title: "Product details"}}
            screenOptions={{
              headerStyle:{backgroundColor: "tomato"}
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;