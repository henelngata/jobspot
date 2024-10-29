import { View, Text, Alert, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Checkbox from '@/components/CheckBox';
import CustomButton from '@/components/CustomButton';
import InputText from '@/components/InputText';
import { Link } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const LogIn = () => {
   const [isChecked, setIsChecked] = useState(false);
   function handleSignUp() {
     Alert.alert("sign up");
   }
   return (
     <SafeAreaProvider>
       <SafeAreaView className="p-6 ">
         <View className="items-center  my-6">
           <Text className="text-signin text-3xl font-bold ">Welcome Back</Text>
           <Text className=" text-text text-xs font-normal leading-tight text-center">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor
           </Text>
         </View>
         <InputText label="Email" isPassword={false} />
         <InputText label="password" isPassword={true} />
         <View className="flex-row justify-between items-center mb-3">
           <Checkbox
             label="Remember me"
             checked={isChecked}
             onChange={setIsChecked}
           />
           <Link href={'/(auth)/reset-password'}>
            <Text>Forgot Password ?</Text>
           </Link>

         </View>
         <View className="w-full flex justify-center items-center">
           <CustomButton
             label={"login"}
             className="p-10"
             onPress={handleSignUp}
           />

           <CustomButton
             label={"Sign in with Google"}
             className="p-10"
             icon={"yes"}
             type={"google"}
           />
         </View>

         <View>
           <Text className="text-center">
             You don't have an account yet?{" "}
             <Link className="text-highlight" href={"/(auth)/sign-up"}>
               Sign up
             </Link>
           </Text>
         </View>
       </SafeAreaView>
     </SafeAreaProvider>
   );
}

export default LogIn