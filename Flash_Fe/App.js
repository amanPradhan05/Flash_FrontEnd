// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Components/HomeScreen";

import BarcodeScanner from "./Components/BarcodeScanner";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BarcodeScanner" component={BarcodeScanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
