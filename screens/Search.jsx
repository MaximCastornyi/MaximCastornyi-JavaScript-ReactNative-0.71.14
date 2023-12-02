import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.style";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { COLORS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import ProductCardView from "../components/products/ProductCardView";

const Search = () => {
  const products = [1, 2, 3, 4];
  const DATA = [
    {
      image_require: require("../assets/images/divan1.jpg"),
      title: "Modern Sofa",
      info: "Comfy Sofa with Embedded Armrest, 3-Seater Couch for Living Room, Grey Boucle",
      image_large: require("../assets/images/divan1_large.jpg"),
      text: "Indulge in the captivating design of comfy sofa with its embedded arms and elegant curved lines. It exudes a modern sense of luxury that adds a touch of personality to your space. Experience ultimate comfort with the buttery-soft arm and back pillows of modern couch. The spacious design and plush cushioning could enhance your sitting experience.",
    },
    {
      image_require: require("../assets/images/divan2.jpg"),
      title: "Arabic Sofa",
      info: "Floor Cushions, Seating Cushions, Moroccan Sofas, Arabic Majlis, Arabic Diwan",
      image_large: require("../assets/images/divan2_large.jpg"),
      text: "This set is beyond amazing. It has really turned my room into this beautiful getaway to another country all within my own home. My grandson loved it more because he just loves to sit on it. The floor sofas are not freestanding, they need to lean against a wall or something hard behind. We can customize this product upon your request. All covers include their foam filling inserts. All covers are zippered.",
    },
    {
      image_require: require("../assets/images/divan3.jpg"),
      title: "AVZEAR 3",
      info: "Modern 3 Seater Couch Furniture Classic",
      image_large: require("../assets/images/divan3_large.jpg"),
      text: "Sink into the softness of this couch set with high density sponge cushions for unrivaled comfort. with matching ottoman featuring a modern streamlined design that can complement a variety of color schemes and home décor in your living room. Our 3-Piece Sofa Set crafted in a timeless polished design that will compliment any home.",
    },
    {
      image_require: require("../assets/images/divan4.jpg"),
      title: "VanAcc Modern Sofa",
      info: "24''Extra Deep Seat Sectional Sofa",
      image_large: require("../assets/images/divan4_large.jpg"),
      text: "Distinctive silhouette of boucle couch is inspired by Streamline Moderne, an international Art Deco design, features soft curving forms & long horizontal lines with metallic sheen leg. Get it & own a stylish home. Upholstered in soft white boucle with plush channel tufting on all sides, features fuzzy & pillowy touch, ensure a cozy leisure area. The cream couch is not only made to be touched, but to be seen.",
    },
    {
      image_require: require("../assets/images/divan5.jpg"),
      title: "AVZEAR Upholstered Velvet",
      info: "Apartment Sofa Sectional Sofa 3 Seater",
      image_large: require("../assets/images/divan5_large.jpg"),
      text: "100% Velvet cloth with featuring Equipped with super soft back and seat cushions, high-quality foam, and skin-friendly velvet fabric, this 3-Seat Sofa provides you an ultimate sitting experience. To make it stable and longer lasting. Our tufted sofa is covered with soft velvet fabric, filled with high-density foam inside, and the overall cushion thickness is up to 5.5 inches, the comfortable velvet sofa will help you release your entire body from head to toe.",
    },
    {
      image_require: require("../assets/images/divan6.jpg"),
      title: "GUEAPY Loveseat Recliner",
      info: "Reclining Loveseat with Console",
      image_large: require("../assets/images/divan6_large.jpg"),
      text: "Power Reclining Loveseat: Loveseat recliner can be adjusted infinite position from 105 to 140 degrees by pressing two buttons build on the armrests. Just press two buttons you can smoothly adjust the footrest and back of the loveseat. No matter reading, watching TV or taking a nap, you can find a suitable angle. It is worth mentioning that the seats of this recliner loveseat is controlled separately, so you can each enjoy your own leisure time.",
    },
    {
      image_require: require("../assets/images/divan7.jpg"),
      title: "Bench Cushions",
      info: "Arabic Seating, Arabic Couches, Oriental Seating",
      image_large: require("../assets/images/divan7_large.jpg"),
      text: "WHAT'S INCLUDED: The floor sofa set comprises 5 individual pieces; 1 floor seating cushion, 2 backrest pillows and 2 armrest pillows. All parts of the set are includes their inner fillings/inserts ( you will receive both the covers and their interior foam/ fillings after your purchase) FILLING MATERIAL: Our sofas filled with firm standard or premium quality foam for providing a superior comfort whether you use it on a bench or simply on the floor.",
    },
    {
      image_require: require("../assets/images/divan8.jpg"),
      title: "AVZEAR Large Sofa",
      info: "Mid Century Modern 3-Seater Sofa",
      image_large: require("../assets/images/divan8_large.jpg"),
      text: "Our couch seats feature a thick high density foam spacious and comfortable faux leather fabric that is skin-friendly and soft which we sincerely believe to be the most important quality of a superb couch. this sofa is expertly crafted in supple, top-quality faux leather and superior construction with enhanced stability and durability, maximum load-bearing capacity can reach 600 lbs. It provides you with just what you need for rest or leisure activities, classic eternity.",
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() => {}}
            placeholder="what are U looking for"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Feather name="search" size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <Image
          source={require("../assets/images/Pose23.png")}
          style={styles.searchImage}
        />
      </View>
      <FlatList
        style={{ marginTop: 20 }}
        data={DATA}
        renderItem={({ item }) => (
          <ProductCardView
            image_src={item.image_require}
            title4product={item.title}
            info4product={item.info}
            image_large={item.image_large}
            text={item.text}
          />
        )}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Search;
