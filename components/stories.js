import { View, Image, StyleSheet, Text, ScrollView } from "react-native";

import reactNativeLogo from "../image/img-react.png";

export default function Stories() {

    return (
        <ScrollView style={styles.container} horizontal={true}>
            <View style={styles.stories}>
                <View style={styles.story}>
                    <Image source={reactNativeLogo} style={styles.image} />
                    <Text>ReactN</Text>
                </View>

                <View style={styles.story}>
                    <Image source={reactNativeLogo} style={styles.image} />
                    <Text>ReactN</Text>
                </View>

                <View style={styles.story}>
                    <Image source={reactNativeLogo} style={styles.image} />
                    <Text>ReactN</Text>
                </View>
                
                <View style={styles.story}>
                    <Image source={reactNativeLogo} style={styles.image} />
                    <Text>ReactN</Text>
                </View>
            
                <View style={styles.story}>
                    <Image source={reactNativeLogo} style={styles.image} />
                    <Text>ReactN</Text>
                </View>

                <View style={styles.story}>
                    <Image source={reactNativeLogo} style={styles.image} />
                    <Text>ReactN</Text>
                </View>

                <View style={styles.story}>
                    <Image source={reactNativeLogo} style={styles.image} />
                    <Text>ReactN</Text>
                </View>

                <View style={styles.story}>
                    <Image source={reactNativeLogo} style={styles.image} />
                    <Text>ReactN</Text>
                </View>

                <View style={styles.story}>
                    <Image source={reactNativeLogo} style={styles.image} />
                    <Text>ReactN</Text>
                </View>

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        minHeight: 80,
        marginTop: "30"
    },

    stories: {
        flexDirection: "row",
        marginBottom: 10
    },

    story: {
        justifyContent: "center",
        alignItems: "center"
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 75,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "gray",
        marginLeft: 5
    }
})