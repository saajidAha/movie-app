import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, } from 'react-native';

// The container thats going to hold all the movie cards. this will iterate through the movies array.
const MovieContainer = ({ title, listOfMovies }: { title: string; listOfMovies: { title: string; image: any, genre: string}[] }) => (
    <View style={styles.movieContainer}>
        <Title title={title} />
        <ScrollView style={styles.allMovieCardsContainer} horizontal>
            {listOfMovies.map((movie, index) => (
                <MovieCard key={index} title={movie.title} genre={movie.genre} image={movie.image} />
            ))}
        </ScrollView>
    </View>
);

// Individual movie Card Component
const MovieCard = ({title, image, genre}: any) => (
    <View style={styles.movieCardContainer}>
        <Image source={image} style={styles.movieCardImg}/>
        <Text style={styles.movieTitle}>
            {title}
        </Text>
        <Text style={styles.movieSubTitle}>
            {genre} . Movie
        </Text>
    </View>
)


// Title component
const Title = ({title}: any) => (
    <Text style={styles.title}>
        {title}
    </Text>
)


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
})

export default MovieContainer;