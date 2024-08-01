import ScheduleModel from '@/types/schedule';
const dayScheduleList: ScheduleModel[] = [
  {
    id: 8,
    userNo: 10001,
    subject: '박인턴 interview',
    content: '박인턴과의 면접. 인사팀과 함께 진행.',
    startDate: '2024-08-02',
    startTime: '16:00',
    endDate: '2024-08-02',
    endTime: '17:00',
    isAlarm: false,
    alarmTime: 0,
    color: '#29BB7E',
  },
  {
    id: 1,
    userNo: 10001,
    subject: '광고 캠페인 기획 회의',
    content: '2024년 하반기 광고 캠페인 기획 회의.',
    startDate: '2024-06-05',
    startTime: '00:00',
    endDate: '2024-08-02',
    endTime: '23:59',
    isAlarm: true,
    alarmTime: 600,
    color: '#E24C4C',
  },
  {
    id: 7,
    userNo: 10001,
    subject: '최인턴 interview',
    content: '하루종일 워크샵',
    startDate: '2024-08-02',
    startTime: '00:00',
    endDate: '2024-08-02',
    endTime: '23:59',
    isAlarm: false,
    alarmTime: 0,
    color: '#F0864B',
  },
];

export default dayScheduleList;
