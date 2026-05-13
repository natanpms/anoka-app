import "../global.css";

import { Slot } from "expo-router";
import { UserProvider } from "../contexts/useAuth";

export default function Layout() {

  return (
    <UserProvider>
      <Slot />
    </UserProvider>
  );
}
