import {Image, ScrollView, Text, View, StyleSheet, TextInput} from "react-native";
import bg from '../../assets/images/bg.png'
import logo from '../../assets/icons/logo.png';
import searchIcon from '../../assets/icons/search.png';
import mufasa from '../../assets/images/mufasa.png';

export default function Index() {
  return (
      <View style={styles.bg}>
        <Image
            source={bg}
            style={styles.bgImg}
        />
      <ScrollView >
          {/*logo*/}
          <Image
              style={styles.logo}
              source={logo}
          />
      {/*Search bar*/}
          <View style={styles.searchContainer}>
              <Image
                source={searchIcon}
                style={styles.searchIcon}
              />
              <TextInput
                  placeholder='Search through 300+ movies online...'
                  placeholderTextColor='#A8B5DB'
                  style={styles.search}
              />
          </View>
      {/*    Popular Movies container*/}
          <View style={styles.movieContainer}>
            <Title title='Popular Movies'/>
              <MovieCard title='Mufasa' image={mufasa} />
          </View>  

          {/*    Latest Movies container*/}
          <View style={styles.movieContainer}>
            <Title title='Latest Movies'/>
          </View>
      </ScrollView>
      </View>
  );
}
// Title component
const Title = ({title}: any) => (
    <Text style={styles.title}>
        {title}
    </Text>
)

// Movie card component
const MovieCard = ({title, image}: any) => (
    <View style={styles.movieCardContainer}>
        <Image source={image} style={styles.movieCardImg}/>
        <Text style={styles.movieTitle}>
            {title}
        </Text>
        <Text style={styles.movieSubTitle}>
            Action . Movie
        </Text>
    </View>
)
const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#030014',
    },
    bgImg:{
        zIndex: 0,
        position: 'absolute',
    },
    logo: {
        width: '100%',
        objectFit: 'contain',
        marginTop: 50,
    },
    search:{
        width: '90%',
        backgroundColor: '#0F0D23',
        color: '#A8B5DB',
        borderRadius:  25,
        paddingLeft: 60,
        // paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 15,
    },
    searchContainer:{
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        position: 'relative', // to add the search icon on top
    },
    searchIcon:{
        tintColor: '#AB8BFF',
        left: 40,
        zIndex: 1,
    },
    title:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 100,
    },
    movieContainer:{
        flexDirection: 'column',
        marginLeft: 25,
        gap: 10,
    },
    movieCardContainer:{
        flexDirection: 'column',
        gap: 8,
        width: '40%'
    },
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
        width: '100%',
        height: 250,
    }
})