export function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

export function formatSongTitle(title: string) {
  if (title.length > 12) {
    return title.substring(0, 12) + "...";
  } else {
    return title;
  }
}
