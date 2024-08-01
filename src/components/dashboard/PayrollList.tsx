import React from 'react';

import { css } from '@emotion/react';
import { HiChevronRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

import theme from '@/styles/theme';

interface PayrollItem {
  year: number;
  month: number;
  amount: number;
  date: string;
}

const PayrollList: React.FC = () => {
  const navigate = useNavigate();
  const payrollItems: PayrollItem[] = [
    { year: 2024, month: 7, amount: 4570000, date: '8/1 지급' },
    { year: 2024, month: 6, amount: 4000000, date: '7/1 지급' },
    { year: 2024, month: 5, amount: 4000000, date: '6/1 지급' },
    { year: 2024, month: 4, amount: 4000000, date: '5/1 지급' },
    { year: 2024, month: 3, amount: 4000000, date: '4/1 지급' },
    { year: 2024, month: 2, amount: 4000000, date: '3/1 지급' },
    { year: 2024, month: 1, amount: 4000000, date: '2/1 지급' },
    { year: 2023, month: 12, amount: 4000000, date: '1/1 지급' },
  ];

  const handleItemClick = (year: number, month: number) => {
    navigate(`/salary/detail/${year}/${month}`);
  };

  return (
    <div css={containerStyle}>
      {payrollItems.map((item, index) => (
        <React.Fragment key={`${item.year}-${item.month}`}>
          {index === 0 || payrollItems[index - 1].year !== item.year ? (
            <h2 css={yearHeaderStyle}>{item.year}년</h2>
          ) : null}
          <div css={itemStyle} onClick={() => handleItemClick(item.year, item.month)}>
            <div css={leftContentStyle}>
              <span css={monthStyle}>{item.month}월 급여 명세서</span>
              <span css={dateStyle}>{item.date}</span>
            </div>
            <div css={rightContentStyle}>
              <span css={amountStyle}>{item.amount.toLocaleString()}원</span>
              <HiChevronRight css={arrowStyle} />
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

const containerStyle = css`
  padding: 8px 2rem 2rem;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  margin: 16px;
`;

const yearHeaderStyle = css`
  font-size: ${theme.fontSizes.xlarge};
  font-weight: bold;
  margin: 2rem 0 0.5rem 0;
  color: ${theme.colors.darkGray};
`;

const itemStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${theme.colors.borderLightGray};
  cursor: pointer;
  transition: background-color 0.2s ease;
`;

const leftContentStyle = css`
  display: flex;
  flex-direction: column;
`;

const monthStyle = css`
  font-size: ${theme.fontSizes.large};
  font-weight: bold;
  color: ${theme.colors.black};
  margin-bottom: 0.25rem;
`;

const dateStyle = css`
  font-size: ${theme.fontSizes.normal};
  color: ${theme.colors.darkGray};
  margin-top: 0.25rem;
`;

const rightContentStyle = css`
  display: flex;
  align-items: center;
`;

const amountStyle = css`
  font-size: ${theme.fontSizes.large};
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-right: 0.5rem;
`;

const arrowStyle = css`
  color: ${theme.colors.darkGray};
`;

export default PayrollList;