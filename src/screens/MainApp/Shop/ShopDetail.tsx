import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React, { useState } from "react";
import DetailHeader from "./components/DetailHeader";
import { Logo, StoreImage } from "../../../assets/Images";
import Text from "../../../components/Text/Text";
import Colors from "../../../constants/Colors";
import MenuItem from "./components/MenuItem";
import TopSellers from "./TopSellers";
const MENUS = ["Top sellers", "Drinks", "Best treats", "Packaging", "Reviews"];
const ShopDetail = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const handlePress = (ind) => {
    setActiveMenu(ind);
  };
  return (
    <View style={styles.container}>
      <DetailHeader />
      <ImageBackground source={StoreImage} style={styles.banner}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Image resizeMode="contain" source={Logo} style={styles.image} />
          </View>

          <Text h3 style={{ color: "#fff", marginLeft: 10 }}>
            Lellal Pizza
          </Text>
        </View>

        <View style={styles.open}>
          <Text style={{ color: Colors.general.primary }}>Open</Text>
        </View>
      </ImageBackground>
      <View style={styles.shopDetail}>
        <View>
          <Text style={styles.label}>Rating</Text>
          <Text style={styles.detail}>4.5</Text>
        </View>

        <View>
          <Text style={styles.label}>Open / Close Time</Text>
          <Text style={styles.detail}>9-8 PM</Text>
        </View>

        <View>
          <Text style={styles.label}>Estimated Delivery Time</Text>
          <Text style={styles.detail}>35 - 45 Minutes</Text>
        </View>
      </View>

      <ScrollView
        scrollEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.menus}
        contentContainerStyle={styles.menuItems}
      >
        {MENUS.map((menu, ind) => (
          <MenuItem
            onPress={() => handlePress(ind)}
            title={menu}
            key={menu}
            active={ind == activeMenu}
          />
        ))}
      </ScrollView>

      <View style={{ flex: 1 }}>
        <TopSellers />
      </View>
    </View>
  );
};

export default ShopDetail;

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get("window").height,
    backgroundColor: "#fff",
  },
  banner: {
    height: 150,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  image: {
    width: 40,
    height: 40,
  },
  open: {
    width: 70,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginRight: 20,
  },
  shopDetail: {
    backgroundColor: "#F4F4F6",
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  label: {
    fontSize: 10,
    color: "#AAAAAA",
    lineHeight: 12,
    textAlign: "center",
  },
  detail: {
    fontWeight: "bold",
    textAlign: "center",
  },
  menuItems: {
    flexDirection: "row",
    padding: 10,
  },
  menus: {
    overflow: "scroll",
    maxHeight: 70,
    backgroundColor: "#fff",
  },
});
