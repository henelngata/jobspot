import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ToggleView from '@/components/ToggleView'

const Description = () => {
  // which is clicke and is active
  let [comp, setCompany] = useState(1)
  function changeDescription(x:number) {
    setCompany(x)
  }
  return (
    <SafeAreaView>
      <View className="bg-black mb-8">
        <View>
          <Image source={require("@/assets/images/back.png")} />
        </View>
        <View className="w-[84px] h-[84px] bg-[#afecfe] rounded-[48px] relative top-[30%] left-[40%]"></View>
      </View>
      <View className="mb-4 flex items-center">
        <Text className="text-[#0d0140] text-base font-bold font-['DM Sans']">
          UI/UX Designer
        </Text>
        <View className="w-full flex-row justify-between px-6 items-center">
          <Text className="text-[#0d0140] text-base font-normal font-['DM Sans']">
            Google
          </Text>
          <View className="w-[7px] h-[7px] bg-[#0d0140] rounded-full"></View>
          <Text className="text-[#0d0140] text-base font-normal font-['DM Sans']">
            California
          </Text>
          <View className="w-[7px] h-[7px] bg-[#0d0140] rounded-full"></View>
          <Text className="text-[#0d0140] text-base font-normal font-['DM Sans']">
            1 day ago
          </Text>
        </View>
      </View>
      <ToggleView/>
    </SafeAreaView>
  );
}

export default Description