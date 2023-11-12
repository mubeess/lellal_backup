import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import AppHeader from "../../../components/Headers/AppHeader";
import { SearchIcon } from "../../../assets/Svg/Index";
import TobarHomeNavigation from "../../../navigation/TobBar/TobarHomeNavigation";
import { HeaderImage } from "../../../assets/Images";
import HomeCarousel from "./components/HomeCarousel";
import Text from "../../../components/Text/Text";
import Colors from "../../../constants/Colors";
import CategoriesCard from "./components/CategoriesCard";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="#fff" />
      <ImageBackground source={HeaderImage} style={styles.mainHeader}>
        <AppHeader />
        <HomeCarousel />
      </ImageBackground>
      <Text style={{ textAlign: "center" }} h1>
        What do you want to buy?
      </Text>
      <TouchableOpacity style={styles.category}>
        <Text style={{ color: Colors.general.primary }}>Choose a category</Text>
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.wrapStyle}
        style={styles.products}
      >
        <View style={styles.label}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>All Shops</Text>

          <TouchableOpacity>
            <Text style={{ color: Colors.general.secondary }}>View all</Text>
          </TouchableOpacity>
        </View>
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />

        <View style={styles.label}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Popular Shops
          </Text>

          <TouchableOpacity>
            <Text style={{ color: Colors.general.secondary }}>View all</Text>
          </TouchableOpacity>
        </View>
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainHeader: {
    width: "100%",
    height: 300,
    paddingTop: StatusBar.currentHeight,
  },
  label: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    alignItems: "center",
  },
  products: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  wrapStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  category: {
    width: "80%",
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EDEDED",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 20,
    marginVertical: 10,
  },
});
