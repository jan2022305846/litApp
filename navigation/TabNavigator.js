import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';
import { COLORS } from '../constants/colors';
import Home from '../screens/Home';
import Officers from '../screens/Officers';
import Registrants from '../screens/Registrants';

const Tab = createBottomTabNavigator();

export default function TabNavigator({ navigation }) {
  const { logout } = useAuth();

  const handleLogout = async () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            await logout();
            navigation.replace('Login');
          },
        },
      ]
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Officers') {
            iconName = 'people';
          } else if (route.name === 'Registrants') {
            iconName = 'list';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.primary,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.secondary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 15 }}>
            <Ionicons name="school" size={24} color={COLORS.secondary} />
          </TouchableOpacity>
        ),
        headerTitle: 'USTP LIT Officers App',
        headerRight: () => (
          <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
            <Ionicons name="log-out" size={24} color={COLORS.secondary} />
          </TouchableOpacity>
        ),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Officers" component={Officers} />
      <Tab.Screen name="Registrants" component={Registrants} />
    </Tab.Navigator>
  );
}