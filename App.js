import React, { useEffect, useState } from "react";
import { Appearance, Text, View } from "react-native";

const App = () => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  console.log(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      console.log("Theme changed to:", colorScheme); // Add log to debug
      setColorScheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
      }}
    >
      <Text style={{ color: colorScheme === "dark" ? "#fff" : "#000" }}>
        Current Theme: {colorScheme}
      </Text>
    </View>
  );
};

export default App;
