import { View, SafeAreaView, Image } from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton";
import Header from "@/components/Header";

const Success = () => {
  return (
    <SafeAreaView className="p-6 ">
      <Header
        h1="Successfully"
        p="Your password has been updated, please change your password regularly
          to avoid this happening"
      />
      <View className="flex justify-center items-center my-10">
        <Image
          source={require("../../assets/images/verify.png")}
          className="w-[118.2px] h-[93.82px"
        />
      </View>

      <View>
        <CustomButton label={"Continue"} className="p-10" />
        <CustomButton label={"Back to Login"} type={"google"} />
      </View>
    </SafeAreaView>
  );
};

export default Success;
