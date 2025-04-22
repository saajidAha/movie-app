import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SubTitle = ({value}: any) => (
    <Text style={styles.subtitle}>
        {value}
    </Text>
);

const styles = StyleSheet.create({
    subtitle: {
        color: '#A8B5DB',
        fontSize: 15,
    }
});

export default SubTitle;