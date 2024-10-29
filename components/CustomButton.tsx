import { View, Text, TouchableOpacity, Image, TouchableOpacityProps } from "react-native";
import React from "react";

interface BtnProps extends TouchableOpacityProps {
  label: string;
  className?: string;
  icon?: any;
  type?: string;

}

const CustomButton: React.FC<BtnProps> = ({ label, className, icon, type,  }) => {
  let textStyle = {
    bg: "",
    txt: "",
  };

  type
    ? ((textStyle.bg = " bg-google"), (textStyle.txt = "text-btn"))
    : ((textStyle.bg = "bg-btn"), (textStyle.txt = "text-white"));
  return (
    <TouchableOpacity
      className={`rounded-md shadow py-4 flex items-center ${textStyle.bg} mb-3 w-[85%]`}

    >
      <View className="flex-row justify-center items-center ">
        {icon && (
          <Image
            source={require("@/assets/images/google.png")}
            className="w-[24px] h-[24px] mr-5"
          />
        )}
        <Text
          className={`text-center  text-sm font-bold font-DM uppercase tracking-wide ${textStyle.txt}`}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
