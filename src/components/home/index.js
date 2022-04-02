import React from "react";
import {
  TouchableOpacity,
  StatusBar,
  View,
  Text,
  Dimensions,
} from "react-native";

import { Container, Content, ImgPlayStyle, ImglogoStyle } from "./style";

const height = Dimensions.get("window").height;
// const width = Dimensions.get("window").width;

const Home = ({ navigation }) => {
  return (
    <>
      <Container
        resizeMode="cover"
        // source={require("../../images/content/istv-fundo4.gif")}
        source={require("../../images/content/4.png")}
      >
        <Content>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: height * 0.14,
            }}
          >
            <ImglogoStyle source={require("../../images/content/logoTransparent.png")} />
            <TouchableOpacity onPress={() => navigation.navigate("Live")}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: height * 0.2,
                }}
              >
                <ImgPlayStyle
                  source={require("../../images/content/botao-play3.png")}
                />
                <Text style={styles.textContent}>Assista ao Vivo</Text>
              </View>

              {/* <Text style={styles.textContent}></Text> */}
            </TouchableOpacity>
          </View>
          <StatusBar
            backgroundColor="#990000"
            barStyle="light-content"
            translucent
          />
        </Content>
        <StatusBar style="auto" />
      </Container>
    </>
  );
};

const styles = {
  textContent: {
    color: "#fff",
    fontSize: height * 0.035,
  },
};
export default Home;
