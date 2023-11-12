import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { ShoeImage } from "../../../../assets/Images";
import Text from "../../../../components/Text/Text";
import Button from "../../../../components/Buttons/Button";
import {
  DeleteIcon,
  ShareIcon,
  ShareIcon2,
} from "../../../../assets/Svg/Index";

const CartItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cartDetail}>
        <Image source={ShoeImage} style={styles.image} />
        <View
          style={{
            borderBottomColor: "#F3F3F8",
            borderBottomWidth: 1,
            borderStyle: "dashed",
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 14 }} h2>
            AgileTrack
          </Text>
          <Text>Basketball Shoes</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 14 }} h2>
              N15,500
            </Text>
            <Text
              style={{
                textDecorationLine: "line-through",
                fontSize: 14,
                marginLeft: 5,
              }}
              h2
            >
              N15,500
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Color:</Text>
            <Text style={{ fontSize: 14 }} h2>
              Black
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Size:</Text>
            <Text style={{ fontSize: 14 }} h2>
              M
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={{ width: "40%" }}>
          <Button
            fontStyle={{ color: "#000" }}
            style={styles.share}
            IconRight={<ShareIcon2 />}
            label="Share"
          />
        </View>

        <View style={styles.delete}>
          <Text>QTY:</Text>
          <TouchableOpacity style={styles.add}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text h3>1</Text>
          <TouchableOpacity style={styles.add}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <DeleteIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    height: 160,
    backgroundColor: "#fff",
    marginTop: 20,
  },
  cartDetail: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 5,
    marginRight: 10,
  },
  bottom: {
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 10,
  },
  share: {
    height: 30,
    width: 100,
    backgroundColor: "#F4F4F6",
    borderRadius: 40,
    marginLeft: 0,
  },
  delete: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  add: {
    width: 30,
    height: 30,
    backgroundColor: "#F3F3F8",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
