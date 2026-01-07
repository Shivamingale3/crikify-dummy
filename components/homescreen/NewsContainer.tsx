import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const images = [
  "https://www.reuters.com/resizer/v2/X23WC3N52NJOZD5NO36W2M767I.jpg?auth=4825a87f2a1bfecb7ec3d67af7a56c7d506f15c96a99405b325e61d1057d9a7e&width=480&quality=80",
  "https://www.reuters.com/resizer/v2/TT7SPSHGNZJINOBGXIEHGCL2DQ.jpg?auth=217c9d9f31cb1b59adb37ba871cf66991909b72109c79fb51a17dc43e691a01f&width=480&quality=80",
  "https://www.reuters.com/resizer/v2/W6C23DU4KVNQJCWYEBFPPF24DQ.jpg?auth=930e099581a214f94b2727f4f419be8ae55774c87a12808a0cbf2d9ed4be3c71&width=720&quality=80",
];
const NewsContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="gap-2">
      <Text className="text-white font-bold text-2xl mb-2">Latest News</Text>

      {/* Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: images[currentIndex] }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

export default NewsContainer;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  imageContainer: {
    height: 200,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "white",
    width: 20,
    height: 10,
  },
});
