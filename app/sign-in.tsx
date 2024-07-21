import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { useUserStore }  from '../store/user'

export default function SignIn() {
  const setUser = useUserStore(state => state.setUser)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title='Sign In'
        onPress={() => {
          setUser({ name: 'John Doe' });
          router.replace('/');
        }} 
      />
    </View>
  );
}
