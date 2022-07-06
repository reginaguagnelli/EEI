import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

export default class HomeScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView />
                <ImageBackground
                    source = {require("../assets/bg_image.png")}
                    style={styles.backgroundImage}
                >

                    <View style={styles.titleBar}>
                        <Text>pantalla de localizacion</Text>
                    </View>
                    {/* PRIMER BOTON  */}
                    <TouchableOpacity
                      style={styles.routeCard}
                      onPress={()=>{
                        this.props.navigation.navigate("UbicaciónEEI");
                      }}
                    >
                        <Text style={styles.routeText}>Ubicación de la EEI</Text>
                        <Text style={styles.bgDigit}>1</Text>
                        <Text style={styles.knowMore}>{"Saber más --->"}</Text>
                        <Image source={require("../assets/iss_icon.png")}
                        style={styles.iconImage}
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                    //aqui
                    style={styles.routeCard}
                    onPress={()=>{
                      this.props.navigation.navigate("Meteoros");
                    }}
                    >
                        <Text style={styles.routeText}>Meteoros</Text>
                        <Text style={styles.bgDigit}>2</Text>
                        <Text style={styles.knowMore}>{"Saber más --->"}</Text>
                        <Image source={require("../assets/meteor_icon.png")}
                        style={styles.iconImage}
                        ></Image>
                    </TouchableOpacity>

                </ImageBackground>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    titleBar: {
      flex: 0.15,
      justifyContent: "center",
      alignItems: "center",
    },
    routeCard: {
      flex: 0.25,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 5,
      borderRadius: 10,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(52,52,52,0.5)",
    },
    titleText: {
      fontSize: 40,
      fontWeight: "bold",
      color: "white",
    },
    routeText: {
      fontSize: 35,
      fontWeight: "bold",
      color: "black",
      marginTop: 75,
      paddingLeft: 30,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
    },
    iconImage: {
      position: "absolute",
      height: 200,
      width: 200,
      resizeMode: "contain",
      right: 20,
      top: -80,
    },
    knowMore: {
      paddingLeft: 30,
      color: "red",
      fontSize: 15,
    },
    bgDigit: {
      position: "absolute",
      color: "rgba(183,183,183,0.5)",
      fontSize: 150,
      right: 20,
      bottom: -15,
      zIndex: -1,
    },
  });
  