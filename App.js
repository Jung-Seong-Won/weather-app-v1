import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const STYLES = ["dark-content", "light-content"];

export default function App() {
  const [number, setNumber] = useState(0);
  const [hidden, setHidden] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="red" hidden={hidden} />
      <Text style={{ fontSize: 50 }}>안녕 : {number}</Text>
      <View style={{ flexDirection: "row", gap: 10, margin: 20 }}>
        <Button title="더하기" onPress={() => setNumber(number + 1)} />
        <Button title="빼기" onPress={() => setNumber(number - 1)} />
      </View>
      <View style={{ margin: 20 }}>
        <Button title="상태메뉴토글" onPress={() => setHidden(!hidden)} />
      </View>
    </View>
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
