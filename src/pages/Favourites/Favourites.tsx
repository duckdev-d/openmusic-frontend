import PlaylistHeader from "../../components/PlaylistHeader/PlaylistHeader";
import Line from "../../components/Line/Line";
import Song from "../../components/Song/Song";

export default function FavouritesPage() {
  const songs: { title: string; artist: string; duration: string }[] = [
    { title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
    { title: "Levitating", artist: "Dua Lipa", duration: "3:23" },
    { title: "Shape of You", artist: "Ed Sheeran", duration: "3:55" },
    { title: "Save Your Tears", artist: "The Weeknd", duration: "3:35" },
    { title: "Peaches", artist: "Justin Bieber", duration: "3:18" },
    { title: "Stay", artist: "The Kid LAROI", duration: "2:35" },
    { title: "Drivers License", artist: "Olivia Rodrigo", duration: "4:02" },
    { title: "Good 4 U", artist: "Olivia Rodrigo", duration: "2:58" },
    { title: "Kiss Me More", artist: "Doja Cat", duration: "3:29" },
    { title: "Montero", artist: "Lil Nas X", duration: "2:44" },
    { title: "Industry Baby", artist: "Lil Nas X", duration: "3:32" },
    { title: "Happier Than Ever", artist: "Billie Eilish", duration: "4:58" },
    { title: "Heat Waves", artist: "Glass Animals", duration: "3:58" },
    { title: "Watermelon Sugar", artist: "Harry Styles", duration: "2:54" },
    { title: "Bad Habits", artist: "Ed Sheeran", duration: "3:51" },
    { title: "Beggin'", artist: "Måneskin", duration: "3:31" },
  ];

  return (
    <div className="favourites">
      <PlaylistHeader
        title="Liked songs"
        titleFontSize="2.5vw"
        numberOfSongs="15"
        secondaryFontSize="1.5vw"
        coverWidth="8vw"
        includeLikeButton={false}
        marginBottom="1.5vw"
      />

      <Line
        width="80vw"
        height="0.3vw"
        borderRadius="10px"
        color="#3D3D3D"
        mBottom="1.5vw"
      />

      <div
        className="songs"
        style={{ display: "flex", flexDirection: "column", gap: "0.7vw" }}
      >
        {songs.map(({ title, artist, duration }) => (
          <Song
            title={title}
            artist={artist}
            duration={duration}
            width="80vw"
            padding="0.7vw"
            coverWidth="2.5vw"
          />
        ))}
      </div>
    </div>
  );
}
