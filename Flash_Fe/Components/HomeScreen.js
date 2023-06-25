import React from "react";
import { StyleSheet, TouchableOpacity, View, Button, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate("BarcodeScanner");
  };

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Open New Screen"
        onPress={handleButtonPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#4a8df5",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomeScreen;
