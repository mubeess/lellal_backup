import { View, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { ArrowLeftIcon, SearchIcon } from "../../../../assets/Svg/Index";
import Input from "../../../../components/Inputs/Input";

export default function DetailHeader() {
  return (
    <View style={styles.container}>
      <ArrowLeftIcon  color="#000" />
      <Input
        style={styles.inputContainer}
        inputStyle={styles.input}
        placeholder="Search"
        IconLeft={<SearchIcon color="#000" />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "100%",
    paddingTop: StatusBar.currentHeight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  input: {
    borderRadius: 50,
  },
  inputContainer: {
    width: "80%",
  },
});
