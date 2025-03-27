import { useState } from "react";
import heartOn from "../../assets/favourites-primary.svg";
import heartOff from "../../assets/favourites-secondary.svg";

interface Props {
  width: string;
}

export default function LikeButton({ width }: Props) {
  const [image, setImage] = useState(heartOff);

  function handleClick(e: React.MouseEvent) {
    if (image === heartOff) {
      setImage(heartOn);
    } else {
      setImage(heartOff);
    }
  }

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <img draggable="false" width={width} src={image} alt="" />
    </div>
  );
}
