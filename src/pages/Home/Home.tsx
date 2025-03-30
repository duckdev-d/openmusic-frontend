import PrimaryText from "../../components/PrimaryText/PrimaryText";
import Playlist from "../../components/Playlist/Playlist";
import Song from "../../components/Song/Song";
import "./Home.css";

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

  const songsHistory: { title: string; artist: string; duration: string }[] = [
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
    {
      title: "Astronaut in the Ocean",
      artist: "Masked Wolf",
      duration: "2:13",
    },
    { title: "Dynamite", artist: "BTS", duration: "3:19" },
    { title: "Someone You Loved", artist: "Lewis Capaldi", duration: "3:02" },
    { title: "Senorita", artist: "Shawn Mendes", duration: "3:11" },
  ];

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
        {songsHistory.map(({ title, artist, duration }) => (
          <Song
            coverWidth="3vw"
            width="42.5vw"
            padding="0.5vw"
            title={title}
            artist={artist}
            duration={duration}
          />
        ))}
        <Song coverWidth="3vw" width="42.5vw" padding="0.5vw" />
      </div>
    </div>
  );
}
