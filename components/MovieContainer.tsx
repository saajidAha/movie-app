import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import MovieCard from './movie/MovieCard';
import Title from './movie/Title';
import { getGenres, IMAGE_BASE_URL } from '@/utils/tmdbApiService';

interface MovieContainerProps {
    title: string;
    listOfMovies: Array<{
        id: number;
        title: string;
        genre_ids: number[];
        backdrop_path: string;
        vote_average: number;
    }>;
}

const MovieContainer = ({ title, listOfMovies }: MovieContainerProps) => {
    const [genreList, setGenreList] = useState<any[]>([]);

    useEffect(() => {
        const fetchGenres = async () => {
            const genres = await getGenres();
            setGenreList(genres || []);
        };
        fetchGenres();
    }, []);

    const getGenreName = (genreId: number) => {
        const genre = genreList.find(g => g.id === genreId);
        return genre ? genre.name : 'Unknown';
    };
    
    return (
        <View style={styles.movieContainer}>
            <Title title={title} />
            <ScrollView style={styles.allMovieCardsContainer} horizontal>
                {listOfMovies.map((movie, index) => {
                    let genreName = getGenreName(movie.genre_ids[0]);
                    let rating = (movie.vote_average/2).toFixed(1);
                    return (
                        <MovieCard 
                            key={index}
                            id={movie.id}
                            title={movie.title}
                            genre={genreName}
                            image={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
                            rating={rating}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    movieContainer: {
        flexDirection: 'column',
        marginLeft: 25,
        gap: 15,
    },
    allMovieCardsContainer: {
        flexDirection: 'row',
    }
});

export default MovieContainer;