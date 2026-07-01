import "../../global.css";

import { router, Stack, useSegments } from "expo-router";
import { useEffect } from "react";
import { subscribeToAuthChanges } from "../firebase/auth";



export default function Layout() {
   const segments = useSegments();

   useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((user) => {
      const currentRoute = segments[0];

      if (user) {
        if (currentRoute === "login" || currentRoute === "signup") {
          router.replace("/home");
        }
      } else {
        if (currentRoute !== "login" && currentRoute !== "signup") {
          router.replace("/login");
        }
      }
    });

    return unsubscribe;
  }, [segments]);

  return <Stack screenOptions={{ headerShown: false }} />;
}

