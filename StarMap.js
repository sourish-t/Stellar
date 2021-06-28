import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { WebView } from 'react-native-webview'
export default class StarMap extends Component {
    render() {
        return (
            <View style={styles.container}>
                <WebView
                    scalesPageToFit={true}
                    source={{ uri: "https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true" }}
                    style={{ marginTop: 20, marginBottom: 20 }}
                />

                <TextInput style={{ height: 40, borderColor: "cyan", borderWidth: 1 }}
                    placeholder="Enter the latitude"
                    placeholderTextColor="gray"
                    onChangeText={(text) => {
                        this.setState({
                            latitude: text
                        })
                    }}
                />

                <TextInput style={{ height: 40, borderColor: "cyan", borderWidth: 1 }}
                    placeholder="Enter the longitude"
                    placeholderTextColor="gray"
                    onChangeText={(text) => {
                        this.setState({
                            longitude: text
                        })
                    }}
                />

                <Text>Star Map</Text>
            </View>
        )
    }
}

const { longitude, latitude } = this.state;
const path = "https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true"


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})