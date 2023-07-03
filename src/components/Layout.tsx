import dynamic from 'next/dynamic';
import React from 'react';
import styled from '@emotion/styled';
import FooterComponent from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export default function LayoutComponent({ children }: LayoutProps): JSX.Element {
  const HederComponent = dynamic(() => import('./Header'), { ssr: false });
  return (
    <Layout>
      <HederComponent />
      {children}
      <FooterComponent />
    </Layout>
  );
}
