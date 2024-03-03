import { Text, View } from "react-native";
import { humain } from "./Human.style";

const Humain = ( {prenom, nom, age, voiture, salutation}) => {
    return (
        <View>
            <Text style={humain.text}>Je suis un humain</Text>
            <Text style={{ fontSize:40} } >
                {salutation} je m'appelle {prenom} {nom}, j'ai {age} ans et je roule en {voiture.marque} {voiture.modele}
            </Text>
        </View>
    );
}
export default Humain;