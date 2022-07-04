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
                    <TouchableOpacity>
                        <Text>EEI</Text>
                    </TouchableOpacity>
                    {/* SEGUNDO BOTON */}
                    <TouchableOpacity>
                        <Text>EEI</Text>
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
  