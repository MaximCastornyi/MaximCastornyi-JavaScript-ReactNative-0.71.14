import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./headings.style";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants";

const Headings = () => {
  
  const navigation = useNavigation();

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
            <Entypo 
            name="grid"
            size={34}
            color="black"
            /> 
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default Headings