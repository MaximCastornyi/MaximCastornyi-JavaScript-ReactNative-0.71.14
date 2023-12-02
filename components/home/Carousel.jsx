import { View, Text } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const Carousel = () => {

    const slides = [
        require("../../assets/images/fn1.jpg"),
        require("../../assets/images/fn2.jpg"),
        require("../../assets/images/fn3.jpg"),
        require("../../assets/images/fn4.jpg"),
        require("../../assets/images/fn5.jpg"), 
    ]

  return (
    <View style={styles.carouselContainer}>
      <SliderBox 
      images={slides}
      dotColor={COLORS.primary}
      inactiveDotColor={COLORS.secondary}
      ImageComponentStyle={{borderRadius: 15, width: "95%", marginTop: 15}}
      autoplay
      circleLoop
      />
    </View>
  );
};

export default Carousel

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center",
    }
})