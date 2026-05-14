import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareView } from "../../components/KeyboardAwareView";

export default function AuthLayout() {
  return (
    <KeyboardAwareView>
      <StatusBar style="dark" backgroundColor="#fff5e1" translucent={false} />
      <Slot />
    </KeyboardAwareView>
  );
}
