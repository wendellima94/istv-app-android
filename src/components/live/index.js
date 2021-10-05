import React, { useRef, useEffect, useState } from "react";

import { Text, StyleSheet, Button, View } from "react-native";
import { Video } from "expo-av";

import axios from "axios";
import api from "../../api/api";

import { Container } from "./styles";

const Live = () => {
  const video = React.useRef(null);
  const [url, setUrl] = useState({ url: "" });
  const [status, setStatus] = React.useState({});

  // useEffect(() => {
  //   axios
  //     .get("http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4")
  //     .then((response) => setUrl({ url: response.data }))
  //     .catch((err) => console.error(err));
  // }, []);
  // console.log(url);

  return (
    <Container>
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>
      <Text>A</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  video: {
    alignSelf: "center",
    width: 360,
    height: 580,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Live;
