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
            <Text style={styles.movieTitle}>
                {title}
            </Text>
            <View style={styles.ratingContainer}>
                <Image source={star} />
                <Text style={styles.movieSubTitle}>{rating}</Text>
            </View>
            <Text style={styles.movieSubTitle}>
                {genre} · Movie
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    movieCardContainer: {
        flexDirection: 'column',
        gap: 8,
        width: 150,
        marginRight: 30,
    },
    movieCardImg: {
        width: 150,
        height: 250,
    },
    movieTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    movieSubTitle: {
        color: 'gray',
        fontWeight: 'semibold',
        fontSize: 15,
    },
    ratingContainer: {
        flexDirection: 'row',
        gap: 5
    }
});

export default MovieCard;