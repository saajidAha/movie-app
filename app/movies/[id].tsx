import {Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";

const MovieDetail = () => {
    const {id} = useLocalSearchParams();
    return(
        <View>
            <Text>
                Movie name: {id}
            </Text>
        </View>
    )
}
export default MovieDetail;