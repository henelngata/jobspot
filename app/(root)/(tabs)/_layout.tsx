import { Tabs } from "expo-router";
import { View } from "react-native";
import { icons } from "@/constants";
import  {Svg}  from "react-native-svg";

// Custom Tab Icon Component for SVG Icons
const TabIcon = ({
  IconComponent,
  focused,
}: {
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  focused: boolean;
}) => (
  <View
    className={`flex flex-row justify-center items-center rounded-full ${
      focused ? "bg-general-300" : ""
    }`}
  >
    <View
      className={`rounded-full w-12 h-12 items-center justify-center ${
        focused ? "bg-general-400" : "red"
      }`}
    >
      <IconComponent
        width={28}
        height={28}
        stroke={focused ? "#0D0140" : "gray"}
      />
    </View>
  </View>
);

// Layout Component with Five Tabs
const Layout = () => {
  return (
    <Tabs

    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon IconComponent={icons.HomeIcon} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="connection"
        options={{

          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon IconComponent={icons.ConnectionIcon} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{

          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon IconComponent={icons.AddIcon} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{

          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon IconComponent={icons.MessageIcon} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="save"
        options={{

          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon IconComponent={icons.SaveIcon} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
