import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { SafeAreaView } from "../components/SafeAreaView";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-secondary-foreground">
      <StatusBar
        style="inverted"
        backgroundColor="#020617"
        translucent={false}
      />

      <View className="py-6 w-full flex-row items-center justify-center">
        <Text
          className="text-[10px] text-center tracking-widest text-secondary font-semibold"
        >
          Um pequeno passo para um grande futuro...
        </Text>
      </View>
      <View className="flex-1 items-center justify-around px-8 py-12">

        <View className="items-center gap-8">
          <View className="h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-white">
            <Image
              className="h-24 w-24 rounded-full"
              source={require("../assets/images/logo.jpg")}
            />
          </View>

          <View className=" justify-center items-center">
            <Text
              className="text-4xl text-primary font-bold"
            >
              Anoka
            </Text>

            <Text className="max-w-72 text-center text-base leading-6 text-secondary font-light">
              Simples e eficiente.
            </Text>

          </View>
        </View>

        <View className="w-full items-center gap-4">
          <ActivityIndicator color="#16a34a" size="small" />
          <Text
            className="text-sm text-secondary font-medium"
          >
            Preparando experiência
          </Text>
        </View>
      </View>
    </SafeAreaView >
  );
}
