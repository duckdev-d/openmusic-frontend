import { atom } from "jotai";
import { SongType } from "./types";

export const currentSongAtom = atom<SongType>({
  title: "",
  id: 0,
  duration_seconds: 145,
  artist: {
    username: "",
    is_admin: false,
  },
});

export const currentAudioAtom = atom<HTMLAudioElement>(new Audio());
