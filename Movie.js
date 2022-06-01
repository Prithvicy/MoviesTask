import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Movie = ({ movie }) => {
  return (
    <View>
      <Text>{movie.title}</Text>
      <Image
        style={styles.img}
        source={{
          uri: "https://image.tmdb.org/t/p/w500" + movie.backdrop_path,
        }}
        alt={movie.path}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 450,
  },
});

export default Movie;
