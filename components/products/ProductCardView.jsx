import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./productCardView.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = ({
  image_src,
  title4product,
  info4product,
  image_large,
  text,
}) => {
  const navigation = useNavigation();

  const min = 234;
  const max = 654;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const image = image_large;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetails", {
          image: image_large,
          text: text,
          title4product: title4product,
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={image_src} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {title4product}
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            {info4product}
          </Text>
          <Text style={styles.price}> £ {randomNumber}</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
