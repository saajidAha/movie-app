import { View, StyleSheet } from "react-native"
import SubTitle from "./SubtTitle"
import GrayButton from "./GrayButton"

interface PropTypes {
    buttonList: Array<{
        name: string;
    }>;
}

// Display the gray buttons with the genres
const GenreContainer = ({buttonList}: PropTypes) => {
  return (
    <View style={styles.overall}>
        <SubTitle value="Genre"/>
        <View style={styles.btnContainer}>
            {buttonList?.map((button, index) => (
                <GrayButton 
                    key={index}
                    name={button.name}
                />
            ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    btnContainer:{
        flexDirection: 'row',
        gap: 20,
    },
    overall:{
        gap: 10,
    }
})
export default GenreContainer