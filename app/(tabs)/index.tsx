import {Image, ScrollView, Text, View, StyleSheet, SafeAreaView, ActivityIndicator} from "react-native";

import MovieContainer from "@/components/MovieContainer";
import SearchBar  from "@/components/SearchBar";
import { getMovies } from "@/utils/tmdbApiService";
import { useEffect, useState } from "react";
import Layout from "@/components/layouts/Layout";

export default function Index() {
    // To store the state for the movies
    const [popularMoviesList, setPopularMoviesList] = useState([]);
    const [trendingMoviesList, setTrendingMoviesList] = useState([]);
    const [topRatedMoviesList, setTopRatedMoviesList] = useState([]);
    const [upcomingMoviesList, setUpcomingMoviesList] = useState([]);
    const [nowPlayingMoviesList, setNowMoviesList] = useState([]);

    // State for loading icon
    const [loading, setLoading] = useState(false);


    // fetch the movies and update the state
    useEffect(()=>{
        const fetchMovies = async() => {
            setLoading(true); // set loading to true
            // fetch the movies
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
            setLoading(false); // set loading to false
        }
        fetchMovies();
    },[])

    if (loading){
        styles.bg
        return (
            <View style={[styles.bg, styles.loader]}>
                <ActivityIndicator size='large' color='#0000fff'/>
            </View>
        )
    }

  return (
    <Layout>
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
    </Layout>
  );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#030014',
    },
    loader:{
        justifyContent: 'center',
    }
})