import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import ProgrammingGridTv from "./programming-grid-tv";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SelectedProgramming = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ marginBottom: 20 , height: 80, width: 80 }}
        source={require("../images/content/logo.png")}
        onPress={() => navigation.navigate("Live")}
      />

      <Text style={{ fontStyle: "italic", fontSize: 22, textAlign: "center" }}>
        Venha conhecer mais sobre a nossa programação! 🤗
      </Text>
      <View>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("Live")}
        >
          <Text style={styles.textButton}>TV aberta</Text>
          <Icon name="remote-tv" color={"#474a51"} size={45} />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("Live")}
        >
          <Text style={styles.textButton}>Streaming</Text>
          <Icon name="animation-play" color={"#474a51"} size={45} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectedProgramming;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
  },
  buttons: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  textButton: {
    fontSize: 30,
    color: "#474a51",
  },
});
