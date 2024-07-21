import { Text, View } from 'react-native';
import { useUserStore }  from '../../store/user'

export default function Index() {
  const removeUser = useUserStore(state => state.removeUser);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          removeUser();
        }}>
        Sign Out
      </Text>
    </View>
  );
}
