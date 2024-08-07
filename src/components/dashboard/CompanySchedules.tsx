import { css } from '@emotion/react';

import LogoDefaultImage from '@/assets/images/logo_icon.svg';
import Badge from '@/components/common/Badge';
import theme from '@/styles/theme';
import { CompanyType } from '@/types/type';

const COMPONENT_INFO = {
  title: '회사 일정',
  noEvent: '회사일정이 없습니다.',
};

export interface companyProps {
  companyData: CompanyType[];
}

const CompanySchedules = ({ companyData }: companyProps) => (
  <section css={sectionStyle}>
    <h2 css={titleStyle}>{COMPONENT_INFO.title}</h2>
    <ul css={companyStyle}>
      {companyData && companyData.length > 0 ? (
        <>
          {companyData.map((item, index) => (
            <li key={index} css={companyItemStyle}>
              <div css={companyDataStyle}>
                <div css={imgDivStyle}>
                  <img src={item.img ? item.img : LogoDefaultImage} css={imgStyle} />
                </div>
                <div css={[textWrapStyle, nameStyle]}>{item.name}</div>
                <div css={[textWrapStyle, eventStyle]}>{item.date}</div>
              </div>
              <Badge label={item.badge.text} color={item.badge.color} />
            </li>
          ))}
        </>
      ) : (
        <li>{COMPONENT_INFO.noEvent}</li>
      )}
    </ul>
  </section>
);

const sectionStyle = css`
  margin: 16px;
  background-color: ${theme.colors.white};
  border-radius: 0.5rem;
`;

const titleStyle = css`
  padding: 24px 16px 0;
  font-size: ${theme.fontSizes.large};
  font-weight: 600;
  color: ${theme.colors.darkestGray};
`;

const companyStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px;
  font-size: ${theme.fontSizes.normal};
`;

const companyItemStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const companyDataStyle = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
`;

const imgDivStyle = css`
  width: 36px;
  height: 36px;
  border: 1px solid ${theme.colors.borderLightGray};
  border-radius: 4px;
  overflow: hidden;
`;

const imgStyle = css`
  width: 100%;
  height: 100%;
`;

const textWrapStyle = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 7rem;
`;

const nameStyle = css`
  margin-left: 4px;
`;

const eventStyle = css`
  color: ${theme.colors.darkGray};
`;

export default CompanySchedules;
