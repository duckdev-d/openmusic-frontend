import PrimaryText from "../../components/PrimaryText/PrimaryText";
import Playlist from "../../components/Playlist/Playlist";
import Song from "../../components/Song/Song";
import { getAllSongs } from "../../services/api";
import "./Home.css";
import { useEffect, useState } from "react";
import { formatDuration } from "../../utils";

export default function HomePage() {
  const recommendedPlaylists: { title: string }[] = [
    { title: "Playlist #1" },
    { title: "Playlist #2" },
    { title: "Playlist #3" },
    { title: "Playlist #4" },
    { title: "Playlist #5" },
    { title: "Playlist #6" },
    { title: "Playlist #7" },
    { title: "Playlist #8" },
    { title: "Playlist #9" },
    { title: "Playlist #10" },
    { title: "Playlist #11" },
    { title: "Playlist #12" },
    { title: "Playlist #13" },
  ];

  const [recommendedSongs, setRecommendedSongs] = useState<
    {
      title: string;
      id: number;
      duration_seconds: number;
      artist: { username: string; is_admin: boolean };
    }[]
  >([]);

  useEffect(() => {
    getAllSongs()
      .then((response) => {
        setRecommendedSongs(response);
      })
      .catch((error) => {
        console.error("Failed to fetch songs:", error);
      });
  }, []);

  return (
    <div className="home">
      <PrimaryText size="2vw" weight="bold" mBottom="1.3vw">
        Playlists for you
      </PrimaryText>

      <div className="playlists-wrap">
        {recommendedPlaylists.map(({ title }) => (
          <Playlist
            width="9vw"
            borderRadius="0.6vw"
            title={title}
            textSize="1.2vw"
          />
        ))}
      </div>

      <PrimaryText size="2vw" weight="bold" mBottom="1.3vw">
        Songs for you
      </PrimaryText>

      <div
        className="songs"
        style={{ display: "flex", flexWrap: "wrap", gap: "0.7vw" }}
      >
        {recommendedSongs.map((song) => (
          <Song
            key={song.id}
            coverWidth="3vw"
            width="42.5vw"
            padding="0.5vw"
            title={song.title}
            artist={`${song.artist.username}`}
            duration={`${formatDuration(song.duration_seconds)}`}
            id={song.id}
          />
        ))}
      </div>
    </div>
  );
}
