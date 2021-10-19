import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";

const About = () => {
  return (
    <ScrollView style={{ backgroundColor: "#151515", flex: 1 }}>
      <Image
        source={require("../../images/content/img-sobre.png")}
        style={styles.imgSobre}
      />

      <View style={styles.viewContent}>
        {/*SOBRE*/}
        <Text style={styles.title2}>Sobre a ISTV</Text>
        <Text style={styles.textContent}>
          A ISTV é o seu novo canal de TV com programação local que prima pela
          informação, entretenimento e prestação de serviços. Com uma parceria
          com a Canal On Produções para a produção de conteúdo (entrevistas,
          telejornalismo, programas culturais, entretenimento), sempre
          priorizando o cenário local das Cidades em que o canal é veiculado. O
          Alcance da emissora é de 4 milhões de pessoas por dia.
        </Text>
        <Text style={styles.textContent}>
          O canal é veiculado pelo 36.1, 30.1, 44.1, 49.1, 50.1 digital e canal
          4 da NET para toda a Baixada Santista.{" "}
        </Text>

        {/*FALE CONOSCO*/}
        <Text style={styles.title}>Fale Conosco</Text>
        <Text style={styles.textContent}>
          Avenida Dom Pedro 3300 - Guarujá, Brazil 11460-100
        </Text>
        <Text style={styles.textContent}>(13) 3341-4746</Text>
        <Text style={styles.textContent}>contato@istv.com.br</Text>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  viewContent: {
    padding: 40,
    backgroundColor: "#151515",
    flex: 1,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    textAlign: "left",
    marginBottom: 15,
    marginTop: 35,
    //fontFamily: 'AvenirNextLTProRegular',
    fontWeight: "normal",
  },

  title2: {
    color: "#fff",
    fontSize: 22,
    textAlign: "left",
    marginBottom: 15,
    //fontFamily: 'AvenirNextLTProRegular',
  },

  textContent: {
    color: "#b7b7b7",
    fontSize: 13,
    //fontFamily: 'AvenirNextLTProRegular',
    lineHeight: 20,
  },

  imgSobre: {
    height: 250,
    width: "100%",
    backgroundColor: "#151515",
  },
});
