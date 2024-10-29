import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import CustomButton from '@/components/CustomButton';
import InputText from '@/components/InputText';
import { Link } from 'expo-router';

const Verify = () => {
  return (
    <SafeAreaView className="p-6 ">
      <View className="items-center  my-20">
        <Text className="text-signin text-3xl font-bold mb-2 ">
          Check Your Email
        </Text>
        <Text className=" text-text text-xs font-normal leading-tight text-center">
          We have sent the reset password to the email address
          brandonelouis@gmial.com
        </Text>
      </View>
      <View className="flex justify-center items-center">
        <Image
          source={require("../../assets/images/verify.png")}
          className="w-[118.2px] h-[93.82px"
        />
      </View>

      <View>
        <CustomButton label={"Open Your Email"} className="p-10" />
        <CustomButton label={"Back to Login"} type={"google"} />
      </View>
      <View>
        <Text className="text-center">
          You have not received the email?{" "}
          <Link className="text-highlight" href={"/(auth)/sign-up"}>
            Resend
          </Link>
        </Text>
        <Link className="text-highlight" href={"/(auth)/success"}>
          Resend
        </Link>
      </View>
    </SafeAreaView>
  );
}

export default Verify