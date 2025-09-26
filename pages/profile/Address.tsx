// EditProfile.tsx
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import ImageUpload from "@/components/Profile/ImageUpload";
import AddressSelector from "@/components/Profile/AddressSelector";

const { width, height } = Dimensions.get("window");

const Address = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#000" />

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.containerized}>
          {/* Header */}
          <View style={styles.headerOverlay}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
              <Ionicons name="arrow-back" size={width * 0.06} color="#000" />
            </TouchableOpacity>

            <Text style={[styles.headerTitle, { fontSize: width * 0.045 }]}>
              Address
            </Text>

            <View style={styles.iconButton} />
          </View>
          <AddressSelector />

        </View>

       
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f8faff" },
  containerized: { paddingHorizontal: width * 0.06, paddingTop: height * 0.03, paddingBottom: height * 0.02 },
  scrollContent: {},
  headerOverlay: {
    height: height * 0.07,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: height * 0.01,
  },
  headerTitle: { color: "#000", fontWeight: "bold" },
  iconButton: {},
  field: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  
});

export default Address;
