import { CardStyleInterpolators } from '@react-navigation/stack';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Platform, StatusBar, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (

            <View style={styles.container}>
                <ImageBackground />

                <Text style={styles.title}> Home Screen </Text>

                <TouchableOpacity style={styles.routeCard} onPress={() =>
                    this.props.navigation.navigate("DailyPic")
                }>
                    <Text style={styles.routeText}>Daily Pictures</Text>
                    <Image source={require("../assets/daily_pictures.png")} style={{ width: 80, height: 80 }}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard} onPress={() =>
                    this.props.navigation.navigate("SpaceCrafts")
                }>
                    <Text style={styles.routeText}>Space Crafts</Text>
                    <Image source={require("../assets/spacecraft.png")} style={{ width: 80, height: 80 }}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard} onPress={() =>
                    this.props.navigation.navigate("StarMap")
                }>
                    <Text style={styles.routeText}>Daily Pictures</Text>
                    <Image source={require("../assets/star_map.png")} style={{ width: 80, height: 80 }}></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                </TouchableOpacity>

            </View>


        )
    }
}

const styles = Stylesheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        alignItems: "center",
        justifyContent: "center",
        fontSize: 15,
        fontWeight: 'bold'
    },

    routeCard: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    },

    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white"
    }
})