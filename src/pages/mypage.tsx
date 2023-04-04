import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/store/userSlice';

const Wrapper = styled.div`
  margin-top: 100px;
`;

export default function MyPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await axios.post('/api/logout');
      window.localStorage.removeItem('token');
      router.push('/');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/user');
        const { nickname, email } = response.data;
        const token = localStorage.getItem('token') || '';
        dispatch(setUser({ nickname, email, token }));
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, [dispatch]);

  return (
    <Wrapper>
      <div>
        {userInfo ? (
          <div>
            <p>{userInfo.email}</p>
            <p>{userInfo.nickname}</p>
          </div>
        ) : (
          <p>사용자 정보를 불러오는 중입니다...</p>
        )}
      </div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={handleLogout}>로그아웃</button>
    </Wrapper>
  );
}
