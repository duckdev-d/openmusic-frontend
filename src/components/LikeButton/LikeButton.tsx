import { useState } from "react";
import heartOn from "../../assets/heart-white.svg";
import heartOff from "../../assets/favourites-secondary.svg";

interface Props {
  width: string;
  visibility?: "visible" | "hidden";
}

export default function LikeButton({ width, visibility = "visible" }: Props) {
  const [image, setImage] = useState(heartOff);

  function handleClick(e: React.MouseEvent) {
    if (image === heartOff) {
      setImage(heartOn);
    } else {
      setImage(heartOff);
    }
  }

  return (
    <div
      onClick={handleClick}
      style={{ cursor: "pointer", visibility: visibility }}
    >
      <img draggable="false" width={width} src={image} alt="" />
    </div>
  );
}
