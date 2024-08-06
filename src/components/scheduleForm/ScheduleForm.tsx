/* eslint-disable no-unused-vars */
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';

import { css } from '@emotion/react';
import dayjs from 'dayjs';

import Button from '@/components/common/buttons/Button';
import Select from '@/components/common/Select';
import ToggleSwitch from '@/components/common/ToggleSwitch';
import DatePicker from '@/components/datePicker/DatePicker';
import ColorPicker, { ColorsType } from '@/components/scheduleForm/ColorPicker';
import TimePicker from '@/components/scheduleForm/TimePicker';
import theme from '@/styles/theme';
import { ScheduleFormDataModel } from '@/types/schedule';

const ALARM_OPTIONS = {
  NONE: '없음',
  TEN_MINUTES: '10분 전',
  THIRTY_MINUTES: '30분 전',
  ON_TIME: '정각',
};

const ALARM_TIME = {
  [ALARM_OPTIONS.NONE]: 0,
  [ALARM_OPTIONS.TEN_MINUTES]: 600,
  [ALARM_OPTIONS.THIRTY_MINUTES]: 1800,
  [ALARM_OPTIONS.ON_TIME]: 0,
};

interface ScheduleFormProps {
  initEnableAllDay?: boolean;
  initSelectedAlarmOption?: (keyof typeof ALARM_OPTIONS)[number];
  initSelectedColor?: ColorsType;
  initStartDate?: Date;
  initEndDate?: Date;
  initStartTime?: string;
  initEndTime?: string;
  onSubmit: (data: ScheduleFormDataModel) => void;
}

const ScheduleForm = ({
  initEnableAllDay = false,
  initSelectedAlarmOption = ALARM_OPTIONS.NONE,
  initSelectedColor = 'red',
  initStartDate = new Date(),
  initEndDate = new Date(),
  initStartTime = dayjs().minute(0).format('HH:mm'),
  initEndTime = dayjs().minute(0).format('HH:mm'),
  onSubmit,
}: ScheduleFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const [titleValue, setTitleValue] = useState('');
  const [enableAllDay, setEnableAllDay] = useState(initEnableAllDay);
  const [selectedAlarmOption, setSelectedAlarmOption] = useState(initSelectedAlarmOption);
  const [selectedColor, setSelectedColor] = useState(initSelectedColor);

  const [startDate, setStartDate] = useState(initStartDate);
  const [endDate, setEndDate] = useState(initEndDate);
  const [startTime, setStartTime] = useState(initStartTime);
  const [endTime, setEndTime] = useState(initEndTime);

  useEffect(() => {
    titleInputRef.current?.focus();
  }, []);

  const onTitle = (event: ChangeEvent<HTMLInputElement>) => setTitleValue(event.target.value);
  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const { subject, content } = Object.fromEntries(formData.entries()) as Record<string, string>;
    const data: ScheduleFormDataModel = {
      color: selectedColor,
      subject,
      content,
      startDate: startDate.toISOString(),
      startTime,
      endDate: endDate.toISOString(),
      endTime,
      isAlarm: selectedAlarmOption !== ALARM_OPTIONS.NONE,
      alarmTime: ALARM_TIME[selectedAlarmOption],
    };

    onSubmit(data);
  };

  return (
    <>
      <form onSubmit={onSubmitForm} css={formStyle} className='wrapper' ref={formRef}>
        <input
          type='text'
          name='subject'
          css={subjectInputStyle}
          placeholder='일정 제목을 입력하세요.'
          ref={titleInputRef}
          value={titleValue}
          onChange={onTitle}
        />
        <div css={divContainerStyle}>
          <span>하루 종일</span>
          <ToggleSwitch enabled={enableAllDay} setEnabled={setEnableAllDay} />
        </div>
        <div css={divContainerStyle}>
          <span>시작일</span>
          <div css={datePickerContainerStyle}>
            <DatePicker selected={startDate} setSelected={setStartDate} inputName='startDate' />
            {!enableAllDay && (
              <TimePicker time={startTime} setTime={setStartTime} inputName='startTime' />
            )}
          </div>
        </div>
        <div css={divContainerStyle}>
          <span>종료일</span>
          <div css={datePickerContainerStyle}>
            <DatePicker selected={endDate} setSelected={setEndDate} inputName='endDate' />
            {!enableAllDay && (
              <TimePicker time={endTime} setTime={setEndTime} inputName='endTime' />
            )}
          </div>
        </div>
        <div css={divContainerStyle}>
          <span>알림</span>
          <Select
            options={Object.values(ALARM_OPTIONS)}
            selected={selectedAlarmOption}
            onChange={setSelectedAlarmOption}
          />
        </div>
        <div css={divContainerStyle}>
          <span>색상</span>
          <ColorPicker selected={selectedColor} setSelected={setSelectedColor} />
        </div>
        <textarea name='content' css={textareaStyle} placeholder='메모를 입력하세요.' />
        <div css={buttonContainerStyle}>
          <Button type='submit' styleType={`${!titleValue.trim() ? 'disabled' : 'primary'}`}>
            일정 추가하기
          </Button>
        </div>
      </form>
    </>
  );
};

const formStyle = css`
  padding-bottom: 90px;
  background-color: ${theme.colors.white};
`;

const subjectInputStyle = css`
  width: 100%;
  padding: 20px 0 24px;
  border: 0;
  outline: none;
  font-size: ${theme.fontSizes.xlarge};
  font-weight: bold;
`;

const divContainerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${theme.heights.tall};

  span {
    font-size: ${theme.fontSizes.normal};
    font-weight: 500;
  }
`;

const datePickerContainerStyle = css`
  display: flex;
  gap: 4px;

  button {
    width: 80px;
    height: 32px;
    border-radius: 4px;
    font-weight: 500;
    color: ${theme.colors.darkestGray};
    background-color: ${theme.colors.bgGray};
  }
`;

const textareaStyle = css`
  width: 100%;
  height: 140px;
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid ${theme.colors.lightGray};
  outline: none;
  font-size: ${theme.fontSizes.normal};
  border-radius: 4px;
  resize: none;
`;

const buttonContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default ScheduleForm;
