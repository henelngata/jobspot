import { View, Text, Alert, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

interface InputFieldProps {
  label: string;
  isPassword?: boolean;
}
const InputText:React.FC<InputFieldProps> = ({ label, isPassword }) => {

  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState("");
  const [password, onChangePassword] = useState("");

  const [isSecure, setIsSecure] = useState(isPassword);
  let handleToogle = () => {
    Alert.alert("clicked");
     setIsSecure(!isPassword);
  };
  return (
    <View className="mb-4">
      <Text className="text-signin text-xs font-DMBold mb-3 capitalize">{label}</Text>
      <View className="flex-row justify-between p-3 rounded-sm bg-white">
        <TextInput
          className="text-[#0d0040]/60 text-xs font-DM   w-[90%] "
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={isPassword}
        />
        <TouchableOpacity onPress={handleToogle}>
          <Image source={require("../assets/images/eye.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default InputText