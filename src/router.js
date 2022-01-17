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
import {
  DrawerActions,
  createDrawerNavigator,
  DrawerItems,
} from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./components/home";
import Live from "./components/live";
import About from "./screens/about";
import PortalWebView from "./screens/portal-web-view";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const navigationOptions = ({ navigation }) => {
  const toHome = () => navigation.navigate("HomePage");
  const buttonCollor = "#cc6633";

  return {
    headerTransparent: true,
    headerStyle: {
      backgroundColor: "#000020",
    },
    headerTitle: () => (
      <View>
        <TouchableOpacity onPress={toHome}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <Icon name="home" color={buttonCollor} size={30} />
          </View>
        </TouchableOpacity>
      </View>
    ),
    headerLeft: () => (
      <TouchableOpacity
        style={{ paddingLeft: 10 }}
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      >
        <Icon name="menu" color={buttonCollor} size={45} />
      </TouchableOpacity>
    ),
  };
};

const customDrawerComponent = (props) => {
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
        <ScrollView>
          <DrawerItems {...props} />
        </ScrollView>
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
                size={30}
              />
              <Text style={{ marginLeft: 30 }}>Facebook</Text>
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
                size={30}
              />
              <Text style={{ marginLeft: 30 }}>Instagram</Text>
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
                size={30}
              />
              <Text style={{ marginLeft: 30 }}>Twitter</Text>
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
                size={30}
              />
              <Text style={{ marginLeft: 30 }}>Youtube</Text>
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
                size={30}
              />
              <Text style={{ marginLeft: 30 }}>WhatsApp</Text>
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
                style={{ marginLeft: 10, width: 30, height: 30 }}
              />
              <Text style={{ marginLeft: 30 }}>Avaliação</Text>
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
                size={30}
              />
              <Text style={{ marginLeft: 30 }}>Compartilhar</Text>
            </View>
          </TouchableOpacity>
        </Drawer.Section>
      </ScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <TouchableOpacity
          style={{ paddingBottom: 10 }}
          onPress={() => Linking.openURL("https://istv.com.br/")}
        >
          <View>
            <Image
              style={{ width: 250, height: 66 }}
              source={require("./images/content/_botao.png")}
            />
          </View>
        </TouchableOpacity>
      </Drawer.Section>
    </SafeAreaView>
  );
};

const Stacknavigator = createStackNavigator(
  {
    HomePage: {
      screen: Home,
      navigationOptions,
    },
    Notícias: {
      screen: PortalWebView,
      navigationOptions,
    },
    About: {
      screen: About,
      navigationOptions,
    },
    Live: {
      screen: Live,
      navigationOptions,
    },
  },
  {
    navigationOptions,
  }
);

const mainNavigation = createDrawerNavigator(
  {
    "Página inicial": {
      screen: Stacknavigator,
      navigationOptions: () => ({
        drawerIcon: <Icon name="home" size={20} color="black" />,
      }),
    },

    Notícias: {
      screen: PortalWebView,
      navigationOptions: ({ navigation }) => ({
        drawerIcon: (
          <Icon name="book-open-page-variant" size={20} color="black" />
        ),
        headerTransparent: false,
        headerTitle: true,
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon
              name="menu"
              size={40}
              color="black"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
        ),
      }),
    },
    // Programação: {
    //   screen: ProgrammingGridTv,
    //   navigationOptions: ({ navigation }) => ({
    //     drawerIcon: (
    //       <Icon name="view-grid-plus-outline" size={20} color="#C9C9C9" />
    //     ),
    //   }),
    // },
    Sobre: {
      screen: About,
      navigationOptions: ({ navigation }) => ({
        drawerIcon: <Icon name="information-variant" size={20} color="black" />,
        headerTransparent: true,
        headerTitle: false,
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon
              name="menu"
              size={40}
              color="black"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
        ),
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
