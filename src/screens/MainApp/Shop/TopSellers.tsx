import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import Text from "../../../components/Text/Text";
import ShopItem from "./components/ShopItem";

const TopSellers = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.contentStyle}
      style={styles.container}
    >
      <StatusBar backgroundColor="#fff" />
      <Text h2>Top Sellers</Text>
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
      {/* <ShopItem />
      <ShopItem /> */}
    </ScrollView>
  );
};

export default TopSellers;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  contentStyle: {
    padding: 10,
  },
});
