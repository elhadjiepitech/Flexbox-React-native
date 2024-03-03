import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Flex from "./composants/flex";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{backgroundColor:"grey", flex:1}}>
        <Flex />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}