import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TitleProps {
    title: string;
}

const Title = ({ title }: TitleProps) => (
    <Text style={styles.title}>
        {title}
    </Text>
);

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 100,
    }
});

export default Title;