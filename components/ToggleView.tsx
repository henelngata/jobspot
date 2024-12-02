import { Link } from "expo-router";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

const ToggleView = () => {
  const [comp, setComp] = useState(1);

  const changeDescription = (value: number) => {
    return () => setComp(value);
  };

  return (
    <View>
      <View className="flex-row justify-between p-4">
        <TouchableOpacity
          className={`rounded-md w-[45%] p-4 ${
            comp === 1 ? "bg-[#130160]" : "bg-[#d6cdfe]"
          }`}
          onPress={changeDescription(1)}
        >
          <Text
            className={`font-DMMedium text-center ${
              comp === 1 ? "text-white" : "text-black"
            }`}
          >
            Description
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`rounded-md w-[45%] p-4 ${
            comp === 2 ? "bg-[#130160]" : "bg-[#d6cdfe]"
          }`}
          onPress={changeDescription(2)}
        >
          <Text
            className={`font-DMMedium text-center ${
              comp === 2 ? "text-white" : "text-black"
            }`}
          >
            company
          </Text>
        </TouchableOpacity>
      </View>
      <View className="p-4">
        {comp === 1 ? (
          <View>
            <Text className="font-DMBold text-[18px] mb-2">
              Job Description
            </Text>
            <Text className=" text-[#514a6b] text-xs font-normal font-DMMedium">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem ...
            </Text>
            <TouchableOpacity className=" opacity-20 bg-[#7551ff] rounded-md p-2 w-[30%] my-4">
              <Text className=" text-center">Read more</Text>
            </TouchableOpacity>
            <Text className="font-DMBold text-[18px] mb-2">Requirements</Text>
            <View className="flex-row justify-between items-center mb-2">
              <View className="w-1 h-1 bg-[#514a6b] rounded-full"></View>
              <Text>Sed ut perspiciatis unde omnis iste natus error sit.</Text>
            </View>
            <View className="flex-row justify-between items-center mb-2">
              <View className="w-1 h-1 bg-[#514a6b] rounded-full"></View>
              <Text>Sed ut perspiciatis unde omnis iste natus error sit.</Text>
            </View>
            <View className="flex-row justify-between items-center mb-2">
              <View className="w-1 h-1 bg-[#514a6b] rounded-full"></View>
              <Text>Sed ut perspiciatis unde omnis iste natus error sit.</Text>
            </View>
            <View className="flex-row justify-between items-center mb-2">
              <View className="w-1 h-1 bg-[#514a6b] rounded-full"></View>
              <Text>Sed ut perspiciatis unde omnis iste natus error sit.</Text>
            </View>
            <TouchableOpacity className="bg-[#130160] w-[80%] p-4 relative left-6 my-4 rounded-md">
              <Text className="text-white  text-center text-sm font-bold font-['DM Sans'] uppercase tracking-wide">
                Apply Now
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <ScrollView>
              <Text className="font-DMBold text-[18px] mb-2">
                About Company
              </Text>
              <Text className=" text-[#514a6b] text-xs font-normal font-DMMedium">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem ...
              </Text>
              <View className="mb-2">
                <Text className="font-DMBold text-[16px] mb-2">Website</Text>
                <Link href={"/"}>
                  <Text>https://www.google.com</Text>
                </Link>
              </View>
              <View className="mb-2">
                <Text className="font-DMBold text-[16px] mb-2">Industry</Text>
                <Link href={"/"}>
                  <Text>https://www.google.com</Text>
                </Link>
              </View>
              <View className="mb-2">
                <Text className="font-DMBold text-[16px] mb-2">Website</Text>
                <Link href={"/"}>
                  <Text>https://www.google.com</Text>
                </Link>
              </View>
              <View className="mb-2">
                <Text className="font-DMBold text-[16px] mb-2">Website</Text>
                <Link href={"/"}>
                  <Text>https://www.google.com</Text>
                </Link>
              </View>
              <View className="mb-2">
                <Text className="font-DMBold text-[16px] mb-2">Website</Text>
                <Link href={"/"}>
                  <Text>https://www.google.com</Text>
                </Link>
              </View>
              <View className="mb-2">
                <Text className="font-DMBold text-[16px] mb-2">Website</Text>
                <Link href={"/"}>
                  <Text>https://www.google.com</Text>
                </Link>
              </View>
              <View className="mb-2">
                <Text className="font-DMBold text-[16px] mb-2">Website</Text>
                <Link href={"/"}>
                  <Text>https://www.google.com</Text>
                </Link>
              </View>
              <View className="mb-2">
                <Text className="font-DMBold text-[16px] mb-2">Website</Text>
                <Link href={"/"}>
                  <Text>https://www.google.com</Text>
                </Link>
              </View>
            </ScrollView>

            <TouchableOpacity className="bg-[#130160] w-[80%] p-4 relative left-6 my-4 rounded-md">
              <Text className="text-white  text-center text-sm font-bold font-['DM Sans'] uppercase tracking-wide">
                Apply Now
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default ToggleView;
