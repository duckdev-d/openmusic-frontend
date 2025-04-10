import LikeButton from "../LikeButton/LikeButton";
import PrimaryText from "../PrimaryText/PrimaryText";
import SecondaryText from "../SecondaryText/SecondaryText";
import { addSongToFavourites } from "../../services/api";
import "./Song.css";
import { useSetAtom } from "jotai";
import { currentAudioIsPlayingAtom, currentSongAtom } from "../../atoms";
import { SongType } from "../../types";
import { formatDuration } from "../../utils";
import { motion } from "framer-motion";

interface Props {
  width?: string;
  coverWidth?: string;
  song: SongType;
  padding?: string;
  isFavourite?: boolean;
}

export default function Song({
  song,
  width = "10vw",
  coverWidth = "2vw",
  padding = "1vw",
  isFavourite = false,
}: Props) {
  const setCurrentSong = useSetAtom(currentSongAtom);
  const setCurrentAudioIsPlaying = useSetAtom(currentAudioIsPlayingAtom);

  function handleClick() {
    setCurrentSong(song);
    setCurrentAudioIsPlaying(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      whileTap={{ scale: 0.99, transition: { duration: 0.1 } }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={handleClick}
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
        <PrimaryText size="1.2vw">{song.title}</PrimaryText>
        <SecondaryText size="1vw">{song.artist.username}</SecondaryText>
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
          {formatDuration(song.duration_seconds)}
        </SecondaryText>
        <LikeButton
          width="30vw"
          songId={song.id}
          enabled={isFavourite}
          onClick={() => {
            addSongToFavourites(song.id);
          }}
        />
      </div>
    </motion.div>
  );
}
