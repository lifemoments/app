const isDateOnly = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value);

export const formatDate = (
  dateValue: string,
  options?: Intl.DateTimeFormatOptions,
  timeZone?: string,
) => {
  const date = isDateOnly(dateValue) ? new Date(`${dateValue}T12:00:00Z`) : new Date(dateValue);

  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: isDateOnly(dateValue) ? "UTC" : timeZone,
    ...options,
  }).format(date);
};

export const formatTime = (date: string, time: string) =>
  new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC",
  }).format(new Date(`${date}T${time}:00Z`));

export const getTimeZoneAbbreviation = (date: string, timeZone: string) => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "short",
  }).formatToParts(new Date(`${date}T12:00:00Z`));

  return parts.find((part) => part.type === "timeZoneName")?.value ?? timeZone;
};

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
  [...items].sort((a, b) => `${a.date}T${a.startTime}`.localeCompare(`${b.date}T${b.startTime}`));
