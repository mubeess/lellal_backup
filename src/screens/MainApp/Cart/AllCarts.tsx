import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import CartHeader from "./components/CartHeader";
import Text from "../../../components/Text/Text";
import CartItem from "./components/CartItem";
import Button from "../../../components/Buttons/Button";
import MenuItem from "../Shop/components/MenuItem";
import ShopItem from "../Shop/components/ShopItem";
import { useNavigation } from "@react-navigation/native";

const AllCarts = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CartHeader />
      <ScrollView contentContainerStyle={styles.content} style={styles.remain}>
        <View>
          <Text style={{ fontWeight: "bold" }}>Items(2)</Text>
        </View>
        <CartItem />
        <CartItem />
        <View style={styles.lable}>
          <Text>Subtotal</Text>
          <Text>N15,500</Text>
        </View>
        <View style={styles.lable}>
          <Text>Discount</Text>
          <Text>N0</Text>
        </View>
        <View style={styles.lable}>
          <Text>Delivery</Text>
          <Text>N500</Text>
        </View>
        <Button
          fontStyle={{ color: "#000" }}
          style={styles.button}
          label="Add discount code"
        />
        <View style={styles.lable}>
          <Text h2>Grand Total</Text>
          <Text h2>N16,000</Text>
        </View>
        <Button
          onPress={() => navigation.navigate("Checkout")}
          style={{
            width: "80%",
            marginTop: 20,
            borderRadius: 40,
          }}
          label="Proceed to checkout"
        />
        <Text style={{ marginVertical: 20 }} h2>
          You may also like
        </Text>
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </ScrollView>
    </View>
  );
};

export default AllCarts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  remain: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  lable: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#DFE2E8",
    marginTop: 20,
  },
});
