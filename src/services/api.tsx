import axios from "axios";
import { API_URL } from "../config";
import { SongType } from "../types";

export async function getAllSongs() {
  const url = `${API_URL}/songs`;
  const jwt = localStorage.getItem("jwt");

  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  if (!(response.status === 200)) {
    throw new Error();
  }

  return response.data;
}

export async function getFavouriteSongs() {
  const url = `${API_URL}/users/favourite-songs`;
  const jwt = localStorage.getItem("jwt");

  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  if (!(response.status === 200)) {
    throw new Error();
  }

  return response.data;
}

export async function addSongToFavourites(songId: number) {
  const url = `${API_URL}/users/favourite-songs?song_id=${songId}`;
  const jwt = localStorage.getItem("jwt");

  const response = await axios.post(
    url,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }
  );

  if (!(response.status === 201)) {
    throw new Error();
  }

  return response.data;
}

export async function removeSongFromFavourites(songId: number) {
  const url = `${API_URL}/users/favourite-songs?song_id=${songId}`;
  const jwt = localStorage.getItem("jwt");

  const response = await axios.delete(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  if (!(response.status === 204)) {
    throw new Error();
  }

  return response.data;
}

export async function searchSongs(query: string) {
  const url = `${API_URL}/songs/search?search_string=${query}`;
  const jwt = localStorage.getItem("jwt");

  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  if (!(response.status === 200)) {
    throw new Error();
  }

  return response.data;
}

export async function checkSongIsFavourite(songId: number) {
  const url = `${API_URL}/users/favourite-songs`;
  const jwt = localStorage.getItem("jwt");

  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  if (!(response.status === 200)) {
    throw new Error();
  }

  const favouriteSongs: SongType[] = response.data;
  const favouriteSongsIds = new Set(favouriteSongs.map((song) => song.id));

  return favouriteSongsIds.has(songId);
}
