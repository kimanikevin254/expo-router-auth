import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Redirect, Tabs } from 'expo-router';
import { Text } from 'react-native';
import { useUserStore } from '../../store/user';
import { useShallow } from 'zustand/react/shallow';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { _hasHydrated, user } = useUserStore(
    useShallow(state => ({
      _hasHydrated: state._hasHydrated,
      user: state.user
    }))
  )

  console.log(user, _hasHydrated);

  if(!_hasHydrated){
    return <Text>Loading...</Text>
  }

  if(!user){
    return <Redirect href='/sign-in' />
  }

  return (
    <Tabs
      screenOptions={{
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
