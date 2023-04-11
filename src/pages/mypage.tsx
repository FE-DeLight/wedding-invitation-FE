import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, resetUser } from '@/store/loginSlice';

const Wrapper = styled.div`
  margin-top: 100px;
`;

export default function MyPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { nickname, email } = useSelector((state) => state.login);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('/api/naverlogin/v1/nid/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const { nickname, email } = res.data.response;
          dispatch(setUser({ nickname, email, token }));
        })
        .catch((err) => {
          dispatch(resetUser());
        });
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(resetUser()); // 사용자 정보 초기화
    localStorage.removeItem('token'); // 토큰 삭제
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
