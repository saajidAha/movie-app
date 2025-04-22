import {Image, ScrollView, Text, View, StyleSheet,} from "react-native";

import bg from '@/assets/images/bg.png'
import logo from '@/assets/icons/logo.png';
import MovieContainer from "@/components/MovieContainer";
import SearchBar  from "@/components/SearchBar";
import { getMovies } from "@/utils/tmdbApiService";
import { useEffect, useState } from "react";

export default function Index() {
    // To store the state for the movies
    const [popularMoviesList, setPopularMoviesList] = useState([]);
    const [trendingMoviesList, setTrendingMoviesList] = useState([]);

    
    // fetch the movies and update the state
    useEffect(()=>{
        const fetchMovies = async() => {
            const popularFetchedMovies = await getMovies('popular'); // fetch the movies
            const trendingFetchedMovies = await getMovies('trending'); // fetch the movies
            setPopularMoviesList(popularFetchedMovies); // update the state
            setTrendingMoviesList(trendingFetchedMovies); // update the state
        }
        fetchMovies();
    },[])


  return (
    // Top background image
    <View style={styles.bg}>
        <Image
            source={bg}
            style={styles.bgImg}
        />
        {/* Overall scroll view of the home page */}
      <ScrollView >
          {/* Top logo*/}
          <Image
              style={styles.logo}
              source={logo}
          />
      {/* Search bar*/}
      <SearchBar />
        {/*    Popular Movies container*/}
        <MovieContainer title="Popular Movies" listOfMovies={popularMoviesList}/>

        {/*    Latest Movies container*/}
        <MovieContainer title="Latest Movies" listOfMovies={trendingMoviesList}/>
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