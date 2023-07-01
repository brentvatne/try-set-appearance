import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Appearance,
  ColorSchemeName,
  Button,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ToggleNativeAppearance />
      <StatusBar style="auto" />
    </View>
  );
}

const ToggleNativeAppearance = () => {
  const [nativeColorScheme, setNativeColorScheme] =
    useState<ColorSchemeName | null>(null);
  const colorScheme = useColorScheme();

  useEffect(() => {
    Appearance.setColorScheme(nativeColorScheme);
  }, [nativeColorScheme]);

  return (
    <View>
      <Text>Native colorScheme: {nativeColorScheme}</Text>
      <Text>Current colorScheme: {colorScheme}</Text>
      <Button
        title="Set to light"
        onPress={() => setNativeColorScheme("light")}
      />
      <Button
        title="Set to dark"
        onPress={() => setNativeColorScheme("dark")}
      />
      <Button title="Unset" onPress={() => setNativeColorScheme(null)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
