import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import Checkbox from "@/components/CheckBox";
import CustomButton from "@/components/CustomButton";
import InputText from "@/components/InputText";
import { Link } from "expo-router";

const PasswordReset = () => {
  return (
    <SafeAreaView className="p-6 ">
      <View className="items-center  my-20">
        <Text className="text-signin text-3xl font-bold mb-2 ">
          Forgot Password?
        </Text>
        <Text className=" text-text text-xs font-normal leading-tight text-center">
          To reset your password, you need your email or mobile number that can
          be authenticated
        </Text>
      </View>
      <View className="flex justify-center items-center">
        <Image
          source={require("../../assets/images/pass.png")}
          className="w-[118.2px] h-[93.82px"
        />
      </View>
      <InputText label="Email" isPassword={false} />

      <View>
        <CustomButton label={"Reset Password"} className="p-10" />

        <CustomButton label={"Back to Login"} type={"google"} />
      </View>
      <Link href={"/(auth)/verify"}><Text>Verify</Text></Link>
    </SafeAreaView>
  );
};

export default PasswordReset;
