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
import { useAtom, useAtomValue } from "jotai";
import {
  currentAudioAtom,
  currentAudioIsPlayingAtom,
  currentSongAtom,
  currentAudioIsMutedAtom,
} from "../../atoms";
import { SongType } from "../../types";
import { checkSongIsFavourite } from "../../services/api";
import { formatDuration, formatSongTitle } from "../../utils";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";

export default function () {
  const currentSong: SongType = useAtomValue(currentSongAtom);
  const [currentAudioIsPlaying, setCurrentAudioIsPlaying] = useAtom(
    currentAudioIsPlayingAtom
  );
  const [currentAudio, setCurrentAudio] = useAtom(currentAudioAtom);
  const [currentAudioIsMuted, setCurrentAudioIsMuted] = useAtom(
    currentAudioIsMutedAtom
  );

  useEffect(() => {
    if (currentSong.id === 0) {
      return;
    }
    if (currentAudio) {
      currentAudio.pause();
    }
    setCurrentAudio(new Audio(`${API_URL}/songs/${currentSong.id}`));
  }, [currentSong]);

  useEffect(() => {
    if (!currentAudio) {
      return;
    }
    currentAudio?.play();
  }, [currentAudio]);

  let [currentSongIsFavourite, setCurrentSongIsFavourite] = useState(false);
  useEffect(() => {
    checkSongIsFavourite(currentSong.id).then((result) => {
      setCurrentSongIsFavourite(result);
    });
  }, []);

  function toggleAudio() {
    if (currentAudioIsPlaying) {
      currentAudio?.pause();
      setCurrentAudioIsPlaying(false);
    } else {
      currentAudio?.play();
      setCurrentAudioIsPlaying(true);
    }
  }

  function toggleAudioMute() {
    if (currentAudioIsMuted && currentAudio) {
      currentAudio.muted = false;
      setCurrentAudioIsMuted(false);
    } else if (currentAudio) {
      currentAudio.muted = true;
      setCurrentAudioIsMuted(true);
    }
  }

  return currentSong.id !== 0 ? (
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
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5vw",
          flexGrow: 1,
          flexBasis: 0,
        }}
      >
        <Cover width="2.5vw" />
        <div className="title-artist">
          <PrimaryText size="1vw" mBottom="0.2vw">
            {formatSongTitle(currentSong.title)}
          </PrimaryText>
          <SecondaryText size="0.7vw">
            {currentSong.artist.username}
          </SecondaryText>
        </div>
      </div>
      <div
        className="center"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexGrow: 1,
          flexBasis: 0,
        }}
      >
        <div
          className="controls"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
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
            state={currentAudioIsPlaying ? "enabled" : "disabled"}
            onClick={toggleAudio}
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
            justifyContent: "center",
          }}
        >
          <SecondaryText size="0.5vw">0:11</SecondaryText>
          <Line width="13vw" height="0.5vh" borderRadius="5px" />
          <SecondaryText size="0.5vw">
            {formatDuration(currentSong.duration_seconds)}
          </SecondaryText>
        </div>
      </div>
      <div
        className="right"
        style={{
          display: "flex",
          gap: "1.3vw",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          flexBasis: 0,
        }}
      >
        <LikeButton
          songId={currentSong.id}
          enabled={currentSongIsFavourite}
          width="35vw"
        />
        <ImageButton
          enabledImage={volumeOn}
          disabledImage={volumeOff}
          width="2.2vw"
          state={currentAudioIsMuted ? "disabled" : "enabled"}
          onClick={toggleAudioMute}
        />
      </div>
    </div>
  ) : (
    <div
      className="player-bar"
      style={{
        position: "absolute",
        background: "#2F2F2F",
        opacity: "0.95",
        width: "45vw",
        height: "4.6vw",
        padding: "0.8vw 1.5vw",
        borderRadius: "50px",
        bottom: "3vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SecondaryText size="1vw">
        Click on any song to start listening
      </SecondaryText>
    </div>
  );
}
