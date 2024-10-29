import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InputText from "@/components/InputText";
import Checkbox from "@/components/CheckBox";
import CustomButton from "@/components/CustomButton";
import { Link, Redirect } from "expo-router";

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);
  function handleSignUp()  {
    Alert.alert("sign up")
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView className="p-6 ">
        <View className="items-center  my-6">
          <Text className="text-signin text-3xl font-bold ">
            Create an Account
          </Text>
          <Text className=" text-text text-xs font-normal leading-tight text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Text>
        </View>

        <InputText label="Full name" isPassword={false} />
        <InputText label="Email" isPassword={false} />
        <InputText label="password" isPassword={true} />

        <View className="flex-row justify-between items-center mb-3">
          <Checkbox
            label="Remember me"
            checked={isChecked}
            onChange={setIsChecked}
          />
          <Link href={"/(auth)/reset-password"}>
            <Text>Forgot Password ?</Text>
          </Link>
        </View>
        <View className="w-full flex justify-center items-center">
          <CustomButton
            label={"sign up"}
            className="p-10"
            onPress={handleSignUp}
          />

          <CustomButton
            label={"Sign in with Google"}
            className="p-10"
            icon={"yes"}
            type={"google"}
          />
        </View>

        <View>
          <Text className="text-center">
            Already have an account
            <Link className="text-highlight" href={"/(auth)/login"}>
              Login
            </Link>
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SignUp;
