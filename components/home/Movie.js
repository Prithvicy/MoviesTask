import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Movie = ({ movie }) => {
  return (
    <View style={styles.posts}>
      <Text style={styles.title}>{movie.title}</Text>
      <Image
        style={styles.img}
        source={{
          uri: "https://image.tmdb.org/t/p/w500" + movie.backdrop_path,
        }}
        alt={movie.path}
      />

      <View style={{ flexDirection: "row", color: "white" , marginTop:10 }}>
        <Text style={{ color: "white" }}>{movie.vote_average}</Text>
        <Text>
          {" "}
          ⭐<Text style={{ color: "white" }}>({movie.vote_count} Votes)</Text>
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: "100%",
            marginTop: 18,
            marginBottom: 18,
            backgroundColor: "white",
            height: .5,
            flex: 1,
            alignSelf: "center",
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "white",
    marginBottom: 13,
    textAlign: "center",
    fontWeight: "600",
  },
  img: {
    width: "100%",
    height: 400,
  },
  posts: {
    marginLeft: 20,
    marginRight: 20,
  },
  lineStyle: {
    borderWidth: 2,
    borderColor: "white",
    width: 100,
  },
});

export default Movie;
