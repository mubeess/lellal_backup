import { View, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import BackButton from "../Buttons/BackButton";
import Text from "../Text/Text";
import Colors from "../../constants/Colors";
import {
  CarIcon,
  CartIcon,
  DrawerIcon,
  SearchIcon,
} from "../../assets/Svg/Index";

export default function AppHeader() {
  return (
    <View style={styles.header}>
      <Text h1 style={styles.headerTetx}>
        Léllall
      </Text>

      <View style={styles.icon}>
        <TouchableOpacity>
          <CartIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
    padding: 20,
    justifyContent: "center",
  },
  headerTetx: {
    color: Colors.general.primary,
    marginLeft: "auto",
  },
  icon: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
});
