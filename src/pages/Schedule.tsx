import { useState } from 'react';

import { css } from '@emotion/react';
import dayjs from 'dayjs';

import CalendarComponent from '@/components/Calendar/Calendar';
import dayScheduleList from '@/components/Calendar/dayDummy';
import DaySchedule from '@/components/Calendar/DaySchedule';
import theme from '@/styles/theme';
import { EventModel } from '@/types/calendar';
const scheduleList: EventModel[] = [
  {
    id: 1,
    start: new Date('2024-06-01'),
    end: new Date('2024-06-01'),
    title: '오늘일정',
    color: theme.colors.paleRed,
  },
  {
    id: 1,
    start: new Date('2024-06-01'),
    end: new Date('2024-06-01'),
    title: '오늘일정',
    color: theme.colors.paleRed,
  },
  {
    id: 1,
    start: new Date('2024-06-01'),
    end: new Date('2024-06-01'),
    title: '오늘일정',
    color: theme.colors.paleRed,
  },
  {
    id: 1,
    start: new Date('2024-08-01'),
    end: new Date('2024-08-01'),
    title: '오늘일정',
    color: theme.colors.paleRed,
  },
  {
    id: 1,
    start: new Date('2024-08-01'),
    end: new Date('2024-08-01'),
    title: '오늘일정2',
    color: theme.colors.paleBlue,
  },
  {
    id: 1,
    start: new Date('2024-08-01'),
    end: new Date('2024-08-01'),
    title: '오늘일정3',
    color: theme.colors.paleGreen,
  },
  {
    id: 2,
    start: new Date('2024-08-01'),
    end: new Date('2024-08-01'),
    title: '오늘일정2',
    color: theme.colors.paleOrange,
  },
  {
    id: 3,
    start: new Date('2024-08-01'),
    end: new Date('2024-08-01'),
    title: '오늘일정2',
    color: theme.colors.paleYellow,
  },
  {
    id: 4,
    start: new Date('2024-08-02'),
    end: new Date('2024-08-04'),
    title: '오늘일정',
    color: theme.colors.palePurple,
  },
  {
    id: 5,
    start: new Date('2024-08-05'),
    end: new Date('2024-08-14'),
    title: '꽤 긴 일정입니다',
    color: theme.colors.paleRed,
  },
  {
    id: 6,
    start: new Date('2024-08-10'),
    end: new Date('2024-08-14'),
    title: '꽤 긴 일정입니다',
  },
  {
    id: 7,
    start: new Date('2024-08-16'),
    end: new Date('2024-08-16'),
    title: '휴가',
    color: theme.colors.paleOrange,
  },
  {
    id: 8,
    start: new Date('2024-08-19'),
    end: new Date('2024-08-19'),
    title: '오늘일정2',
    color: theme.colors.paleYellow,
  },
];

const SchedulePage = () => {
  const [schedule, setSchedule] = useState(scheduleList);
  const [activeDate, setActiveDate] = useState(new Date());
  const now = dayjs(activeDate).format('YYYY-MM-DD');
  return (
    <>
      <h1 className='page-title'>일정</h1>
      <div className='wrapper' css={calendarWrapperStyle}>
        <CalendarComponent
          schedule={schedule}
          activeDate={activeDate}
          setActiveDate={setActiveDate}
        />
      </div>

      <DaySchedule date={now} schedules={dayScheduleList} />
    </>
  );
};

const calendarWrapperStyle = css`
  background-color: ${theme.colors.white};
  padding-bottom: 1rem;
`;

export default SchedulePage;
