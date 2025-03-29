import { useState } from "react";
import "./ImageButton.css";

interface Props {
  enabledImage: string;
  disabledImage: string;
  width: string;
  state?: "enabled" | "disabled";
  className?: string;
}

export default function ImageButton({
  enabledImage,
  disabledImage,
  width,
  state = "disabled",
  className = "",
}: Props) {
  const [image, setImage] = useState(
    state === "disabled" ? disabledImage : enabledImage
  );

  function handleButtonClick(e: React.MouseEvent) {
    if (image === disabledImage) {
      setImage(enabledImage);
    } else {
      setImage(disabledImage);
    }
  }

  return (
    <div
      id="image-btn"
      className={className}
      onClick={handleButtonClick}
      style={{ cursor: "pointer" }}
    >
      <img draggable="false" src={image} alt="" style={{ width: width }} />
    </div>
  );
}
