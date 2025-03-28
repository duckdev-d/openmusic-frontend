import Playlist from "../Playlist/Playlist";
import PrimaryText from "../PrimaryText/PrimaryText";
import SecondaryText from "../SecondaryText/SecondaryText";
import LikeButton from "../LikeButton/LikeButton";

interface Props {
  title: string;
  titleFontSize: string;
  coverWidth: string;
  numberOfSongs: string;
  secondaryFontSize: string;
  includeLikeButton?: boolean;
  likeButtonWidth?: string;
  marginBottom?: string;
}

export default function PlaylistHeader({
  title,
  titleFontSize,
  coverWidth,
  numberOfSongs,
  secondaryFontSize,
  includeLikeButton = false,
  likeButtonWidth = "40vw",
  marginBottom = "0",
}: Props) {
  return (
    <div
      className="playlist-header"
      style={{ display: "flex", gap: "1.5vw", marginBottom: marginBottom }}
    >
      <Playlist
        width={coverWidth}
        borderRadius="0.6vw"
        title=""
        textSize="0px"
      />

      <div
        className="text-like-wrap"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <PrimaryText size={titleFontSize} weight="bold">
          {title}
        </PrimaryText>
        <SecondaryText size={secondaryFontSize}>
          {numberOfSongs} songs
        </SecondaryText>
        {includeLikeButton ? (
          <LikeButton width={likeButtonWidth} />
        ) : (
          <LikeButton width={likeButtonWidth} visibility="hidden" />
        )}
      </div>
    </div>
  );
}
