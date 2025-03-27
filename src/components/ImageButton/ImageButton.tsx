import { useState } from "react";
import "./ImageButton.css";

interface Props {
  enabledImage: string;
  disabledImage: string;
  width: string;
  className?: string;
}

export default function ImageButton({
  enabledImage,
  disabledImage,
  width,
  className = "",
}: Props) {
  const [image, setImage] = useState(disabledImage);

  function handleButtonClick(e: React.MouseEvent) {
    if (image === disabledImage) {
      setImage(enabledImage);
    } else {
      setImage(disabledImage);
    }
  }

  return (
    <div id="image-btn" className={className} onClick={handleButtonClick}>
      <img draggable="false" src={image} alt="" style={{ width: width }} />
    </div>
  );
}
