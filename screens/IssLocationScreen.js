import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground, //pista para la imagen de fondo
  StatusBar,
  SafeAreaView, //otra pista
  Platform,
} from "react-native";

export default class IssLocationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* ##########PRIMERA PARTE DEL DESAFIO ########## */}
        {/* agrega el componente SafeAreaView */}

        {/* Agrega el componente para la imagen de fondo */}

        {/* este texto ponlo dentro de un componente View y no olvides el estilo :D */}
        <Text>¡Pantalla de ubicación EEI!</Text>

        {/* ######################################## */}

        {/* ##########SEGUNDA PARTE DEL DESAFIO ########## */}

        {/* agrega un view, dentro de este un componente Marker, dentro de este, un componente Image */}
        {/* ######################################## */}

        {/* ##########TERCERA Y ULTIMA PARTE DEL DESAFIO ########## */}

        {/* debes extraer la informacion de la api, no olvide encerrar todo en un View */}
      </View>
    );
  }
}

// estilos asombrosos que nos serviran para mas tarde :D !
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  titleContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  // estos estilos son para el mapa
  mapContainer: {
    flex: 0.6,
  },

  map: {
    width: "100%",
    height: "100%",
  },
  // estos estilos los ocuparemos para el cuadro de informacion
  infoContainer: {
    flex: 0.2,
    backgroundColor: "white",
    marginTop: -10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  infoText: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
});
