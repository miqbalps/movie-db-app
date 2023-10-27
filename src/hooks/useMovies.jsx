"use client";
import { useState, useEffect } from "react";
import axios from "@/lib/api";

const useGetMovies = (withGenres, page = 1) => {
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`/discover/movie?page=${page}&with_genres=${withGenres}`)
      .then((res) => setDataMovies(res.data))
      .catch((err) => console.log(err));
  }, [page, withGenres]);

  return dataMovies;
};

const useGetDetailMovie = (id) => {
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    axios
      .get(`/movie/${id}`)
      .then((res) => setDataMovie(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return dataMovie;
};

const useGetGenres = (id) => {
  const [dataGenres, setDataGenres] = useState([]);

  useEffect(() => {
    axios
      .get(`/genre/movie/list?${id}`)
      .then((res) => {
        const genreMap = {};
        res.data.genres.forEach((genre) => {
          genreMap[genre.id] = genre.name;
        });
        setDataGenres(genreMap);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return dataGenres;
};

export { useGetMovies, useGetDetailMovie, useGetGenres };
