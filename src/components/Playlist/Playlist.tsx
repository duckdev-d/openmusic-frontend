import ImageButton from "../ImageButton/ImageButton";
import SecondaryText from "../SecondaryText/SecondaryText";
import playlistButtonOn from "../../assets/playlist-btn-playing.svg";
import playlistButtonOff from "../../assets/playlist-btn-paused.svg";
import "./Playlist.css";

interface Props {
  title: string;
  width: string;
  borderRadius: string;
  textSize: string;
}

export default function Playlist({
  width,
  borderRadius,
  title,
  textSize,
}: Props) {
  return (
    <div className="playlists">
      <div
        className="cover"
        style={{
          width: width,
          height: width,
          borderRadius: borderRadius,
        }}
      >
        <ImageButton
          width="2vw"
          enabledImage={playlistButtonOn}
          disabledImage={playlistButtonOff}
          className="playlist-btn"
        />
      </div>
      <SecondaryText size={textSize}>{title}</SecondaryText>
    </div>
  );
}
