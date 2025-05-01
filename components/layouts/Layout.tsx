import { StyleSheet, View, Image, ScrollView } from 'react-native'
import bg from '@/assets/images/bg.png'
import logo from '@/assets/icons/logo.png';
import SearchBar from '../SearchBar';

// layout for all the pages with consistent header and footer
// This contains the general background image, logo, and search bar
const Layout = ({children}: any) => {
  return (
  <View style={styles.bg}>
      <Image
      source={bg}
      style={styles.bgImg}
      />
      {/* Overall scroll view of the home page */}
    <ScrollView>
        {/* Top logo*/}
        <Image
            style={styles.logo}
            source={logo}
        />
        {/* Search bar*/}
        <SearchBar />
        {/* Page content */}
        {children}
      </ScrollView >

    </View>
  )
}

const styles = StyleSheet.create({
    bg:{
        flex: 1,
        backgroundColor: '#030014',
    },
    bgImg:{
        zIndex: 0,
        position: 'absolute',
    },
    logo: {
        top: 15,
        width: '100%',
        objectFit: 'contain',
    }
})

export default Layout