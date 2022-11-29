import { useEffect, useState } from "react";

const API_URL = "http://gateway.marvel.com/v1/public";
const API_KEY = 'f9da6538c4ea27e22ad155a9a4cc0a6e';
const API_HASH = 'fc5248db272ff790c7f9772407e7e84b';
const API_TS = 1;

export default function useGetCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/characters?ts=${API_TS}&apikey=${API_KEY}&hash=${API_HASH}&limit=50`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setCharacters(data.data.results));
  }, []);

  

  return {
    characters,
  }
}
