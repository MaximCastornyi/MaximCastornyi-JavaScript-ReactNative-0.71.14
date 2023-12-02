import { View, Text } from "react-native";
import React from "react";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Welcome } from "../components";
import Carousel from "../components/home/Carousel";
import Headings from "../components/home/Headings";
import ProductRow from "../components/products/ProductRow";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView vertical={true}>
        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
            <Ionicons name="location-outline" size={24} />
            <Text style={styles.location}>Edinburgh Scotland</Text>
            <View style={{ alignItems: "flex-end" }}>
              <View style={styles.cartCount}>
                <Text style={styles.cartNumber}>0</Text>
              </View>
              <TouchableOpacity>
                <Fontisto name="shopping-bag" size={24} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView>
          <Welcome />
          <Carousel />
          <Headings />
          <ProductRow />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
