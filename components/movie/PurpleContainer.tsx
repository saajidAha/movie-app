import { StyleSheet, Text, View } from "react-native";
import SubTitle from "@/components/movie/SubtTitle";

interface PropTypes{
    title: string,
    description: string,
}
// Container to store the sub element with the purple color in the movie details page
const PurpleContainer = ({title, description}: PropTypes) => (
    <View style={styles.container}>
        <SubTitle
        value={title}
        />
        <Text style={styles.description}>
            {description}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    container:{
        gap: 10,
    },
    description:{
        color: '#D6C7FF',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
        lineHeight: 30,
    }
})
export default PurpleContainer;