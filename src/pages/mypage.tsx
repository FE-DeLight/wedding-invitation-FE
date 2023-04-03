import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface UserInfo {
  id: string;
  nickname: string;
  email: string;
}

export default function MyPage() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

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
          console.log(res.data.response)
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  return (
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
  );
}
