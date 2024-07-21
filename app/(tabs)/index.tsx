import { Button, Text, View } from 'react-native';
import { useUserStore }  from '../../store/user'

export default function Index() {
  const removeUser = useUserStore(state => state.removeUser);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title='Log Out'
        onPress={() => {
          removeUser();
        }}
      />
    </View>
  );
}
