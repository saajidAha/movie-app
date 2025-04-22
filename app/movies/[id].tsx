import {ScrollView, Text, View, Image, StyleSheet, TouchableOpacity} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import { getMovieDetails, IMAGE_BASE_URL } from "@/utils/tmdbApiService";
import { useEffect, useState } from "react";
import star from '@/assets/icons/star.png';
import arrow from '@/assets/icons/arrow.png';
import Overview from "@/components/movie/Overview";
import PurpleContainer from "@/components/movie/PurpleContainer";
import GenreContainer from "@/components/movie/GenreContainer";

interface MovieDetails {
    backdrop_path: string;
    title: string;
    release_date: string;
    adult: boolean;
    runtime: number;
    vote_average: number;
    vote_count: number;
    overview: string;
    status: string;
    production_countries: Array<{ name: string }>;
    production_companies: Array<{ name: string }>;
    tagline: string;
    budget: number;
    revenue: number;
    genres: Array<{ name: string }>;
}

// Indiviudal Movie details page when a specific movie is clicked
const MovieDetail = () => {
    const [movieDetail, setMovieDetail] = useState<MovieDetails>({} as MovieDetails);

    const {id} = useLocalSearchParams();
    
    useEffect(() => {
        const getMovieInfo = async() => {
         const movieInfo = await getMovieDetails(id);
         setMovieDetail(movieInfo);
        }    
        getMovieInfo();
    }, [id])

    let {backdrop_path, title, release_date, adult, runtime, vote_average, vote_count, overview, status, production_countries, production_companies, tagline, budget, revenue, genres} = movieDetail;

    // formats currency values to millions/billions
    const formatCurrency = (amount: number) => {
        if (!amount) return '$0';
        if (amount >= 1000000000) {
            return `$${(amount / 1000000000).toFixed(1)} billion`;
        }
        return `$${(amount / 1000000).toFixed(1)} million`;
    }

    // check if adult and display
    const checkAdult = (value: boolean) => {
        return value? 'Adult 18+' : 'PG-13'; 
    }
    // helper function to format minutes to hours and minutes
    const formatRuntime = (minutes: number) => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}h ${remainingMinutes}m`;
    }

    // formats the rating to display out of 10 and display the number of voters
    const formatVoteCount = (count: number) => {
        if (count >= 1000000) {
            return `${(count / 1000000).toFixed(1)}M`;
        }
        if (count >= 1000) {
            return `${(count / 1000).toFixed(1)}K`;
        }
        return count.toString();
    }

    // format budget and revenue
    const formattedBudget = formatCurrency(budget);
    const formattedRevenue = formatCurrency(revenue);

    return(
        <View style={styles.bg}>
            <ScrollView>
                {/* Cover Image */}
                <Image
                    source={{uri: `${IMAGE_BASE_URL}${backdrop_path}`}}
                    style={styles.image}
                />
                {/* Title */}
                <View style={styles.scrollContainer}>
                    <Text style={styles.title}>
                        {title}
                    </Text>

                    {/* Sub title */}
                    <Text style={styles.subTitle}>
                        {release_date}  ·  {checkAdult(adult)}  ·  {runtime? formatRuntime(runtime): ''}
                    </Text>

                    {/* Rating */}
                    <View style={styles.rating}>
                        <Image source={star} />
                        <Text style={styles.subTitle}>
                            {vote_average ? vote_average.toFixed(1) : '0'}/10 ({formatVoteCount(vote_count || 0)})
                        </Text>
                    </View>

                    {/* Overview */}
                    <Overview title={overview} />

                    <View style={styles.release}>
                        {/* Release Date */}
                        <PurpleContainer
                            title="Release Date"
                            description={release_date}
                        />

                        {/* Status */}
                        <PurpleContainer
                            title="Status"
                            description={status}
                        />
                    </View>

                    {/* Genre */}
                    <GenreContainer 
                        buttonList={genres}    
                    />

                    {/* Countries */}
                    <PurpleContainer
                        title='Countries'
                        description={production_countries?.map((country, index) => (
                            index === production_countries.length - 1 
                            ? country.name 
                            : country.name + '  ·  '
                        )).join('')}
                    />

                    <View style={styles.release}>
                        {/* Budget */}
                        <PurpleContainer
                            title="Budget"
                            description={formattedBudget}
                        />

                        {/* Revenue */}
                        <PurpleContainer
                            title="Revenue"
                            description={formattedRevenue}
                        />
                    </View>

                    {/* Tagline */}
                    <PurpleContainer
                        title="Tagline"
                        description={tagline}
                    />
                    {/* Companies */}
                    <PurpleContainer
                        title='Production Companies'
                        description={production_companies?.map((company, index) => (
                            index === production_companies.length - 1 
                            ? company.name 
                            : company.name + '  ·  '
                        )).join('')}
                    />
                {/* Go to homepage button */}
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>{router.push('/(tabs)')}}
                >
                    <Text style={styles.btnText}>
                        Visit Home Page 
                    </Text>
                    <Image source={arrow} />
                </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}
export default MovieDetail;

const styles = StyleSheet.create({
    scrollContainer: {
        marginVertical: 25,
        flexDirection: 'column',
        gap: 25,
    },
    bg: {
        flex: 1,
        backgroundColor: '#030014',
    },
    image: {
        width: '100%',
        height: 400,
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
    },
    subTitle: {
        color: '#A8B5DB',
    },
    rating:{
        flexDirection: 'row',
        backgroundColor: '#221F3D',
        gap: 10,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5
    },
    overview:{
        color: 'white',
        letterSpacing: 0.5,
        lineHeight: 24
    },
    release:{
        flexDirection: 'row',
        gap: 50,
    },
    button:{
        flexDirection: 'row',
        backgroundColor: '#AB8BFF',
        gap: 20,
        justifyContent: 'center',
        paddingHorizontal: 90,
        paddingVertical: 15,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    btnText:{
        fontWeight: 'bold',
    }
})