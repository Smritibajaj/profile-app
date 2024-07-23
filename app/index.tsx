import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
      }}
    >
      <WebView
        styles={{
          width: "100%",
          height: "100%",
        }}
        source={{ uri: "https://simmybajaj.me/" }}
      />
    </SafeAreaView>
  );
}
