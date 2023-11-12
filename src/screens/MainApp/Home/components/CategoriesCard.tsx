import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { DisCountImage, WatchImage } from "../../../../assets/Images";
import Text from "../../../../components/Text/Text";
import Colors from "../../../../constants/Colors";
import { StarIcon } from "../../../../assets/Svg/Index";
import { useNavigation } from "@react-navigation/native";

export default function CategoriesCard({ discount = false }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Shop")}
      style={[styles.container, { padding: discount ? 0 : 5 }]}
    >
      {discount ? (
        <Image
          resizeMode="cover"
          source={DisCountImage}
          style={styles.discountImage}
        />
      ) : (
        <>
          <ImageBackground
            resizeMode="cover"
            source={WatchImage}
            style={styles.image}
          >
            <View style={styles.open}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: Colors.general.primary,
                }}
              >
                Open
              </Text>
            </View>
          </ImageBackground>
          <View style={styles.foot}>
            <Text style={{ fontSize: 10 }}>H-medix pharmacy</Text>
          </View>

          <View style={styles.foot}>
            <View style={styles.star}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              Health
            </Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 170,
    width: "45%",

    marginBottom: 20,
    borderRadius: 10,

    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  image: {
    width: "100%",
    flex: 1,
    marginVertical: 10,
  },
  button: {
    borderBottomColor: "#00A661",
    borderBottomWidth: 1,
    width: "60%",
    paddingVertical: 2,
    marginBottom: 5,
  },
  discountImage: {
    width: "100%",
    flex: 1,
    borderRadius: 10,
  },
  foot: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  star: {
    flexDirection: "row",
  },
  open: {
    backgroundColor: "#F3F3F8",
    width: 50,
    height: 23,
    marginLeft: "auto",
    borderBottomLeftRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
