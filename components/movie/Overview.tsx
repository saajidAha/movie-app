import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SubTitle from '@/components/movie/SubtTitle';


const Overview = ({title}) => (
    <View style={styles.container}>
        <SubTitle value="Overview"/>
        <Text style={styles.overview}>
            {title}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container:{
        gap: 10,
    },
    overview: {
        color: 'white',
        letterSpacing: 0.5,
        lineHeight: 24
    }
});

export default Overview;