import { View, Text } from 'react-native'
import React from 'react'

interface headerProps{
  h1: string
  p: string
}
const Header: React.FC<headerProps> = ({h1, p}) => {
  return (
    <View className="w-full items-center my-8">
      <Text className="text-signin text-3xl font-bold">{h1}</Text>
      <Text className="text-text text-xs font-normal leading-tight text-center">
        {p}
      </Text>
    </View>
  );
}


export default Header