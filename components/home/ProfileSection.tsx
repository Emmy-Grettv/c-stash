import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

const { width, height } = Dimensions.get('window');

// Define the navigation param list
type RootTabParamList = {
  ProfileSection: undefined;
  ProfileDetail: { profileId: string };
};

// Define the navigation prop type
type ProfileScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'ProfileSection'>;

const ProfileSection = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const profiles = [
    { id: '1', name: 'sabanok...', image: require('../../assets/images/story1.png') },
    { id: '2', name: 'blue_bouy', image: require('../../assets/images/story2.png') },
    { id: '3', name: 'waggles', image: require('../../assets/images/story3.png') },
    { id: '4', name: 'steve.loves', image: require('../../assets/images/story3.png') },
    { id: '5', name: 'steve.loves', image: require('../../assets/images/story4.png') },
  ];

  const handleProfilePress = (profileId: string) => {
    navigation.navigate('ProfileDetail', { profileId }); // Navigate to ProfileDetail tab
  };

  return (
    <View style={styles.profileSection}>
      <Text style={styles.sectionTitle}>My social feed</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.profileImages}>
        {profiles.map((profile) => (
          <TouchableOpacity key={profile.id} onPress={() => handleProfilePress(profile.id)}>
            <Image
              source={profile.image}
              style={[styles.profileImage, { width: width * 0.12, height: width * 0.12 }]}
              resizeMode="cover"
            />
            <Text style={styles.profileName}>{profile.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProfileSection;

const styles = StyleSheet.create({
  profileSection: {
    marginVertical: height * 0.02,
  },
  sectionTitle: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: height * 0.01,
  },
  profileImages: {
    flexDirection: 'row',
    paddingVertical: height * 0.01,
  },
  profileImage: {
    borderRadius: width * 0.06,
    borderWidth: 2,
    borderColor: '#FF650E',
    marginRight: width * 0.02,
  },
  profileName: {
    fontSize: width * 0.03,
    textAlign: 'center',
    color: '#333',
    marginTop: height * 0.005,
  },
});