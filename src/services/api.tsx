import axios from "axios";
import { API_URL } from "../config";

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
