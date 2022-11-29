import { useEffect, useState } from "react";

const API_URL = "https://gateway.marvel.com/v1/public";
const API_KEY = 'f9da6538c4ea27e22ad155a9a4cc0a6e';
const API_HASH = 'fc5248db272ff790c7f9772407e7e84b';
const API_TS = 1;

export default function useGetCharacters() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/comics?ts=${API_TS}&apikey=${API_KEY}&hash=${API_HASH}&limit=10`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setComics(data.data.results));
  }, []);

  return {
    comics,
  }
}
