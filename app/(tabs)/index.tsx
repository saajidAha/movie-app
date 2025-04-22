import {Image, ScrollView, Text, View, StyleSheet, SafeAreaView} from "react-native";

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
    const [topRatedMoviesList, setTopRatedMoviesList] = useState([]);
    const [upcomingMoviesList, setUpcomingMoviesList] = useState([]);
    const [nowPlayingMoviesList, setNowMoviesList] = useState([]);


    // fetch the movies and update the state
    useEffect(()=>{
        const fetchMovies = async() => {
            const popularFetchedMovies = await getMovies('popular'); // fetch the movies
            const trendingFetchedMovies = await getMovies('trending'); // fetch the movies
            const topRatedFetchedMovies = await getMovies('top_rated'); // fetch the movies
            const upcomingFetchedMovies = await getMovies('upcoming'); // fetch the movies
            const nowPlayingFetchedMovies = await getMovies('now_playing'); // fetch the movies
            setPopularMoviesList(popularFetchedMovies); // update the state
            setTrendingMoviesList(trendingFetchedMovies); // update the state
            setTopRatedMoviesList(topRatedFetchedMovies); // update the state
            setUpcomingMoviesList(upcomingFetchedMovies); // update the state
            setNowMoviesList(nowPlayingFetchedMovies); // update the state
        }
        fetchMovies();
    },[])


  return (
    // Top background image
    <SafeAreaView style={styles.bg}>
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
        {/*    Popular Movies*/}
        <MovieContainer title="Popular Movies" listOfMovies={popularMoviesList}/>
        {/*    Latest Movies*/}
        <MovieContainer title="Latest Movies" listOfMovies={trendingMoviesList}/>
        {/* Top rated movies */}
        <MovieContainer title="Top Rated Movies" listOfMovies={topRatedMoviesList}/>
        {/* Upcoming Movies */}
        <MovieContainer title="Upcoming Movies" listOfMovies={upcomingMoviesList}/>
        {/* Now playing movies */}
        <MovieContainer title="Now Playing Movies" listOfMovies={nowPlayingMoviesList}/>
      </ScrollView>
    </SafeAreaView>
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
    },
})