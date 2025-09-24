import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { EditIcon } from "@/assets/icons/Payment";

interface UserInfoProps {
  name: string;
  email: string;
  bio: string;
  onEditPress: () => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, email, bio, onEditPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image
          source={require("../../assets/images/profile.jpg")} // local profile image
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.editButton} onPress={onEditPress}>
          <EditIcon />
        </TouchableOpacity>
      </View>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.bio}>{bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: -56, // to overlap the header
    paddingHorizontal: 16,
  },
  avatarWrapper: {
    position: "relative",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  editButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#FF6600",
    borderRadius: 50,
    padding: 0,
  },
  name: {
    marginTop: 14,
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  email: {
    fontSize: 13,
    color: "#8A8A8A",
     fontWeight: '500',
    marginTop: 2,
  },
  bio: {
    textAlign: "center",
    fontSize: 14,
    color: "#1D1E20",
    fontWeight: '500',
    marginTop: 14,
    paddingHorizontal: 24,
  },
});

export default UserInfo;
