import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { loadUsers, saveUsers } from '../utils/storage';
import { COLORS } from '../constants/colors';

export default function Home() {
  const { currentUser, login } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(currentUser?.name || '');
  const [editDepartment, setEditDepartment] = useState(currentUser?.department || '');

  const handleSaveProfile = async () => {
    if (!editName || !editDepartment) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    try {
      const users = await loadUsers();
      const updatedUsers = users.map(user =>
        user.id === currentUser.id
          ? { ...user, name: editName, department: editDepartment }
          : user
      );
      await saveUsers(updatedUsers);
      const updatedUser = { ...currentUser, name: editName, department: editDepartment };
      await login(updatedUser); // Update context
      setIsEditing(false);
      Alert.alert('Success', 'Profile updated successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to update profile');
    }
  };

  if (isEditing) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Edit Profile</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={editName}
          onChangeText={setEditName}
        />
        <TextInput
          style={styles.input}
          placeholder="Department"
          value={editDepartment}
          onChangeText={setEditDepartment}
        />
        <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => setIsEditing(false)}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo/lit_logo.jpg')} style={styles.logo} />
      </View>
      <Text style={styles.welcome}>Welcome, {currentUser?.name}!</Text>
      <Text style={styles.subtitle}>USTP IT Officers Management System</Text>
      <View style={styles.profileCard}>
        <Text style={styles.profileTitle}>Your Profile</Text>
        <Text style={styles.profileText}>Name: {currentUser?.name}</Text>
        <Text style={styles.profileText}>Email: {currentUser?.email}</Text>
        <Text style={styles.profileText}>Department: {currentUser?.department}</Text>
      </View>
      <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 30,
  },
  profileCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.secondary,
  },
  profileTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  profileText: {
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 5,
  },
  editButton: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  editText: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '100%',
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  cancelText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});