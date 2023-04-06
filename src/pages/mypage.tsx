import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, removeUser } from '@/store/userSlice';

const Wrapper = styled.div`
  margin-top: 100px;
`;

export default function MyPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { nickname, email } = useSelector((state) => state.user);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('/api/v1/nid/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const { nickname, email } = res.data.response;
          dispatch(setUser({ nickname, email, token }));
        })
        .catch((err) => {
          console.error(err);
          dispatch(removeUser());
        });
    }
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // 토큰 삭제
    dispatch(removeUser()); // 사용자 정보 초기화
    router.push('/');
  };

  return (
    <Wrapper>
      <div>
        {nickname ? (
          <div>
            <p>{nickname}</p>
            <p>{email}</p>
          </div>
        ) : (
          <p>사용자 정보를 불러오는 중입니다...</p>
        )}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </Wrapper>
  );
}
