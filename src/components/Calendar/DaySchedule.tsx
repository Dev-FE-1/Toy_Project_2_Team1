import { css } from '@emotion/react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { HiChevronRight } from 'react-icons/hi2';

import theme from '@/styles/theme';
import ScheduleModel from '@/types/schedule';
dayjs.locale('ko');

// 인터페이스 정의
interface DayScheduleProps {
  date: string;
  schedules: ScheduleModel[];
}
interface ScheduleListProps {
  schedules: ScheduleModel[];
}
interface ScheduleItemProps {
  schedule: ScheduleModel;
}
// 유틸리티 함수
// date: 캘린더 컴포넌트의 activeDate(default: 오늘 날짜)
const formatDate = (date: string) => dayjs(date).format('M월 D일 (ddd)');

// 하루종일 이벤트인지 확인
const isAllDayEvent = (schedule: ScheduleModel): boolean =>
  schedule.startTime === '00:00' && schedule.endTime === '23:59';

// 시간 포맷팅
const formatTime = (time: string) => {
  const [hour, minute] = time.split(':');
  return dayjs().hour(parseInt(hour)).minute(parseInt(minute)).format('A hh:mm');
};
// 시간 범위 포맷팅(하루종일 아닐 때)
const formatTimeRange = (start: string, end: string): string =>
  `${formatTime(start)} - ${formatTime(end)}`;

// 일정 시간 표시
const getScheduleTimeDisplay = (schedule: ScheduleModel): string =>
  isAllDayEvent(schedule) ? '하루종일' : formatTimeRange(schedule.startTime, schedule.endTime);

// 일정 컴포넌트
const DaySchedule = ({ date, schedules }: DayScheduleProps) => (
  <div css={dayScheduleWrap}>
    <h2>{formatDate(date)}</h2>
    <ScheduleList schedules={schedules} />
  </div>
);
// 일정 리스트
const ScheduleList = ({ schedules }: ScheduleListProps) => (
  <div css={scheduleListStyle}>
    <h3>
      일정 <span>{schedules.length}</span>
    </h3>
    <ul css={scheduleItemsStyle}>
      {schedules.length === 0 ? (
        <li css={emptyListStyle}>일정이 없습니다.</li>
      ) : (
        schedules.map((schedule) => <ScheduleItem key={schedule.id} schedule={schedule} />)
      )}
    </ul>
  </div>
);
// 일정 아이템
const ScheduleItem = ({ schedule }: ScheduleItemProps) => (
  <li css={scheduleItemStyle(schedule)}>
    <h3>
      {schedule.subject}
      <HiChevronRight />
    </h3>
    <p>{getScheduleTimeDisplay(schedule)}</p>
  </li>
);

// 스타일
const dayScheduleWrap = css`
  min-height: 210px;
  margin-top: 1rem;
  padding: 1.5rem 1rem;
  background-color: ${theme.colors.white};
  h2 {
    color: ${theme.colors.darkestGray};
    font-size: ${theme.fontSizes.normal};
    margin-bottom: 1rem;
    font-weight: 600;
  }
  span {
    color: ${theme.colors.primary};
  }
`;
const scheduleListStyle = css`
  position: relative;
  display: flex;
  min-height: 100px;
  justify-content: flex-start;
  align-items: center;
  font-size: ${theme.fontSizes.normal};
  width: 100%;
  gap: 50px;
  & > h3 {
    width: 60px;
    display: flex;
    flex-direction: row;
    color: ${theme.colors.darkGray};
    align-self: flex-start;
    font-weight: 600;
  }
  span {
    display: block;
    margin-left: 4px;
  }
`;
const scheduleItemsStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: inherit;
  gap: 12px;
  cursor: pointer;
`;
const emptyListStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: ${theme.colors.darkGray};
  font-size: ${theme.fontSizes.normal};
  font-weight: 600;
`;
const scheduleItemStyle = (schedule: ScheduleModel) => css`
  position: relative;
  min-width: 200px;
  height: 35px;
  background-color: ${theme.colors.white};
  color: ${theme.colors.darkestGray};
  padding-left: 12px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 35px;
    background-color: ${schedule.color};
  }
  h3 {
    color: ${theme.colors.darkestGray};
    font-weight: 600;
    line-height: 1.2rem;
    display: flex;
    align-items: center;
  }
  h3 > svg {
    width: 12px;
    stroke-width: 1.2;
    color: ${theme.colors.darkGray};
  }
  p {
    line-height: 1rem;
    color: ${theme.colors.darkGray};
    font-size: ${theme.fontSizes.small};
  }
`;
export default DaySchedule;
