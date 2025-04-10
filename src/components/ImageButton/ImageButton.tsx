import { useState } from "react";
import "./ImageButton.css";

interface Props {
  enabledImage: string;
  disabledImage: string;
  width: string;
  state?: "enabled" | "disabled";
  className?: string;
  onClick?: () => void;
}

export default function ImageButton({
  enabledImage,
  disabledImage,
  width,
  state = "disabled",
  className = "",
  onClick,
}: Props) {
  const [image, setImage] = useState(
    state === "disabled" ? disabledImage : enabledImage
  );

  function handleButtonClick(e: React.MouseEvent) {
    if (onClick) {
      onClick();
    }
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
      <img
        draggable="false"
        src={state === "enabled" ? enabledImage : disabledImage}
        alt=""
        style={{ width: width }}
      />
    </div>
  );
}
