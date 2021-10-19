import React from "react";

import { TouchableOpacity, StatusBar, View, Text } from "react-native";

import { Container, Content, ImgPlayStyle, ImglogoStyle } from "./style";

const Home = ({ navigation }) => {
  return (
    <>
      <Container
        resizeMode="cover"
        source={require("../../images/content/istv.gif")}
      >
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent
        />
        <Content>
          <ImglogoStyle source={require("../../images/content/logo.png")} />

          <View>
            <Text style={styles.textContent}>Seu novo</Text>
            <Text style={styles.textContent}>canal de TV</Text>
          </View>

          <TouchableOpacity
            style={{ marginTop: 60 }}
            onPress={() => navigation.navigate("Live")}
          >
            <ImgPlayStyle
              source={require("../../images/content/botao-play.png")}
            />
            <Text style={styles.textContent}>Assista</Text>
            <Text style={styles.textContent}>ao vivo</Text>
          </TouchableOpacity>
        </Content>

        <StatusBar style="auto" />
      </Container>
    </>
  );
};

const styles = {
  textContent: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    textTransform: "uppercase",
    //fontFamily: 'AvenirNextLTProRegular',
  },
};
export default Home;
