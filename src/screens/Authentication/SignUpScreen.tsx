import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import Input from "../../components/Inputs/Input";
import Icon from "react-native-vector-icons/Ionicons";
import Text from "../../components/Text/Text";
import Button from "../../components/Buttons/Button";
import {
  AppleLogo,
  EmailIcon,
  Flag,
  GoogleIcon,
  UserIcon,
  WaveSvg,
} from "../../assets/Svg/Index";
import Colors from "../../constants/Colors";
import AuthHeader from "../../components/Headers/AuthHeader";
import Container from "../../components/Containers/Container";
import { useFormik } from "formik";
import useAlert from "../../hooks/useAlert";
import Loader from "../../components/Loaders/Loader";
import useQuery from "../../hooks/useQuery";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/userSlice";
import { ScrollView } from "react-native-gesture-handler";

export default function SignUpScreen({ navigation, signIn }) {
  const initialValues = {
    first_name: "",
    last_name: "",
    password: "",
    email: "",
    phone: "",
    address: "",
  };

  const { loading, query } = useQuery();
  const dispatch = useDispatch();
  const { Alert, showAlert } = useAlert();

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, "Password must be more than six characters")
      .required(),
    phone: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const { phone } = values;

      console.log(phone);
    },
  });

  const { phone } = formik.values;
  return (
    <View style={styles.container}>
      <Text style={{ color: "#818391", textAlign: "center" }}>
        Please fill in this form to create an account
      </Text>
      <Input
        label=""
        placeholder="Full Name"
        Icon={<UserIcon height={20} width={20} color="#AAAAAA" />}
      />
      <Input label="" placeholder="Email" Icon={<EmailIcon />} />
      <Input label="" placeholder="Phone" Icon={<EmailIcon />} />
      <Input label="" placeholder="Password" Icon={<EmailIcon />} />
      <Input label="" placeholder="Confirm Password" Icon={<EmailIcon />} />
      <Button
        onPress={() => navigation.navigate("Otp")}
        style={{
          borderRadius: 20,
          marginTop: 20,
        }}
        label="Create Account"
      />

      <View style={styles.otherSign}>
        <Text style={{ color: "#AAAAAA" }}>Other sign in options</Text>

        <TouchableOpacity style={styles.option}>
          <GoogleIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <AppleLogo />
        </TouchableOpacity>
      </View>

      <View style={styles.haveAccount}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => signIn()} style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 12, color: Colors.general.secondary }}>
            Sign In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginLeft: 10,
            borderLeftWidth: 1,
            borderLeftColor: Colors.general.border,
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 12, color: Colors.general.border }}>
            Skip for now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 20,
    height: Dimensions.get("window").height,
  },
  divider: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E9EAEE",
  },
  button: {
    backgroundColor: "#fff",
    marginVertical: 10,
    borderColor: "#AAAAAA",
    borderWidth: 1,
    borderRadius: 20,
  },
  privacy: {
    marginTop: "auto",
    marginBottom: 20,
  },
  otherSign: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  option: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.general.border,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  haveAccount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
