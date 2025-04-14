import {Image, ScrollView, Text, View} from "react-native";
import bg from '../../assets/images/bg.png'
import logo from '../../assets/icons/logo.png';
export default function Index() {
  return (
      <View
          style={{
            flex: 1,
            backgroundColor: '#030014',
          }}
      >

        <Image
            source={bg}
            style={{
                zIndex: 0,
                position: 'absolute',
            }}
        />

      <ScrollView >
          <Image
              style={{
                  width: '100%',
                  objectFit: 'contain',
                  top: 50,
              }}
              source={logo}
          />
      </ScrollView>
      </View>
  );
}
