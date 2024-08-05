import { useEffect, useState } from 'react';

import { css } from '@emotion/react';
import { MdEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/common/buttons/Button';
import IconTextButton from '@/components/common/buttons/IconTextButton';
import Input from '@/components/common/Input';
import Modal from '@/components/common/Modal';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchSignOut } from '@/store/reducer/authSlice';
import theme from '@/styles/theme';

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const defaultImg = '/src/assets/images/user_default.svg';

  const navigate = useNavigate();
  // const auth = getAuth();
  // const user = auth.currentUser;

  const user = {
    name: '홍길동',
    nickname: 'gildong',
    email: 'abd@abc.com',
    password: '1234asdf',
    phone: '010-1234-5678',
    birthday: '1990-01-01',
    part: '개발팀',
    position: '개발자',
    hireDate: '2021-01-01',
    pic: 'https://firebasestorage.googleapis.com/v0/b/tiramisu-31d41.appspot.com/o/1.jpg?alt=media&token=c69fefa1-e36e-4cf6-bcd6-06b075fe8166',
  };

  console.log(user);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     if (user) {
  //       const db = getFirestore();
  //       const userDoc = doc(db, 'users', user.uid);
  //       const userSnap = await getDoc(userDoc);

  //       if (userSnap.exists()) {
  //         setUserData(userSnap.data());
  //       } else {
  //         console.log('No such document!');
  //       }
  //     }
  //   };

  //   fetchUserData();
  // }, [user]);

  const handleEditClick = () => {
    navigate('/profileEdit');
  };

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  // 로그아웃 버튼 클릭 시 로그아웃 처리

  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.auth);

  const handleModalLogout = async () => {
    await dispatch(fetchSignOut());
    if (status === 'succeeded') navigate('/signin');
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div css={wrapperStyle}>
        <div css={imgStyle}>
          <img src={user.pic || defaultImg} css={imgStyle} />
        </div>
        <div css={editIconStyle}>
          <IconTextButton Icon={MdEdit} onClick={handleEditClick}>
            프로필 수정
          </IconTextButton>
        </div>
      </div>

      <div css={[formStyle]}>
        <Input
          label='이름'
          value={user.name}
          placeholder='이름을 입력하세요'
          type='text'
          readOnly={true}
        />
        <Input
          label='닉네임'
          value={user.nickname}
          placeholder='닉네임을 입력하세요'
          type='text'
          readOnly={true}
        />
        <Input
          label='이메일'
          value={user.email}
          placeholder='이메일을 입력하세요'
          type='text'
          readOnly={true}
        />
        <Input
          label='연락처'
          value={user.phone}
          placeholder='연락처를 입력하세요'
          type='text'
          readOnly={true}
        />
        <Input
          label='생일'
          value={user.birthday}
          placeholder='생일을 입력하세요'
          type='date'
          readOnly={true}
        />{' '}
        <Input
          label='부서'
          value={user.part}
          placeholder='부서를 입력하세요'
          type='text'
          readOnly={true}
        />
        <Input
          label='직무'
          value={user.position}
          placeholder='직무를 입력하세요'
          type='text'
          readOnly={true}
        />
        <Input
          label='입사일'
          value={user.hireDate}
          placeholder='입사일을 입력하세요'
          type='date'
          readOnly={true}
        />
      </div>
      <div css={signOutButtonStyle}>
        <Button styleType='tertiary' onClick={handleLogoutClick}>
          로그아웃
        </Button>
      </div>

      {isModalOpen && (
        <Modal
          isOpen={true}
          title='정말 로그아웃 하시겠습니까?'
          confirmText='로그아웃'
          onConfirm={handleModalLogout}
          cancelText='취소하기'
          onClose={handleModalCancel}
        />
      )}
    </div>
  );
};

const wrapperStyle = css`
  padding: 3rem;
  text-align: center;
  justify-content: center;
  background-color: ${theme.colors.white};
`;

const imgStyle = css`
  position: relative;
  display: inline-block;
  width: 120px;
  border-radius: 50%;
`;

const editIconStyle = css`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 1rem;
`;

const formStyle = css`
  margin-top: 12px;
  padding: 20px 25px;
  background-color: ${theme.colors.white};
`;

const signOutButtonStyle = css`
  padding-bottom: 80px;
`;

export default ProfilePage;
