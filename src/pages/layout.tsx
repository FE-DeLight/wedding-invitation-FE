'use client';

import InvitationPhrases from '@/components/InvitationPhrases';
import Priview from '@/components/priview';

import React, { useState } from 'react';
import styled from '@emotion/styled';

const InvitaLayout = styled.div`
  display: flex;
`;

export default function useLayout() {
  const [text, setTxt] = useState({
    title: '',
    content: '',
  });
  return (
    <InvitaLayout>
      <Priview />
      <div>
        <InvitationPhrases />
      </div>
    </InvitaLayout>
  );
}
