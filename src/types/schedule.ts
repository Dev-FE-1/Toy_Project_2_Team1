interface Schedule {
  /**
   * id: 20001 (번호) => 일정 식별자
   * subject: "프로젝트 회의" (문자열)
   * content: "데이터베이스 구조 짜기" (문자열)
   * startDatetime: 2024년 7월 22일 오후 2시 0분 0초 UTC+9 (타임스탬프)
   * endDatetime: 2024년 7월 22일 오후 4시 0분 0초 UTC+9 (타임스탬프)
   * alarmTime :0 (번호)
   * color: "bababa" (문자열)
   * isAlarm: false (불리언)
   * userNo: 10001 (번호) => 사용자 식별자 (FK)
   */
  userNo: number;
  id: string;
  alarmTime: number;
  subject: string;
  content: string;
  color: string;
  startDatetime: Date;
  endDatetime: Date;
  isAlarm: boolean;
}

export type { Schedule };
