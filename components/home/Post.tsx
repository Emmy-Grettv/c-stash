import React from 'react';
import { View, Text, Image,TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

interface PostProps {
  username: string;
  time: string;
  content: string;
  images: string[]; 
}

const Post = ({ username, time, content, images }: PostProps) => (
  <View style={styles.post}>
    <View style={styles.postHeader}>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
    <Text style={styles.postContent}>{content}</Text>
    <View style={styles.postImages}>
      {images.map((img, index) => (
        <Image
          key={index}
          source={require('../../assets/images/feed3.png')} // Replace with actual image paths
          style={styles.postImage}
          resizeMode="cover"
        />
      ))}
    </View>
    <View style={styles.postFooter}>
      <TouchableOpacity>
        <Text style={styles.likeText}>❤️ Like</Text>
      </TouchableOpacity>
      <Text style={styles.likes}>1.2K</Text>
      <Text style={styles.comments}># trending</Text>
    </View>
  </View>
);

export default Post;

const styles = StyleSheet.create({
     post: {
    backgroundColor: '#f9f9f9',
    borderRadius: width * 0.02,
    padding: width * 0.03,
    marginVertical: height * 0.01,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  username: {
    fontSize: width * 0.04,
    fontWeight: '600',
    color: '#FF650E',
  },
  time: {
    fontSize: width * 0.035,
    color: '#666',
  },
  postContent: {
    fontSize: width * 0.038,
    color: '#333',
    marginVertical: height * 0.01,
  },
  postImages: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  postImage: {
    width: width * 0.28,
    height: height * 0.15,
    borderRadius: width * 0.02,
    marginVertical: height * 0.005,
  },
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height * 0.01,
  },
  likeText: {
    color: '#FF650E',
    fontSize: width * 0.035,
  },
  likes: {
    fontSize: width * 0.035,
    color: '#333',
  },
  comments: {
    fontSize: width * 0.035,
    color: '#666',
  },
})