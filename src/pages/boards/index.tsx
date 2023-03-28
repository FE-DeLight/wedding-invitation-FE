import { useRouter } from 'next/router';
import React from 'react';

export default function BoardListPage() {
  const router = useRouter();

  const handleMove = () => {
    router.push('/boards/write');
  };

  return (
    <div>
      <h1>목록 페이지</h1>

      <button type="button" onClick={handleMove}>
        만들기
      </button>
    </div>
  );
}
