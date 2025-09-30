import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { loadUsers } from '../utils/storage';
import { COLORS } from '../constants/colors';

export default function Registrants() {
  const [registrants, setRegistrants] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadRegistrants();
  }, []);

  const loadRegistrants = async () => {
    const users = await loadUsers();
    setRegistrants(users);
  };

  const filteredRegistrants = registrants.filter(registrant =>
    registrant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    registrant.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    registrant.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedRegistrants = [...filteredRegistrants].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'department') {
      return a.department.localeCompare(b.department);
    }
    return 0;
  });

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>{item.email}</Text>
      <Text>{item.department}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Registrants</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search registrants..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.sortContainer}>
        <TouchableOpacity
          style={[styles.sortButton, sortBy === 'name' && styles.activeSort]}
          onPress={() => setSortBy('name')}
        >
          <Text style={styles.sortText}>Sort by Name</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sortButton, sortBy === 'department' && styles.activeSort]}
          onPress={() => setSortBy('department')}
        >
          <Text style={styles.sortText}>Sort by Department</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={sortedRegistrants}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  sortButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  activeSort: {
    backgroundColor: COLORS.secondary,
  },
  sortText: {
    color: '#000',
  },
  list: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});