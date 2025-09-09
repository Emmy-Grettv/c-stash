import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const LatestDrops = () => (
  <View style={styles.latestDrops}>
    <Text style={styles.sectionTitle}>Latest drops</Text>
    <View style={styles.dropsContainer}>
      {['drop1', 'drop2', 'drop3'].map((item, index) => (
        <Image
          key={index}
          source={require('../../assets/images/feed3.png')} // Replace with actual image paths
          style={styles.dropImage}
          resizeMode="cover"
        />
      ))}
    </View>
  </View>
);

export default LatestDrops;

const styles = StyleSheet.create({
      latestDrops: {
    marginVertical: height * 0.02,
  },
  dropsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropImage: {
    width: width * 0.28,
    height: height * 0.2,
    borderRadius: width * 0.02,
  },
    sectionTitle: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: height * 0.01,
  },
})