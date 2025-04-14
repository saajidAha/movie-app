import {Tabs} from "expo-router";
import {Image, ImageBackground, Text, View} from "react-native";
import homeIcon from '../../assets/icons/home.png';
import searchIcon from '../../assets/icons/search.png';
import saveIcon from '../../assets/icons/save.png';
import personIcon from '../../assets/icons/person.png';
import highlight from '../../assets/images/highlight.png';
import backgroundImg from '../../assets/images/bg.png';

const Layout = () => {
  return(
      <View style={{
          height: '100%',
          backgroundColor: '#030014',
      }}>
      <Tabs
          // OVERALL TAB CUSTOMIZATION
          screenOptions={{
              // individual component in tab bar styling
              tabBarItemStyle: {
              },
              // overall tab bar styling
              tabBarStyle : {
              backgroundColor : '#0F0D23',
              marginBottom: 20,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 20,
          }
          }}

      >
          {/*CUSTOMIZE INDIVIDUAL TABS*/}
          {/* Home tab */}
          <Tabs.Screen // Tabs.Screen component defines each tab, and you can customize it using options prop
          name='index' // should match the actual file name
          options={{
              title: 'Home', // header title
              headerShown: false, // hide the header title
              tabBarLabel: "", // The name of the tab to display in the nav bar
              tabBarIcon: ({focused}) => ( // focused is to indicate if the tab is active or not
                  focused? <ActiveButton label='Home' icon={homeIcon} /> : <NormalIcon icon={homeIcon} />
              )
          }}
          />

      {/* Search Tab*/}
          <Tabs.Screen
              name='Search'
              options={{
                  title:"Search",
                  headerShown: false,
                  tabBarLabel: '',
                  tabBarIcon: ({focused}) => (
                      focused? <ActiveButton label='Search' icon={searchIcon} /> : <NormalIcon icon={searchIcon} />
                  )
              }}
          />

      {/* Bookmark Tab*/}
          <Tabs.Screen
          name="Bookmark"
          options={{
              title: 'Bookmark Tab',
              tabBarLabel: '',
              headerShown: false,
              tabBarIcon: ({focused}) => (
                  focused ? <ActiveButton label='Save' icon={saveIcon} /> : <NormalIcon icon={saveIcon} />
              )
          }}
          />

      {/* Profile Tab*/}
          <Tabs.Screen
          name='Profile'
          options={{
              title: 'Profile page',
              headerShown: false,
              tabBarLabel: '',
              tabBarIcon: ({focused}) => (
                  focused ? <ActiveButton label='Profile' icon={personIcon} /> : <NormalIcon icon={personIcon} />
              )
          }}
          />
      </Tabs>
      </View>
  )
}

// Icon to display whenever it's active (clicked)
const ActiveButton = ({label, icon} : any) => {
    return(
        <ImageBackground
            source={highlight}
            style={{
                display: 'flex',
                width: 110, // Ensure these are numbers, not strings
                height: 40,
                gap: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
                marginLeft: label=='Home'? 20 : 0,
                marginRight: label=='Profile'? 20 : 0
            }}
        >
            <Image
                source={icon}
                style={{
                    tintColor: 'black',
                    resizeMode: 'contain',
                }}
            />
            <Text style={{fontWeight: 'bold', paddingTop: 2}}>
                {label}
            </Text>
        </ImageBackground>
    )
}

// Icon to display whenever its not active
const NormalIcon = ({icon} : any) => (
        <Image source={icon} style={{
            marginTop: '10',
            tintColor: 'white',
            resizeMode: 'contain',
        }}/>
    )

export default Layout;
