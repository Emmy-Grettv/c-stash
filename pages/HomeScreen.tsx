import Header from '@/components/home/Header';
import LatestDrops from '@/components/home/LatestDrops';
import Post from '@/components/home/Post';
import ProfileSection from '@/components/home/ProfileSection';
import React from 'react'
import { ScrollView, StyleSheet, Dimensions } from 'react-native'
import { useNavigation } from "@react-navigation/native"; 
import type { StackNavigationProp } from "@react-navigation/stack";

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {

  const navigation = useNavigation<StackNavigationProp<any>>(); 

  return (
    <ScrollView style={styles.container}>
      <Header 
  title="Home" 
  onRightPress={() => navigation.navigate('CartScreen')} 
/>
      <ProfileSection />
      <LatestDrops />
      <Post />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.04 ,
    fontFamily: 'Poppins',
  },
})