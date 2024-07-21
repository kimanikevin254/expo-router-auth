import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { useUserStore }  from '../store/user'

export default function SignIn() {
  const setUser = useUserStore(state => state.setUser)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          setUser({ name: 'John Doe' });
          router.replace('/');
        }}>
        Sign In
      </Text>
    </View>
  );
}
