import addDays from "date-fns/addDays"
import differenceInMinutes from 'date-fns/differenceInMinutes'
import getDay from "date-fns/getDay"
import getHours from "date-fns/getHours"
import setMinutes from "date-fns/setMinutes"
import setHours from "date-fns/setHours"
import { newDate } from "./date"

export const opened = () => {
  const date = new Date();
  const now = newDate(date.toString())
  const hour = getHours(now)

  switch (getDay(now)) {
    case 0:
    case 6:
      return hour >= 11 && hour < 20
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return hour >= 8 && hour < 18
    default:
      return false;
  }
}
export const getTimeLeft = date => {
  const now = newDate(date.toString())
  const hour = getHours(now)

  let nextOpenDay = hour < 0 ? addDays(now, 1) : newDate(date.toString());

  switch (getDay(now)) {
    case 0:
    case 6: {
      nextOpenDay = setMinutes(setHours(nextOpenDay, 11), 0)
    }
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: {
      nextOpenDay = setMinutes(setHours(nextOpenDay, 8), 0)
    }
  }

  const diff = differenceInMinutes(now, nextOpenDay);
  return `CLOSED\n아람이 충전중 🔋\n오픈 ${Math.floor(diff / 60)}시간 ${diff % 60}분 남았다.`
}