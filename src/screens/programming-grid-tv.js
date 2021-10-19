import React from "react";
import {
  ScrollView ,
  Image,
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";


const ProgrammingGridTv = () => {
  const [grade, setGrade] = React.useState([
    {
      id: 1,
      name: "Eu a patroa e as crianças",
      horario: "00:00",
    },
    {
      id: 2,
      name: "Todo mundo odeia o chris",
      horario: "00:30",
    },
    {
      id: 3,
      name: "No ar",
      horario: "02:30",
    }, {
      id: 4,
      name: "Sessão Camara",
      horario: "03:00",
    }, {
      id: 6,
      name: "Esqueceram de mim",
      horario: "07:30",
    }, {
      id: 5,
      name: "The Goonies",
      horario: "09:30",
    },
  ]);

  return (
    <ScrollView  style={{ backgroundColor: "#fff" ,marginTop: 20 }}>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            marginTop: 20,
            marginBottom: 20,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Siga nossa programação da semana
        </Text>
      </View>
      <Text style={styles.TextDay}> SEGUNDA-FEIRA</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={grade}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image
              source={require("../images/logo.png")}
              style={{ width: 60, height: 60 }}
            />
            <Text
              style={{
                color: "#000",
                fontSize: 16,
                paddingRight: 10,
                paddingLeft: 10,
              }}
            >
              {item.horario}
            </Text>
            <Text
              style={{
                color: "#000",
                fontSize: 16,
              }}
            >
              {item.name}
            </Text>
          </View>
        )}
      />
      <Text style={styles.TextDay}> TERÇA-FEIRA</Text>

      <FlatList
        keyExtractor={(item) => item.id}
        data={grade}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image
              source={require("../images/logo.png")}
              style={{ width: 60, height: 60 }}
            />
            <Text
              style={{
                color: "#000",
                fontSize: 16,
                paddingRight: 10,
                paddingLeft: 10,
              }}
            >
              {item.horario}
            </Text>
            <Text
              style={{
                color: "#000",
                fontSize: 16,
              }}
            >
              {item.name}
            </Text>
          </View>
        )}
      />
      <Text style={styles.TextDay}>QUARTA-FEIRA</Text>

      <FlatList
        keyExtractor={(item) => item.id}
        data={grade}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image
              source={require("../images/logo.png")}
              style={{ width: 60, height: 60 }}
            />
            <Text
              style={{
                color: "#000",
                fontSize: 16,
                paddingRight: 10,
                paddingLeft: 10,
              }}
            >
              {item.horario}
            </Text>
            <Text
              style={{
                color: "#000",
                fontSize: 16,
              }}
            >
              {item.name}
            </Text>
          </View>
        )}
      />

      <Text style={styles.TextDay}> QUINTA-FEIRA</Text>
      
      <FlatList
        keyExtractor={(item) => item.id}
        data={grade}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image
              source={require("../images/logo.png")}
              style={{ width: 60, height: 60 }}
            />
            <Text
              style={{
                color: "#000",
                fontSize: 16,
                paddingRight: 10,
                paddingLeft: 10,
              }}
            >
              {item.horario}
            </Text>
            <Text
              style={{
                color: "#000",
                fontSize: 16,
              }}
            >
              {item.name}
            </Text>
          </View>
        )}
      />

      <Text style={styles.TextDay}> SEXTA-FEIRA</Text>

      <FlatList
        keyExtractor={(item) => item.id}
        data={grade}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image
              source={require("../images/logo.png")}
              style={{ width: 60, height: 60 }}
            />
            <Text
              style={{
                color: "#000",
                fontSize: 16,
                paddingRight: 10,
                paddingLeft: 10,
              }}
            >
              {item.horario}
            </Text>
            <Text
              style={{
                color: "#000",
                fontSize: 16,
              }}
            >
              {item.name}
            </Text>
          </View>
        )}
      />
    </ScrollView >
  );
};

export default ProgrammingGridTv;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 18,
    marginLeft: 20,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  TextDay: {
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: "#f1f2f4",
    color: "#000",
  },
});
