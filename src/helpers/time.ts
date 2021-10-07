export const toMinutes = (ms: number) => {
  const min = Math.floor((ms / 1000 / 60) << 0);
  const sec = Math.floor((ms / 1000) % 60);
  return `${min}m${sec}s`;
};
