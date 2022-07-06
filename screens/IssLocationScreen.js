import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground, //pista para la imagen de fondo
  StatusBar,
  SafeAreaView, //otra pista
  Platform,
  Alert,
  Image
} from "react-native";

import axios from "axios"



import MapView, {Marker} from "react-native-maps";

export default class IssLocationScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: {},
    }
  }

  // componentDidMount
componentDidMount() {
  this.getIssLocation();
}

// funcion que hay que hacer
getIssLocation = () =>{
  axios.get("https://api.wheretheiss.at/v1/satellites/25544.").then((response)=>{
    this.setState({location: response.data}).catch((error)=>{
      Alert.alert(error.message)
    })
  })
}

  render() {

    if (Object.keys(this.state.location).length ===0) {
      <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >

        <Text>Cargando......</Text>
        </View>
      
    } else {

      return (
        <View style={styles.container}>
          {/* ##########PRIMERA PARTE DEL DESAFIO ########## */}
          <SafeAreaView styles={styles.droidSafeArea}/>
          <ImageBackground>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>¡Localización de la EEI!</Text>
            </View>
            <View styles={styles.mapContainer }>
              <MapView style={styles.map}
              
              region={{
                latitude: this.state.location.latitude,
                longitude: this.state.location.longitude,
                latitudeDelta: 100,
                latitudeDelta: 100,
              }}
              >
              <Marker
                coordinate={{
                  latitude: this.state.location.latitude,
                  longitude: this.state.location.longitude,
                }}
              >
                <Image
                  source={require("../assets/iss_bg.jpg")}
                  style={{height:50, width: 50}}
                />
              </Marker>
              </MapView>
  
            </View>
          </ImageBackground>
  
  
  
          {/* ##########SEGUNDA PARTE DEL DESAFIO ########## */}
  
          {/* agrega un view, dentro de este un componente Marker, dentro de este, un componente Image */}
          {/* ######################################## */}
  
          {/* ##########TERCERA Y ULTIMA PARTE DEL DESAFIO ########## */}
  
          {/* debes extraer la informacion de la api, no olvide encerrar todo en un View */}
        </View>
      );

      
    }


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
