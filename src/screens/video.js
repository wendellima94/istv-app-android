import * as React from "react";
import { View, StyleSheet, Button, Dimensions } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";

const AoVivo = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  function setOrientation() {
    if (Dimensions.get("window").height > Dimensions.get("window").width) {
      //Device is in portrait mode, rotate to landscape mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      //Device is in landscape mode, rotate to portrait mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }
  return (
    <View>
      <Video
        onFullscreenUpdate={setOrientation}
        ref={video}
        style={styles.video}
        source={{
          uri:
            "https://cdn.jmvstream.com/w/LVW-9883/LVW9883_lFcfKysrHF/playlist.m3u8",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping={true}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  video: {
    alignSelf: "center",
    backgroundColor: "#000",

    width: 380,
    height: 640,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default AoVivo;
