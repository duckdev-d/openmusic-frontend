import Cover from "../Cover/Cover";
import ImageButton from "../ImageButton/ImageButton";
import PrimaryText from "../PrimaryText/PrimaryText";
import SecondaryText from "../SecondaryText/SecondaryText";
import swipeLeft from "../../assets/swipe-left.svg";
import swipeRight from "../../assets/swipe-right.svg";
import playOn from "../../assets/play-on.svg";
import playOff from "../../assets/play-off.svg";
import volumeOn from "../../assets/volume-enabled.svg";
import volumeOff from "../../assets/volume-disabled.svg";
import Line from "../Line/Line";
import LikeButton from "../LikeButton/LikeButton";

interface Props {
  title?: string;
  artist?: string;
  duration?: string;
}

export default function ({
  title = "Best Song",
  artist = "Great Artist",
  duration = "2:25",
}: Props) {
  return (
    <div
      className="player-bar"
      style={{
        position: "absolute",
        background: "#2F2F2F",
        opacity: "0.95",
        width: "45vw",
        padding: "0.8vw 1.5vw",
        borderRadius: "50px",
        bottom: "3vw",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        className="left"
        style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}
      >
        <Cover width="2.5vw" />
        <div className="title-artist">
          <PrimaryText size="1vw" mBottom="0.2vw">
            {title}
          </PrimaryText>
          <SecondaryText size="0.7vw">{artist}</SecondaryText>
        </div>
      </div>
      <div
        className="center"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          className="controls"
          style={{ display: "flex", alignItems: "center" }}
        >
          <ImageButton
            enabledImage={swipeLeft}
            disabledImage={swipeLeft}
            width="2vw"
          />
          <ImageButton
            enabledImage={playOn}
            disabledImage={playOff}
            width="2.5vw"
          />
          <ImageButton
            enabledImage={swipeRight}
            disabledImage={swipeRight}
            width="2vw"
          />
        </div>
        <div
          className="timeline"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5vw",
          }}
        >
          <SecondaryText size="0.5vw">0:11</SecondaryText>
          <Line width="13vw" height="0.5vh" borderRadius="5px" />
          <SecondaryText size="0.5vw">{duration}</SecondaryText>
        </div>
      </div>
      <div
        className="right"
        style={{
          display: "flex",
          gap: "1.3vw",
          alignItems: "center",
        }}
      >
        <LikeButton width="35vw" />
        <ImageButton
          enabledImage={volumeOn}
          disabledImage={volumeOff}
          width="2.2vw"
          state="enabled"
        />
      </div>
    </div>
  );
}
