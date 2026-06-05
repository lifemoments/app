export const formatDate = (dateValue: string, options?: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    ...options,
  }).format(new Date(dateValue));

export const formatTime = (date: string, time: string) =>
  new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(`${date}T${time}:00`));

export const getCountdown = (targetDate: string) => {
  const now = Date.now();
  const target = new Date(targetDate).getTime();
  const diff = Math.max(target - now, 0);

  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1_000);

  return { days, hours, minutes, seconds };
};

export const sortByDateTime = <T extends { date: string; startTime: string }>(items: T[]) =>
  [...items].sort(
    (a, b) =>
      new Date(`${a.date}T${a.startTime}:00`).getTime() -
      new Date(`${b.date}T${b.startTime}:00`).getTime(),
  );
