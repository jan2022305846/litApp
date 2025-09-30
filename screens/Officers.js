import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import { COLORS } from '../constants/colors';

// Real LIT Officers data
const litOfficers = [
  { id: '1', name: 'James Francis Barlisan', position: 'LIT President', department: 'Executive' },
  { id: '2', name: 'Patries Parejo', position: 'LIT Internal Vice President', department: 'Executive' },
  { id: '3', name: 'Mherafe Cabug', position: 'LIT General Secretary', department: 'Executive' },
  { id: '4', name: 'Zela Sutina', position: 'LIT Associate Secretary', department: 'Executive' },
  { id: '5', name: 'Danica Servas', position: 'LIT General Treasurer', department: 'Finance' },
  { id: '6', name: 'Sunshine Salvanera', position: 'LIT Associate Treasurer', department: 'Finance' },
  { id: '7', name: 'Jerico Maghanoy', position: 'LIT Auditor', department: 'Finance' },
  { id: '8', name: 'Denniell Jan Salomson', position: 'LIT Internal P.I.O', department: 'Public Relations' },
  { id: '9', name: 'Jastine May Baguloy', position: 'LIT External P.I.O', department: 'Public Relations' },
];

export default function Officers() {
  const [officers] = useState(litOfficers);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOfficers = officers.filter(officer =>
    officer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    officer.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
    officer.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.position}>{item.position}</Text>
      <Text>{item.department}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LIT Officers</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search officers..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredOfficers}
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
  list: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.secondary,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  position: {
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 5,
  },
});