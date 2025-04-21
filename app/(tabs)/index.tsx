import {Image, ScrollView, Text, View, StyleSheet, TextInput} from "react-native";
import bg from '@/assets/images/bg.png'
import logo from '@/assets/icons/logo.png';
import moviesList from "@/assets/moviesList";
import MovieContainer from "@/components/MovieContainer";
import SearchBar  from "@/components/SearchBar";

export default function Index() {
  return (
    // Top background image
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
      {/* Search bar*/}
      <SearchBar />
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
})