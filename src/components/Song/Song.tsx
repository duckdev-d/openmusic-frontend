import LikeButton from "../LikeButton/LikeButton";
import PrimaryText from "../PrimaryText/PrimaryText";
import SecondaryText from "../SecondaryText/SecondaryText";
import { addSongToFavourites } from "../../services/api";
import "./Song.css";

interface Props {
  width?: string;
  coverWidth?: string;
  title?: string;
  artist?: string;
  duration?: string;
  padding?: string;
  id?: number;
}

export default function Song({
  width = "10vw",
  coverWidth = "2vw",
  title = "title",
  artist = "artist",
  duration = "2:25",
  padding = "1vw",
  id = 0,
}: Props) {
  return (
    <div
      className="song"
      style={{
        width: width,
        padding: padding,
        borderRadius: "0.5vw",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        className="cover"
        style={{
          width: coverWidth,
          height: coverWidth,
          background: "rgb(122, 122, 122)",
          borderRadius: "0.5vw",
        }}
      />

      <div
        className="text-wrap"
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "2%",
          justifyContent: "center",
          gap: "10%",
        }}
      >
        <PrimaryText size="1.2vw">{title}</PrimaryText>
        <SecondaryText size="1vw">{artist}</SecondaryText>
      </div>

      <div
        className="like-duration-wrap"
        style={{
          position: "absolute",
          right: "1vw",
          display: "flex",
          alignItems: "center",
          gap: "2vw",
        }}
      >
        <SecondaryText className="song-duration" size="1vw">
          {duration}
        </SecondaryText>
        <LikeButton
          width="30vw"
          onClick={() => {
            addSongToFavourites(id);
          }}
        />
      </div>
    </div>
  );
}
