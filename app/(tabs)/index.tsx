import {Image, ScrollView, Text, View, StyleSheet, TextInput} from "react-native";
import bg from '@/assets/images/bg.png'
import logo from '@/assets/icons/logo.png';
import searchIcon from '@/assets/icons/search.png';
import MovieContainer from "@/components/MovieContainer";
import moviesList from "@/assets/moviesList";

export default function Index() {
  return (
      <View style={styles.bg}>
        <Image
            source={bg}
            style={styles.bgImg}
        />
      <ScrollView >
          {/*logo*/}
          <Image
              style={styles.logo}
              source={logo}
          />
      {/*Search bar*/}
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
    {/*    Popular Movies container*/}
    <MovieContainer title="Popular Movies" listOfMovies={moviesList}/>

    {/*    Latest Movies container*/}
    <MovieContainer title="Latest Movies" listOfMovies={moviesList}/>

      </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#030014',
    },
    bgImg:{
        zIndex: 0,
        position: 'absolute',
    },
    logo: {
        width: '100%',
        objectFit: 'contain',
        marginTop: 50,
    },
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