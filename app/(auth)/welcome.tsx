import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";

const welcome = () => {
  return (
    <SafeAreaView className="p-[25px]">
      <View className="w-full flex justify-end items-end ">
        <Text className="font-DMBold text-[18px]">Jobspot</Text>
      </View>
      <Image
        source={require("../../assets/images/welcome.png")}
        className="my-[40px] w-[311px] h-[301px]"
      />
      <View>
        <Text className="text-[35px] font-DMBold leading-[37px]">
          Find Your{"\n"}
          <Text className="text-highlight underline">Dream Job{"\n"}</Text>
          Here!
        </Text>
        <Text className="text-text my-[10px]">
          Explore all the most exciting job roles basedon your interest and
          study major.
        </Text>
      </View>
      <Pressable
        className=" w-full flex justify-end items-end"
        onPress={() => router.push("/(auth)/sign-up")}
      >
        <Image
          source={require("../../assets/images/arrow.png")}
          className="w-[60px] h-[60px] mt-[10px]"
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default welcome;
