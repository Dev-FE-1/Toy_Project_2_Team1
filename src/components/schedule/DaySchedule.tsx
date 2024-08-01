import React, { useEffect } from 'react';

import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSchedules } from '@/store/reducer/dayScheduleSlice';
import { RootState, AppDispatch } from '@/store/store';

// 요일을 한글로 표시하기 위한 배열
const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

const DaySchedule: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { schedules, loading, error } = useSelector((state: RootState) => state.daySchedule);

  useEffect(() => {
    dispatch(fetchSchedules());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        Error: {error}
        {schedules.length === 0 && (
          <button onClick={() => dispatch(fetchSchedules())}>Retry</button>
        )}
      </div>
    );
  }

  const today = dayjs();
  const formattedDate = today.format('M월 D일');
  const dayOfWeek = daysOfWeek[today.day()];

  return (
    <div>
      <h2>
        {formattedDate} ({dayOfWeek})
      </h2>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      {status === 'succeeded' && (
        <ul>
          {schedules.map((schedule, index) => {
            console.log(schedule);
            return (
              <li key={index}>
                <h2>{schedule.subject}</h2>
                <p>{schedule.content}</p>
                <p>시작: {dayjs(schedule.startDatetime).format('YYYY-MM-DD HH:mm:ss')}</p>
                <p>종료: {dayjs(schedule.endDatetime).format('YYYY-MM-DD HH:mm:ss')}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
// import { css } from '@emotion/react';

// import theme from '@/styles/theme';

// 일정 목록 컴포넌트
// 예) 7월 9일 (화) => 오늘 날짜임
// 일정 2(일정 2개임을 의미하는 데이터)
// 일정 아이템 컴포넌트
// 일정 아이템 1
// 일정 제목: 회의
// 일정 시간: 오후 03:00 - 오후 04:00 또는 하루종일
// 일정 아이템 2
// 일정 제목: 점심
// 일정 시간: 오후 12:00 - 오후 01:00 또는 하루종일

export default DaySchedule;
