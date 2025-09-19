import Header from '@/components/home/Header';
import LatestDrops from '@/components/home/LatestDrops';
import Post from '@/components/home/Post';
import ProfileSection from '@/components/home/ProfileSection';
import React from 'react';
import { ScrollView, StyleSheet, Dimensions, View } from 'react-native';
import { useNavigation } from "@react-navigation/native"; 
import type { StackNavigationProp } from "@react-navigation/stack";
import TabBar from '@/components/Tabbar';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>(); 

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Header 
          title="Home" 
          onRightPress={() => navigation.navigate('CartScreen')} 
        />
        <ProfileSection />
        <LatestDrops />
        <Post />
      </ScrollView>

      <View style={styles.tabBarContainer}>
        <TabBar />
      </View>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.04,
    paddingBottom: height * 0.12, // Extra space for TabBar
  },
  tabBarContainer: {
    position: 'absolute',
    bottom: -12,
    left: 0,
    right: 0,
    paddingHorizontal: width * 0.01,
    paddingVertical: height * 0.015,
    backgroundColor: 'transparent', // Transparent or semi-transparent
    marginHorizontal: 10,
    borderRadius: 50
  },
});
