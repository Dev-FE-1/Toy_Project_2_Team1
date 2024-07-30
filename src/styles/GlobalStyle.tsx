import { css, Global } from '@emotion/react';

import fontStyles from './globalFonts';
import theme from './theme';

const baseStyles = css`
  ${fontStyles} /* @font-face */

  /* reset */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  address,
  code,
  img,
  small,
  strike,
  strong,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  details,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  summary,
  time {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  input,
  textarea,
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: inherit;
  }
  /* base */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    line-height: 1;
    font-size: ${theme.fontSizes.xlarge}; /* 16px */
    color: ${theme.colors.black};
  }
`;

const GlobalStyle = () => <Global styles={baseStyles} />;

export default GlobalStyle;
