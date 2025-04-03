import PlaylistHeader from "../../components/PlaylistHeader/PlaylistHeader";
import Line from "../../components/Line/Line";
import Song from "../../components/Song/Song";
import { getFavouriteSongs } from "../../services/api";
import { useEffect, useMemo, useState } from "react";
import { formatDuration } from "../../utils";

export default function FavouritesPage() {
  const [favouriteSongs, setFavouriteSongs] = useState<
    {
      title: string;
      id: number;
      duration_seconds: number;
      artist: { username: string; is_admin: boolean };
    }[]
  >([]);
  useEffect(() => {
    getFavouriteSongs()
      .then((response) => {
        setFavouriteSongs(response);
      })
      .catch((error) => {
        console.error("Failed to fetch songs:", error);
      });
  }, []);

  return (
    <div className="favourites">
      <PlaylistHeader
        title="Liked songs"
        titleFontSize="2.5vw"
        numberOfSongs={`${favouriteSongs.length}`}
        secondaryFontSize="1.5vw"
        coverWidth="8vw"
        includeLikeButton={false}
        marginBottom="3vw"
      />

      <Line
        width="80vw"
        height="0.3vw"
        borderRadius="10px"
        color="#3D3D3D"
        mBottom="3vw"
      />

      <div
        className="songs"
        style={{ display: "flex", flexDirection: "column", gap: "0.7vw" }}
      >
        {favouriteSongs.map((song) => (
          <Song
            key={song.id}
            coverWidth="2.5vw"
            width="80vw"
            padding="0.7vw"
            title={song.title}
            artist={`${song.artist.username}`}
            duration={`${formatDuration(song.duration_seconds)}`}
            id={song.id}
            isFavourite={true}
          />
        ))}
      </div>
    </div>
  );
}
