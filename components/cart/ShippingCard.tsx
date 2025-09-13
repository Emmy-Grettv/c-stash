import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

// Define the shape of each option
type Option = {
  id: 'none' | 'economy' | 'cargo';
  label: string;
  price: string;
  estimated: string;
  icon: string | null;
  disabled: boolean;
};

const ShippingCard: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<Option['id']>('economy'); // Pre-select Economy

  const options: Option[] = [
    {
      id: 'economy',
      label: 'Economy (In Kigali)',
      price: '$13',
      estimated: 'Estimate Arrival May 14',
      icon: '🚚',
      disabled: false,
    },
    {
      id: 'cargo',
      label: 'Cargo (Outside Kigali)',
      price: '$20',
      estimated: 'Estimate Arrival May 20',
      icon: '📦',
      disabled: false,
    },
  ];

  // Render radio button
  const renderRadioButton = (isSelected: boolean) => (
    <View
      style={[
        styles.radioOuter,
        isSelected && styles.radioOuterSelected,
      ]}
    >
      {isSelected && <View style={styles.radioInner} />}
    </View>
  );

  // Handle selection
  const handleSelect = (id: Option['id']) => {
    if (id === 'none') {
      setSelectedOption('none');
      return;
    }
    const option = options.find(opt => opt.id === id);
    if (option && !option.disabled) {
      setSelectedOption(id);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose shipping</Text>

      {/* Special row for No Delivery */}
      <Pressable
        style={styles.noDeliveryRow}
        onPress={() => handleSelect('none')}
      >
        {renderRadioButton(selectedOption === 'none')}
        <Text style={styles.noDeliveryText}>No delivery</Text>
      </Pressable>

      {/* Shipping option cards */}
      {options.map((option) => (
        <Pressable
          key={option.id}
          style={[
            styles.optionCard,
            selectedOption === option.id && styles.selectedCard,
            option.disabled && styles.disabledCard,
          ]}
          onPress={() => handleSelect(option.id)}
          disabled={option.disabled}
        >
          <View style={styles.optionContent}>
            {/* Left side: icon + label + price */}
            <View style={styles.leftSection}>
              {option.icon ? (
                <View style={styles.iconContainer}>
                  <Text style={styles.icon}>{option.icon}</Text>
                </View>
              ) : null}
              <View style={styles.textContainer}>
                <View style={styles.labelPriceRow}>
                  <Text style={[styles.label, option.disabled && styles.disabledText]}>
                    {option.label}
                  </Text>
                  <Text style={[styles.price, selectedOption === option.id && styles.selectedPrice]}>
                    {option.price}
                  </Text>
                </View>
                {option.estimated ? (
                  <Text style={[styles.estimated, option.disabled && styles.disabledText]}>
                    {option.estimated}
                  </Text>
                ) : null}
              </View>
            </View>

            {/* Right side: radio button */}
            <View style={styles.rightSection}>
              {renderRadioButton(selectedOption === option.id)}
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  // --- No Delivery Row ---
  noDeliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  noDeliveryText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
    color: '#000',
  },
  // --- Card options ---
  optionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedCard: {
    borderColor: '#FF650E',
    shadowOpacity: 0.15,
  },
  disabledCard: {
    backgroundColor: '#f5f5f5',
    borderColor: '#ddd',
  },
  optionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF650E33',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 20,
  },
  textContainer: {
    flex: 1,
  },
  labelPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  estimated: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  disabledText: {
    color: '#999',
  },
  rightSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 8,
  },
  selectedPrice: {
    color: '#FF650E',
  },
  // --- Radio Button ---
  radioOuter: {
    width: 23,
    height: 23,
    borderRadius: 11.5,
    borderWidth: 1.5,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioOuterSelected: {
    borderColor: '#FF650E',
  },
  radioInner: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#FF650E',
  },
});

export default ShippingCard;
