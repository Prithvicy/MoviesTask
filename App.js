import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const App = () => {
  // api link
  const [popular, setPopular]= useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=3394587140060f6da4e342e15d0c7ac5&language=en-US&page=1";
    useEffect(() => {
      fetchPopular();
    },[]);

  const fetchPopular = async ()=>{
  const data= await fetch(url);
  const movies = await data.json();
  console.log(movies);
  setPopular(movies.results)
  }

  return (
    <SafeAreaView>
    <Text>movies</Text>
    <ScrollView>

    {
      popular.map(movie => {
        return<Movie key={movie.id} movie={movie}/>
      })
    }
    </ScrollView>

    </SafeAreaView>
  );
};
export default App;
