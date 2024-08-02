import { scheduleColors } from '@/constants/colors';
import { EventModel } from '@/types/calendar';
import { ScheduleModel } from '@/types/schedule';

export const getEventList = (schedules: ScheduleModel[]): EventModel[] =>
  schedules.map((schedule) => {
    const { id, startDate, endDate, subject, color } = schedule;

    return {
      id,
      start: new Date(startDate),
      end: new Date(endDate),
      title: subject,
      color: scheduleColors[color],
    };
  });