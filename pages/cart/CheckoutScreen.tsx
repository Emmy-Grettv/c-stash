import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CheckoutCard from '@/components/cart/CheckoutCard';
import ShippingCard from '@/components/cart/ShippingCard';

const { width, height } = Dimensions.get('window');

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const handleTrackOrder = () => console.log('Tracking order...');

  return (
    <View style={styles.container}>
        
<StatusBar barStyle="dark-content" backgroundColor="#000" />
      {/* Header */}
      <View style={styles.headerOverlay}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={width * 0.06} color="#000" />
        </TouchableOpacity>

        <Text style={[styles.headerTitle, { fontSize: width * 0.045 }]}>Checkout</Text>

        <View style={styles.iconButton} />
      </View>
       <CheckoutCard
          imageSource={require('../../assets/images/cart/order2.png')}
          title="Kendric's Jacket on Tour"
          subtitle="Kendric Lamar"
          status="In cart"
          price="$150.00"
          buttonText="1"
          onButtonPress={handleTrackOrder}
          buttonStyle={{ backgroundColor: '#8F959E57'}}
          buttonTextStyle={{color: '#000'  }}
        />
        <ShippingCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.04,
    backgroundColor: '#f5f8faff',
  },
  headerOverlay: {
    height: height * 0.07,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: height * 0.01,
  },
  headerTitle: {
    color: "#000",
    fontWeight: "bold",
  },
  iconButton: {
    padding: width * 0.015,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
    borderBottomWidth: 2,
    borderColor: '#eee',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: height * 0.015,
    borderBottomWidth: height * 0.005, // relative thickness for bottom border
    borderBottomColor: 'transparent', // default hidden
  },
  activeTabBorder: {
    borderBottomColor: '#ff6600', // orange bottom border for active tab
  },
  activeTabText: {
    color: '#000', // black for active tab
    fontWeight: 'bold',
    fontSize: width * 0.045,
  },
  inactiveTabText: {
    color: '#8F959E', // grey color for inactive tab
    fontSize: width * 0.045,
  },
});

export default CheckoutScreen;
