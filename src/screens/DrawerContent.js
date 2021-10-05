import React from "react";
import { StyleSheet, View, Image, Linking, Share } from "react-native";

// import { DefaultTheme, DarkTheme } from "@react-navigation/native";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DrawerContent = (props) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Image
                style={{ width: 60, height: 60 }}
                source={require("../images/content/logo.png")}
              />
              <View style={{ flexDirection: "column", marginLeft: 15 }}>
                <Title style={styles.title}>Assista ao vivo</Title>
                <Caption style={styles.caption}>www.istv.com.br</Caption>
              </View>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            )}
            label="Página inicial"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="book-open-page-variant" color={color} size={size} />
            )}
            label="Notícias"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="dots-vertical-circle" color={color} size={size} />
            )}
            label="Sobre"
            onPress={() => {}}
          />
        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection}>
          <View
            style={{ paddingLeft: 20, marginTop: 8, justifyContent: "center" }}
          >
            <Caption style={(styles.caption, { fontSize: 16 })}>
              Visite nossas Redes sociais
            </Caption>
          </View>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="facebook" color={color} size={size} />
            )}
            label="Facebook"
            onPress={() =>
              Linking.openURL("https://www.facebook.com/ISTVdigital/")
            }
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="instagram" color={color} size={size} />
            )}
            label="Instagram"
            onPress={() =>
              Linking.openURL("https://www.instagram.com/istvdigital/")
            }
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="twitter" color={color} size={size} />
            )}
            label="Twitter"
            onPress={() => Linking.openURL("https://twitter.com/istvdigital")}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="youtube" color={color} size={size} />
            )}
            label="Youtube"
            onPress={() =>
              Linking.openURL(
                "https://www.youtube.com/channel/UCay-bXKlemQmfEVwyjQLn4g"
              )
            }
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="whatsapp" color={color} size={size} />
            )}
            label="WhatsApp"
            onPress={() => Linking.openURL("https://wa.me/5513996621414")}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="google-play" color={color} size={size} />
            )}
            label="Avaliação"
            onPress={() =>
              Linking.openURL(
                Platform.OS == "android"
                  ? "https://play.google.com/store/apps/details?id=com.istv&hl=pt_BR"
                  : "https://apps.apple.com/gb/app/istv/id1485245678"
              )
            }
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="link" color={color} size={size} />
            )}
            label="Compartilhar"
            onPress={() => {
              Share.share({
                message: "Conheça você tambem a ISTV HD https://istv.com.br/",
              });
            }}
          />
        </Drawer.Section>

        <Drawer.Section>
          <TouchableRipple
            onPress={() => {
              toggleTheme();
            }}
          >
            <View style={styles.preference}>
              <Text>Tema escuro</Text>
              <View pointerEvents="none">
                <Switch value={isDarkTheme} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        {/* BUTTON LINK */}
        <Image
          style={{ width: 240, height: 66 }}
          source={require("../images/content/_botao.png")}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

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
    height: 86,
    // backgroundColor: "#000",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
