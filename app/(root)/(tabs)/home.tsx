import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";
import { Redirect, router } from "expo-router";

const Home = () => {
  function moveToDescription() {
    router.push("/(root)/description")
  }
  return (
    <SafeAreaView className="p-4">
      <ScrollView>
        <Image
          className="flex w-[40px] h-[40px] relative left-[90%] rounded-full"
          source={require("@/assets/images/profile.jpg")}
        />
        <View className="font-DMBold mb-[38px]">
          <Text className="font-DMBold text-[22px]">
            Hello{"\n"}
            Orlando Diggs
          </Text>
        </View>
        <View className="w-full   bg-btn rounded-md p-5 flex-row justify-between">
          <View className="w-[50%]">
            <Text className="text-white text-[18px] mb-7">
              50% off{"\n"}
              take any courses
            </Text>
            <TouchableOpacity className="bg-oranje p-2 w-[80%] rounded-md flex items-center">
              <Text className="text-white">Join Now</Text>
            </TouchableOpacity>
          </View>
          <Image
            className="flex w-[150px] h-[200px] absolute left-[60%] top-[-49%] "
            source={require("@/assets/images/o.png")}
          />
        </View>
        <View>
          <Text className="font-DMBold capitalize text-base my-3">
            Find Your Job
          </Text>
          <View className="flex-row justify-between">
            <View className="bg-[#AFECFE] flex items-center py-4 w-[50%] rounded-md">
              <Image
                className="w-[34px] h-[34px] mb-2 mt-4"
                source={require("@/assets/images/headhunt.png")}
              />
              <Text className="font-bold text-base">44.5k</Text>
              <Text className="text-[#0d0140] text-sm font-normal font-DM">
                Remote Job
              </Text>
            </View>
            <View className="w-[45%]">
              <View className="bg-[#beaffe] flex items-center py-4 mb-2 rounded-md">
                <Text className="font-bold text-base">44.5k</Text>
                <Text className="text-[#0d0140] text-sm font-normal font-DM">
                  Remote Job
                </Text>
              </View>
              <View className="bg-[#fed5ad] flex items-center py-4 rounded-md">
                <Text className="font-bold text-base">44.5k</Text>
                <Text className="text-[#0d0140] text-sm font-normal font-DM">
                  Remote Job
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text className="font-DMBold capitalize text-base my-3">
            Recent Job List
          </Text>
          <ScrollView>
            <TouchableOpacity
              onPress={moveToDescription}
            ><Text>Clickme</Text></TouchableOpacity>
            <View className="bg-white p-4 rounded-md">
              <View className="flex-row justify-between mb-3">
                <Image className="w-10 h-10 bg-[#d6ccfe] rounded-full" />
                <View>
                  <Text className="text-[#150b3d] text-sm font-bold font-['DM Sans']">
                    Product Designer
                  </Text>
                  <Text className="text-[#514a6b] text-xs font-normal font-['DM Sans']">
                    Google inc - <Text>California, USA</Text>
                  </Text>
                </View>
                <Image source={require("@/assets/images/save.png")} />
              </View>
              <Text className="text-[#150b3d] text-sm font-semibold font-['Open Sans']">
                $15K
                <Text className="text-[#a9a5b8] text-xs font-normal font-['Open Sans']">
                  /Mo
                </Text>
              </Text>
              <View className="flex-row justify-between">
                <View className="opacity-20 bg-[#cbc9d4] rounded-lg backdrop-blur-sm p-2  flex items-center">
                  <Text className="text-[#544b75] text-sm font-normal font-DM">
                    Senior designer
                  </Text>
                </View>
                <View className="opacity-20 bg-[#cbc9d4] rounded-lg backdrop-blur-sm p-2 flex items-center">
                  <Text className="text-[#544b75] text-[12px] font-normal font-DM">
                    Full time
                  </Text>
                </View>
                <View className="opacity-20 bg-[#FF6B2C] rounded-lg backdrop-blur-sm p-2 w-[30%] flex items-center">
                  <Text className="text-[#544b75] text-[12px] font-normal font-DM">
                    Apply
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
