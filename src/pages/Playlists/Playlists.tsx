import Line from "../../components/Line/Line";
import Playlist from "../../components/Playlist/Playlist";
import PrimaryText from "../../components/PrimaryText/PrimaryText";

export default function PlaylistsPage() {
  const playlists: { title: string }[] = [
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

  return (
    <div className="playlists">
      <PrimaryText size="3vw" weight="bold" mBottom="2vw">
        Playlists you liked
      </PrimaryText>

      <Line
        width="80vw"
        height="0.3vw"
        borderRadius="10px"
        color="#3D3D3D"
        mBottom="3vw"
      />

      <div
        className="items-wrap"
        style={{ display: "flex", flexWrap: "wrap", gap: "1vw" }}
      >
        {playlists.map(({ title }) => (
          <Playlist
            width="9vw"
            borderRadius="0.6vw"
            title={title}
            textSize="1.2vw"
          />
        ))}
      </div>
    </div>
  );
}
