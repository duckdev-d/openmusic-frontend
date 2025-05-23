import { useState } from "react";
import heartOn from "../../assets/heart-white.svg";
import heartOff from "../../assets/favourites-secondary.svg";
import {
  addSongToFavourites,
  removeSongFromFavourites,
} from "../../services/api";

interface Props {
  width: string;
  songId?: number;
  enabled?: boolean;
  visibility?: "visible" | "hidden";
  onClick?: () => void;
}

export default function LikeButton({
  width,
  visibility = "visible",
  songId = 0,
  enabled = false,
}: Props) {
  const [image, setImage] = useState(enabled ? heartOn : heartOff);

  function changeImage() {
    if (image === heartOff) {
      setImage(heartOn);
    } else {
      setImage(heartOff);
    }
  }

  function handleClick() {
    if (image === heartOff) {
      addSongToFavourites(songId);
    } else {
      removeSongFromFavourites(songId);
    }

    changeImage();
  }

  return (
    <div
      onClick={handleClick}
      style={{ cursor: "pointer", visibility: visibility }}
    >
      <img draggable="false" src={image} alt="" style={{width: width}}/>
    </div>
  );
}
