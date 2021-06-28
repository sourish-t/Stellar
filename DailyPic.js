import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, SafeAreaView, ImageBackground, Image, Linking } from 'react-native';
import { axios } from 'axios'
export default class DailyPic extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground
                    source={require('../assets/star-background.jpg')} style={styles.backgroundImage}>
                    <Text style={styles.routeText}>Astronomy picture of the day</Text>
                    <Text style={styles.titleText}>{this.state.apod.title}</Text>
                    <TouchableOpacity style={styles.listContainer} onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../assets/play-video.png')} style={{ width, height: 50 }}></Image>
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.explanationText}>{this.state.apod.explanation} </Text>

                </ImageBackground>
            </View>
        )
    }

    getAPOD = () => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=YUyizljkgYzpnf2VA3jMqEnuXNPKogCbIxkEB0i0")
            .then(response => {
                this.setState({ apod: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})