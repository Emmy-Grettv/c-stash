import { MenuIcon } from '@/assets/icons/Payment';
import Header from '@/components/home/Header';
import React from 'react';
import { StyleSheet, Dimensions, View, StatusBar, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import BalanceCard from '@/components/ewallet/BalanceCard';
import TransactionList from '@/components/ewallet/TransactionList';

const { width, height } = Dimensions.get('window');

const EwalletScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#000" />
      <TransactionList
        ListHeaderComponent={
          <View>
            <Header
              title="E-Wallet"
              onRightPress={() => navigation.navigate('Ewallet')}
              RightIcon={<MenuIcon />}
            />
            <Text style={styles.balanceLabel}>My e-wallets</Text>
            <BalanceCard />
            <View style={styles.containerr}>
      <Text style={styles.title}>Transactions History</Text>
      <TouchableOpacity onPress={() => navigation.navigate('TransactionSearch')}>
        <Text style={styles.seeAll}>See all</Text>
      </TouchableOpacity>
    </View>
          </View>
        }
        contentContainerStyle={styles.listContent} // ✅ Padding moved here
      />
    </View>
  );
};

export default EwalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.04,
    paddingBottom: height * 0.02,
  },
  balanceLabel: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1D1E20",
  },
  seeAll: {
    fontSize: 16,
    color: "#FF650E",
    fontWeight: "600",
  },
  containerr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  }
});
