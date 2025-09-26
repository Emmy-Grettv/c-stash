import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import AddressItem from './AddressItem';

const AddressSelector: React.FC = () => {
  const [selectedAddressId, setSelectedAddressId] = useState<number | null>(null);
  const addresses: { id: number; label: string; details: string }[] = [
    { id: 1, label: 'Home', details: '11243 Thimson Sir, Sheldon Hawaii Street' },
    { id: 2, label: 'Office', details: '11243 Thimson Sir, Sheldon Hawaii Street' },
    { id: 3, label: 'Parents', details: '11243 Thimson Sir, Sheldon Hawaii Street' },
    { id: 4, label: 'Friend', details: '11243 Thimson Sir, Sheldon Hawaii Street' },
  ];

  return (
    <View style={styles.container}>
      {addresses.map((address) => (
        <AddressItem
          key={address.id}
          address={address}
          isSelected={selectedAddressId === address.id}
          onSelect={setSelectedAddressId}
        />
      ))}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add New Shipping Address</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  addButton: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    borderWidth: 1,           // add border width
    borderColor: '#333',      // add border color
    borderStyle: 'dashed',    // make it dashed
  },
  addButtonText: { color: '#333' },
});

export default AddressSelector;