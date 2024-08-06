import { useEffect, useState } from 'react';

import { css } from '@emotion/react';
import firebase from 'firebase/compat/app';
import { collection, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { MdDelete, MdOutlineCameraAlt } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { db, storage } from '@/api';
import { getUserData } from '@/api/user';
import userDefaultSvg from '@/assets/images/user_default.svg';
import Button from '@/components/common/buttons/Button';
import IconTextButton from '@/components/common/buttons/IconTextButton';
import Input from '@/components/common/Input';
import Header from '@/components/layout/Header';
import theme from '@/styles/theme';
import type { UserType } from '@/types/type';

const formatDate = (timestamp: firebase.firestore.Timestamp): string => {
  const date = timestamp.toDate();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const ProfilePage = () => {
  const [userData, setUserData] = useState<UserType>();
  const [inputNickValue, setInputNickValue] = useState('');
  const [inputPhoneValue, setInputPhoneValue] = useState('');
  const [inputImgValue, setInputImgValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserData('EZRXBDo8fCXJj0obnYRhWPF92cy1');
      setUserData(data);
      setInputNickValue(data.nickname || '');
      setInputPhoneValue(data.phone || '');
    };
    fetchData();
  }, []);

  const handleChangeImg = async () => {
    try {
      setUserData(await getUserData('EZRXBDo8fCXJj0obnYRhWPF92cy1'));
      if (userData) {
        const storageRef = ref(storage, `profile/EZRXBDo8fCXJj0obnYRhWPF92cy1`);
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.onchange = async (e) => {
          const file = (e.target as HTMLInputElement).files?.[0];
          if (file) {
            const fileRef = ref(storageRef, file.name);
            await uploadBytes(fileRef, file);
            const downloadURL = await getDownloadURL(fileRef);
            setUserData({ ...userData, img: downloadURL });
            setInputImgValue(downloadURL);
          }
        };
        fileInput.click();
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleDeleteImg = () => {
    setUserData(Object.assign({}, userData, { img: userDefaultSvg }));
    setInputImgValue(userDefaultSvg);
  };

  const handleInputChangeNick = (value: string) => {
    setInputNickValue(value);
  };

  const handleInputChangePhone = (value: string) => {
    const formattedValue = value
      .replace(/[^0-9]/g, '')
      .slice(0, 11)
      .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    setInputPhoneValue(formattedValue);
  };

  const navigate = useNavigate();
  const handleUpdateClick = async () => {
    try {
      setUserData(await getUserData('EZRXBDo8fCXJj0obnYRhWPF92cy1'));
      if (userData) {
        const userRef = collection(db, 'User');
        const queryRef = query(userRef, where('uid', '==', 'EZRXBDo8fCXJj0obnYRhWPF92cy1'));
        const fetchResult = await getDocs(queryRef);

        if (!fetchResult.empty) {
          const userData = fetchResult.docs[0];
          const updatedData = {
            nickname: inputNickValue,
            phone: inputPhoneValue,
            img: inputImgValue,
          };
          await updateDoc(userData.ref, updatedData);
        }
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }

    navigate(`/profile`);
  };

  return (
    <div>
      <Header />
      <div css={wrapperStyle}>
        <div css={imgStyle}>
          <img src={userData?.img} css={imgStyle} />
          <div css={caremaIconStyle}>
            <MdOutlineCameraAlt size={24} onClick={handleChangeImg} />
          </div>
        </div>
        <div css={editIconStyle}>
          <IconTextButton Icon={MdDelete} onClick={handleDeleteImg}>
            이미지 삭제
          </IconTextButton>
        </div>
      </div>

      <div css={[formStyle]}>
        <Input
          label='닉네임'
          value={inputNickValue}
          placeholder='수정하실 닉네임을 입력하세요'
          onChange={handleInputChangeNick}
          type='text'
          readOnly={false}
        />
        <Input
          label='연락처'
          value={inputPhoneValue}
          placeholder='수정하실 연락처를 숫자만 입력하세요.'
          onChange={handleInputChangePhone}
          type='text'
          readOnly={false}
        />
        <Input
          label='이름'
          value={userData ? userData.name : ''}
          placeholder='이름을 입력하세요'
          onChange={() => {}}
          type='text'
          readOnly={true}
        />
        <Input
          label='이메일'
          value={userData ? userData.email : ''}
          placeholder='이메일을 입력하세요'
          onChange={() => {}}
          type='text'
          readOnly={true}
        />
        <Input
          label='생일'
          value={userData?.birthday ? formatDate(userData.birthday) : ''}
          placeholder='생일을 입력하세요'
          onChange={() => {}}
          type='date'
          readOnly={true}
        />{' '}
        <Input
          label='부서'
          value={userData ? userData.team : ''}
          placeholder='부서를 입력하세요'
          onChange={() => {}}
          type='text'
          readOnly={true}
        />
        <Input
          label='직무'
          value={userData ? userData.position : ''}
          placeholder='직무를 입력하세요'
          onChange={() => {}}
          type='text'
          readOnly={true}
        />
        <Input
          label='입사일'
          value={userData?.hireDate ? formatDate(userData.hireDate) : ''}
          placeholder='입사일을 입력하세요'
          onChange={() => {}}
          type='date'
          readOnly={true}
        />
      </div>
      <div css={signOutButtonStyle}>
        <div css={editButtonStyle}>
          <Button onClick={handleUpdateClick}>수정하기</Button>
        </div>
      </div>
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

const editButtonStyle = css`
  margin: 1rem;
`;

const signOutButtonStyle = css`
  padding-bottom: 80px;
`;

export default ProfilePage;
