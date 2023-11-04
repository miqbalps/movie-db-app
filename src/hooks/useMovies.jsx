import { useState, useEffect } from "react";
import axios from "@/lib/api";

const useGetMovies = (withGenres, page = 1) => {
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `/discover/movie?page=${page}&with_genres=${withGenres}`
        );
        setDataMovies(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [page, withGenres]);

  return dataMovies;
};

const useGetDetailMovie = (id) => {
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/movie/${id}`);
        setDataMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  return dataMovie;
};

const useGetGenres = (id) => {
  const [dataGenres, setDataGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/genre/movie/list?${id}`);
        const genreMap = {};
        res.data.genres.forEach((genre) => {
          genreMap[genre.id] = genre.name;
        });
        setDataGenres(genreMap);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  return dataGenres;
};

export { useGetMovies, useGetDetailMovie, useGetGenres };
