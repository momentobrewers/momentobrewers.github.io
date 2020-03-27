import { formatToTimeZone, parseFromTimeZone } from "date-fns-timezone";

const TIME_ZONE = "Asia/Seoul";

export const format = (date, format = "YYYY-MM-DD") => {
  return formatToTimeZone(date, format, {
    timeZone: TIME_ZONE
  });
};

export const newDate = date => {
  return parseFromTimeZone(date, {
    timeZone: TIME_ZONE
  });
};
