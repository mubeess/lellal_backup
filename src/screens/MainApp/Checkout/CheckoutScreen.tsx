import { StyleSheet, View } from "react-native";
import React from "react";
import CheckoutHeader from "./Components/CheckoutHeader";
import Text from "../../../components/Text/Text";
import LocationSelector from "./Components/LocationSelector";
import Previous from "./Components/Previous";
import Button from "../../../components/Buttons/Button";
import { useNavigation } from "@react-navigation/native";

const CheckoutScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CheckoutHeader />
      <View style={styles.location}>
        <Text style={{ fontWeight: "bold" }}>Confirm your location</Text>
        <View style={styles.decoContainer}>
          <View style={styles.deco} />
          <View style={styles.deco2} />
          <View style={styles.deco2} />
        </View>
      </View>
      <View style={styles.remain}>
        <LocationSelector />
        <View style={styles.divider} />
        <Previous />
        <Previous />
        <Button
          onPress={() => navigation.navigate("CheckoutSuccess")}
          style={{
            width: "80%",
            marginTop: "auto",
            borderRadius: 40,
          }}
          label="Next"
        />
      </View>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  decoContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  deco: {
    width: 40,
    height: 1,
    backgroundColor: "#F06D06",
    borderRadius: 5,
  },
  deco2: {
    width: 20,
    height: 1,
    backgroundColor: "#F7ECE1",
    marginLeft: 10,
  },
  remain: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#D9D9D9",
    marginVertical: 20,
  },
});
