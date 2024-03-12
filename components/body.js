import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import logoReact from "../image/img-react.png";


export default function Body() {

    return (
        <View>
            <View style={styles.postWrapper}>
                <View style={styles.bodyProfileInfo}>
                    <Image source={logoReact} style={styles.bodyProfileImage} />
                    <Text> ReactN</Text>
                </View>

                <Image source={logoReact} style={styles.postImage} />
                
                <View>
                    <Text> Curtido por 5000 pessoas</Text>
                    <View>{/* Essa view são os com */}
                        <Text>ReactN</Text>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    postImage: {
        width: "100%",
        height: 350,

    },

    bodyProfileInfo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },

    bodyProfileImage: {
        width: 40,
        height: 40,
        borderRadius: 75,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "gray",
        marginLeft: 5
    }


}
)