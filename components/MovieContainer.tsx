import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { getGenres } from '@/utils/tmdbApiService';
import star from '@/assets/icons/star.png';


// The container thats going to hold all the movie cards. this will iterate through the movies array.
const MovieContainer = ({title, listOfMovies}: any) => {
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'; // Specify image size
    return(
    <View style={styles.movieContainer}>
        <Title title={title} />
        <ScrollView style={styles.allMovieCardsContainer} horizontal>
            {listOfMovies.map((movie, index) => {
                let genreName = mapGenre(movie.genre_ids[0])
                let rating = (movie.vote_average/2).toFixed(1);
                return(
                <MovieCard key={index} id={movie.id} title={movie.title} genre={genreName} image={`${IMAGE_BASE_URL}${movie.backdrop_path}`} rating={rating} />
            )
})}
        </ScrollView>
    </View>
)};

// Clickable individual movie Card Component
const MovieCard = ({ title, image: imageUri, genre, id, rating }: any) => {
    // const navigation = useNavigation();

    const handlePress = () => {
        router.push(`/movies/${id}`);
    };

    return (
    <TouchableOpacity 
    style={styles.movieCardContainer}
    onPress={handlePress} >
        <Image source={{uri: imageUri}} style={styles.movieCardImg}/>
        <Text style={styles.movieTitle}>
            {title}
        </Text>
        <View style={styles.ratingContainer}>
            <Image source={star} />
            <Text style={styles.movieSubTitle}>{rating}</Text>
        </View>
        <Text style={styles.movieSubTitle}>
            {genre} . Movie
        </Text>
    </TouchableOpacity>
    )
}


// Title component
const Title = ({title}: any) => (
    <Text style={styles.title}>
        {title}
    </Text>
)

// map the genre based on the number
const mapGenre = async (genreNumber: number) => {
    const genreList = await getGenres();
    const genre = genreList.find((g: any) => g.id === genreNumber);
    return genre ? genre.name : 'Unknown';
};

const styles = StyleSheet.create({
movieContainer:{
    flexDirection: 'column',
    marginLeft: 25,
    gap: 20,
},
movieCardContainer:{
    flexDirection: 'column',
    gap: 8,
    width: 150,
    marginRight: 30, // spacing between each movie card.
},
allMovieCardsContainer: {
    flexDirection: 'row',
}
,
movieTitle:{
    color:'white',
    fontWeight: 'bold',
    fontSize: 20,
},
movieSubTitle:{
    color: 'gray',
    fontWeight: 'semibold',
    fontSize: 15,
},
movieCardImg : {
    width: 150,
    height: 250,
},
title:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 100,
},
ratingContainer:{
    flexDirection: 'row',
    gap: 5
}
})

export default MovieContainer;