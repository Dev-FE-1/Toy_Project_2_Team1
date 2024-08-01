type SvgComponentType = {
  size: string;
};

const UserDefaultImage = ({ size = '140px' }: SvgComponentType) => (
  <>
    <svg
      width={size}
      height={size}
      viewBox='0 0 140 140'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_174_41461'
        // style='mask-type:alpha'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='140'
        height='140'
      >
        <circle cx='69.7705' cy='69.7705' r='69.7705' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_174_41461)'>
        <path
          d='M108.019 127.373C107.699 127.602 107.333 127.83 107.012 128.059C106.646 128.288 106.326 128.517 105.96 128.7C105.64 128.883 105.365 129.066 105.045 129.249C104.999 129.294 104.954 129.294 104.908 129.34C103.856 129.981 102.757 130.576 101.659 131.125C101.339 131.308 100.973 131.491 100.653 131.628C100.653 131.628 100.607 131.674 100.561 131.674C100.195 131.857 99.8294 132.04 99.4634 132.223C98.7313 132.589 97.9536 132.909 97.2215 133.229C96.8555 133.412 96.4438 133.549 96.0777 133.687C95.7117 133.824 95.3 134.007 94.9339 134.144C94.5679 134.281 94.1562 134.464 93.7902 134.602C93.7902 134.602 93.7902 134.602 93.7444 134.602C93.3784 134.739 92.9666 134.876 92.6006 135.013C91.7771 135.288 90.9078 135.562 90.0843 135.837C89.8098 135.928 89.4895 136.02 89.215 136.111C88.3457 136.386 87.4764 136.615 86.6072 136.798C86.2869 136.889 85.9666 136.935 85.6006 137.026C84.7771 137.209 83.9078 137.392 83.0843 137.576C82.9013 137.621 82.764 137.621 82.581 137.667C82.3065 137.713 81.9862 137.759 81.7117 137.804C81.3 137.85 80.9339 137.942 80.5222 137.987C80.3392 138.033 80.1562 138.033 79.9732 138.079C79.7444 138.125 79.4699 138.17 79.1954 138.17C78.4634 138.262 77.6856 138.353 76.9536 138.445C76.7248 138.491 76.4503 138.491 76.2215 138.536H76.1758C75.8555 138.582 75.5353 138.582 75.215 138.628C74.8947 138.674 74.5745 138.674 74.2542 138.674C74.0712 138.674 73.8424 138.719 73.6594 138.719C73.2934 138.719 72.9732 138.765 72.6529 138.765C72.1954 138.765 71.7836 138.811 71.3261 138.811C70.8686 138.811 70.4568 138.811 69.9993 138.811C69.679 138.811 69.3588 138.811 69.0385 138.811C49.7313 138.536 32.3915 130.347 19.9928 117.353C19.9928 117.353 19.9928 117.308 19.947 117.308C18.5745 116.072 19.764 109.484 25.3 105.321C32.2542 100.059 48.9078 96.765 48.9078 96.765C48.9078 96.765 55.3588 95.7128 79.2869 100.7C93.2869 103.628 103.947 107.883 109.895 119.412C111.13 121.791 112.365 125.451 108.019 127.373Z'
          fill='white'
        />
        <path
          d='M79.425 100.196C88.2093 101.981 97.5884 103.902 104.817 109.713C107.242 111.68 108.843 114.562 110.17 117.353C110.811 118.726 111.451 120.144 111.954 121.654C112.229 122.66 112.641 123.804 112.412 124.994C112.366 125.314 112.092 125.726 111.863 125.954C110.811 127.007 109.667 127.647 108.523 128.471C101.798 133.137 94.0655 136.432 86.059 138.17C68.2159 142.059 48.9087 139.039 33.2159 129.66C28.0002 126.503 23.1963 122.66 19.0786 118.131C18.6211 117.582 18.6211 116.667 18.6211 116.072C18.6668 114.7 19.0329 113.373 19.4904 112.137C20.5884 109.301 22.0067 106.464 24.4316 104.497C26.1701 103.307 28.0459 102.301 29.9675 101.477C36.0067 98.9153 42.3662 97.1309 48.9087 96.3989C49.4577 96.3532 49.5492 97.1309 49.0002 97.2224C42.7322 98.5035 36.51 100.425 30.6995 103.033C28.5949 104.085 26.3531 105 24.6603 106.647C23.059 108.386 21.9152 110.536 21.0002 112.732C20.4054 114.059 19.9936 116.164 20.1766 117.216C23.059 120.647 26.4446 123.667 30.1048 126.275C50.144 140.275 80.5688 141.19 101.889 129.523C103.811 128.471 105.686 127.281 107.471 126.046C108.34 125.451 109.255 124.948 109.941 124.262C109.987 124.216 109.941 124.262 109.941 124.307C109.941 124.353 109.896 124.399 109.896 124.399C109.941 123.85 109.758 123.118 109.53 122.386C108.706 119.732 107.379 116.941 105.961 114.517C103.719 110.902 99.9218 108.615 96.0786 106.785C93.425 105.549 90.6342 104.588 87.7976 103.673C84.961 102.758 82.0786 101.981 79.1963 101.294C78.4642 101.111 78.693 100.059 79.425 100.196Z'
          fill='#121212'
        />
        <path
          d='M123.21 155.739H7.50391C7.50391 155.739 8.87645 135.791 15.8307 120.647C18.3013 115.294 20.2229 107.516 24.7523 103.993C29.968 99.9673 40.2621 97.451 43.9222 96.7189C46.6216 96.1699 46.9876 96.6732 48.8634 96.1699C48.8634 96.3987 48.9091 96.5817 48.9091 96.8104C48.9091 96.8104 53.8503 111.497 66.7065 116.712C77.1836 120.967 83.4059 118.131 84.3667 113.418C84.9614 110.399 83.0856 105.458 82.1248 103.856C81.5758 103.399 81.2098 102.712 81.0268 102.026L80.6608 100.516C81.5301 100.333 82.3536 100.105 83.1771 99.8301C83.4516 99.7385 83.6804 99.6471 83.9549 99.5555C90.5889 101.431 98.6412 104.817 105.687 110.17C109.53 113.098 112.733 120.647 116.667 133.412C121.288 148.098 123.21 155.739 123.21 155.739Z'
          fill='#121212'
        />
        <path
          d='M88.1191 111.039C87.9819 109.758 87.7531 108.614 87.5243 107.608C86.5636 103.124 83.6812 99.1895 83.6812 99.1895C83.6812 99.1895 76.4524 94.2026 65.289 92.8758C54.1256 91.549 48.6812 92.8758 48.6812 92.8758C47.8577 93.1503 46.8511 93.6993 45.9361 94.2026C44.289 95.1634 42.9622 96.5359 42.1387 98.2288C42.1387 98.2745 42.093 98.2745 42.093 98.3203C40.9034 101.752 47.0341 114.425 62.8185 121.516C79.106 128.837 89.2172 120.281 88.1191 111.039Z'
          fill='#121212'
        />
        <path
          d='M30.1969 182.412C29.6021 169.007 29.3276 154.87 29.1446 141.419C29.0531 136.203 28.8244 130.941 30.1054 125.817C32.0727 117.262 38.0204 109.255 46.5302 106.464L46.21 106.785C47.1708 104.36 48.223 101.66 50.5564 100.242C50.6479 100.196 50.6936 100.334 50.6479 100.379C49.0466 101.477 48.1773 103.353 47.4453 105.138C47.1708 105.732 47.0335 106.464 46.759 107.013C43.5564 108.203 40.7198 110.262 38.3864 112.687C36.0531 115.157 34.1773 118.085 32.942 121.242C31.3407 125.223 30.6544 129.477 30.5172 133.732C30.4257 149.791 30.8832 166.765 30.1969 182.412Z'
          fill='white'
        />
        <path
          d='M50.5566 182.412C49.6416 174.039 49.0926 165.438 49.0011 157.02C48.9096 149.288 49.1383 141.327 50.0534 133.641C50.5566 129.157 52.1579 118.909 55.4978 115.935L55.8638 115.66C56.0926 115.569 56.1383 115.477 56.4586 115.432L56.0011 115.889C56.2298 114.151 56.8704 112.503 57.7854 111.039C58.1057 110.582 58.4259 110.124 58.7919 109.667C58.8377 109.621 58.9749 109.667 58.8834 109.758C58.5632 110.216 58.2429 110.673 58.0141 111.177C57.2364 112.641 56.6874 114.242 56.5501 115.889C56.5501 115.935 56.5043 115.935 56.5043 115.981C56.2298 116.072 55.9096 116.301 55.6808 116.575C54.9945 117.307 54.537 118.36 54.1253 119.275C53.4847 120.876 53.0272 122.615 52.6612 124.353C51.7462 128.791 51.2429 133.458 50.8769 137.987C50.3736 145.582 50.1906 153.634 50.1906 161.229L50.2364 165.484C50.2364 171.111 50.5109 176.785 50.6481 182.412C50.6939 182.458 50.5566 182.503 50.5566 182.412Z'
          fill='white'
        />
        <path
          d='M69.3604 182.412C69.4062 168.458 68.8114 154.458 68.7656 140.503C68.7199 134.19 68.7199 127.693 68.8571 121.379C69.2689 119.732 69.5892 117.994 69.7264 116.255C69.7722 115.706 69.7722 115.111 69.7264 114.516C69.7264 114.425 69.8637 114.425 69.8637 114.516C70.2297 116.804 69.9552 119.137 69.4977 121.425C69.6807 126.412 69.8637 131.582 69.9552 136.66C70.2754 148.098 70.367 159.536 70.0924 170.974C70.0467 173.17 69.9094 176.418 69.7722 178.614C69.6807 179.895 69.5434 181.131 69.4519 182.412C69.4519 182.458 69.4062 182.458 69.3604 182.458C69.3604 182.458 69.3604 182.412 69.3604 182.412Z'
          fill='white'
        />
        <path
          d='M90.7718 182.412C90.36 171.843 90.0855 160.771 89.1705 150.248C88.6215 143.569 87.7522 136.98 86.4711 130.438C85.6934 126.503 84.6868 122.523 83.0855 118.817C82.811 116.712 82.1247 114.425 80.4777 112.961C80.4319 112.915 80.4319 112.869 80.4777 112.869C80.5234 112.824 80.5234 112.824 80.5692 112.869C81.0267 113.19 81.4385 113.601 81.8045 114.059C82.811 115.386 83.4515 117.216 83.6803 118.725C85.5561 122.34 86.6084 126.275 87.5692 130.209C88.1639 132.771 88.713 135.562 89.1247 138.124C89.7195 141.784 90.2685 146.451 90.543 150.157C90.7718 152.399 90.909 155.922 91.0463 158.209C91.2293 163.608 91.2751 168.961 91.1836 174.359L90.9548 182.412C90.9548 182.458 90.909 182.457 90.8633 182.457C90.8175 182.457 90.7718 182.412 90.7718 182.412Z'
          fill='white'
        />
        <path
          d='M107.975 182.366C109.119 169.83 108.661 157.111 106.877 144.667C106.419 141.418 105.733 138.033 105.001 134.83C104.132 131.673 103.079 128.47 101.661 125.542C100.655 123.301 99.3279 121.15 98.0011 119.091C96.171 116.484 93.8377 113.784 91.3213 111.817C90.0403 110.765 88.6677 109.758 87.2037 109.026C86.4716 108.065 86.0141 107.104 84.9618 106.189C84.1383 105.412 83.1318 104.771 81.988 104.725C81.9422 104.725 81.8965 104.68 81.8965 104.634C81.8965 104.588 81.9422 104.588 81.9422 104.588C82.537 104.542 83.1318 104.725 83.6808 104.954C85.2821 105.732 86.4716 107.15 87.4324 108.614C93.7919 111.588 98.8246 117.627 102.164 123.85C103.491 126.503 104.681 129.248 105.504 132.085L106.236 134.51C108.432 143.568 109.302 152.902 109.439 162.189C109.485 168.961 109.119 175.732 108.066 182.412C108.066 182.457 108.021 182.457 107.975 182.457C107.975 182.457 107.975 182.412 107.975 182.366Z'
          fill='white'
        />
        <path
          d='M87.3864 129.752C93.7917 129.981 98.5498 127.922 99.2818 121.013C99.3276 120.464 99.7394 120.053 100.243 119.961C103.033 119.275 104.909 116.804 105.458 114.013C105.596 113.556 105.641 112.961 105.733 112.504C105.779 112 105.824 111.451 105.87 110.902C105.87 110.856 105.916 110.856 105.962 110.856C106.007 110.856 106.007 110.902 106.007 110.902C106.099 111.863 106.19 113.144 106.099 114.105C105.916 117.353 103.766 120.419 100.517 121.288L100.609 121.196C100.243 126.275 97.1315 129.981 91.9158 130.301C90.406 130.438 88.8505 130.301 87.3407 129.935C87.2949 129.935 87.2949 129.889 87.2949 129.843C87.2949 129.752 87.3407 129.752 87.3864 129.752Z'
          fill='white'
        />
        <path
          d='M23.4721 108.66C23.9753 111.268 25.4851 113.83 27.7727 115.203C27.9557 115.34 28.3675 115.523 28.5505 115.66C28.9623 115.843 29.4198 116.026 29.8315 116.163L30.7008 116.392C30.9296 116.484 31.3413 116.529 31.6159 116.575L32.5309 116.712C33.4459 116.85 34.8642 116.346 35.3217 117.399C38.3413 123.804 44.2433 128.654 51.6551 127.235C52.1126 127.19 52.5701 127.373 52.7531 127.784C53.1649 128.425 53.7139 129.111 54.2172 129.706C56.825 132.817 60.7596 135.105 64.923 134.235C66.5701 133.915 68.1714 133.229 69.6355 132.314C69.6812 132.268 69.727 132.314 69.727 132.314C63.276 137.667 56.0472 134.83 51.6551 128.425L51.7923 128.471C49.9623 128.791 48.0864 128.882 46.2106 128.516C40.7204 127.51 36.5113 122.843 34.3152 117.765L34.4067 117.811C33.4459 117.765 32.3936 117.719 31.4329 117.49C31.1583 117.445 30.7008 117.353 30.4721 117.262C29.923 117.124 29.0995 116.804 28.5963 116.529L28.1387 116.301L27.727 116.026C27.544 115.889 27.0864 115.66 26.9034 115.477C24.7989 113.83 23.5636 111.222 23.2891 108.614C23.2891 108.569 23.3348 108.523 23.3348 108.523C23.4721 108.614 23.4721 108.614 23.4721 108.66Z'
          fill='white'
        />
        <path
          d='M85.8314 124.215C91.3216 122.751 94.0209 119.549 93.1974 113.784C93.1516 113.418 93.2431 113.052 93.4719 112.823C94.9817 111.039 95.3934 108.614 95.1647 106.327C95.1189 105.595 94.8444 104.542 94.7072 103.81C94.7072 103.765 94.7072 103.719 94.7529 103.719C94.7987 103.719 94.7987 103.719 94.8444 103.765C95.2104 104.542 95.5764 105.366 95.8052 106.189C96.2627 107.882 96.2627 109.712 95.7137 111.359C95.4392 112.183 95.0274 113.006 94.4784 113.693L94.5242 113.601C95.3019 117.719 93.9294 121.974 89.766 123.575C88.5307 124.078 87.2039 124.353 85.8771 124.398C85.7398 124.353 85.7398 124.215 85.8314 124.215Z'
          fill='white'
        />
        <path
          d='M34.1305 101.706C33.3985 104.085 34.222 106.739 36.0063 108.431L36.2351 108.706L36.5096 108.935C37.0586 109.392 37.6991 109.804 38.2939 110.216L39.575 110.902C39.8495 111.039 40.0325 111.314 40.0782 111.634C40.9933 115.065 43.7841 117.765 46.941 119.229C48.954 120.281 51.1501 120.784 53.3462 121.196C53.9867 121.333 54.1697 121.928 54.6272 122.34C55.1305 122.843 55.6795 123.346 56.2285 123.804C59.5684 126.641 64.0521 128.15 68.4442 127.556L69.588 127.418C69.6338 127.418 69.6795 127.418 69.6795 127.464C69.6795 127.51 69.6795 127.51 69.6338 127.556C65.1959 128.928 60.3004 128.059 56.4573 125.405C55.3135 124.628 53.7122 123.301 53.0717 122.431C50.0063 121.928 46.8952 121.013 44.3331 119.229C41.8625 117.582 39.4377 114.471 39.1174 111.771C38.3397 111.314 37.1959 110.582 36.5096 110.033C36.3723 109.941 35.7776 109.346 35.6403 109.209C35.4116 108.935 35.0913 108.614 34.9083 108.294C33.5357 106.373 33.0782 103.765 34.039 101.569C34.039 101.523 34.0848 101.523 34.1305 101.523C34.1763 101.614 34.1763 101.66 34.1305 101.706Z'
          fill='white'
        />
        <path
          d='M42.1377 98.2748C42.0462 100.379 42.824 102.484 44.1965 104.039C44.471 104.405 44.9285 104.817 45.2946 105.138C45.4318 105.229 45.8893 105.595 46.0266 105.687C46.4841 106.053 47.3076 106.236 47.3534 106.876C47.4906 107.883 47.9939 108.935 48.5887 109.758C50.4645 112.504 53.7129 113.968 56.8697 114.883C57.1442 114.974 57.3272 115.111 57.4645 115.34C60.2553 118.863 64.8763 120.693 69.3142 120.236C70.0919 120.281 70.7782 120.693 71.6017 120.83C73.3403 121.288 75.2619 121.517 77.0462 121.379C79.4253 121.288 81.6213 120.281 82.8109 118.222C83.0396 117.902 83.3599 117.856 83.6344 117.628C84.9155 116.758 85.9678 115.569 86.6083 114.151C87.4318 112.458 87.2488 110.536 86.7913 108.798C86.8828 108.066 87.02 107.242 86.9743 106.419C86.9285 104.131 86.0135 101.889 84.5495 100.105C84.458 100.059 84.5952 99.9218 84.641 100.013C86.9285 102.255 87.9808 105.595 87.5233 108.752C88.9874 112.549 87.2946 116.713 83.7259 118.909C82.6279 121.059 79.7455 122.569 77.1834 122.66C74.6671 122.889 71.6475 122.34 69.4972 121.608C64.6017 122.111 59.4776 120.007 56.5037 116.026L56.5495 116.072C55.5429 115.752 54.1704 115.249 53.2553 114.791C53.0266 114.654 52.2946 114.288 52.0658 114.151C51.7913 113.968 51.1965 113.602 50.9678 113.419L50.2815 112.87C48.4514 111.36 46.9874 109.301 46.6671 106.922L46.7129 107.013C46.3468 106.739 45.9808 106.51 45.6606 106.236L45.1573 105.824L44.9285 105.595C44.6998 105.366 44.471 105.092 44.2423 104.909C43.8305 104.405 43.4187 103.856 43.0985 103.307C42.2749 101.798 41.8632 100.013 42.0919 98.2748C42.0919 98.229 42.1377 98.229 42.1834 98.229C42.0919 98.229 42.1377 98.229 42.1377 98.2748Z'
          fill='white'
        />
        <path
          d='M81.3149 127.128C81.3302 125.814 80.298 124.737 79.0095 124.722C77.721 124.707 76.664 125.759 76.6488 127.073C76.6335 128.387 77.6656 129.464 78.9542 129.479C80.2427 129.494 81.2997 128.441 81.3149 127.128Z'
          fill='white'
        />
        <path
          d='M84.0007 133.32C84.3209 135.745 82.7196 137.987 80.432 138.261C78.1445 138.536 76.0399 136.843 75.7196 134.372C75.3994 131.948 76.8634 128.608 79.151 128.288C81.4386 128.013 83.6804 130.85 84.0007 133.32Z'
          fill='white'
        />
        <path
          d='M78.0528 130.392C76.8633 131.353 73.6607 131.444 72.3796 130.529C70.7783 129.294 72.4711 125.222 73.5692 123.941C73.6149 123.895 73.7064 123.895 73.7064 123.987L73.2947 126.641C73.2032 127.51 73.0202 128.425 73.1117 129.248C73.1117 129.431 73.2947 129.523 73.4777 129.569C74.713 130.026 76.0398 130.163 77.3666 130.301C77.5496 130.301 77.8698 130.346 78.0071 130.255C78.0071 130.301 78.0528 130.346 78.0528 130.392Z'
          fill='white'
        />
        <path
          d='M77.6867 133.091C75.9481 134.327 74.0266 134.876 71.8763 134.647C71.739 134.647 71.4645 134.555 71.3272 134.51C69.1312 133.778 68.3991 131.078 68.8566 129.019C68.8566 128.928 68.9482 128.882 68.9939 128.974C69.4972 130.575 70.1834 132.908 72.0593 133.229C72.9743 133.366 73.9351 133.32 74.8501 133.229C75.7651 133.137 76.7259 133.046 77.641 132.863C77.7325 132.908 77.7782 133 77.6867 133.091C77.6867 133.091 77.7325 133.046 77.6867 133.091Z'
          fill='white'
        />
        <path
          d='M77.0462 135.333C76.0397 135.791 75.1247 136.157 74.3927 136.615C73.8436 136.981 73.4776 137.255 73.2489 137.85C72.9744 138.582 73.0201 139.451 73.0659 140.458C73.1574 141.373 73.2946 142.379 73.3404 143.477C73.3404 143.523 73.2489 143.569 73.2031 143.523C71.7391 141.19 70.4123 136.706 73.9809 135.608C74.9417 135.288 75.994 135.196 77.0005 135.242C77.1377 135.196 77.1377 135.333 77.0462 135.333Z'
          fill='white'
        />
        <path
          d='M78.1909 136.797C78.0078 137.987 77.5503 138.81 77.9164 139.725C78.5569 141.052 79.1059 142.425 79.1059 144.026C79.1059 144.072 79.0144 144.118 79.0144 144.072C78.6026 143.523 78.1909 142.928 77.7791 142.333C77.2758 141.418 76.498 140.503 76.498 139.405C76.5438 138.307 77.2758 137.346 78.0536 136.66C78.1909 136.614 78.2366 136.706 78.1909 136.797Z'
          fill='white'
        />
        <path
          d='M80.7983 129.935C81.0271 129.706 81.5304 129.294 81.8049 129.065C82.5369 128.471 83.5434 127.83 84.2754 127.235C84.3212 127.19 84.367 127.144 84.3212 127.235C84.2755 127.281 84.2297 127.373 84.1839 127.464C84.1382 127.601 84.0924 127.693 84.1382 127.83C83.7264 126.183 83.2232 124.582 83.3147 122.797V122.752C83.3147 122.706 83.4062 122.66 83.4519 122.706C84.0467 123.896 84.6415 125.131 85.099 126.366C85.282 126.824 85.5107 127.327 85.5107 127.876C85.465 128.105 85.282 128.196 85.1447 128.333C84.5957 128.745 83.9552 129.02 83.3604 129.294C83.0402 129.431 80.6611 130.438 80.7526 129.98C80.7526 129.935 80.7983 129.935 80.7983 129.935Z'
          fill='white'
        />
        <path
          d='M81.7594 132.405C83.4065 131.353 85.328 130.895 86.9751 130.209C87.4326 129.935 87.6614 129.477 87.9359 128.928C88.3476 128.196 88.6679 127.281 89.1254 126.32C89.1254 126.274 89.1712 126.274 89.2169 126.274C89.3542 127.693 89.1712 129.248 88.4391 130.529C87.6614 131.856 85.9228 131.948 84.5502 132.222C83.5895 132.359 82.6744 132.497 81.7136 132.542C81.6679 132.542 81.6679 132.451 81.7594 132.405Z'
          fill='white'
        />
        <path
          d='M82.9024 134.418C86.4711 131.444 90.8175 133.778 90.0397 138.444C89.8567 139.542 89.4449 140.595 88.6671 141.464C88.6214 141.51 88.5299 141.464 88.5299 141.418C88.6671 140.915 88.7587 140.457 88.8044 139.954C89.2619 136.568 88.3926 133.686 84.3665 134.281C83.8632 134.327 83.36 134.418 82.9024 134.555C82.8567 134.601 82.8109 134.464 82.9024 134.418Z'
          fill='white'
        />
        <path
          d='M82.2616 136.157C83.863 135.974 85.6015 137.209 85.6473 138.994C85.5558 140.824 84.7322 142.471 83.2224 143.569C83.1767 143.615 83.0852 143.615 83.0852 143.523C83.5427 142.196 84.0002 140.87 84.229 139.497C84.412 138.811 84.229 138.17 83.7715 137.621C83.3597 137.118 82.8107 136.66 82.2159 136.294C82.1244 136.203 82.1701 136.111 82.2616 136.157Z'
          fill='white'
        />
        <path
          d='M83.7244 112.366C82.7636 117.079 76.5414 119.915 66.0643 115.66C55.1754 111.268 50.463 100.791 49.2734 97.6801C55.7244 85.6016 51.2408 77.2291 51.2408 77.2291C66.11 75.948 79.1035 93.3337 79.1035 93.3337L81.1166 101.935C81.2996 102.667 81.6656 103.308 82.2146 103.765C83.1754 105.458 84.3192 109.347 83.7244 112.366Z'
          fill='white'
        />
        <path
          d='M49.0455 97.8175C49.9148 96.4907 50.4638 94.9351 50.8298 93.4253C51.5161 90.2684 51.7449 87.0658 51.7906 83.8632V82.6737C51.6534 81.4841 51.2416 80.2488 50.7841 79.1508C50.1893 77.6868 52.3396 76.7717 53.0259 78.2358C53.1174 78.4188 53.1174 78.739 53.1174 78.922C53.2547 85.1443 53.5292 93.1508 49.5945 98.3207C49.32 98.5952 48.771 98.1835 49.0455 97.8175Z'
          fill='#121212'
        />
        <path
          d='M79.607 93.2422C80.2933 93.6539 80.522 94.203 80.6136 94.752C80.8881 95.85 80.7966 97.0396 81.0711 98.1834C81.2998 99.2814 81.9861 100.334 82.1691 101.477C82.3979 102.667 83.0841 105.183 83.3586 106.419C83.4502 106.693 83.2671 107.013 82.9469 107.059C82.7639 107.105 82.6266 107.059 82.4894 106.968C81.8946 106.464 81.6201 105.961 81.2541 105.321C80.6593 104.223 80.2475 103.216 79.8815 101.981C79.5613 100.883 79.6985 99.6932 79.424 98.5494C79.1953 97.4513 78.5547 96.399 78.326 95.2553C78.1887 94.7062 78.143 94.1115 78.5547 93.4252C78.8292 93.1507 79.2868 93.0592 79.607 93.2422Z'
          fill='#121212'
        />
        <path
          d='M82.9023 105.321C74.1638 104.863 67.0265 102.118 60.0723 89.7192C65.9285 94.8892 72.837 96.8565 80.1115 97.7715L81.0723 101.981C81.2553 102.713 82.3533 104.863 82.9023 105.321Z'
          fill='#121212'
        />
        <path
          d='M82.5361 103.628C84.0916 106.556 85.0067 110.216 84.0459 113.465C83.3139 115.752 81.2093 117.445 78.9217 118.085C73.6145 119.504 67.4838 117.262 62.7714 114.746C56.9609 111.497 52.6603 106.053 49.9152 100.105C49.7322 99.6476 50.3727 99.2815 50.6472 99.7391C51.608 101.661 52.706 103.536 53.9413 105.229C55.1766 106.968 56.5949 108.569 58.1962 109.987C62.8629 114.197 69.1766 116.804 75.4903 116.804C81.9871 116.621 84.4577 113.19 82.9479 106.876C82.7191 105.87 82.3531 104.817 81.8498 103.948C81.5753 103.582 82.2616 103.17 82.5361 103.628Z'
          fill='#121212'
        />
        <path
          d='M100.243 48.6801C101.067 52.5232 101.478 55.6343 99.2365 65.8827C97.0404 76.0853 102.393 78.1899 89.7201 94.5232C84.5502 101.203 72.0142 99.3271 61.8574 92.4186C58.426 90.0853 56.9619 84.0918 54.3999 79.8369C52.3868 76.4971 51.4718 79.9742 48.8182 77.0918C45.2038 73.1572 40.8574 65.2422 43.0077 51.2422C46.4848 28.5493 64.4652 25.8958 77.7789 28.4121C91.1842 30.9742 98.0469 38.569 100.243 48.6801Z'
          fill='white'
        />
        <path
          d='M51.1051 81.1636C50.0528 79.3793 48.6802 77.8238 47.3992 76.1767C46.1639 74.4839 45.1573 72.6081 44.3338 70.6865C38.8894 57.327 40.9939 38.5231 54.3534 30.6538C59.8894 27.4512 66.5691 26.6735 72.7913 27.1767C86.1051 28.1375 98.3207 34.2682 101.203 48.3597C102.759 54.5819 100.654 60.9872 99.4645 67.0721C98.9155 70.0918 99.373 73.2029 99.3273 76.314C99.2815 79.4708 98.4123 82.6277 97.2227 85.5558C96.4907 87.5689 95.2096 89.3532 93.8828 91.0002C91.6868 93.6538 89.4907 96.3532 86.6998 98.412C86.0593 98.8695 84.9155 99.0983 84.1377 99.1898C81.9874 99.5101 79.8828 99.6016 77.7325 99.4643C69.3142 99.0983 60.3011 95.0264 56.9155 86.8826C56.7783 86.5623 57.2358 86.3336 57.4188 86.6081C61.8109 93.5623 69.8632 96.9937 77.8698 97.4512C80.3404 97.5885 82.8567 97.5427 85.2815 97.0395C86.4711 96.4447 87.5234 95.3924 88.5299 94.4316C91.0005 91.961 93.5168 89.3074 95.3011 86.2878C97.4515 82.2159 98.641 77.778 98.275 73.1571C98.1835 71.0983 98.1377 68.948 98.5495 66.8891C98.9155 64.8303 99.373 62.863 99.6475 60.7584C99.9221 58.7454 100.059 56.6865 100.059 54.6735C99.8306 48.7715 97.909 42.6865 94.1574 38.1114C85.8763 27.8172 66.2946 25.1179 55.2685 32.1637C48.3142 36.4643 45.0658 44.5166 44.0136 52.3401C42.4122 61.7192 42.8698 70.961 50.3273 77.778L52.5234 80.0656C53.3926 81.0721 51.8371 82.2617 51.1051 81.1636Z'
          fill='#121212'
        />
        <path
          d='M56.5036 66.6147C56.5036 66.6147 55.0853 59.7519 48.4055 60.5754C42.6408 61.3075 40.6278 75.1245 53.7127 78.9676'
          fill='white'
        />
        <path
          d='M53.118 72.9741C52.0657 72.3793 51.3337 71.3728 51.2879 70.1375C51.3337 69.2224 51.4709 68.1702 51.2422 67.2551C51.1049 66.3858 50.1899 66.1571 49.5036 66.2028C48.7716 66.3401 48.3141 67.2551 48.1768 67.9872C48.1768 68.0329 48.1311 68.1702 48.1311 68.2159C48.0853 68.4447 47.7193 68.4447 47.6278 68.2159C47.033 66.4316 48.3598 64.4643 50.2814 64.693C52.9808 64.876 53.3468 67.7126 52.8435 69.863C52.569 70.778 52.935 71.6015 53.4383 72.3793L53.5298 72.5166C53.7585 72.7911 53.3925 73.1571 53.118 72.9741Z'
          fill='#121212'
        />
        <path
          d='M89.7194 61.7648C90.4057 65.0132 91.6868 68.0328 93.2881 70.8694C94.7064 74.3465 91.0462 77.6406 87.7979 77.5034C87.4318 77.5034 87.3861 77.0001 87.7064 76.9086C89.7652 76.2681 91.641 74.8956 91.9613 72.791C92.0985 72.1505 91.9155 71.6014 91.5952 71.0524C90.0854 68.2158 89.1704 64.9674 89.3992 61.7648C89.3992 61.5361 89.7194 61.5361 89.7194 61.7648Z'
          fill='#121212'
        />
        <path
          d='M56.2743 66.6601C55.222 63.9608 52.9344 61.3987 49.8691 61.4445C49.5946 61.3987 49.137 61.4902 48.8625 61.4902C48.0848 61.536 47.4442 61.8105 46.8495 62.3595C43.9214 65.2876 44.4246 70.4575 46.8037 73.7059C47.6272 74.8497 48.6795 75.8562 49.8691 76.6798C51.0586 77.5033 52.3854 78.1438 53.8037 78.6928C54.124 78.7843 53.9867 79.2876 53.6665 79.2418C50.6011 78.6013 47.673 77.0915 45.6599 74.5752C42.5488 70.8235 41.9083 64.5556 45.6142 60.8954C46.4377 60.1634 47.5815 59.6144 48.7253 59.6144C49.0913 59.6144 49.6403 59.5229 50.0063 59.6144C51.9279 59.7059 53.758 60.6667 54.9475 62.1765C55.9998 63.4575 56.5946 65.0131 56.7776 66.5686C56.7776 66.8432 56.3658 66.9347 56.2743 66.6601Z'
          fill='#121212'
        />
        <path
          d='M86.2412 82.0784C83.3131 84.8693 77.7772 82.6274 76.3131 79.2418C76.1301 78.83 76.5877 78.464 76.9537 78.647C77.7314 79.0588 78.4177 79.4706 79.1497 79.7908C81.2543 80.7516 83.4504 81.5294 85.7837 81.3006C86.2412 81.2091 86.5615 81.7581 86.2412 82.0784Z'
          fill='#121212'
        />
        <path
          d='M72.6534 66.4313C71.5554 66.3855 70.7318 65.4705 70.8234 64.3725L70.8691 63.0914C70.9149 61.9934 71.8299 61.1698 72.9279 61.2613C74.026 61.3071 74.8495 62.2221 74.758 63.3202L74.7122 64.6012C74.6665 65.6535 73.7515 66.477 72.6534 66.4313Z'
          fill='#121212'
        />
        <path
          d='M91.9143 67.1177C90.9078 67.072 90.13 66.2027 90.1757 65.1961L90.2215 64.0066C90.2672 63.0001 91.1365 62.2223 92.1431 62.268C93.1496 62.3138 93.9274 63.1831 93.8816 64.1896L93.8359 65.3791C93.7901 66.3857 92.9208 67.1635 91.9143 67.1177Z'
          fill='#121212'
        />
        <path
          d='M76.7715 63.9607C75.2617 62.9542 73.6146 62.2679 71.7846 62.6339C71.1898 62.7254 70.595 62.9084 70.229 63.3202C70.0917 63.5032 69.7715 63.4574 69.7715 63.1829C69.8172 62.2679 70.595 61.6731 71.327 61.3071C72.7453 60.5751 74.7127 60.7123 75.9937 61.6731C76.4512 61.9476 78.0068 63.6404 77.1832 64.0065C77.0002 64.098 76.9087 64.0522 76.7715 63.9607Z'
          fill='#121212'
        />
        <path
          d='M89.8555 64.1894C89.8555 62.2678 92.2346 61.5816 93.6986 62.2678C94.5221 62.6339 95.1169 63.3659 95.3457 64.2352C95.4372 64.5097 95.0254 64.7384 94.8424 64.5097C94.0646 63.5946 92.7378 63.1371 91.6855 63.6861C91.3653 63.8691 91.3195 64.0064 91.228 64.1894C91.228 65.1044 89.9012 65.0587 89.8555 64.1894Z'
          fill='#121212'
        />
        <path
          d='M78.9669 56.4117C79.9277 56.7319 80.8885 55.8626 80.7055 54.8104C80.6139 54.2613 80.3852 53.7123 79.9277 53.3006C78.5551 52.0653 72.8819 50.9672 69.4506 52.5685C66.431 54.0326 74.5747 54.9476 78.9669 56.4117Z'
          fill='#121212'
        />
        <path
          d='M92.6471 57.1435C91.8693 57.418 91.0458 56.5945 91.1831 55.6337C91.2288 55.1305 91.4118 54.6272 91.7778 54.2612C92.8759 53.1631 96.6275 52.2939 99.0066 53.9867C101.065 55.405 96.2157 55.8167 92.6471 57.1435Z'
          fill='#121212'
        />
        <path
          d='M104.725 39.0717C102.346 18.758 82.1696 11.8952 86.0584 25.4377C86.0584 25.4377 80.7512 16.9279 68.8101 16.4704C58.5617 16.1044 64.7839 23.3789 64.7839 23.3789C64.7839 23.3789 56.8231 18.8037 43.3264 25.6665C31.5682 31.6599 42.4571 36.9214 42.4571 36.9214C42.4571 36.9214 33.5813 41.6338 33.4441 51.7907C33.3983 54.4442 35.5944 58.5161 40.8101 57.1893C39.4833 67.3005 45.6597 75.5815 48.4963 78.9671C52.1565 83.3593 52.4767 86.6992 52.4767 86.6992C54.3526 85.6469 52.1565 80.9344 52.2022 78.4639C40.7643 74.0717 42.8231 61.307 48.4048 60.575C54.2611 59.8429 56.0911 65.0586 56.4114 66.3397C57.3722 65.1959 57.6467 60.758 58.1957 56.0456C59.8885 55.4965 61.3983 54.9018 62.6336 54.124C67.4833 51.2416 69.7709 46.2547 74.712 43.3266C83.3591 38.1567 85.6009 49.8233 90.2218 45.5227C95.5748 40.5815 99.4637 44.5161 100.653 50.6011C101.111 52.7972 103.902 52.6142 104.313 50.4181C104.954 47.2155 105.228 43.3724 104.725 39.0717Z'
          fill='#121212'
        />
      </g>
    </svg>
  </>
);

export default UserDefaultImage;
