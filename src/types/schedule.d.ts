interface ScheduleModel {
  userNo: number;
  id: number;
  alarmTime: number;
  subject: string;
  content: string;
  color: string;
  startDate: string; // 시작날짜
  startTime: string; // 시작시간
  endDate: string; // 종료날짜
  endTime: string; // 종료시간
  isAlarm: boolean;
}
export default ScheduleModel;
