import styled from '@emotion/styled';
import React from 'react';
import FooterComponent from './Footer';
import HeaderComponent from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export default function LayoutComponent({ children }: LayoutProps): JSX.Element {
  return (
    <Layout>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </Layout>
  );
}
