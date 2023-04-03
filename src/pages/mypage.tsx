import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  margin-top: 100px;
`;

interface UserInfo {
  id: string;
  nickname: string;
  email: string;
}

export default function MyPage() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await axios.post('/api/logout');
      window.localStorage.removeItem('token');
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

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
          setUserInfo(res.data.response);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

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
      <button onClick={handleLogout}>로그아웃</button>
    </Wrapper>
  );
}
