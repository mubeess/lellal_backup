import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { WatchImage } from "../../../../assets/Images";
import Text from "../../../../components/Text/Text";
import { CartIcon } from "../../../../assets/Svg/Index";
import { useNavigation } from "@react-navigation/native";

const ShopItem = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={WatchImage} style={styles.image} />
      <View style={styles.content}>
        <Text>Pizza Delight</Text>
        <Text h3>₦2,400</Text>
        <Text style={{ fontSize: 10, textAlign: "justify" }}>
          Timex Men's Easy Reader Day-Date Expansion Band Watch
        </Text>
      </View>

      <View style={styles.cart}>
        <TouchableOpacity
          onPress={() => navigate.navigate("Carts")}
          style={styles.cartButton}
        >
          <CartIcon color="#F06D06" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShopItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 130,
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 10,
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  cart: {
    height: "100%",
    width: 100,

    justifyContent: "center",
    alignItems: "center",
  },
  cartButton: {
    height: 35,
    width: 35,
    backgroundColor: "#F3F3F8",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
