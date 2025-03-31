import { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import { searchSongs } from "../../services/api";
import Song from "../../components/Song/Song";
import { formatDuration } from "../../utils";

export default function SearchPage() {
  const [songs, setSongs] = useState<
    {
      id: number;
      title: string;
      duration_seconds: number;
      artist: { username: string; is_admin: boolean };
    }[]
  >([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    searchSongs(query)
      .then((response) => {
        setSongs(response);
      })
      .catch((error) => {
        console.error("Error fetching songs:", error);
      });
  }, [query]);

  return (
    <div
      className="search"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Search
        value={query}
        setValue={setQuery}
        width="40vw"
        fontSize="1.5vw"
        paddingBottom="0.5vw"
        paddingTop="0.5vw"
        paddingLeft="1vw"
        paddingRight="1vw"
        marginBottom="3vw"
      />
      <div
        className="songs"
        style={{ display: "flex", flexDirection: "column", gap: "0.7vw" }}
      >
        {songs.length > 0 ? (
          songs.map((song) => (
            <Song
              key={song.id}
              coverWidth="2.5vw"
              width="80vw"
              padding="0.7vw"
              title={song.title}
              artist={`${song.artist.username}`}
              duration={`${formatDuration(song.duration_seconds)}`}
              id={song.id}
            />
          ))
        ) : (
          <div
            style={{
              fontSize: "1.5vw",
              color: "#A0A0A0",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2vw",
            }}
          >
            No results found
          </div>
        )}
      </div>
    </div>
  );
}
