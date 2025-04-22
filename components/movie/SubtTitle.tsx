import { Text, StyleSheet } from 'react-native';

interface PropTypes{
    value: string
}

const SubTitle = ({value}: PropTypes) => (
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