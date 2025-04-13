import { Text, View } from "react-native";
import {Link} from "expo-router";
export default function Index() {
  return (
    <View className='w-full h-full justify-center items-center'>
      <Text className='text-5xl text-blue-500'>Welcome!</Text>
        <Link href='/onboarding'>Onboarding page</Link>
        <Link href='/app/movies/avengers'>Avengers Movie Link</Link>
    </View>
  );
}
