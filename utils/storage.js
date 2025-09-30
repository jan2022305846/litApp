import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = 'users';
const CURRENT_USER_KEY = 'currentUser';

export const saveUsers = async (users) => {
  try {
    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (error) {
    console.error('Error saving users:', error);
  }
};

export const loadUsers = async () => {
  try {
    const users = await AsyncStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error('Error loading users:', error);
    return [];
  }
};

export const saveCurrentUser = async (user) => {
  try {
    await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } catch (error) {
    console.error('Error saving current user:', error);
  }
};

export const loadCurrentUser = async () => {
  try {
    const user = await AsyncStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error loading current user:', error);
    return null;
  }
};

export const clearCurrentUser = async () => {
  try {
    await AsyncStorage.removeItem(CURRENT_USER_KEY);
  } catch (error) {
    console.error('Error clearing current user:', error);
  }
};