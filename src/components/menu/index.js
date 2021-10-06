import React from "react";
import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerContent from "../../screens/DrawerContent";
import PortalWebView from "../../screens/portal-web-view";
// import { Container } from './styles';

const Menu = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen
          options={{
            headerTintColor: "#000",
            overlayColor: "transparent",            
          }}
          name="Página inicial"
          component={PortalWebView}
        />
      </Drawer.Navigator>
      {/* <MyDrawer /> */}
    </NavigationContainer>
  );
};

export default Menu;
