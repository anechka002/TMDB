export const formatRuntime = (minutes?: number | null) => {
  if(!minutes) return null;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
}