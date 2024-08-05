import { useEffect, useState } from 'react';

import { css } from '@emotion/react';
import { getAuth } from 'firebase/auth';
import { doc, getDoc, getFirestore, DocumentData } from 'firebase/firestore';
import { MdDelete, MdEdit, MdOutlineCameraAlt } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/common/buttons/Button';
import IconTextButton from '@/components/common/buttons/IconTextButton';
import Input from '@/components/common/Input';
import Modal from '@/components/common/Modal';
import Header from '@/components/layout/Header';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchSignOut } from '@/store/reducer/authSlice';
import theme from '@/styles/theme';

const ProfilePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  5;
  const [userData, setUserData] = useState<DocumentData | null>(null);

  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  console.log(user);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const db = getFirestore();
        const userDoc = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userDoc);

        if (userSnap.exists()) {
          setUserData(userSnap.data());
        } else {
          console.log('No such document!');
        }
      }
    };

    fetchUserData();
  }, [user]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleEditClick = () => {
    navigate('/profileEdit');
  };

  const [imgUrl, setImgUrl] = useState(user.img);
  const defaultImgUrl = '/src/assets/images/user_default.svg';

  const handleDeleteImgClick = () => {
    setImgUrl(defaultImgUrl);
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
      {isEditing && <Header />}

      <div css={wrapperStyle}>
        <div css={imgStyle}>
          <img src={imgUrl} css={imgStyle} />
          {isEditing && (
            <div css={caremaIconStyle}>
              <MdOutlineCameraAlt size={24} />
            </div>
          )}
        </div>
        <div css={editIconStyle}>
          {!isEditing && (
            <IconTextButton Icon={MdEdit} onClick={handleEditClick}>
              프로필 수정
            </IconTextButton>
          )}
          {isEditing && (
            <IconTextButton Icon={MdDelete} onClick={handleDeleteImgClick}>
              이미지 삭제
            </IconTextButton>
          )}
        </div>
      </div>

      <div css={[formStyle]}>
        {isEditing && (
          <Input
            label='비밀번호'
            value={inputValue}
            placeholder='수정하실 비밀번호를 입력하세요'
            onChange={handleInputChange}
            type='password'
            readOnly={!isEditing}
          />
        )}
        <Input
          label='이름'
          value={user.name}
          placeholder='이름을 입력하세요'
          onChange={handleInputChange}
          type='text'
          readOnly={true}
        />
        <Input
          label='닉네임'
          value={user.nickname}
          placeholder='닉네임을 입력하세요'
          onChange={handleInputChange}
          type='text'
          readOnly={!isEditing}
        />
        <Input
          label='이메일'
          value={user.email}
          placeholder='이메일을 입력하세요'
          onChange={handleInputChange}
          type='text'
          readOnly={true}
        />
        <Input
          label='연락처'
          value={user.phone}
          placeholder='연락처를 입력하세요'
          onChange={handleInputChange}
          type='text'
          readOnly={!isEditing}
        />
        <Input
          label='생일'
          value={user.birthday}
          placeholder='생일을 입력하세요'
          onChange={handleInputChange}
          type='date'
          readOnly={true}
        />{' '}
        <Input
          label='부서'
          value={user.part}
          placeholder='부서를 입력하세요'
          onChange={handleInputChange}
          type='text'
          readOnly={true}
        />
        <Input
          label='직무'
          value={user.position}
          placeholder='직무를 입력하세요'
          onChange={handleInputChange}
          type='text'
          readOnly={true}
        />
        <Input
          label='입사일'
          value={user.hireDate}
          placeholder='입사일을 입력하세요'
          onChange={handleInputChange}
          type='date'
          readOnly={true}
        />
      </div>
      <div css={signOutButtonStyle}>
        {!isEditing && (
          <Button styleType='tertiary' onClick={handleLogoutClick}>
            로그아웃
          </Button>
        )}
        {isEditing && (
          <>
            <div css={editButtonStyle}>
              <Button>수정하기</Button>
            </div>
          </>
        )}
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

const caremaIconStyle = css`
  position: absolute;
  bottom: 10px;
  right: -10px;
  background-color: ${theme.colors.toastGray};
  color: white;
  border-radius: 50%;
  border: 2px solid white;
  padding: 8px 8px 4px 8px;
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

const editButtonStyle = css`
  margin: 1rem;
`;

export default ProfilePage;
