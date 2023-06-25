/////////////////////////////////////////////////////////////////////////////
import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Text, Button, Animated } from "react-native";

const BottomSheet = ({ visible, scannedData, onClose }) => {
  const slideUpAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.spring(slideUpAnimation, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(slideUpAnimation, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideUpAnimation]);

  if (!visible) {
    return null;
  }

  const translateY = slideUpAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0],
  });

  return (
    <Animated.View
      style={[styles.bottomSheetContainer, { transform: [{ translateY }] }]}
    >
      <View style={styles.bottomSheet}>
        <Text style={styles.scannedData}>{scannedData}</Text>

        <View style={styles.buttonContainer}>
          <Button title="Reject" onPress={onClose} />
          <Button title="Add to Cart" onPress={() => {}} />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    flex: 1,
  },
  bottomSheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
    height: 500,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  scannedData: {
    marginBottom: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",

    justifyContent: "flex-end",
    marginTop: "auto",
  },
});

export default BottomSheet;
