import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='home'
        options={{
        title:'Home',
        headerShown:false,
        tabBarIcon:({color})=><FontAwesome name="home" size={24} color={color} />
        }}/>
        <Tabs.Screen name='profile'options={{
     title:'Profile',
     headerShown:false,
     tabBarIcon:({color})=><Ionicons name="people" size={24} color={color}/>
    }}></Tabs.Screen> 
        {/* <Tabs.Screen name='profile'/> */}
        <Tabs.Screen name='assign'
  options={{
    title: 'Assign',
    headerShown: false,
    tabBarIcon: ({ color }) => <Ionicons name="clipboard" size={24} color={color} />,
  }}
/>
    </Tabs>
  )
}

export default _layout