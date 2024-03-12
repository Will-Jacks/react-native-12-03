import { View, Text, Image , StyleSheet} from "react-native";
import ufrngramLogo from "../image/ufrngram.png";

export default function Header() {

    return (
        <View>
            <Image source={ufrngramLogo} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: 100,
        height: 100
    },

    image: {
        width: 150,
        resizeMode: "contain",
        marginLeft: 10
    }
})