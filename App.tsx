import "./global.css"
import { Text, View } from "react-native";
 
export default function App() {
  console.log("APP 실행중 ");
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}