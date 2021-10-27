import React, { useRef, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { WebView } from "react-native-webview";

const PortalWebView = () => {
  const [visible, setVisible] = useState(false);

  //Hooks for nav webview
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const webViewRef = useRef(null);

  const backButtonHandler = () => {
    if (webViewRef.current) webViewRef.current.goBack();
  };
  const frontButtonHandler = () => {
    if (webViewRef.current) webViewRef.current.goForward();
  };

  const ActivityIndicatorElement = () => {
    return (
      <View>
        <ActivityIndicator color="gray" size="large" />
      </View>
    );
  };

  return (
    <>
      <WebView
        style={{ marginTop: 90, marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}
        source={{ uri: "https://isnportal.com.br/ultimas-noticias/" }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onLoadStart={() => setVisible(true)}
        onLoad={() => setVisible(false)}
        ref={webViewRef}
        onNavigationStateChange={(navState) => {
          setCanGoBack(navState.canGoBack);
          setCanGoForward(navState.canGoForward);
          setCurrentUrl(navState.url);
        }}
      />
      {visible ? <ActivityIndicatorElement /> : null}

      <View style={styles.tabBarContainer}>
        <TouchableOpacity onPress={backButtonHandler}>
          <Text>
            <Icon name="arrow-left-thick" color={"#696969"} size={45} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={frontButtonHandler}>
          <Text>
            <Icon name="arrow-right-thick" color={"#696969"} size={45} />
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PortalWebView;

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
  },
});
