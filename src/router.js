import React from "react";

import {
  StyleSheet,
  View,
  Image,
  Linking,
  Text,
  Share,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { Title, Caption, Drawer, Switch } from "react-native-paper";

import { createAppContainer } from "react-navigation";
import { DrawerActions, createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./components/home";
import Live from "./components/live";
import Menu from "./components/menu";
import PortalWebView from "./screens/portal-web-view";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const navigationOptions = ({ navigation }) => {
  return {
    headerTransparent: true,
    headerTitle: () => false,
    headerLeft: () => (
      <TouchableOpacity
        style={{ paddingLeft: 10 }}
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      >
        <Icon name="menu" color={"white"} size={45} />
      </TouchableOpacity>
    ),
  };
};

const Stacknavigator = createStackNavigator(
  {
    HomePage: {
      screen: Home,
      navigationOptions,
    },
    LivePage: {
      screen: Live,
      navigationOptions,
    },
  },
  {
    navigationOptions,
  }
);

const customDrawerComponent = (props) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          marginBottom: 20,
          paddingLeft: 10,
        }}
      >
        <Image
          source={require("./images/logo.png")}
          style={{ width: 60, height: 60 }}
        />
        <View style={{ flexDirection: "column", marginLeft: 15 }}>
          <Title style={styles.title}>Assista ao vivo</Title>
          <Caption style={styles.caption}>www.istv.com.br</Caption>
        </View>
      </View>
      <Drawer.Section
        style={{ paddingTop: 10, borderTopColor: "#f4f4f4", borderTopWidth: 1 }}
      >
        <TouchableOpacity
          onPress={() => <PortalWebView />}
          style={{ marginBottom: 10 }}
        >
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Icon
              style={{ marginLeft: 10 }}
              name="home"
              color={"#464646"}
              size={35}
            />
            <Text style={{ marginLeft: 15 }}>Página inicial</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => null}>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Icon
              style={{ marginLeft: 10 }}
              name="book-open-page-variant"
              color={"#464646"}
              size={35}
            />
            <Text style={{ marginLeft: 15 }}>Notícias</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => null}>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Icon
              style={{ marginLeft: 10 }}
              name="dots-vertical-circle"
              color={"#464646"}
              size={35}
            />
            <Text style={{ marginLeft: 15 }}>Sobre</Text>
          </View>
        </TouchableOpacity>
      </Drawer.Section>

      <ScrollView>
        <Drawer.Section>
          <View
            style={{ paddingLeft: 20, marginTop: 8, justifyContent: "center" }}
          >
            <Caption
              style={(styles.caption, { fontSize: 16, paddingBottom: 10 })}
            >
              Visite nossas Redes sociais
            </Caption>
          </View>

          <TouchableOpacity
            style={{ paddingBottom: 10 }}
            onPress={() =>
              Linking.openURL("https://www.facebook.com/ISTVdigital/")
            }
          >
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Icon
                style={{ marginLeft: 10 }}
                name="facebook"
                color={"#3b5998"}
                size={35}
              />
              <Text style={{ marginLeft: 15 }}>Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ paddingBottom: 10 }}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/istvdigital/")
            }
          >
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Icon
                style={{ marginLeft: 10 }}
                name="instagram"
                color={"#517fa4"}
                size={35}
              />
              <Text style={{ marginLeft: 15 }}>Instagram</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ paddingBottom: 10 }}
            onPress={() => Linking.openURL("https://twitter.com/istvdigital")}
          >
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Icon
                style={{ marginLeft: 10 }}
                name="twitter"
                color={"#00acee"}
                size={35}
              />
              <Text style={{ marginLeft: 15 }}>Twitter</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ paddingBottom: 10 }}
            onPress={() =>
              Linking.openURL(
                "https://www.youtube.com/channel/UCay-bXKlemQmfEVwyjQLn4g"
              )
            }
          >
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Icon
                style={{ marginLeft: 10 }}
                name="youtube"
                color={"#c4302b"}
                size={35}
              />
              <Text style={{ marginLeft: 15 }}>Youtube</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ paddingBottom: 10 }}
            onPress={() => Linking.openURL("https://wa.me/5513996621414")}
          >
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Icon
                style={{ marginLeft: 10 }}
                name="whatsapp"
                color={"#34af23"}
                size={35}
              />
              <Text style={{ marginLeft: 15 }}>WhatsApp</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ paddingBottom: 10 }}
            onPress={() =>
              Linking.openURL(
                Platform.OS == "android"
                  ? "https://play.google.com/store/apps/details?id=com.istv&hl=pt_BR"
                  : "https://apps.apple.com/gb/app/istv/id1485245678"
              )
            }
          >
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Image
                source={require("./images/content/icons/playstore.png")}
                style={{ marginLeft: 10 ,width: 35, height: 35 }}
              />
              <Text style={{ marginLeft: 15 }}>Avaliação</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ paddingBottom: 10 }}
            onPress={() => {
              Share.share({
                message: "Conheça você tambem a ISTV HD https://istv.com.br/",
              });
            }}
          >
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Icon
                style={{ marginLeft: 10 }}
                name="link"
                color={"black"}
                size={35}
              />
              <Text style={{ marginLeft: 15 }}>Compartilhar</Text>
            </View>
          </TouchableOpacity>
        </Drawer.Section>
      </ScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        {/* BUTTON LINK */}
        <Image
          style={{ width: 250, height: 66 }}
          source={require("./images/content/_botao.png")}
        />
      </Drawer.Section>
    </SafeAreaView>
  );
};
const mainNavigation = createDrawerNavigator(
  {
    Home: {
      screen: Stacknavigator,
      navigationOptions: () => ({
        drawerIcon: <Icon name="playcircleo" size={20} color="#C9C9C9" />,
      }),
    },
  },
  {
    contentComponent: customDrawerComponent,
    contentOptions: {},
  }
);

export default createAppContainer(mainNavigation);
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    height: 68,
    marginTop: 4,
    textAlign: "center",
    alignItems: "center",
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
