import { StyleSheet, TextInput, View, Image } from "react-native";
import searchIcon from '@/assets/icons/search.png';

// Search Bar
const SearchBar = () => (
         <View style={styles.searchContainer}>
         <Image
           source={searchIcon}
           style={styles.searchIcon}
         />
         <TextInput
             placeholder='Search through 300+ movies online...'
             placeholderTextColor='#A8B5DB'
             style={styles.search}
         />
     </View>
);
 
const styles = StyleSheet.create({
    search:{
        width: '90%',
        backgroundColor: '#0F0D23',
        color: '#A8B5DB',
        borderRadius:  25,
        paddingLeft: 60,
        // paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 15,
    },
    searchContainer:{
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        position: 'relative', // to add the search icon on top
    },
    searchIcon:{
        tintColor: '#AB8BFF',
        left: 40,
        zIndex: 1,
    },
})
export default SearchBar;