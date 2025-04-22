import { View, Text, StyleSheet } from "react-native"

interface PropTypes {
    name: string;
}

const GrayButton = ({name}: PropTypes) => {
    return (
        <View style={styles.button}>
            <Text style={styles.text}>
                {name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#221F3D',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
    },
    text:{
        fontWeight: 'bold',
        color: 'white',
    },
})

export default GrayButton