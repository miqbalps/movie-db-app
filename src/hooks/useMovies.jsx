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

const useGetCredits = (id) => {
  const [dataCredits, setDataCredits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/movie/${id}/credits`);
        setDataCredits(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  return dataCredits;
};

const useGetReviews = (id) => {
  const [dataReviews, setDataReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/movie/${id}/reviews`);
        setDataReviews(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  return dataReviews;
};

export {
  useGetMovies,
  useGetDetailMovie,
  useGetGenres,
  useGetCredits,
  useGetReviews,
};
