import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import star from '@/assets/icons/star.png';

interface MovieCardProps {
    title: string;
    image: string;
    genre: string;
    id: number;
    rating: string;
}

const MovieCard = ({ title, image: imageUri, genre, id, rating }: MovieCardProps) => {
    const handlePress = () => {
        router.push(`/movies/${id}`);
    };

    return (
        <TouchableOpacity 
            style={styles.movieCardContainer}
            onPress={handlePress}>
            <Image source={{uri: imageUri}} style={styles.movieCardImg}/>
            <Text style={styles.movieTitle} numberOfLines={1} ellipsizeMode="tail">
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
    );
};

const styles = StyleSheet.create({
    movieCardContainer: {
        flexDirection: 'column',
        gap: 8,
        width: 140,
        marginRight: 20, // for the spacing between the movie cards
    },
    movieCardImg: {
        width: 140,
        height: 200,
        borderRadius: 12,
    },
    movieTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    movieSubTitle: {
        color: 'gray',
        fontWeight: 'semibold',
        fontSize: 13,
    },
    ratingContainer: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    }
});

export default MovieCard;