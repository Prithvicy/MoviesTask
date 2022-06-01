import { View, Text, SafeAreaView, ScrollView, StyleSheet} from "react-native";
import React, { useEffect, useState } from "react";
import Movie from "../components/home/Movie";
import { Divider } from "react-native-elements";

const HomeScreen = () => {
  // api link
  const [popular, setPopular] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=3394587140060f6da4e342e15d0c7ac5&language=en-US&page=1";
  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
  };
  return (
    <SafeAreaView style={styles.background}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text></Text>
        <Text
          style={{ color: "white", fontSize: 30, justifyContent: "center" }}
        >
          MOVIE APP
        </Text>
        <Text></Text>
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
      <ScrollView>
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: "black",
    color: "white",
  },
});

export default HomeScreen;
