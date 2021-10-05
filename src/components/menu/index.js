import React from "react";
import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from '../../screens/DrawerContent'
import Live from "../live";
import Home from "../home";
import PortalWebView from "../../screens/portal-web-view";
// import { Container } from './styles';

const Menu = () => {
  const Drawer = createDrawerNavigator();

  // function Feed() {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <Text>Feed Screen</Text>
  //     </View>
  //   );
  // }

  // function Article() {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <Text>Article Screen</Text>
  //     </View>
  //   );
  // }

  // function MyDrawer() {
  //   return (
  //     <Drawer.Navigator
  //       drawerStyle={{
  //         backgroundColor: '#c6cbef',
  //         width: 240,
  //       }}
  //     >
  //       <Drawer.Screen name="Feed" component={Feed} />
  //       <Drawer.Screen name="Article" component={Article} />
  //     </Drawer.Navigator>
  //   );
  // }

  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={props => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Página inicial" component={PortalWebView} />
      </Drawer.Navigator>
      {/* <MyDrawer /> */}
    </NavigationContainer>
  );
};

export default Menu;
