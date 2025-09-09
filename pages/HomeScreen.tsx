import Header from '@/components/home/Header';
import LatestDrops from '@/components/home/LatestDrops';
import Post from '@/components/home/Post';
import ProfileSection from '@/components/home/ProfileSection';
import React from 'react'
import { ScrollView, StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <ProfileSection />
      <LatestDrops />
      <Post
        username="Kenny K Sh*t"
        time="2h"
        content="This is the jacket I wore during the spending night of my tour. Tour in Los Angeles has so many crys*tal..."
        images={['img1', 'img2', 'img3', 'img4']}
      />
      <Post
        username="Wizkid King"
        time="3h"
        content="This is the jacket I wore during the spending night of my tour. Tour in Los Angeles has so many crys*tal..."
        images={['img1', 'img2']}
      />
      <Post
        username="Kenny K Sh*t"
        time="4h"
        content="This is the jacket I wore during the spending night of my tour. Tour in Los Angeles has so many crys*tal..."
        images={['img1', 'img2', 'img3', 'img4']}
      />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.04,
    fontFamily: 'Poppins',
  },
})