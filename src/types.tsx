export type SongType = {
  title: string;
  id: number;
  duration_seconds: number;
  artist: {
    username: string;
    is_admin: boolean;
  };
};
